export const ShaderTypes = {
  VERTEX: WebGLRenderingContext.VERTEX_SHADER,
  FRAGMENT: WebGLRenderingContext.FRAGMENT_SHADER
}

export const WebGLTypes = {
  UNSIGNED_BYTE: WebGLRenderingContext.UNSIGNED_BYTE,
  UNSIGNED_SHORT: WebGLRenderingContext.UNSIGNED_SHORT,
  UNSIGNED_INT: WebGLRenderingContext.UNSIGNED_INT,
  BYTE: WebGLRenderingContext.BYTE,
  SHORT: WebGLRenderingContext.SHORT,
  INT: WebGLRenderingContext.INT,
  INT_VEC2: WebGLRenderingContext.INT_VEC2,
  INT_VEC3: WebGLRenderingContext.INT_VEC3,
  INT_VEC4: WebGLRenderingContext.INT_VEC4,
  FLOAT: WebGLRenderingContext.FLOAT,
  FLOAT_MAT2: WebGLRenderingContext.FLOAT_MAT2,
  FLOAT_MAT3: WebGLRenderingContext.FLOAT_MAT3,
  FLOAT_MAT4: WebGLRenderingContext.FLOAT_MAT4,
  FLOAT_VEC2: WebGLRenderingContext.FLOAT_VEC2,
  FLOAT_VEC3: WebGLRenderingContext.FLOAT_VEC3,
  FLOAT_VEC4: WebGLRenderingContext.FLOAT_VEC4,
  BOOL: WebGLRenderingContext.BOOL,
  BOOL_VEC2: WebGLRenderingContext.BOOL_VEC2,
  BOOL_VEC3: WebGLRenderingContext.BOOL_VEC3,
  BOOL_VEC4: WebGLRenderingContext.BOOL_VEC4,
  SAMPLER_2D: WebGLRenderingContext.SAMPLER_2D,
  SAMPLER_CUBE: WebGLRenderingContext.SAMPLER_CUBE
}

export const WebGLTypeSetter = {
  [WebGLRenderingContext.FLOAT]: "1f",
  [WebGLRenderingContext.FLOAT_VEC2]: "2f",
  [WebGLRenderingContext.FLOAT_VEC3]: "3f",
  [WebGLRenderingContext.FLOAT_VEC4]: "4f",
  [WebGLRenderingContext.INT]: "1i",
  [WebGLRenderingContext.INT_VEC2]: "2i",
  [WebGLRenderingContext.INT_VEC3]: "3i",
  [WebGLRenderingContext.INT_VEC4]: "4i",
  [WebGLRenderingContext.BOOL]: "1i",
  [WebGLRenderingContext.BOOL_VEC2]: "2i",
  [WebGLRenderingContext.BOOL_VEC3]: "3i",
  [WebGLRenderingContext.BOOL_VEC4]: "4i",
  [WebGLRenderingContext.FLOAT_MAT2]: "Matrix2fv",
  [WebGLRenderingContext.FLOAT_MAT3]: "Matrix3fv",
  [WebGLRenderingContext.FLOAT_MAT4]: "Matrix4fv",
  [WebGLRenderingContext.SAMPLER_2D]: "1i"
}
