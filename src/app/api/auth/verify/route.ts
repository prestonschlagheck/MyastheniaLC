import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    
    // Get the password from environment variables
    const correctPassword = process.env.SITE_PASSWORD
    
    if (!correctPassword) {
      return NextResponse.json(
        { error: 'Server configuration error' }, 
        { status: 500 }
      )
    }
    
    if (password === correctPassword) {
      return NextResponse.json(
        { success: true, message: 'Authentication successful' }, 
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid password' }, 
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' }, 
      { status: 400 }
    )
  }
} 