import { getProducts } from "@/api/products";
import MeowArticle from "@/components/MeowArticle";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>Products!</h1>
      <ul>
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            {product.name}
          </Link>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
