import { NextRequest, NextResponse } from 'next/server'
import { discoverTVShows } from '@/lib/tmdb'

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    
    const params: any = {
      page: parseInt(searchParams.get('page') || '1'),
    }

    if (searchParams.get('sort_by')) {
      params.sort_by = searchParams.get('sort_by')
    }
    if (searchParams.get('with_genres')) {
      params.with_genres = searchParams.get('with_genres')
    }
    if (searchParams.get('first_air_date.gte')) {
      params['first_air_date.gte'] = searchParams.get('first_air_date.gte')
    }
    if (searchParams.get('first_air_date.lte')) {
      params['first_air_date.lte'] = searchParams.get('first_air_date.lte')
    }
    if (searchParams.get('air_date.gte')) {
      params['air_date.gte'] = searchParams.get('air_date.gte')
    }
    if (searchParams.get('air_date.lte')) {
      params['air_date.lte'] = searchParams.get('air_date.lte')
    }
    if (searchParams.get('vote_average.gte')) {
      params['vote_average.gte'] = parseFloat(searchParams.get('vote_average.gte') || '0')
    }
    if (searchParams.get('vote_count.gte')) {
      params['vote_count.gte'] = parseInt(searchParams.get('vote_count.gte') || '0')
    }
    if (searchParams.get('with_runtime.gte')) {
      params.with_runtime_gte = parseInt(searchParams.get('with_runtime.gte') || '0')
    }
    if (searchParams.get('with_runtime.lte')) {
      params.with_runtime_lte = parseInt(searchParams.get('with_runtime.lte') || '300')
    }
    if (searchParams.get('with_original_language')) {
      params.with_original_language = searchParams.get('with_original_language')
    }

    const result = await discoverTVShows(params)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Discover TV shows API hatası:', error)
    return NextResponse.json({ error: 'Diziler yüklenemedi' }, { status: 500 })
  }
}



