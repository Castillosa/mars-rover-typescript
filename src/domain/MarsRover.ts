import Point from './Point';
import { CommandInvoker, } from '../application/CommandInvoker';

export class MarsRover {
  public _location: Point;
  private _direction: string;

  protected _commands: string[] = [];
  public _grid: Point;
  private _status: string;
  private _obstacles: Array<Point>;
  private commandInvocker: CommandInvoker;

  constructor(location: number[] = [ 0, 0, ], direction: string = 'N', grid: number[] = [ 100, 100, ],
    obstacles: Array<Array<number>> = []) {
    this._direction = direction;
    this.obstacles = obstacles;
    this._grid = new Point(grid[0], grid[1]);
    this._location = new Point(location[0], location[1]);
    this.commandInvocker = new CommandInvoker();
  }

  commands(commands: Array<string> = []): string[] {
    if (commands.length === 0) {
      return this._commands;
    }
    this._commands.push(...commands || []);

    for (const command of commands) {
      if (!this.commandInvocker.run(command, this)) {
        break;
      }
    }
  }

  wrappingCorretion(axisPosition: number, max) {
    if (axisPosition >= max) {
      return axisPosition - max;
    }

    if (axisPosition < 0) {
      return axisPosition + max;
    }
    return axisPosition;
  }

  turnRight() {
    this.direction = this.turnCalculation('r');
    return true;
  }

  turnLeft() {
    this.direction = this.turnCalculation('l');
    return true;
  }

  turnCalculation(command) {
    const operator = (command === 'r') ? 1 : -1;

    const actualWeight = this.getDirectionWeigthFromId(this.direction);
    const candidate = actualWeight + operator;
    if (candidate > 3) {
      return this.getDirectionIdFromWeigth(0);
    }

    if (candidate < 0) {
      return this.getDirectionIdFromWeigth(3);
    }
    return this.getDirectionIdFromWeigth(candidate);
  }

  getDirectionWeigthFromId(direction) {
    switch (direction) {
      case 'N':
        return 0;
      case 'E':
        return 1;
      case 'S':
        return 2;
      case 'W':
        return 3;
    }
  }

  getDirectionIdFromWeigth(weight) {
    switch (weight) {
      case 0:
        return 'N';
      case 1:
        return 'E';
      case 2:
        return 'S';
      case 3:
        return 'W';
    }
  }

  get location(): number[] {
    return this._location.get();
  }

  get direction(): string {
    return this._direction;
  }

  set direction(value: string) {
    this._direction = value;
  }

  get grid(): number[] {
    return this._grid.get();
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get obstacles(): Array<Array<number>> {
    return this._obstacles.map((obs) => obs.get());
  }

  set obstacles(values: Array<Array<number>>) {
    this._obstacles = values.map((obstacle => new Point(obstacle[0], obstacle[1])));
  }

  checkIfObstacles(candidate: Point) {

    return this._obstacles.some((obstacle) => {
      return obstacle.x === candidate.x && obstacle.y === candidate.y;
    });
  }
}
