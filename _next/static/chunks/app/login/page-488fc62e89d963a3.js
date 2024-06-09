(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{7618:function(e,t,r){Promise.resolve().then(r.bind(r,9584))},9584:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var n=r(2984),s=r(6513);let a=()=>(0,n.jsx)("div",{role:"separator",className:"relative isolate text-center after:absolute after:left-0 after:right-0 after:top-1/2 after:-z-10 after:h-px after:bg-input",children:(0,n.jsx)("span",{className:"bg-background px-4 text-muted-foreground",children:"or"})});var i=r(4986),o=r(3807),l=r(7013),d=r(5593),c=r(1305),u=r(2406),f=r(850);/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let m=(0,f.Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),p=(0,f.Z)("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);var x=r(4749);let h="w-5 h-5 text-inherit opacity-60 shrink-0 text-sm",g=i.forwardRef((e,t)=>{let{className:r,type:s="password",...a}=e,[o,l]=i.useState(!1);return(0,n.jsxs)("div",{className:(0,x.cn)("flex h-10 w-full gap-1 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm",!o&&"font-[Verdana] tracking-widest",r),children:[(0,n.jsx)("input",{ref:t,type:o?"text":s,className:"grow border-none outline-none placeholder-shown:font-sans",...a}),(0,n.jsx)("button",{type:"button",onClick:()=>l(!o),children:o?(0,n.jsx)(m,{className:h}):(0,n.jsx)(p,{className:h})})]})});g.displayName="PasswordInput";var b=r(4219),v=r(2410),y=r(9399);let j=o.z.object({email:o.z.string({message:"Please enter a valid email address"}).email(),password:o.z.string({message:"Please enter a password"}).min(1)}),w={email:"",password:""},N={email:"test@email.com",password:"password"},k=e=>{let{loadDummyData:t}=e,[r,s]=(0,i.useState)(!1),a=(0,l.cI)({resolver:(0,d.F)(j),defaultValues:{...t?N:w}}),o=async e=>{s(!0);try{await (0,v.fZ)(e.email,e.password)}catch(e){console.error(e)}finally{s(!1)}};return(0,n.jsx)(c.l0,{...a,children:(0,n.jsxs)("form",{onSubmit:a.handleSubmit(o),className:"space-y-8",children:[(0,n.jsx)(c.Wi,{control:a.control,name:"email",render:e=>{let{field:t}=e;return(0,n.jsxs)(c.xJ,{children:[(0,n.jsx)(c.lX,{children:"Email"}),(0,n.jsx)(c.NI,{children:(0,n.jsx)(u.I,{placeholder:"example@email.com",type:"email",...t})}),(0,n.jsx)(c.zG,{})]})}}),(0,n.jsx)(c.Wi,{control:a.control,name:"password",render:e=>{let{field:t}=e;return(0,n.jsxs)(c.xJ,{children:[(0,n.jsx)(c.lX,{children:"Password"}),(0,n.jsx)(c.NI,{children:(0,n.jsx)(g,{placeholder:"your account password",...t})}),(0,n.jsx)(c.zG,{})]})}}),(0,n.jsxs)(b.z,{type:"submit",size:"sm",className:"w-full",disabled:r,children:[r&&(0,n.jsx)(y.Z,{className:"animate-spin mr-2 w-4 h-4"}),"Submit"]})]})})},I=e=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:[(0,n.jsx)("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),(0,n.jsx)("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),(0,n.jsx)("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),(0,n.jsx)("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"}),(0,n.jsx)("path",{d:"M1 1h22v22H1z",fill:"none"})]}),z=()=>(0,n.jsxs)(b.z,{variant:"outline",className:"w-full gap-1.5",size:"sm",onClick:v.nS,children:[(0,n.jsx)(I,{height:16,width:16}),"Login with Google"]});var F=()=>{let e=(0,s.useSearchParams)().get("d");return(0,n.jsxs)("main",{className:"container max-w-md space-y-6 my-8",children:[(0,n.jsx)("h1",{className:"text-xl text-center font-medium tracking-tight text-gray-900 dark:text-gray-100",children:"Sign in to your account"}),(0,n.jsx)(k,{loadDummyData:!!e},e),(0,n.jsx)(a,{}),(0,n.jsx)(z,{})]})}},4219:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return d}});var n=r(2984),s=r(4986),a=r(24),i=r(6780),o=r(4749);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:s,size:i,className:r})),ref:t,...c})});d.displayName="Button"},1305:function(e,t,r){"use strict";r.d(t,{l0:function(){return u},NI:function(){return b},Wi:function(){return m},xJ:function(){return h},lX:function(){return g},zG:function(){return v}});var n=r(2984),s=r(4986),a=r(24),i=r(7013),o=r(4749),l=r(2789);let d=(0,r(6780).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(l.f,{ref:t,className:(0,o.cn)(d(),r),...s})});c.displayName=l.f.displayName;let u=i.RV,f=s.createContext({}),m=e=>{let{...t}=e;return(0,n.jsx)(f.Provider,{value:{name:t.name},children:(0,n.jsx)(i.Qr,{...t})})},p=()=>{let e=s.useContext(f),t=s.useContext(x),{getFieldState:r,formState:n}=(0,i.Gc)(),a=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...a}},x=s.createContext({}),h=s.forwardRef((e,t)=>{let{className:r,...a}=e,i=s.useId();return(0,n.jsx)(x.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",r),...a})})});h.displayName="FormItem";let g=s.forwardRef((e,t)=>{let{className:r,...s}=e,{error:a,formItemId:i}=p();return(0,n.jsx)(c,{ref:t,className:(0,o.cn)(a&&"text-destructive",r),htmlFor:i,...s})});g.displayName="FormLabel";let b=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:i,formDescriptionId:o,formMessageId:l}=p();return(0,n.jsx)(a.g7,{ref:t,id:i,"aria-describedby":s?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!s,...r})});b.displayName="FormControl",s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:a}=p();return(0,n.jsx)("p",{ref:t,id:a,className:(0,o.cn)("text-sm text-muted-foreground",r),...s})}).displayName="FormDescription";let v=s.forwardRef((e,t)=>{let{className:r,children:s,...a}=e,{error:i,formMessageId:l}=p(),d=i?String(null==i?void 0:i.message):s;return d?(0,n.jsx)("p",{ref:t,id:l,className:(0,o.cn)("text-sm font-medium text-destructive",r),...a,children:d}):null});v.displayName="FormMessage"},2406:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(2984),s=r(4986),a=r(4749);let i=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},2410:function(e,t,r){"use strict";r.d(t,{fZ:function(){return o},nS:function(){return a},ni:function(){return i}});var n=r(2394),s=r(6402);let a=()=>{let e=new n.hJ;(0,n.rh)(s.I,e)},i=()=>{(0,n.w7)(s.I)},o=(e,t)=>(0,n.e5)(s.I,e,t)},6402:function(e,t,r){"use strict";r.d(t,{I:function(){return o},db:function(){return l}});var n=r(2829),s=r(2394),a=r(976);let i=(0,n.ZF)({apiKey:"AIzaSyCj05Ks7FcjSPi9fSuCx6j9EZQMMZvhi4Q",authDomain:"simple-easy-todo.firebaseapp.com",projectId:"simple-easy-todo",storageBucket:"simple-easy-todo.appspot.com",messagingSenderId:"445045831618",appId:"1:445045831618:web:19607ab032c2873c8b885b",measurementId:"G-TWD4F77YWK"}),o=(0,s.v0)(i),l=(0,a.ad)(i)},4749:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(3597),s=r(2961);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}}},function(e){e.O(0,[12,231,22,969,645,563,744],function(){return e(e.s=7618)}),_N_E=e.O()}]);