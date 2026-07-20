'use client';

import { Download } from 'lucide-react';

import type { ExamAttemptSummary } from '@/domain/entities/attempt';
import { Button } from '@/shared/components/ui/button';

// Antepone un apóstrofo si el valor empieza por un carácter que Excel/Sheets
// interpretaría como el inicio de una fórmula (=, +, -, @, tab, salto de línea),
// para que un examTitle malicioso no pueda ejecutar código al abrir el CSV
// (CSV/Excel formula injection, CWE-1236).
function neutralizeFormula(value: string): string {
  return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}

function toCsvValue(value: string): string {
  const safe = neutralizeFormula(value);
  if (/[",\n]/.test(safe)) {
    return `"${safe.replace(/"/g, '""')}"`;
  }
  return safe;
}

function formatDuration(seconds: number | null): string {
  if (seconds === null) return '';
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes} min ${rest} s`;
}

export function ExportAttemptsButton({ attempts }: { attempts: ExamAttemptSummary[] }) {
  function handleExport() {
    const header = ['Examen', 'Estado', 'Nota', 'Tiempo', 'Fecha'];
    const rows = attempts.map((attempt) => [
      attempt.examTitle,
      attempt.status === 'FINISHED' ? 'Finalizado' : attempt.status,
      attempt.score !== null ? attempt.score.toFixed(2) : '',
      formatDuration(attempt.timeSpentSeconds),
      attempt.finishedAt ? new Date(attempt.finishedAt).toLocaleDateString('es-ES') : '',
    ]);
    const csv = [header, ...rows].map((row) => row.map(toCsvValue).join(',')).join('\n');

    const blob = new Blob([`﻿${csv}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'exammaster-historial.csv';
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={handleExport} className="gap-1.5">
      <Download className="size-4" />
      Exportar CSV
    </Button>
  );
}
