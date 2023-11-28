import { Person } from '../main/objects';

test("should return 'Hello, Harry'", () => {
  const result = new Person().greeting();
  expect(result).toBe('Hello, Harry. ID: 0');
});
