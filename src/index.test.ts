import { packageName } from './index.js';

describe('packageName', () => {
  it('should say perlon', () => {
    const name = packageName();

    expect(name).toBe('perlon');
    expect(name).not.toBe('perla');
  });
});
