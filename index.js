// fns

const env = (process.env.NODE_ENV || 'development').toLowerCase();
const vercelEnv = (process.env.VERCEL_ENV || 'development').toLowerCase();

// export

module.exports = {
  env,

  isDev: env.startsWith('dev'),
  isTesting: env.startsWith('test'),
  isStaging: env.startsWith('stag'),
  isProd: env.startsWith('prod'),

  isServer: typeof window === 'undefined',
  isClient: typeof window !== 'undefined',

  isVercelDev: vercelEnv.startsWith('dev'),
  isVercelPreview: vercelEnv.startsWith('preview'),
  isVercelProd: vercelEnv.startsWith('prod'),
};
