/** Cover image paths for magazine issues. */
export function issueCoverPath(number: number): string {
  return `/covers/issue-${String(number).padStart(2, '0')}-cover.svg`;
}
