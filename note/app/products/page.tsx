import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];
export default function ProductsPage() {
  return (
    <>
      <h1>Products!2</h1>

      <ul>
        {products.map((product) => (
          <Link href={`/products/${product}`} key={product}>
            {product}
          </Link>
        ))}
      </ul>
    </>
  );
}
