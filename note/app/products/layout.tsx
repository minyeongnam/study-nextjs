import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | 멋진 제품 사이트",
    default: "전체 제품 확인 | 멋진 제품 사이트",
  },
  description: "멋진 제품을 확인해 보세요.",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성용</Link>
        <Link href="/products/man">남성용</Link>
      </nav>
      {children}
    </>
  );
}
