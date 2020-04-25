import { Productos } from './productos.entity';

describe('Productos', () => {
  it('should be defined', () => {
    expect(new Productos()).toBeDefined();
  });
});
