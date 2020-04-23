import iCommand from '../iCommand';
import Point from '../Point';
import { IMovementInvoker, } from '../iMovementInvoker';
import {MarsRover} from "../MarsRover";

export class BackwardCommand implements iCommand {
  private invoker: IMovementInvoker;
  constructor(invoker) {
    this.invoker = invoker;
  }

  run(marsRover: MarsRover) {
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
