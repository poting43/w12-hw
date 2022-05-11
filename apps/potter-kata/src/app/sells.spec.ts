import { Sells } from './sells';

describe('Sells', () => {
  it('should create an instance', () => {
    expect(new Sells()).toBeTruthy();
  });

  test('sell first book', () => {
    const sells = new Sells();
    sells.buy(1);
    expect(sells.price).toBe(100);
});
});
