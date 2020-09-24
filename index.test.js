// import

import {
  env, isDev, isTesting, isStaging, isProd, isServer, isClient,
} from './index';

// test

describe('env', () => {
  it('should return the correct NODE_ENV', () => {
    expect(env).toBe('testing');
  });
});

describe('isDev', () => {
  it('should return false in NODE_ENV="testing"', () => {
    expect(isDev).toBe(false);
  });
});

describe('isTesting', () => {
  it('should return true in NODE_ENV="testing"', () => {
    expect(isTesting).toBe(true);
  });
});

describe('isStaging', () => {
  it('should return false in NODE_ENV="testing"', () => {
    expect(isStaging).toBe(false);
  });
});

describe('isProd', () => {
  it('should return false in NODE_ENV="testing"', () => {
    expect(isProd).toBe(false);
  });
});

describe('isServer', () => {
  it('should return true when `window` === undefined', () => {
    expect(isServer).toBe(false);
  });
});

describe('isClient', () => {
  it('should return false when `window` === undefined', () => {
    expect(isClient).toBe(true);
  });
});
