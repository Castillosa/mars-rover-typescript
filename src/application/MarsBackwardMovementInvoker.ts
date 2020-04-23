import iMovementCommand from '../domain/iMovementCommand';
import Point from '../domain/Point';
import { NorthBackwardMovementCommand, } from '../domain/movements/backward/NorthBackwardMovementCommand';
import { EastBackwardMovementCommand, } from '../domain/movements/backward/EastBackwardMovementCommand';
import { SouthBackwardMovementCommand, } from '../domain/movements/backward/SouthBackwardMovementCommand';
import {
  WestBackwardMovementCommand,
} from '../domain/movements/backward/WestForwardMovementCommand';
import { IMovementInvoker, } from '../domain/iMovementInvoker';

export interface iHash {
  [details: string]:string,
}
export class MarsBackwardMovementInvoker implements IMovementInvoker {
  private allowedCommands:Map<string, iMovementCommand>;

  constructor() {
    this.allowedCommands = new Map();
    this.allowedCommands.set('N', new NorthBackwardMovementCommand());
    this.allowedCommands.set('E', new EastBackwardMovementCommand());
    this.allowedCommands.set('S', new SouthBackwardMovementCommand());
    this.allowedCommands.set('W', new WestBackwardMovementCommand());
  }
  run(direction: string, location:Point): Point {
    const gettedCommand = this.allowedCommands.get(direction);
    if (gettedCommand) {
      return gettedCommand.run(location);
    }
  }
}
