import iCommand from '../iCommand';

export class TurnRightCommand implements iCommand {

  run(marsRover) {
    return marsRover.turnRight();
  }
}
