import Link from 'next/link';
import { redirect } from 'next/navigation';

import { computeUserStatistics } from '@/application/use-cases/compute-user-statistics';
import { DataConnectAttemptRepository } from '@/infrastructure/firebase/attempt-repository';
import { DataConnectStatisticsRepository } from '@/infrastructure/firebase/statistics-repository';
import { getCurrentUser } from '@/infrastructure/firebase/session';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

const attemptRepository = new DataConnectAttemptRepository();
const statisticsRepository = new DataConnectStatisticsRepository();

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

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Mis estadísticas</h1>
        <Link href="/perfil" className="text-muted-foreground text-sm hover:underline">
          Volver al perfil
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Exámenes realizados</CardDescription>
            <CardTitle className="text-2xl">{stats.totalExams}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Nota media</CardDescription>
            <CardTitle className="text-2xl">{stats.averageScore?.toFixed(2)}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>% de aciertos</CardDescription>
            <CardTitle className="text-2xl">{stats.correctPercentage}%</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Mejor nota</CardDescription>
            <CardTitle className="text-2xl">{stats.bestScore?.toFixed(2)}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Peor nota</CardDescription>
            <CardTitle className="text-2xl">{stats.worstScore?.toFixed(2)}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Tiempo medio</CardDescription>
            <CardTitle className="text-2xl">
              {stats.averageTimeSeconds !== null ? formatMinutes(stats.averageTimeSeconds) : '-'}
            </CardTitle>
          </CardHeader>
        </Card>
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
