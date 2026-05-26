import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function proxy(request) {

  const pathname = request.nextUrl.pathname;

  // exemple : locale invalide
  const hasLocale = routing.locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  // aucune locale valide
  if (!hasLocale) {

    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}`, request.url)
    );

  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};