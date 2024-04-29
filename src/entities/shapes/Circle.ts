import System from "../../System";

import Entity from "../Entity";

import { EntityType } from "../../typings/Enums";
import { CircleConfig } from "../../typings/Interfaces";
import { ConfigurationError } from "../../typings/Error";

import Vector from "../../entities/Vector";

/** A specific geometric entity which represents a circle. */
export default class Circle extends Entity {
  public type = EntityType.Circle;

  /** The bounds of the entity for the collision manager. */
  public get bounds() {
    const vertex = this.position || this.vertices[0];
    if (this.position === undefined) this.position = vertex;

    return {
      min: new Vector(vertex.x - this.radius, vertex.y - this.radius),
      max: vertex,
      dimensions: this.hitbox,
    };
  }

  private _radius = 0;
  /** The radius of the circle. */
  public get radius() {
    return this._radius;
  }
  public set radius(value: number) {
    if (value <= 0)
      throw new ConfigurationError(
        "The radius of a circle must be greater than 0."
      );
    this._radius = value;
  }

  /** The hitbox of the circle. */
  public get hitbox() {
    return new Vector(this.radius * 2, this.radius * 2);
  }

  /** The moment of inertia of the circle. */
  public get inertia() {
    return this.static ? 0 : (this.mass * this.radius * this.radius) / 2;
  }

  constructor(info: CircleConfig, system: System) {
    super(info, system);

    this.radius = info.radius;
  }

  /** Circles cannot rotate. Editing the angular velocity will deform the hitbox. */
  public rotate() {}
}
