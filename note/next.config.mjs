/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // 사용하고자 하는 외부이미지의 도메인 입력이 필요
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true, // 영원히 이동했을때를 nextjs에게 알려줌
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false, // 임시로 이동시킬때는 false
      },
    ];
  },
  async rewrites() {
    // 복잡하거나 보안상의 키가 url에 들어간다면 다른 공개 url로 대치하도록 정의
    return [
      {
        source: "/ellie",
        destination: "/about/me/ellie",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

export default nextConfig;
