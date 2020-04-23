import { NorthForwardMovementCommand, } from '../domain/movements/forward/NorthForwardMovementCommand';
import iMovementCommand from '../domain/iMovementCommand';
import { EastForwardMovementCommand, } from '../domain/movements/forward/EastForwardMovementCommand';
import { SouthForwardMovementCommand, } from '../domain/movements/forward/SouthForwardMovementCommand';
import { WestForwardMovementCommand, } from '../domain/movements/forward/WestForwardMovementCommand';
import Point from '../domain/Point';
import { IMovementInvoker, } from '../domain/iMovementInvoker';

export class MarsForwardMovementInvoker implements IMovementInvoker {
  private allowedCommands:Map<string, iMovementCommand>;

  constructor() {
    this.allowedCommands = new Map();
    this.allowedCommands.set('N', new NorthForwardMovementCommand());
    this.allowedCommands.set('E', new EastForwardMovementCommand());
    this.allowedCommands.set('S', new SouthForwardMovementCommand());
    this.allowedCommands.set('W', new WestForwardMovementCommand());
  }

  run(direction: string, location:Point): Point {
    const gettedCommand = this.allowedCommands.get(direction);
    if (gettedCommand) {
      return gettedCommand.run(location);
    }
  }
}
