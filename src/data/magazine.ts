/** Re-export current issue from the issue registry. */
import { getCurrentIssue } from '@/data/issues';

const i = getCurrentIssue();

export const currentIssue = {
  number: i.number,
  label: i.label,
  title: i.title,
  monthYear: i.monthYear,
  theme: i.theme,
  editorLede: i.editorLede,
} as const;
