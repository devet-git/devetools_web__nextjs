export default function classNames(...classNames: any[]): string {
  return classNames.filter(Boolean).join(" ");
}
