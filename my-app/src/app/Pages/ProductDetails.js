import { useRouter } from 'next/router';

const products = [
  { id: 1, name: 'Product 1', price: '$10', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', price: '$20', description: 'Description of Product 2' },
];

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-xl">{product.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2">Add to Cart</button>
    </div>
  );
}
