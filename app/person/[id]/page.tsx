import { redirect } from 'next/navigation'
import { getPersonDetails } from '@/lib/tmdb'
import { createPersonSlug } from '@/lib/slug'

export const runtime = 'edge';

export default async function PersonDetailPageRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  try {
    const person = await getPersonDetails(parseInt(id));
    const slug = createPersonSlug(person.name);
    redirect(`/${slug}`);
  } catch (error) {
    redirect('/');
  }
}
