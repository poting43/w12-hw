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

  test('Sell 1 for the first episode, 2 for the second episode', () => {
    const sells = new Sells();
    sells.buy(1,1);
    sells.buy(2,2);
    expect(sells.price).toBe(290);
  });

  test('Sell 3 for the first episode, 2 for the second episode, 3 for the third episode', () => {
    const sells = new Sells();
    sells.buy(1,3);
    sells.buy(2,2);
    sells.buy(3,3);
    expect(sells.price).toBe(730);
  });

  test('Sell 2 for the first episode, 2 for the second episode, 2 for the third episode, 1 for the fourth episode', () => {
    const sells = new Sells();
    sells.buy(1,2);
    sells.buy(2,2);
    sells.buy(3,2);
    sells.buy(4,1);
    expect(sells.price).toBe(590);
  });
});
