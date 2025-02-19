import { Color } from "./index.js"
import { Vector3 } from "../math/index.js"
export class ShaderMaterial {
  static #idCtr = 0

  /**@type {string} */
  #fragmentShader

  /**@type {string} */
  #vertexShader

  /** @type {{[key: string]: any}} Uniforms */
  #uniforms

  /** @type {string} */
  #id = "M" + (ShaderMaterial.#idCtr++).toString()

  /**
   * Create new instance of shader material.
   * @param {{name: string, vertexShader: string, fragmentShader: string, uniforms: object}} options
   */
  constructor(options = {}) {
    const { vertexShader, fragmentShader, uniforms } = options
    this.#vertexShader = vertexShader
    this.#fragmentShader = fragmentShader
    this.#uniforms = uniforms
  }

  get id() {
    return this.#id
  }

  get vertexShader() {
    return this.#vertexShader
  }

  get fragmentShader() {
    return this.#fragmentShader
  }

  get uniforms() {
    return this.#uniforms
  }

  set uniforms(value) {
    this.#uniforms = value
  }

  equals(material) {
    return this.#id === material.#id
  }

  get type() {
    return "ShaderMaterial"
  }

  toJSON() {
    const uniformsData = {}
    for (const key in this.uniforms) {
      const uniform = this.uniforms[key]
      if (uniform instanceof Color) {
        uniformsData[key] = ["Color", uniform.toJSON()]
      } else if (uniform instanceof Vector3) {
        uniformsData[key] = ["Vector3", uniform.toJSON()]
      } else {
        uniformsData[key] = uniform
      }
    }
    return {
      type: this.type,
      vertexShader: this.#vertexShader,
      fragmentShader: this.#fragmentShader,
      uniforms: uniformsData
    }
  }

  static fromJSON(json, obj = null) {
    const uniforms = {}
    for (const key in json.uniforms) {
      const uniform = json.uniforms[key]
      if (uniform[0] == "Color") {
        uniforms[key] = Color.fromJSON(uniform[1])
      } else if (uniform[0] == "Vector3") {
        uniforms[key] = Vector3.fromJSON(uniform[1])
      } else {
        uniforms[key] = uniform
      }
    }
    json.uniforms = uniforms
    if (!obj) obj = new ShaderMaterial(json)
    else {
      obj.uniforms = json.uniforms
    }
    return obj
  }
}
