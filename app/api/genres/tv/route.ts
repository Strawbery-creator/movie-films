import { NextResponse } from 'next/server'
import { getTVGenres } from '@/lib/tmdb'

export const runtime = 'edge';

export async function GET() {
  try {
    const genres = await getTVGenres()
    return NextResponse.json(genres)
  } catch (error) {
    console.error('Genres API hatası:', error)
    return NextResponse.json({ error: 'Türler yüklenemedi' }, { status: 500 })
  }
}



