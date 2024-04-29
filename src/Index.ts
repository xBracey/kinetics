import System from "./System";

import CollisionResolver from "./collision/CollisionResolver";
import SpatialHashGrid from "./collision/SpatialHashGrid";

import Entity from "./entities/Entity";
import Circle from "./entities/shapes/Circle";

import Vector from "./entities/Vector";

import { SystemConfig } from "./typings/Config";
import {
  EntityConfig,
  CircleConfig,
  EntityForm,
  CollisionManager,
} from "./typings/Interfaces";

import { Movement, Environment, EntityType } from "./typings/Enums";

// Check if the code is running in a web browser environment
const isWebEnvironment = typeof window !== "undefined";

// SYSTEM
export { System };

// B O D I E S
export { Entity, Circle };

// C O L L I S I O N
export const Collision = { CollisionResolver, SpatialHashGrid };

// U T I L S
export { Vector };

// I N T E R F A C E S
export {
  SystemConfig,
  EntityConfig,
  CircleConfig,
  EntityForm,
  CollisionManager,
};

// E N U M S
export { Movement, Environment, EntityType };

// Attach the exports to the `window` object in a web environment
if (isWebEnvironment) {
  /** @ts-ignore */
  window.Kinetics = {
    System,
    Entity,
    Circle,
    Collision,
    Vector,
    Movement,
    Environment,
    EntityType,
  };
}
