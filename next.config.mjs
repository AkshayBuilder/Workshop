/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    serverActions:true

  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'test.create.diagnal.com',  // Correct domain
            port: '',  // Leave empty if no specific port is required
            pathname: '/images/**',  // Path for your images
          },
        ],
      },
};

export default nextConfig;
