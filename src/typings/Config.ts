import { VectorLike } from "../entities/Vector";

/** The valid properties of the configuration of the system. */
export interface SystemConfig {
  collisionInfo: {
    /** The cell size of the collision engine (only applicable to hashgrids), which represents `2 ** x` game units. Default is `12`. */
    cellSize?: number;
  };

  /** The dimensions of the system. */
  dimensions?: VectorLike;

  /** The rate at which entities update (in FPS/Hz). Default is `60Hz`. */
  tickRate?: number;
  /** Whether or not verbose logs (such as warnings) should be logged. Default is `false`. */
  verbose?: boolean;
  /** Whether or not the system should use `requestAnimationFrame` over `setInterval`. Defaults to `true`. */
  useRAF?: boolean;

  /** The friction of the system when moving. Default is `0.1`. */
  friction?: number;
  /** The gravity of the system when moving. Default is `0`. */
  gravity?: number;
}
