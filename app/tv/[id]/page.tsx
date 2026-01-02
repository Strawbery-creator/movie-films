import { redirect } from 'next/navigation'
import { getTVShowDetails } from '@/lib/tmdb'
import { createSlug } from '@/lib/slug'

export const runtime = 'edge';

export default async function TVDetailPageRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  try {
    const tvShow = await getTVShowDetails(parseInt(id));
    const slug = createSlug(tvShow.name, 'tv');
    redirect(`/${slug}`);
  } catch (error) {
    redirect('/tv');
  }
}
