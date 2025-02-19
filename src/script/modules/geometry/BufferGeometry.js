import { Vector3 } from "../math/index.js"
import { BufferAttribute } from "./index.js"

export class BufferGeometry {
  #attributes
  useVertexColors = false

  constructor() {
    this.#attributes = {}
  }

  setAttribute(name, attribute) {
    this.#attributes[name] = attribute
    return this
  }

  get attributes() {
    return this.#attributes
  }

  getAttribute(name) {
    return this.#attributes[name]
  }

  deleteAttribute(name) {
    delete this.#attributes[name]
    return this
  }

  calculateNormals(newAttribute = false) {
    const position = this.getAttribute("position")
    if (!position) return
    let normal = this.getAttribute("normal")
    if (newAttribute || !normal)
      normal = new BufferAttribute(
        new Float32Array(position.length),
        position.size
      )

    const pA = new Vector3(),
      pB = new Vector3(),
      pC = new Vector3()
    for (let i = 0; i < position.length; i += 3) {
      pA.fromBufferAttribute(position, i)
      pB.fromBufferAttribute(position, i + 1)
      pC.fromBufferAttribute(position, i + 2)

      pC.sub(pB)
      pB.sub(pA)
      pB.cross(pC)

      const d = pB.normalize().toArray()
      normal.set(i, d)
      normal.set(i + 1, d)
      normal.set(i + 2, d)
    }
    this.setAttribute("normal", normal)
  }

  toJSON() {
    const attributes = {}
    for (const key in this.#attributes) {
      attributes[key] = this.#attributes[key].toJSON()
    }

    return {
      attributes
    }
  }

  static fromJSON(data) {
    const geometry = new BufferGeometry()
    for (const key in data.attributes) {
      geometry.setAttribute(key, BufferAttribute.fromJSON(data.attributes[key]))
    }

    return geometry
  }
}
