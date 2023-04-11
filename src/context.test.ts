import { createContext } from './index.js';

describe('context function', () => {
  const context = createContext({ monster: 'Black Magician' });

  test('Creates an object with monster property', () => {
    const name = context.getState();

    expect(name.monster).toBe('Black Magician');
    expect(name).not.toBe('perla');
  });

  test('Mutates the monster object', () => {
    context.setState({ monster: 'Blue Eyes White Dragon' });
    const name = context.getState();
    expect(name.monster).toBe('Blue Eyes White Dragon');
    expect(name).not.toBe('Black Magician');
  });
});
