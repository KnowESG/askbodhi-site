import { unstable_noStore as noStore } from 'next/cache';
import { setRequestLocale } from 'next-intl/server';
import AssessmentClient from './AssessmentClient';

export const dynamic = 'force-dynamic';

export default async function AssessmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  noStore();
  const { locale } = await params;
  setRequestLocale(locale);
  return <AssessmentClient />;
}
