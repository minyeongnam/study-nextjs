// nextjs가 params를 전달한다.
// params의 객체와 라우팅 경로의 키는 동일해야한다
// ex: [slug], params.slug
// 동적으로 라우팅하면 서버상에서 렌더링하여 html 파일을 가져오게 된다
// 골격을 프리렌더링하고 동적으로 데이터를 생성하여 브라우저로 보냄
// 소괄호(slug)를 만들 경우 페이지를 묶는 개념이다, path에 포함되지 않는다
// 스프레드 연산자를 쓸 경우 하위 페이지까지 배열로 받아온다
// [[...slug]] 옵셔널하게 사용가능

import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.slug,
  };
}

export default function SlugPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound(); //해당 페이지와 가장 가짜운 notFound 페이지 실행
  }
  return <h1>{params.slug} 제품 설명 페이지!</h1>;
}

// SSG로 페이지를 미리 만들 경우 사용
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => {
    return { slug: product };
  });
}
