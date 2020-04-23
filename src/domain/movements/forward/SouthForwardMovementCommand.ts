import Point from '../../Point';
import iMovementCommand from '../../iMovementCommand';

export class SouthForwardMovementCommand implements iMovementCommand {
  run(location: Point): Point {
    return new Point(location.x, location.y + 1);
  }
}
