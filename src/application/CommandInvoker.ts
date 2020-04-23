import { ForwardCommand, } from '../domain/commands/ForwardCommand';
import iCommand from '../domain/iCommand';
import { BackwardCommand, } from '../domain/commands/BackwardCommand';
import { TurnLeftCommand, } from '../domain/commands/TurnLeftCommand';
import { TurnRightCommand, } from '../domain/commands/TurnRightCommand';
import { MarsRover, } from '../domain/MarsRover';
import {MarsForwardMovementInvoker} from "./MarsForwardMovementInvoker";
import {MarsBackwardMovementInvoker} from "./MarsBackwardMovementInvoker";

export interface iHash {
  [details: string]:string,
}
export class CommandInvoker {
  private allowedCommands:Map<string, iCommand>;

  constructor() {
    this.allowedCommands = new Map();
    this.allowedCommands.set('f', new ForwardCommand(new MarsForwardMovementInvoker()));
    this.allowedCommands.set('b', new BackwardCommand(new MarsBackwardMovementInvoker()));
    this.allowedCommands.set('l', new TurnLeftCommand());
    this.allowedCommands.set('r', new TurnRightCommand());
  }
  run(command: string, marsRover: MarsRover): boolean {
    const gettedCommand = this.allowedCommands.get(command);
    if (gettedCommand) {
      return gettedCommand.run(marsRover);
    }
  }
}
