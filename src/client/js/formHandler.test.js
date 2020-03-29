import { handleSubmit } from './formHandler'

describe('the function "handleSubmit" should exist' , () => {
  test('It should return true', () => {
      expect(handleSubmit).toBeDefined();
  });
});

describe('the function "handleSubmit()" should be a function' , () => {
  test('It should be a function', () => {
      expect(typeof handleSubmit).toBe("function");
  });
});
