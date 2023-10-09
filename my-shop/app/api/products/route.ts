import data from '@/mock/allProducts.json';

export async function GET() {
  return new Response(JSON.stringify(data), {status: 200})
}
