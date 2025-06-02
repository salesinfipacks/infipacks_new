export const runtime = 'edge';

export default function handler(req) {
  return new Response(JSON.stringify({ message: "Hello from Edge!" }), {
    headers: { 'Content-Type': 'application/json' },
  });
}