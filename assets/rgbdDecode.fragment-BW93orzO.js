import{a as t}from"./create-runtime-stories-BBH7VRGR.js";import"./helperFunctions-ClnYT4TI.js";import"./props-D_CwaEcb.js";import"./index-client-a4XWVA08.js";import"./iframe-CWYB0b8a.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const e="rgbdDecodePixelShader",r=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV)),1.0);}`;t.ShadersStoreWGSL[e]=r;const d={name:e,shader:r};export{d as rgbdDecodePixelShaderWGSL};