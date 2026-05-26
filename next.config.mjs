/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "oc-static.imgix.net",
      },
    ],
  },
  turbopack: {
    // root: "./"
    // useSystemTlsCerts: true,
  },
};

export default withNextIntl(nextConfig);
