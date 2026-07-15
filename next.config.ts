import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // firebase-admin (vía jwks-rsa/jose) no empaqueta bien con el bundler de servidor:
  // se carga como módulo nativo de Node en vez de bundlearse.
  serverExternalPackages: ['firebase-admin'],
};

export default nextConfig;
