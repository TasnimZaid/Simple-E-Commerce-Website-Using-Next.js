import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Welcome to Simple E-Commerce</h1>
      <nav>
        <Link href="/products" className="text-blue-500">View Products</Link>
        <Link href="/about" className="text-blue-500 ml-4">About Us</Link>
      </nav>
    </div>
  );
}
