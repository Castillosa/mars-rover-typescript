import Point from './Point';

export interface IMovementInvoker {
  run(direction: string, location:Point): Point
}
