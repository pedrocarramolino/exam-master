import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // firebase-admin (vía jwks-rsa/jose) no empaqueta bien con el bundler de servidor:
  // se carga como módulo nativo de Node en vez de bundlearse.
  serverExternalPackages: ['firebase-admin'],

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // La app nunca debe poder incrustarse en un iframe de terceros (clickjacking).
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // No usamos cámara/micrófono/geolocalización: denegarlos explícitamente.
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
