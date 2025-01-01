import{a as l}from"./create-runtime-stories-W9W7bo9k.js";import"./props-CDwtXEPn.js";import"./index-client-0IVJ1HVs.js";import"./iframe-Dg-i1owp.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r="greasedLinePixelShader",o=`var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAndColorDistributionType: vec2f;uniform grlColor: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
let grlColorMode: f32=uniforms.grl_colorModeAndColorDistributionType.x;let grlColorDistributionType: f32=uniforms.grl_colorModeAndColorDistributionType.y;fragmentOutputs.color=vec4(uniforms.grlColor,1.);fragmentOutputs.color.a=step(fragmentInputs.grlCounters,uniforms.grlVisibility);if (fragmentOutputs.color.a==0.0) {discard;}
if (uniforms.grlUseDash==1.0) {let dashPosition=(fragmentInputs.grlCounters+uniforms.grlDashOffset) % uniforms.grlDashArray;fragmentOutputs.color.a*=ceil(dashPosition-(uniforms.grlDashArray*uniforms.grlDashRatio));if (fragmentOutputs.color.a==0.0) {discard;}}
if (uniforms.grlUseColors==1.) {
#ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE
let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,vec2f(fragmentInputs.grlCounters,0.));
#else
let lookup: vec2f=vec2(fract(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth),1.0-floor(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth));let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,lookup);
#endif
if (grlColorMode==COLOR_MODE_SET) {fragmentOutputs.color=grlColor;} else if (grlColorMode==COLOR_MODE_ADD) {fragmentOutputs.color+=grlColor;} else if (grlColorMode==COLOR_MODE_MULTIPLY) {fragmentOutputs.color*=grlColor;}}
#define CUSTOM_FRAGMENT_MAIN_END
}
`;l.ShadersStoreWGSL[r]=o;const u={name:r,shader:o};export{u as greasedLinePixelShaderWGSL};