import{p as ce,s as ue,r as xe,i as fe,a as A,t as Y}from"./props-D_CwaEcb.js";import{p as pe,b as R,a as he,d as W,f as G,n as ye,c as J}from"./index-client-a4XWVA08.js";import{E as q,P as de,i as me,M as $,e as Z,f as D,V as U,h as Q,c as j,d as T,j as ee,k as we,l as ge,m as ve,n as Ve,o as _e,p as be,F as ze,H as ke}from"./create-runtime-stories-BBH7VRGR.js";import"./iframe-CWYB0b8a.js";import"../sb-preview/runtime.js";import"./index-D-8MO0q_.js";import"./index-BHYIh-Xd.js";import"./_commonjsHelpers-Cpj98o6Y.js";function Ue(t,n,e=2){const o=n&&n.length,s=o?n[0]*e:t.length;let i=te(t,0,s,e,!0);const r=[];if(!i||i.next===i.prev)return r;let l,a,x;if(o&&(i=Pe(t,n,i,e)),t.length>80*e){l=1/0,a=1/0;let u=-1/0,h=-1/0;for(let f=e;f<s;f+=e){const p=t[f],c=t[f+1];p<l&&(l=p),c<a&&(a=c),p>u&&(u=p),c>h&&(h=c)}x=Math.max(u-l,h-a),x=x!==0?32767/x:0}return F(i,r,e,l,a,x,0),r}function te(t,n,e,o,s){let i;if(s===Be(t,n,e,o)>0)for(let r=n;r<e;r+=o)i=X(r/o|0,t[r],t[r+1],i);else for(let r=e-o;r>=n;r-=o)i=X(r/o|0,t[r],t[r+1],i);return i&&M(i,i.next)&&(S(i),i=i.next),i}function C(t,n){if(!t)return t;n||(n=t);let e=t,o;do if(o=!1,!e.steiner&&(M(e,e.next)||v(e.prev,e,e.next)===0)){if(S(e),e=n=e.prev,e===e.next)break;o=!0}else e=e.next;while(o||e!==n);return n}function F(t,n,e,o,s,i,r){if(!t)return;!r&&i&&Se(t,o,s,i);let l=t;for(;t.prev!==t.next;){const a=t.prev,x=t.next;if(i?Ce(t,o,s,i):Ee(t)){n.push(a.i,t.i,x.i),S(t),t=x.next,l=x.next;continue}if(t=x,t===l){r?r===1?(t=Ze(C(t),n),F(t,n,e,o,s,i,2)):r===2&&Me(t,n,e,o,s,i):F(C(t),n,e,o,s,i,1);break}}}function Ee(t){const n=t.prev,e=t,o=t.next;if(v(n,e,o)>=0)return!1;const s=n.x,i=e.x,r=o.x,l=n.y,a=e.y,x=o.y,u=Math.min(s,i,r),h=Math.min(l,a,x),f=Math.max(s,i,r),p=Math.max(l,a,x);let c=o.next;for(;c!==n;){if(c.x>=u&&c.x<=f&&c.y>=h&&c.y<=p&&P(s,l,i,a,r,x,c.x,c.y)&&v(c.prev,c,c.next)>=0)return!1;c=c.next}return!0}function Ce(t,n,e,o){const s=t.prev,i=t,r=t.next;if(v(s,i,r)>=0)return!1;const l=s.x,a=i.x,x=r.x,u=s.y,h=i.y,f=r.y,p=Math.min(l,a,x),c=Math.min(u,h,f),_=Math.max(l,a,x),b=Math.max(u,h,f),z=B(p,c,n,e,o),k=B(_,b,n,e,o);let y=t.prevZ,d=t.nextZ;for(;y&&y.z>=z&&d&&d.z<=k;){if(y.x>=p&&y.x<=_&&y.y>=c&&y.y<=b&&y!==s&&y!==r&&P(l,u,a,h,x,f,y.x,y.y)&&v(y.prev,y,y.next)>=0||(y=y.prevZ,d.x>=p&&d.x<=_&&d.y>=c&&d.y<=b&&d!==s&&d!==r&&P(l,u,a,h,x,f,d.x,d.y)&&v(d.prev,d,d.next)>=0))return!1;d=d.nextZ}for(;y&&y.z>=z;){if(y.x>=p&&y.x<=_&&y.y>=c&&y.y<=b&&y!==s&&y!==r&&P(l,u,a,h,x,f,y.x,y.y)&&v(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;d&&d.z<=k;){if(d.x>=p&&d.x<=_&&d.y>=c&&d.y<=b&&d!==s&&d!==r&&P(l,u,a,h,x,f,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function Ze(t,n){let e=t;do{const o=e.prev,s=e.next.next;!M(o,s)&&se(o,e,e.next,s)&&I(o,s)&&I(s,o)&&(n.push(o.i,e.i,s.i),S(e),S(e.next),e=t=s),e=e.next}while(e!==t);return C(e)}function Me(t,n,e,o,s,i){let r=t;do{let l=r.next.next;for(;l!==r.prev;){if(r.i!==l.i&&Oe(r,l)){let a=oe(r,l);r=C(r,r.next),a=C(a,a.next),F(r,n,e,o,s,i,0),F(a,n,e,o,s,i,0);return}l=l.next}r=r.next}while(r!==t)}function Pe(t,n,e,o){const s=[];for(let i=0,r=n.length;i<r;i++){const l=n[i]*o,a=i<r-1?n[i+1]*o:t.length,x=te(t,l,a,o,!1);x===x.next&&(x.steiner=!0),s.push(Le(x))}s.sort(De);for(let i=0;i<s.length;i++)e=je(s[i],e);return e}function De(t,n){let e=t.x-n.x;if(e===0&&(e=t.y-n.y,e===0)){const o=(t.next.y-t.y)/(t.next.x-t.x),s=(n.next.y-n.y)/(n.next.x-n.x);e=o-s}return e}function je(t,n){const e=Fe(t,n);if(!e)return n;const o=oe(e,t);return C(o,o.next),C(e,e.next)}function Fe(t,n){let e=n;const o=t.x,s=t.y;let i=-1/0,r;if(M(t,e))return e;do{if(M(t,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=o&&h>i&&(i=h,r=e.x<e.next.x?e:e.next,h===o))return r}e=e.next}while(e!==n);if(!r)return null;const l=r,a=r.x,x=r.y;let u=1/0;e=r;do{if(o>=e.x&&e.x>=a&&o!==e.x&&ne(s<x?o:i,s,a,x,s<x?i:o,s,e.x,e.y)){const h=Math.abs(s-e.y)/(o-e.x);I(e,t)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&Ie(r,e)))&&(r=e,u=h)}e=e.next}while(e!==l);return r}function Ie(t,n){return v(t.prev,t,n.prev)<0&&v(n.next,t,t.next)<0}function Se(t,n,e,o){let s=t;do s.z===0&&(s.z=B(s.x,s.y,n,e,o)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,$e(s)}function $e(t){let n,e=1;do{let o=t,s;t=null;let i=null;for(n=0;o;){n++;let r=o,l=0;for(let x=0;x<e&&(l++,r=r.nextZ,!!r);x++);let a=e;for(;l>0||a>0&&r;)l!==0&&(a===0||!r||o.z<=r.z)?(s=o,o=o.nextZ,l--):(s=r,r=r.nextZ,a--),i?i.nextZ=s:t=s,s.prevZ=i,i=s;o=r}i.nextZ=null,e*=2}while(n>1);return t}function B(t,n,e,o,s){return t=(t-e)*s|0,n=(n-o)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t|n<<1}function Le(t){let n=t,e=t;do(n.x<e.x||n.x===e.x&&n.y<e.y)&&(e=n),n=n.next;while(n!==t);return e}function ne(t,n,e,o,s,i,r,l){return(s-r)*(n-l)>=(t-r)*(i-l)&&(t-r)*(o-l)>=(e-r)*(n-l)&&(e-r)*(i-l)>=(s-r)*(o-l)}function P(t,n,e,o,s,i,r,l){return!(t===r&&n===l)&&ne(t,n,e,o,s,i,r,l)}function Oe(t,n){return t.next.i!==n.i&&t.prev.i!==n.i&&!Te(t,n)&&(I(t,n)&&I(n,t)&&He(t,n)&&(v(t.prev,t,n.prev)||v(t,n.prev,n))||M(t,n)&&v(t.prev,t,t.next)>0&&v(n.prev,n,n.next)>0)}function v(t,n,e){return(n.y-t.y)*(e.x-n.x)-(n.x-t.x)*(e.y-n.y)}function M(t,n){return t.x===n.x&&t.y===n.y}function se(t,n,e,o){const s=O(v(t,n,e)),i=O(v(t,n,o)),r=O(v(e,o,t)),l=O(v(e,o,n));return!!(s!==i&&r!==l||s===0&&L(t,e,n)||i===0&&L(t,o,n)||r===0&&L(e,t,o)||l===0&&L(e,n,o))}function L(t,n,e){return n.x<=Math.max(t.x,e.x)&&n.x>=Math.min(t.x,e.x)&&n.y<=Math.max(t.y,e.y)&&n.y>=Math.min(t.y,e.y)}function O(t){return t>0?1:t<0?-1:0}function Te(t,n){let e=t;do{if(e.i!==t.i&&e.next.i!==t.i&&e.i!==n.i&&e.next.i!==n.i&&se(e,e.next,t,n))return!0;e=e.next}while(e!==t);return!1}function I(t,n){return v(t.prev,t,t.next)<0?v(t,n,t.next)>=0&&v(t,t.prev,n)>=0:v(t,n,t.prev)<0||v(t,t.next,n)<0}function He(t,n){let e=t,o=!1;const s=(t.x+n.x)/2,i=(t.y+n.y)/2;do e.y>i!=e.next.y>i&&e.next.y!==e.y&&s<(e.next.x-e.x)*(i-e.y)/(e.next.y-e.y)+e.x&&(o=!o),e=e.next;while(e!==t);return o}function oe(t,n){const e=K(t.i,t.x,t.y),o=K(n.i,n.x,n.y),s=t.next,i=n.prev;return t.next=n,n.prev=t,e.next=s,s.prev=e,o.next=e,e.prev=o,i.next=o,o.prev=i,o}function X(t,n,e,o){const s=K(t,n,e);return o?(s.next=o.next,s.prev=o,o.next.prev=s,o.next=s):(s.prev=s,s.next=s),s}function S(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function K(t,n,e){return{i:t,x:n,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Be(t,n,e,o){let s=0;for(let i=n,r=e-o;i<e;i+=o)s+=(t[r]-t[i])*(t[i+1]+t[r+1]),r=i;return s}class Ke extends j{constructor(n,e){super(n.x,n.y),this.index=e}}class H{constructor(){this.elements=[]}add(n){const e=[];return n.forEach(o=>{const s=new Ke(o,this.elements.length);e.push(s),this.elements.push(s)}),e}computeBounds(){const n=new j(this.elements[0].x,this.elements[0].y),e=new j(this.elements[0].x,this.elements[0].y);return this.elements.forEach(o=>{o.x<n.x?n.x=o.x:o.x>e.x&&(e.x=o.x),o.y<n.y?n.y=o.y:o.y>e.y&&(e.y=o.y)}),{min:n,max:e,width:e.x-n.x,height:e.y-n.y}}}class Ne{_addToepoint(n){for(const e of n)this._epoints.push(e.x,e.y)}constructor(n,e,o,s=earcut){this._points=new H,this._outlinepoints=new H,this._holes=new Array,this._epoints=new Array,this._eholes=new Array,this.bjsEarcut=s,this._name=n,this._scene=o||q.LastCreatedScene;let i;e instanceof de?i=e.getPoints():i=e,this._addToepoint(i),this._points.add(i),this._outlinepoints.add(i),typeof this.bjsEarcut>"u"&&me.Warn("Earcut was not found, the polygon will not be built.")}addHole(n){this._points.add(n);const e=new H;return e.add(n),this._holes.push(e),this._eholes.push(this._epoints.length/2),this._addToepoint(n),this}build(n=!1,e=0,o=2){const s=new $(this._name,this._scene),i=this.buildVertexData(e,o);return s.setVerticesData(Z.PositionKind,i.positions,n),s.setVerticesData(Z.NormalKind,i.normals,n),s.setVerticesData(Z.UVKind,i.uvs,n),s.setIndices(i.indices),s}buildVertexData(n=0,e=2){const o=new D,s=[],i=[],r=[],l=this._points.computeBounds();this._points.elements.forEach(u=>{s.push(0,1,0),i.push(u.x,0,u.y),r.push((u.x-l.min.x)/l.width,(u.y-l.min.y)/l.height)});const a=[],x=this.bjsEarcut(this._epoints,this._eholes,2);for(let u=0;u<x.length;u++)a.push(x[u]);if(n>0){const u=i.length/3;this._points.elements.forEach(f=>{s.push(0,-1,0),i.push(f.x,-n,f.y),r.push(1-(f.x-l.min.x)/l.width,1-(f.y-l.min.y)/l.height)});const h=a.length;for(let f=0;f<h;f+=3){const p=a[f+0],c=a[f+1],_=a[f+2];a.push(_+u),a.push(c+u),a.push(p+u)}this._addSide(i,s,r,a,l,this._outlinepoints,n,!1,e),this._holes.forEach(f=>{this._addSide(i,s,r,a,l,f,n,!0,e)})}return o.indices=a,o.positions=i,o.normals=s,o.uvs=r,o}_addSide(n,e,o,s,i,r,l,a,x){let u=n.length/3,h=0;for(let f=0;f<r.elements.length;f++){const p=r.elements[f],c=r.elements[(f+1)%r.elements.length];n.push(p.x,0,p.y),n.push(p.x,-l,p.y),n.push(c.x,0,c.y),n.push(c.x,-l,c.y);const _=r.elements[(f+r.elements.length-1)%r.elements.length],b=r.elements[(f+2)%r.elements.length];let z=new U(-(c.y-p.y),0,c.x-p.x),k=new U(-(p.y-_.y),0,p.x-_.x),y=new U(-(b.y-c.y),0,b.x-c.x);a||(z=z.scale(-1),k=k.scale(-1),y=y.scale(-1));const d=z.normalizeToNew();let m=k.normalizeToNew(),w=y.normalizeToNew();const g=U.Dot(m,d);g>x?g<Q-1?m=new U(p.x,0,p.y).subtract(new U(c.x,0,c.y)).normalize():m=k.add(z).normalize():m=d;const E=U.Dot(y,z);E>x?E<Q-1?w=new U(c.x,0,c.y).subtract(new U(p.x,0,p.y)).normalize():w=y.add(z).normalize():w=d,o.push(h/i.width,0),o.push(h/i.width,1),h+=z.length(),o.push(h/i.width,0),o.push(h/i.width,1),e.push(m.x,m.y,m.z),e.push(m.x,m.y,m.z),e.push(w.x,w.y,w.z),e.push(w.x,w.y,w.z),a?(s.push(u),s.push(u+2),s.push(u+1),s.push(u+1),s.push(u+2),s.push(u+3)):(s.push(u),s.push(u+1),s.push(u+2),s.push(u+1),s.push(u+3),s.push(u+2)),u+=4}}}function ie(t,n,e,o,s,i,r){const l=e||new Array(3),a=o,x=[],u=r||!1;for(let V=0;V<3;V++)l[V]===void 0&&(l[V]=new T(0,0,1,1)),a&&a[V]===void 0&&(a[V]=new ee(1,1,1,1));const h=t.getVerticesData(Z.PositionKind),f=t.getVerticesData(Z.NormalKind),p=t.getVerticesData(Z.UVKind),c=t.getIndices(),_=h.length/9;let b=0,z=0,k=0,y=0,d=0;const m=[0];if(u)for(let V=_;V<h.length/3;V+=4)z=h[3*(V+2)]-h[3*V],k=h[3*(V+2)+2]-h[3*V+2],y=Math.sqrt(z*z+k*k),d+=y,m.push(d);let w=0,g=0;for(let V=0;V<f.length;V+=3)Math.abs(f[V+1])<.001&&(g=1),Math.abs(f[V+1]-1)<.001&&(g=0),Math.abs(f[V+1]+1)<.001&&(g=2),w=V/3,g===1?(b=w-_,b%4<1.5?u?p[2*w]=l[g].x+(l[g].z-l[g].x)*m[Math.floor(b/4)]/d:p[2*w]=l[g].x:u?p[2*w]=l[g].x+(l[g].z-l[g].x)*m[Math.floor(b/4)+1]/d:p[2*w]=l[g].z,b%2===0?p[2*w+1]=l[g].w:p[2*w+1]=l[g].y):(p[2*w]=(1-p[2*w])*l[g].x+p[2*w]*l[g].z,p[2*w+1]=(1-p[2*w+1])*l[g].y+p[2*w+1]*l[g].w),a&&x.push(a[g].r,a[g].g,a[g].b,a[g].a);D._ComputeSides(n,h,c,f,p,s,i);const E=new D;if(E.indices=c,E.positions=h,E.normals=f,E.uvs=p,a){const V=n===D.DOUBLESIDE?x.concat(x):x;E.colors=V}return E}function re(t,n,e=null,o=earcut){n.sideOrientation=$._GetDefaultSideOrientation(n.sideOrientation);const s=n.shape,i=n.holes||[],r=n.depth||0,l=n.smoothingThreshold||2,a=[];let x=[];for(let c=0;c<s.length;c++)a[c]=new j(s[c].x,s[c].z);a[0].equalsWithEpsilon(a[a.length-1],1e-8)&&a.pop();const h=new Ne(t,a,e||q.LastCreatedScene,o);for(let c=0;c<i.length;c++){x=[];for(let _=0;_<i[c].length;_++)x.push(new j(i[c][_].x,i[c][_].z));h.addHole(x)}const f=h.build(!1,r,l);return f._originalBuilderSideOrientation=n.sideOrientation,ie(f,n.sideOrientation,n.faceUV,n.faceColors,n.frontUVs,n.backUVs,n.wrap).applyToMesh(f,n.updatable),f}function N(t,n,e=null,o=earcut){return re(t,n,e,o)}D.CreatePolygon=ie;$.CreatePolygon=(t,n,e,o,s,i,r=earcut)=>re(t,{shape:n,holes:o,updatable:s,sideOrientation:i},e,r);$.ExtrudePolygon=(t,n,e,o,s,i,r,l=earcut)=>N(t,{shape:n,holes:s,depth:e,updatable:i,sideOrientation:r},o,l);function le(t,n){let e=ce(n,"mesh",15),o=xe(n,["$$slots","$$events","$$legacy","mesh"]);we(t,ue({createMeshFunction:N},()=>o,{get mesh(){return e()},set mesh(s){e(s)}}))}N.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"options",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"object",text:"{ backUVs?: Vector4 | undefined; depth?: number | undefined; faceColors?: Color4[] | undefined; faceUV?: Vector4[] | undefined; frontUVs?: Vector4 | undefined; ... 4 more ...; wrap?: boolean | undefined; }"},static:!1,readonly:!1},{name:"scene",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Scene"},static:!1,readonly:!1},{name:"earcutInjection",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"mesh",visibility:"public",description:"if you want to use a mesh api, bind it",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"Mesh"},static:!1,readonly:!1,defaultValue:"..."},{name:"position",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"rotation",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1},{name:"scaling",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"{ x: number; y: number; z: number; }"},static:!1,readonly:!1}],name:"ExtrudePolygon.svelte"};const Ae={title:"mesh/ExtrudePolygon",tags:["autodocs"],component:le},{Story:Re}=ve();var We=Y("<!> <!> <!>",1),Ge=Y(`<!> <h2>Caution!</h2> <p>The <code>earcutInjection</code> prop is required for the 'https://www.npmjs.com/package/earcut'
      library to work.</p>`,1);function ae(t,n){pe(n,!1),fe();var e=W(()=>({options:{backUVs:{x:0,y:0,z:1,w:1},faceColors:[{r:1,g:1,b:1,a:1}],faceUV:[{x:0,y:0,z:1,w:1}],frontUVs:{x:0,y:0,z:1,w:1},shape:[{x:4,y:0,z:-4},{x:2,y:0,z:0},{x:5,y:0,z:2},{x:1,y:0,z:2},{x:-5,y:0,z:5},{x:-3,y:0,z:1},{x:-4,y:0,z:-4},{x:-2,y:0,z:-3},{x:2,y:0,z:-3}],holes:[[{x:1,y:0,z:-1},{x:1.5,y:0,z:0},{x:1.4,y:0,z:1},{x:.5,y:0,z:1.5}],[{x:0,y:0,z:-2},{x:.5,y:0,z:-1},{x:.4,y:0,z:0},{x:-1.5,y:0,z:.5}]],depth:2,sideOrientation:$.DOUBLESIDE,updatable:void 0,wrap:void 0},earcutInjection:Ue,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scaling:{x:1,y:1,z:1}}));Re(t,{name:"Docs",get args(){return R(e)},children:(s,i=ye)=>{var r=Ge(),l=G(r);Ve(l,{style:"width: 100%;",children:(a,x)=>{_e(a,{children:(u,h)=>{be(u,{children:(f,p)=>{var c=We(),_=G(c);ze(_,{position:new U(0,5,-10)});var b=J(_,2);ke(b,{direction:new U(0,1,0),intensity:.7});var z=J(b,2),k=W(()=>{var y,d;return{...i().options,shape:i().options.shape.map(m=>new U(m.x,m.y,m.z)),holes:i().options.holes.map(m=>m.map(w=>new U(w.x,w.y,w.z))),faceUV:(y=i().options.faceUV)==null?void 0:y.map(m=>new T(m.x,m.y,m.z,m.w)),frontUVs:i().options.frontUVs?new T(i().options.frontUVs.x,i().options.frontUVs.y,i().options.frontUVs.z,i().options.frontUVs.w):void 0,backUVs:i().options.backUVs?new T(i().options.backUVs.x,i().options.backUVs.y,i().options.backUVs.z,i().options.backUVs.w):void 0,faceColors:(d=i().options.faceColors)==null?void 0:d.map(m=>new ee(m.r,m.g,m.b,m.a))}});le(z,{get options(){return R(k)},get earcutInjection(){return i().earcutInjection},get position(){return i().position},get rotation(){return i().rotation},get scaling(){return i().scaling}}),A(f,c)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),A(s,r)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Canvas style="width: 100%;">
  <Engine>
    <Scene>
      <FreeCamera position={new Vector3(0, 5, -10)} />
      <HemisphericLight direction={new Vector3(0, 1, 0)} intensity={0.7} />
      <ExtrudePolygon
        options={{
          ...args.options!,
          shape: args.options!.shape.map((v) => new Vector3(v.x, v.y, v.z)),
          holes: args.options!.holes.map((hole) => hole.map((v) => new Vector3(v.x, v.y, v.z))),
          faceUV: args.options!.faceUV?.map((v) => new Vector4(v.x, v.y, v.z, v.w)),
          frontUVs: args.options!.frontUVs
            ? new Vector4(
                args.options!.frontUVs.x,
                args.options!.frontUVs.y,
                args.options!.frontUVs.z,
                args.options!.frontUVs.w
              )
            : undefined,
          backUVs: args.options!.backUVs
            ? new Vector4(
                args.options!.backUVs.x,
                args.options!.backUVs.y,
                args.options!.backUVs.z,
                args.options!.backUVs.w
              )
            : undefined,
          faceColors: args.options!.faceColors?.map((v) => new Color4(v.r, v.g, v.b, v.a))
        }}
        earcutInjection={args.earcutInjection}
        position={args.position}
        rotation={args.rotation}
        scaling={args.scaling}
      />
    </Scene>
  </Engine>
</Canvas>
<h2>Caution!</h2>
<p>
  The <code>earcutInjection</code> prop is required for the 'https://www.npmjs.com/package/earcut'
  library to work.
</p>`}}}),he()}ae.__docgen={version:3,name:"ExtrudePolygon.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Je=ge(ae,Ae),ot=["Docs"],it=Je.Docs;export{it as Docs,ot as __namedExportsOrder,Ae as default};