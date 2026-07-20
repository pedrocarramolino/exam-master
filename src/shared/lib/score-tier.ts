export type ScoreTier = 'good' | 'mid' | 'low';

/** score en escala 0-10. */
export function scoreTier(score: number): ScoreTier {
  if (score >= 7) return 'good';
  if (score >= 5) return 'mid';
  return 'low';
}

export const SCORE_TIER_BG_CLASS: Record<ScoreTier, string> = {
  good: 'bg-green-600 dark:bg-green-500',
  mid: 'bg-amber-500',
  low: 'bg-destructive',
};

export const SCORE_TIER_TEXT_CLASS: Record<ScoreTier, string> = {
  good: 'text-green-600 dark:text-green-500',
  mid: 'text-amber-600 dark:text-amber-500',
  low: 'text-destructive',
};
