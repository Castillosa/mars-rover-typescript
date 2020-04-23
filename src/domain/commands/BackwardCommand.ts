import iCommand from '../iCommand';

export class BackwardCommand implements iCommand {

  run(marsRover) {
    return marsRover.move(marsRover.direction, 'b');
  }
}
