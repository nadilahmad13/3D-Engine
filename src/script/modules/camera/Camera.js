import { Node } from "../core/Node.js"
import { M4 } from "../math/Matrix4.js"

export class Camera extends Node {
  projectionMatrix = M4.identity()
  #invWorldMatrix = M4.identity()
  zoom = 1

  get projectionMatrix() {
    this.computeProjectionMatrix()
    return this.projectionMatrix.premul(this.#invWorldMatrix)
  }

  get type() {
    return "Camera"
  }

  get isCamera() {
    return true
  }

  computeWorldMatrix() {
    super.computeWorldMatrix()
    this.#invWorldMatrix = M4.inv(this.worldMatrix)
  }
  
  computeProjectionMatrix() {
    throw new Error("Method not implemented.")
  }
}
