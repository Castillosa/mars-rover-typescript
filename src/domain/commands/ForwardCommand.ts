import iCommand from '../iCommand';
import { MarsForwardMovementInvoker, } from '../../application/MarsForwardMovementInvoker';
import Point from '../Point';

export class ForwardCommand implements iCommand {
  private invoker: MarsForwardMovementInvoker;

  constructor(invoker: MarsForwardMovementInvoker) {
    this.invoker = invoker;
  }

  run(marsRover) {
    const initialPoint = Point.fromArray(marsRover.location);
    let candidate:Point = initialPoint;
    candidate = this.invoker.run(marsRover.direction, initialPoint);
    candidate.x = marsRover.wrappingCorretion(candidate.x, marsRover._grid.x);
    candidate.y = marsRover.wrappingCorretion(candidate.y, marsRover._grid.y);
    if (marsRover.checkIfObstacles(candidate)) {
      marsRover._location = initialPoint;
      marsRover.status = 'obstacle';
      return false;
    }
    marsRover._location = candidate;
    marsRover.status = 'OK';
    return true;

  }
}
