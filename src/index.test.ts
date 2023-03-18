import { describe, expect, it } from '@jest/globals';
import { greetings } from './index.js';

describe('greetings', () => {
  it('should say hello', () => {
    const result = greetings();

    expect(result).toBe('hello world !');
  });
});
