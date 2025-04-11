import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname of the request (e.g. /, /protected, /login)
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = path === '/' || path === '/auth/login' || path === '/auth/register';

  // Get the token from the cookies
  const token = request.cookies.get('token')?.value || '';

  // Redirect logic
  if (isPublicPath && token) {
    // If the user is logged in and tries to access a public path, redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!isPublicPath && !token) {
    // If the user is not logged in and tries to access a protected path, redirect to login
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
    '/auth/login',
    '/auth/register',
  ],
}; 