import { describe, expect, it } from '@jest/globals';
import { packageName } from './index.js';

describe('greetings', () => {
  it('should say perlon!', () => {
    const name = packageName();

    expect(name).toBe('perlon');
    expect(name).not.toBe('perla');
  });
});
