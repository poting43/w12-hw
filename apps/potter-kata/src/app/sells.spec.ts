import { Sells } from './sells';

describe('Sells', () => {
  it('should create an instance', () => {
    expect(new Sells()).toBeTruthy();
  });

  test('sell first book', () => {
    const sells = new Sells();
    sells.buy(1,1);
    expect(sells.price).toBe(100);
  });

  test('Sell 1 for the first episode, 1 for the second episode', () => {
    const sells = new Sells();
    sells.buy(1,1);
    sells.buy(2,1);
    expect(sells.price).toBe(190);
  });
});
