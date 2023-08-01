import { NextResponse } from 'next/server'


function ServerComponent(request) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

};

export default ServerComponent;