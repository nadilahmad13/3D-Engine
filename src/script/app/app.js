import { Mesh, WebGLRenderer, Scene } from "../modules/core/index.js"
import {
  Color,
  BasicMaterial,
  ShaderMaterial,
  PhongMaterial,
  Texture
} from "../modules/materials/index.js"
import { Vector3, DEGTORAD } from "../modules/math/index.js"
import {
  BoxGeometry,
  HollowPrismGeometry,
  HollowBoxGeometry,
  TubeGeometry,
  PlaneGeometry
} from "../modules/geometry/index.js"
import {
  saveUtil,
  loadUtil,
  objectTransformations,
  cameraController
} from "./utils/index.js"
import {
  OrtographicCamera,
  PerspectiveCamera,
  ObliqueCamera,
  OrbitControl
} from "../modules/camera/index.js"

const v = new Vector3()
const canvas = document.getElementById("canvas")
canvas.width = 800
canvas.height = 600
canvas.style.backgroundColor = "white"
const gl = new WebGLRenderer(canvas)

const cameras = {
  perspective: new PerspectiveCamera(
    60,
    canvas.clientWidth / canvas.clientHeight,
    0.01,
    9999
  ),
  ortographic: new OrtographicCamera(
    canvas.clientWidth / 100,
    -canvas.clientWidth / 100,
    -canvas.clientHeight / 100,
    canvas.clientHeight / 100,
    -1000,
    1000
  ),
  oblique: new ObliqueCamera(
    canvas.clientWidth / 100,
    -canvas.clientWidth / 100,
    -canvas.clientHeight / 100,
    canvas.clientHeight / 100,
    -1000,
    1000,
    30,
    30
  ),
  current: "perspective"
}

const orbitControl = {
  perspective: new OrbitControl(cameras.perspective, canvas),
  ortographic: new OrbitControl(cameras.ortographic, canvas),
  oblique: new OrbitControl(cameras.oblique, canvas)
}

let scene = new Scene()
const texturedBox = new Mesh(
    new BoxGeometry(2, 2, 2),
    new PhongMaterial({ 
      useTexture: true
   })
);
scene.add(texturedBox);
objectTransformations(texturedBox);

let sceneArr = [scene]

loadUtil((loadedScene) => {
  scene = loadedScene
  sceneArr = [scene]
})

cameraController(cameras)
saveUtil(sceneArr)

function render() {
  requestAnimationFrame(render)
  orbitControl[cameras.current].update()
  gl.render(scene, cameras[cameras.current])
  
}
render()
