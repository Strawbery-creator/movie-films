import { NextResponse } from 'next/server'
import { getMovieGenres } from '@/lib/tmdb'

export const runtime = 'edge';

export async function GET() {
  try {
    const genres = await getMovieGenres()
    return NextResponse.json(genres)
  } catch (error) {
    console.error('Genres API hatası:', error)
    return NextResponse.json({ error: 'Türler yüklenemedi' }, { status: 500 })
  }
}



