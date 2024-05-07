import { getProducts } from "@/api/products";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import Link from "next/link";
import clothesImage from "../../public/images/clothes.jpg";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>Products!</h1>
      <Image src={clothesImage} alt="shop" />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
        // 외부 이미지를 사용할 경우 width, height를 넣어줘야한다.
        // next.config.js 에 등록해줘야한다.
        // 이미지 최적화가 자동으로 된다.
        // html 이미지 태그를 사용할 경우 레이아웃 쉬프트가 발생하지만 Image컴포넌트를 사용할 경우 레이아웃 쉬프트가 발생하지않는다.
      />

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
