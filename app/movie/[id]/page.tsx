import { redirect } from 'next/navigation'
import { getMovieDetails } from '@/lib/tmdb'
import { createSlug } from '@/lib/slug'

export const runtime = 'edge';

export default async function MovieDetailPageRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  try {
    const movie = await getMovieDetails(parseInt(id));
    const slug = createSlug(movie.title, 'movie');
    redirect(`/${slug}`);
  } catch (error) {
    redirect('/movies');
  }
}
