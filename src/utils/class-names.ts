export default function classNames(...classNames: string[]): string {
  return classNames.filter(Boolean).join(" ");
}
