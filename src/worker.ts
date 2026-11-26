import { WorkerEntrypoint } from 'cloudflare:workers'

interface Env {
  ASSETS: Fetcher
}

export class Backend extends WorkerEntrypoint<Env> {
  async fetch(request: Request): Promise<Response> {
    const response = await this.env.ASSETS.fetch(request)
    const headers = new Headers(response.headers)

    if (response.status === 200) {
      headers.set(
        'Cache-Control',
        `public, max-age=0, s-maxage=${60 * 60 * 24 * 7}`,
      )
    } else {
      headers.set('Cache-Control', 'no-store')
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  }
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url)
    const isDocument = url.pathname === '/' || url.pathname === '/index.html'

    if (!isDocument) {
      return env.ASSETS.fetch(request)
    }

    if (!url.hostname.endsWith('.blub.wiki')) {
      url.hostname = 'en.blub.wiki'
    }

    const locale = url.hostname.split('.')[0]
    const localized = new URL(url)
    localized.pathname = `/${locale}/`
    localized.search = ''

    return ctx.exports.Backend.fetch(new Request(localized, request), {
      cf: { cacheKey: `/${locale}/` },
    })
  },
} satisfies ExportedHandler<Env>
