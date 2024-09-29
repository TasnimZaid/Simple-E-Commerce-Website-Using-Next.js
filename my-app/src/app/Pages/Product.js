import Link from 'next/link';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  // Add more products as needed
];

export default function Products() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="my-4">
            <Link href={`/products/${product.id}`}>
              <h2 className="text-xl">{product.name}</h2>
              <p>{product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
