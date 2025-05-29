import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

export function middleware(request: NextRequest) {
  // Your middleware logic here
  // For example:
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set('x-middleware-cache', 'no-cache');
  
  return NextResponse.next();
}