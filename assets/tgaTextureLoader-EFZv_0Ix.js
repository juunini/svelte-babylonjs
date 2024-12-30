import{b as A}from"./create-runtime-stories-C5aqBmYi.js";import"./props-BRt4u2O_.js";import"./index-client-atPt8Ppi.js";import"./iframe-BEUO-_wG.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U=1,d=2,N=3,L=9,O=10,Y=11,k=48,z=4,P=0,B=1,C=2,M=3;function G(o){let n=0;return{id_length:o[n++],colormap_type:o[n++],image_type:o[n++],colormap_index:o[n++]|o[n++]<<8,colormap_length:o[n++]|o[n++]<<8,colormap_size:o[n++],origin:[o[n++]|o[n++]<<8,o[n++]|o[n++]<<8],width:o[n++]|o[n++]<<8,height:o[n++]|o[n++]<<8,pixel_size:o[n++],flags:o[n++]}}function R(o,n){if(n.length<19){A.Error("Unable to load TGA file - Not enough data to contain header");return}let a=18;const s=G(n);if(s.id_length+a>n.length){A.Error("Unable to load TGA file - Not enough data");return}a+=s.id_length;let _=!1,f=!1,m=!1;switch(s.image_type){case L:_=!0;case U:f=!0;break;case O:_=!0;case d:break;case Y:_=!0;case N:m=!0;break}let u;const p=s.pixel_size>>3,l=s.width*s.height*p;let r;if(f&&(r=n.subarray(a,a+=s.colormap_length*(s.colormap_size>>3))),_){u=new Uint8Array(l);let I,y,w,b=0;const T=new Uint8Array(p);for(;a<l&&b<l;)if(I=n[a++],y=(I&127)+1,I&128){for(w=0;w<p;++w)T[w]=n[a++];for(w=0;w<y;++w)u.set(T,b+w*p);b+=p*y}else{for(y*=p,w=0;w<y;++w)u[b+w]=n[a++];b+=y}}else u=n.subarray(a,a+=f?s.width*s.height:l);let g,c,i,t,e,h;switch((s.flags&k)>>z){default:case C:g=0,i=1,h=s.width,c=0,t=1,e=s.height;break;case P:g=0,i=1,h=s.width,c=s.height-1,t=-1,e=-1;break;case M:g=s.width-1,i=-1,h=-1,c=0,t=1,e=s.height;break;case B:g=s.width-1,i=-1,h=-1,c=s.height-1,t=-1,e=-1;break}const x="_getImageData"+(m?"Grey":"")+s.pixel_size+"bits",D=j[x](s,r,u,c,t,e,g,i,h);o.getEngine()._uploadDataToTextureDirectly(o,D)}function H(o,n,a,s,_,f,m,u,p){const l=a,r=n,g=o.width,c=o.height;let i,t=0,e,h;const x=new Uint8Array(g*c*4);for(h=s;h!==f;h+=_)for(e=m;e!==p;e+=u,t++)i=l[t],x[(e+g*h)*4+3]=255,x[(e+g*h)*4+2]=r[i*3+0],x[(e+g*h)*4+1]=r[i*3+1],x[(e+g*h)*4+0]=r[i*3+2];return x}function S(o,n,a,s,_,f,m,u,p){const l=a,r=o.width,g=o.height;let c,i=0,t,e;const h=new Uint8Array(r*g*4);for(e=s;e!==f;e+=_)for(t=m;t!==p;t+=u,i+=2){c=l[i+0]+(l[i+1]<<8);const x=((c&31744)>>10)*255/31|0,D=((c&992)>>5)*255/31|0,E=(c&31)*255/31|0;h[(t+r*e)*4+0]=x,h[(t+r*e)*4+1]=D,h[(t+r*e)*4+2]=E,h[(t+r*e)*4+3]=c&32768?0:255}return h}function X(o,n,a,s,_,f,m,u,p){const l=a,r=o.width,g=o.height;let c=0,i,t;const e=new Uint8Array(r*g*4);for(t=s;t!==f;t+=_)for(i=m;i!==p;i+=u,c+=3)e[(i+r*t)*4+3]=255,e[(i+r*t)*4+2]=l[c+0],e[(i+r*t)*4+1]=l[c+1],e[(i+r*t)*4+0]=l[c+2];return e}function v(o,n,a,s,_,f,m,u,p){const l=a,r=o.width,g=o.height;let c=0,i,t;const e=new Uint8Array(r*g*4);for(t=s;t!==f;t+=_)for(i=m;i!==p;i+=u,c+=4)e[(i+r*t)*4+2]=l[c+0],e[(i+r*t)*4+1]=l[c+1],e[(i+r*t)*4+0]=l[c+2],e[(i+r*t)*4+3]=l[c+3];return e}function F(o,n,a,s,_,f,m,u,p){const l=a,r=o.width,g=o.height;let c,i=0,t,e;const h=new Uint8Array(r*g*4);for(e=s;e!==f;e+=_)for(t=m;t!==p;t+=u,i++)c=l[i],h[(t+r*e)*4+0]=c,h[(t+r*e)*4+1]=c,h[(t+r*e)*4+2]=c,h[(t+r*e)*4+3]=255;return h}function K(o,n,a,s,_,f,m,u,p){const l=a,r=o.width,g=o.height;let c=0,i,t;const e=new Uint8Array(r*g*4);for(t=s;t!==f;t+=_)for(i=m;i!==p;i+=u,c+=2)e[(i+r*t)*4+0]=l[c+0],e[(i+r*t)*4+1]=l[c+0],e[(i+r*t)*4+2]=l[c+0],e[(i+r*t)*4+3]=l[c+1];return e}const j={GetTGAHeader:G,UploadContent:R,_getImageData8bits:H,_getImageData16bits:S,_getImageData24bits:X,_getImageData32bits:v,_getImageDataGrey8bits:F,_getImageDataGrey16bits:K};class et{constructor(){this.supportCascades=!1}loadCubeData(){throw".env not supported in Cube."}loadData(n,a,s){const _=new Uint8Array(n.buffer,n.byteOffset,n.byteLength),f=G(_);s(f.width,f.height,a.generateMipMaps,!1,()=>{R(a,_)})}}export{et as _TGATextureLoader};
