// fns

const env = (process.env.NODE_ENV || 'development').toLowerCase();

// export

module.exports = {
  env,

  isDev: env.startsWith('dev'),
  isTesting: env.startsWith('test'),
  isStaging: env.startsWith('stag'),
  isProd: env.startsWith('prod'),

  isServer: typeof window === 'undefined',
  isClient: typeof window !== 'undefined',
};
