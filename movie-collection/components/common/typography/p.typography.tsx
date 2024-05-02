import { clsx } from 'clsx';

export default function Paragraph({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={clsx('leading-7 [&:not(:first-child)]:mt-6', className)}>{children}</p>;
}
