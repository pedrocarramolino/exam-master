import { Award, CheckCircle2, Clock, ListChecks, TrendingDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { computeUserStatistics } from '@/application/use-cases/compute-user-statistics';
import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { DataConnectStatisticsRepository } from '@/infrastructure/firebase/statistics-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';
import { PageHeader } from '@/shared/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

const attemptRepository = new DataConnectAttemptRepository();
const statisticsRepository = new DataConnectStatisticsRepository();

const STAT_ICONS = {
  totalExams: ListChecks,
  averageScore: Award,
  correctPercentage: CheckCircle2,
  bestScore: TrendingUp,
  worstScore: TrendingDown,
  averageTimeSeconds: Clock,
} as const;

export const metadata = { title: 'Mis estadísticas' };

function formatMinutes(seconds: number): string {
  return `${Math.round(seconds / 60)} min`;
}

export default async function StatisticsPage() {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  const [attempts, answers] = await Promise.all([
    attemptRepository.getMyAttempts(user.id),
    statisticsRepository.getMyAnswersWithTopic(user.id),
  ]);
  const stats = computeUserStatistics(attempts, answers);

  if (stats.totalExams === 0) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="mb-4 text-xl font-semibold">Mis estadísticas</h1>
        <p className="text-muted-foreground text-sm">
          Todavía no has terminado ningún examen.{' '}
          <Link href="/simulador" className="text-foreground underline">
            Haz tu primer simulacro
          </Link>{' '}
          para empezar a ver tu progreso.
        </p>
      </div>
    );
  }

  const statCards = [
    { key: 'totalExams', label: 'Exámenes realizados', value: stats.totalExams },
    { key: 'averageScore', label: 'Nota media', value: stats.averageScore?.toFixed(2) },
    { key: 'correctPercentage', label: '% de aciertos', value: `${stats.correctPercentage}%` },
    { key: 'bestScore', label: 'Mejor nota', value: stats.bestScore?.toFixed(2) },
    { key: 'worstScore', label: 'Peor nota', value: stats.worstScore?.toFixed(2) },
    {
      key: 'averageTimeSeconds',
      label: 'Tiempo medio',
      value: stats.averageTimeSeconds !== null ? formatMinutes(stats.averageTimeSeconds) : '-',
    },
  ] as const;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <PageHeader title="Mis estadísticas" backHref="/perfil" backLabel="Perfil" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {statCards.map(({ key, label, value }) => {
          const Icon = STAT_ICONS[key];
          return (
            <Card key={key}>
              <CardHeader className="gap-2 pb-2">
                <div className="bg-accent text-accent-foreground flex size-8 items-center justify-center rounded-lg">
                  <Icon className="size-4" />
                </div>
                <CardDescription>{label}</CardDescription>
                <CardTitle className="text-2xl">{value}</CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Evolución</CardTitle>
          <CardDescription>Nota de cada examen, del más antiguo al más reciente</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-32 items-end gap-1.5">
            {stats.evolution.map((point) => (
              <div
                key={point.attemptId}
                className="group bg-primary/70 hover:bg-primary relative flex-1 rounded-t transition-colors"
                style={{ height: `${Math.max(4, (point.score / 10) * 100)}%` }}
                title={`${point.score.toFixed(2)} — ${new Date(point.finishedAt).toLocaleDateString('es-ES')}`}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Aciertos por tema</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {stats.byTopic.map((topic) => (
            <div key={topic.topicId ?? 'none'}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span>{topic.topicName}</span>
                <span className="text-muted-foreground">
                  {topic.correctAnswers}/{topic.totalAnswers} · {topic.correctPercentage}%
                </span>
              </div>
              <div className="bg-muted h-2 overflow-hidden rounded-full">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: `${topic.correctPercentage}%` }}
                />
              </div>
            </div>
          ))}
          {stats.byTopic.length === 0 && (
            <p className="text-muted-foreground text-sm">Sin respuestas registradas todavía.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
