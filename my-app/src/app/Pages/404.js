import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found !!!</h1>
      <Link href="/" className="text-blue-500">Go back to Home</Link>
    </div>
  );
}
