
/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      async redirects() {
        return [
          {
            source: '/',
            destination: '/las-frontend/login',
            permanent: true,
          }
        ]
      },
};

export default nextConfig;
