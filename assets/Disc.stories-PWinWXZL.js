import{p as H,s as L,r as I,i as M,a as j,t as N}from"./props-CDwtXEPn.js";import{p as F,a as R,f as A,g as X,n as B,s as D,d as G}from"./index-client-0IVJ1HVs.js";import{v as y,M as k,k as Y,c as q,d as J,C as K,E as Q,S as W,V as C,H as Z,m as T}from"./create-runtime-stories-D2yFG5at.js";import{F as ee}from"./FreeCamera-B8cQlsl3.js";import"./iframe-2opK77xr.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function O(n){const t=[],i=[],s=[],e=[],r=n.radius||.5,p=n.tessellation||64,l=n.arc&&(n.arc<=0||n.arc>1)?1:n.arc||1,x=n.sideOrientation===0?0:n.sideOrientation||y.DEFAULTSIDE;t.push(0,0,0),e.push(.5,.5);const u=Math.PI*2*l,V=l===1?u/p:u/(p-1);let c=0;for(let o=0;o<p;o++){const b=Math.cos(c),d=Math.sin(c),m=(b+1)/2,h=(1-d)/2;t.push(r*b,r*d,0),e.push(m,h),c+=V}l===1&&(t.push(t[3],t[4],t[5]),e.push(e[2],e[3]));const f=t.length/3;for(let o=1;o<f-1;o++)i.push(o+1,0,o);y.ComputeNormals(t,i,s),y._ComputeSides(x,t,i,s,e,n.frontUVs,n.backUVs);const a=new y;return a.indices=i,a.positions=t,a.normals=s,a.uvs=e,a}function $(n,t={},i=null){const s=new k(n,i);return t.sideOrientation=k._GetDefaultSideOrientation(t.sideOrientation),s._originalBuilderSideOrientation=t.sideOrientation,O(t).applyToMesh(s,t.updatable),s}y.CreateDisc=O;k.CreateDisc=(n,t,i,s=null,e,r)=>$(n,{radius:t,tessellation:i,sideOrientation:r,updatable:e},s);function v(n,t){let i=H(t,"mesh",15),s=I(t,["$$slots","$$events","$$legacy","mesh"]);Y(n,L({createMeshFunction:$},()=>s,{get mesh(){return i()},set mesh(e){i(e)}}))}v.__docgen={data:[{name:"options",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ arc?: number | undefined; backUVs?: Vector4 | undefined; frontUVs?: Vector4 | undefined; radius?: number | undefined; sideOrientation?: number | undefined; tessellation?: number | undefined; updatable?: boolean | undefined; }"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"mesh",visibility:"public",description:"if you want to use a mesh api, bind it",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Mesh"},static:!1,readonly:!1,defaultValue:"..."},{name:"physics",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"physicsShape",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"number",value:0,text:"PhysicsShapeType.SPHERE"},{kind:"const",type:"number",value:1,text:"PhysicsShapeType.CAPSULE"},{kind:"const",type:"number",value:2,text:"PhysicsShapeType.CYLINDER"},{kind:"const",type:"number",value:3,text:"PhysicsShapeType.BOX"},{kind:"const",type:"number",value:4,text:"PhysicsShapeType.CONVEX_HULL"},{kind:"const",type:"number",value:5,text:"PhysicsShapeType.CONTAINER"},{kind:"const",type:"number",value:6,text:"PhysicsShapeType.MESH"},{kind:"const",type:"number",value:7,text:"PhysicsShapeType.HEIGHTFIELD"},{kind:"type",type:"object",text:"PhysicsShape"}],text:"PhysicsShapeType.SPHERE | PhysicsShapeType.CAPSULE | PhysicsShapeType.CYLINDER | PhysicsShapeType.BOX | PhysicsShapeType.CONVEX_HULL | PhysicsShapeType.CONTAINER | PhysicsShapeType.MESH | PhysicsShapeType.HEIGHTFIELD | PhysicsShape"},static:!1,readonly:!1},{name:"physicsOptions",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"PhysicsAggregateParameters"},static:!1,readonly:!1},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"rotation",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"scaling",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"force",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"impulse",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"onCollision",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(eventData: IPhysicsCollisionEvent, eventState: EventState) => void"},static:!1,readonly:!1},{name:"onCollisionOnce",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(eventData: IPhysicsCollisionEvent, eventState: EventState) => void"},static:!1,readonly:!1}],name:"Disc.svelte"};const te={title:"mesh/Disc",tags:["autodocs"],component:v},{Story:ne}=J();var se=N("<!> <!> <!>",1);function z(n,t){F(t,!1),M(),ne(n,{name:"Docs",args:{options:{arc:void 0,backUVs:{x:0,y:0,z:1,w:1},frontUVs:{x:0,y:0,z:1,w:1},radius:void 0,sideOrientation:void 0,tessellation:void 0,updatable:void 0},position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scaling:{x:1,y:1,z:1}},children:(s,e=B)=>{K(s,{style:"width: 100%;",children:(r,p)=>{Q(r,{children:(l,x)=>{W(l,{children:(u,V)=>{var c=se(),f=A(c);ee(f,{position:new C(0,5,-10)});var a=D(f,2);Z(a,{direction:new C(0,1,0),intensity:.7});var o=D(a,2),b=G(()=>{var d,m,h,S,w,U,g,P,E,_;return{...e().options,frontUVs:(d=e().options)!=null&&d.frontUVs?new T((m=e().options)==null?void 0:m.frontUVs.x,(h=e().options)==null?void 0:h.frontUVs.y,(S=e().options)==null?void 0:S.frontUVs.z,(w=e().options)==null?void 0:w.frontUVs.w):void 0,backUVs:(U=e().options)!=null&&U.backUVs?new T((g=e().options)==null?void 0:g.backUVs.x,(P=e().options)==null?void 0:P.backUVs.y,(E=e().options)==null?void 0:E.backUVs.z,(_=e().options)==null?void 0:_.backUVs.w):void 0}});v(o,{get options(){return X(b)},get position(){return e().position},get rotation(){return e().rotation},get scaling(){return e().scaling}}),j(u,c)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <FreeCamera position={new Vector3(0, 5, -10)} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <Disc
        options={{
          ...args.options,
          frontUVs: args.options?.frontUVs
            ? new Vector4(
                args.options?.frontUVs.x,
                args.options?.frontUVs.y,
                args.options?.frontUVs.z,
                args.options?.frontUVs.w
              )
            : undefined,
          backUVs: args.options?.backUVs
            ? new Vector4(
                args.options?.backUVs.x,
                args.options?.backUVs.y,
                args.options?.backUVs.z,
                args.options?.backUVs.w
              )
            : undefined
        }}
        position={args.position}
        rotation={args.rotation}
        scaling={args.scaling}
      />
    </Scene>
  </Engine>
</Canvas>`}}}),R()}z.__docgen={version:3,name:"Disc.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const ie=q(z,te),fe=["Docs"],be=ie.Docs;export{be as Docs,fe as __namedExportsOrder,te as default};
