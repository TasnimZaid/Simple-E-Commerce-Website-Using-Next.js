import Image from 'next/image';
import { Head } from 'next/document';

export default function About() {
  return (
    <div className="p-5">
      <Head>
        <title>About Us</title>
        <meta name="description" content="About our simple e-commerce website." />
      </Head>
      <h1 className="text-2xl font-bold">About Us</h1>
      <Image src="/path-to-your-image.jpg" alt="About Us" width={500} height={300} />
      <p>We are dedicated to providing the best shopping experience!</p>
    </div>
  );
}
