import{a as e}from"./create-runtime-stories-W9W7bo9k.js";const a="mainUVVaryingDeclaration",n=`#ifdef MAINUV{X}
varying vMainUV{X}: vec2f;
#endif
`;e.IncludesShadersStoreWGSL[a]=n;const r="logDepthDeclaration",t=`#ifdef LOGARITHMICDEPTH
uniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;
#endif
`;e.IncludesShadersStoreWGSL[r]=t;