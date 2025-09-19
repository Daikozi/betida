import { NextRequest, NextResponse } from 'next/server'

export const middleware = (_request: NextRequest): NextResponse => NextResponse.next()
