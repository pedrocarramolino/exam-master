import {
  Award,
  BarChart3,
  CheckCircle2,
  Clock,
  ListChecks,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { computeUserStatistics } from '@/application/use-cases/compute-user-statistics';
import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { DataConnectStatisticsRepository } from '@/infrastructure/firebase/statistics-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';
import { EmptyState } from '@/shared/components/empty-state';
import { PageHeader } from '@/shared/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { cn } from '@/shared/lib/utils';

function scoreTier(score: number): 'good' | 'mid' | 'low' {
  if (score >= 7) return 'good';
  if (score >= 5) return 'mid';
  return 'low';
}

const TIER_BAR_CLASS: Record<ReturnType<typeof scoreTier>, string> = {
  good: 'bg-green-600 dark:bg-green-500',
  mid: 'bg-amber-500',
  low: 'bg-destructive',
};

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
        <PageHeader title="Mis estadísticas" backHref="/perfil" backLabel="Perfil" />
        <EmptyState
          icon={BarChart3}
          message="Todavía no has terminado ningún examen. Haz tu primer simulacro para empezar a ver tu progreso."
        />
        <Link
          href="/simulador"
          className="text-foreground mt-3 inline-block text-center text-sm underline"
        >
          Ir al simulador
        </Link>
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
          const badgeClass =
            key === 'bestScore'
              ? 'bg-green-600/10 text-green-600 dark:text-green-500'
              : key === 'worstScore'
                ? 'bg-destructive/10 text-destructive'
                : 'bg-accent text-accent-foreground';
          return (
            <Card key={key}>
              <CardHeader className="gap-2 pb-2">
                <div
                  className={cn('flex size-8 items-center justify-center rounded-lg', badgeClass)}
                >
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
          <div className="relative flex h-32 items-end gap-1.5">
            <div
              className="border-muted-foreground/30 pointer-events-none absolute inset-x-0 border-t border-dashed"
              style={{ bottom: '50%' }}
            />
            {stats.evolution.map((point) => (
              <div
                key={point.attemptId}
                className={cn(
                  'group relative flex-1 rounded-t opacity-80 transition-opacity hover:opacity-100',
                  TIER_BAR_CLASS[scoreTier(point.score)],
                )}
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
                  className={cn(
                    'h-full rounded-full transition-all',
                    TIER_BAR_CLASS[scoreTier(topic.correctPercentage / 10)],
                  )}
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
