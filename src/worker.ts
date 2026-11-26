interface Env {
  ASSETS: Fetcher
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const isDocument = url.pathname === '/' || url.pathname === '/index.html'

    if (!isDocument) {
      return env.ASSETS.fetch(request)
    }

    if (!url.hostname.endsWith('.blub.wiki')) {
      url.hostname = `en.blub.wiki`
    }

    const subdomain = url.hostname.split('.')[0]
    const localized = new URL(url)
    localized.pathname = `/${subdomain}/`

    const response = await env.ASSETS.fetch(new Request(localized, request))
    const headers = new Headers(response.headers)
    headers.set('Cache-Control', 'public, max-age=0, s-maxage=604800')

    return new Response(await response.text(), {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  },
} satisfies ExportedHandler<Env>
