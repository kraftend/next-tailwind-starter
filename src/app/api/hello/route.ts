import { NextResponse } from 'next/server';

// biome-ignore lint/suspicious/useAwait: <explanation>
// biome-ignore lint/correctness/noUnusedFunctionParameters: <explanation>
export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello World!' });
}
