import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export { auth as middleware } from './auth';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  runtime: 'nodejs',
};
