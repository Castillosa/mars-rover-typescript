import iCommand from '../iCommand';

export class ForwardCommand implements iCommand {

  run(marsRover) {
    return marsRover.move(marsRover.direction, 'f');
  }
}
