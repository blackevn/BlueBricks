// server.ts
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { parse, UrlWithParsedQuery } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

interface QueryParams {
  listingId?: string;
}

app.prepare().then(() => {
  createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl: UrlWithParsedQuery = parse(req.url || '', true);
    const { pathname, query } = parsedUrl;

    // Extract the desired URL parameters from the query object
    const { listingId } = query as QueryParams;

    if (pathname?.startsWith('/listing/') && listingId) {
      // Render the page component with the dynamic URL
      app.render(req, res, pathname, query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err?: Error) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
