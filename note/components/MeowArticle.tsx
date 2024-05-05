"use client";
import { useEffect, useState } from "react";
import styles from "./meowArticle.module.css";

export default function MeowArticle() {
  // const res = fetch("https://meowfacts.herokuapp.com", {
  //   // next: { revalidate: 3 }, //ISR로 렌더링 시켜 3초마다 패치된다.
  //   // next: { revalidate: 0 }, //0으로 할 경우 요청마다 재 렌더링 하여 SSR로 작동된다
  //   // cache를 지정하지 않으면 SSG로 작동
  //   cache: "no-store", // 요청마다 렌더링 되는 SSR로 작동된다
  // }); //SSG일 경우 빌드될 때 한 번만 렌더링된다.
  // const data = await res.json();
  // const factText = data.data[0];

  const [text, setText] = useState("데이터 준비중");

  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
