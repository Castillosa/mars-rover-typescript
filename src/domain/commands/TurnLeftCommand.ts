import iCommand from '../iCommand';

export class TurnLeftCommand implements iCommand {

  run(marsRover) {
    return marsRover.turnLeft();
  }
}
