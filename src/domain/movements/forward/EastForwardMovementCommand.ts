import Point from '../../Point';
import iMovementCommand from '../../iMovementCommand';

export class EastForwardMovementCommand implements iMovementCommand {
  run(location: Point): Point {
    return new Point(location.x + 1, location.y);
  }
}
