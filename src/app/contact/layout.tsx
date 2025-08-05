import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('contact');

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 