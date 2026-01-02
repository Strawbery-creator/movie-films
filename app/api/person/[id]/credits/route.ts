import { NextRequest, NextResponse } from 'next/server'
import { getPersonCredits } from '@/lib/tmdb'

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params
    const credits = await getPersonCredits(parseInt(params.id))
    return NextResponse.json(credits)
  } catch (error) {
    console.error('Person credits API hatası:', error)
    return NextResponse.json({ error: 'Filmografi bulunamadı' }, { status: 404 })
  }
}

