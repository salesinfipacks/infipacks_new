export const runtime = 'edge';

export default async function handler(request: Request): Promise<Response> {
  return new Response(JSON.stringify({ message: "Hello from Edge!" }), {
    headers: { 'Content-Type': 'application/json' },
  });
}