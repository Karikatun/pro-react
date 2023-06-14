import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';

    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 mode1 mode2';

    expect(classNames('someClass', { mode1: true, mode2: true }, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2 mode1';

    expect(classNames('someClass', { mode1: true, mode2: false }, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 mode1';

    expect(classNames('someClass', { mode1: true, mode2: undefined }, ['class1', 'class2'])).toBe(expected);
  });
});
