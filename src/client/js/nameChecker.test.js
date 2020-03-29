import { checkForName } from './nameChecker'

describe('the function "checkForName" should exist' , () => {
  test('It should return true', () => {
      expect(checkForName).toBeDefined();
  });
});

describe('test the function "checkForName" for valid url' , () => {
  let url = "https://jestjs.io/docs/en/tutorial-async";
  global.alert = () => true;
  test('It should return true and an alert message',() => {
    const response = checkForName(url);
    expect(response).toBeDefined();
    expect(response).toBe(true);
  });
});
