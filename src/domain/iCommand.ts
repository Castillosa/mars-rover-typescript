import { MarsRover, } from './MarsRover';

export default interface iCommand {
    run(rover:MarsRover)
}
