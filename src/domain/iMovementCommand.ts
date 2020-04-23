import Point from './Point';

export default interface iMovementCommand {
    run(location: Point): Point
}
