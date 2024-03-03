import { describe, expect, it } from 'vitest';
import { packageName } from '../src/index.js';

describe('packageName', () => {
  it('should say perlon', () => {
    const name = packageName();

    expect(name).toBe('perlon');
    expect(name).not.toBe('perla');
  });
});
