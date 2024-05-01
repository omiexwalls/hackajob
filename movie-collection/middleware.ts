import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import appConfig from '@/util/appConfig';

const intlMiddleware = createMiddleware(appConfig.i18n);

const isProtectedRoute = createRouteMatcher(['movies/(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();

  return intlMiddleware(req);
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
