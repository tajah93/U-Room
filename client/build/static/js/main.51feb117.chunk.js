(this["webpackJsonpu-room"]=this["webpackJsonpu-room"]||[]).push([[0],{104:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},131:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(1),r=a(28),s=a.n(r),i=(a(77),a(78),a(6)),o=(a(104),a(12));var l=function(){return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)(i.b,{className:"icons",color:"white",idname:"gradIcon",children:Object(c.jsx)(i.k,{icon:"graduation-cap",className:"logo"})})}),Object(c.jsx)(o.b,{to:"/profile",children:Object(c.jsx)(i.b,{color:"white",className:"icons",children:Object(c.jsx)(i.k,{far:!0,icon:"user"})})}),Object(c.jsx)(o.b,{to:"/message",children:Object(c.jsx)(i.b,{color:"white",className:"icons",children:Object(c.jsx)(i.k,{far:!0,icon:"comments"})})})]})},j=a(8),d=a(30),u=a(18),b=a(66),m=a.n(b),h=a(35),O=a.n(h),x=function(){return O.a.get("/api/roommies")},f=function(e){return O.a.get("/api/roommies/"+e)};a(124),a(125);var p=function(){return Object(c.jsx)("div",{className:"MatchBtns",children:Object(c.jsx)(i.b,{color:"rgba(0, 0, 0, 0.822)",className:"icons",children:Object(c.jsx)(i.k,{far:!0,icon:"heart"})})})};var g=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];function s(e){var t=e.target,a=t.key,c=t.style;r((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},a,c))}))}return Object(n.useEffect)((function(){x().then((function(e){console.log(e),r(e.data)}))}),[]),console.log(a),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"title",children:"U-Room"}),Object(c.jsx)("div",{className:"cardContainer",children:a.map((function(e){var t;return Object(c.jsx)(i.q,{children:Object(c.jsx)(i.i,{className:"profCard",style:{maxWidth:"40rem"},children:Object(c.jsx)(m.a,{className:"rummage",children:Object(c.jsxs)(i.c,{reverse:!0,onChange:s,preventSwipe:["up","down"],onSwipe:["right"],children:[Object(c.jsx)(i.f,(t={cascade:!0,className:"img",style:{height:"20rem"}},Object(j.a)(t,"className","roommieCard"),Object(j.a)(t,"onChange",s),Object(j.a)(t,"src",e.url),t)),Object(c.jsxs)(i.d,{cascade:!0,className:"text-center",children:[Object(c.jsx)(i.h,{children:e.name}),Object(c.jsx)("h5",{className:"indigo-text",children:Object(c.jsx)("strong",{children:e.major})}),Object(c.jsx)(i.g,{children:e.description})]})]},e._id)})})})}))}),Object(c.jsx)(o.b,{to:"/roommies/"+a._id,children:Object(c.jsx)(p,{})})]})},v=(a(126),a(127),a(9));var w=function(e){var t=e.message,a=Object(n.useState)({}),r=Object(u.a)(a,2),s=r[0],o=r[1],l=Object(v.f)().id;return Object(n.useEffect)((function(){f(l).then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"thread",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(i.i,{mb:"1",md:"1",className:"mb-3 text-center",children:Object(c.jsx)("img",{src:s.url,className:"rounded-circle",alt:s.name,"data-holder-rendered":"true"})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"convo_needs",children:[Object(c.jsx)("h3",{className:"name",children:s.name}),Object(c.jsx)("p",{className:"message",children:t})]})})]})})};var N=function(){return Object(c.jsxs)("div",{className:"messages",children:[Object(c.jsx)(w,{name:"Mark Zee",message:"Hey!",url:"https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Fb70c5e96-58b7-11ea-abe5-8e03987b7b20?source=google-amp&fit=scale-down&width=500"}),Object(c.jsx)(w,{name:"Patrick Bateman",message:"Hello, let's compare business cards..",url:"https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg"})]})},k=(a(128),a(19)),y=a.n(k),E=a(25),C=a(34),F=(a(129),a(137),a(136),{apiKey:"AIzaSyAtVu0kYqPxytXxBkzt_JUZGvRQpe_FM7k",authDomain:"u-room.firebaseapp.com",projectId:"u-room",storageBucket:"u-room.appspot.com",messagingSenderId:"567130453370",appId:"1:567130453370:web:8bf8505d7ddac89390d2c3",measurementId:"G-37CM4RX79C"}),S=function(){var e=Object(E.a)(y.a.mark((function e(t,a){var c,n,r,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=U.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=16;break}return n=t.email,r=t.name,s=t.url,e.prev=8,e.next=11,c.set(Object(d.a)({name:r,email:n,url:s},a));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:return e.abrupt("return",P(t.uid));case 17:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t,a){return e.apply(this,arguments)}}(),P=function(){var e=Object(E.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,U.doc("users/".concat(t)).get();case 5:return a=e.sent,e.abrupt("return",Object(d.a)({uid:t},a.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();C.a.initializeApp(F),C.a.analytics();var A=C.a.auth(),U=C.a.firestore(),I=function(){var e,t,a,r=Object(n.useState)(""),s=Object(u.a)(r,2),l=s[0],d=s[1],b=Object(n.useState)(""),m=Object(u.a)(b,2),h=m[0],O=m[1],x=Object(n.useState)(null),f=Object(u.a)(x,2),p=(f[0],f[1]),g=function(e){var t=e.currentTarget,a=t.name,c=t.value;"userEmail"===a?d(c):"userPassword"===a&&O(c)};return Object(c.jsx)("div",{children:Object(c.jsx)(i.j,{children:Object(c.jsx)(i.q,{children:Object(c.jsx)(i.i,{md:"6",children:Object(c.jsx)(i.c,{className:"signInCard",children:Object(c.jsxs)(i.d,{children:[Object(c.jsx)(i.e,(e={className:"cardHeader"},Object(j.a)(e,"className","form-header bg-dark rounded"),Object(j.a)(e,"color","#263238"),Object(j.a)(e,"children",Object(c.jsxs)("h3",{className:"my-3",children:[Object(c.jsx)(i.k,{className:"log",icon:"lock"})," Login:"]})),e)),Object(c.jsx)("label",(t={htmlFor:"defaultFormEmailEx",className:"grey-text font-weight-light"},Object(j.a)(t,"className","userEmail"),Object(j.a)(t,"children","Email"),t)),Object(c.jsx)("input",{type:"email",id:"defaultFormEmailEx",name:"userEmail",value:l,onChange:function(e){return g(e)},className:"form-control"}),Object(c.jsx)("label",{htmlFor:"defaultFormPasswordEx",className:"grey-text font-weight-light",children:"Password"}),Object(c.jsx)("input",{type:"password",id:"defaultFormPasswordEx",name:"userPassword",value:h,onChange:function(e){return g(e)},className:"form-control"}),Object(c.jsx)("div",{className:"text-center mt-4",children:Object(c.jsx)(o.b,{to:"/myprofile",children:Object(c.jsx)(i.b,(a={color:"dark",className:"mb-3"},Object(j.a)(a,"className","bg-dark"),Object(j.a)(a,"type","submit"),Object(j.a)(a,"onClick",(function(e){!function(e,t,a){e.preventDefault(),A.signInWithEmailAndPassword(t,a).catch((function(e){p("Error signing in with password and email!"),console.error("Error signing in with password and email",e)}))}(e,l,h)})),Object(j.a)(a,"children","Login"),a))})}),Object(c.jsx)(i.n,{children:Object(c.jsxs)("div",{className:"font-weight-light",children:[Object(c.jsx)("p",{children:"Not a member?"}),Object(c.jsx)(o.b,{to:"/SignUp",className:"text-blue-500 hover:text-blue-600",children:"Sign up here"})]})})]})})})})})})},M=function(){var e,t,a,r,s=Object(n.useState)(""),l=Object(u.a)(s,2),d=l[0],b=l[1],m=Object(n.useState)(""),h=Object(u.a)(m,2),O=h[0],x=h[1],f=Object(n.useState)(""),p=Object(u.a)(f,2),g=p[0],v=p[1],w=Object(n.useState)(""),N=Object(u.a)(w,2),k=N[0],C=N[1],F=Object(n.useState)(""),P=Object(u.a)(F,2),U=P[0],I=P[1],M=Object(n.useState)(null),W=Object(u.a)(M,2),_=(W[0],W[1]),D=function(){var e=Object(E.a)(y.a.mark((function e(t,a,c,n,r){var s,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,A.createUserWithEmailAndPassword(a,c,n,r);case 4:s=e.sent,i=s.user,S(i,{name:g}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),_("Error Signing up with email and password");case 12:b(""),x(""),v(""),C(""),I("");case 17:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a,c,n,r){return e.apply(this,arguments)}}(),q=function(e){var t=e.currentTarget,a=t.name,c=t.value;"userEmail"===a?b(c):"userPassword"===a?x(c):"name"===a?v(c):"userMajor"===a?C(c):"userDescription"===a&&I(c)};return Object(c.jsx)("div",{children:Object(c.jsx)(i.j,{children:Object(c.jsx)(i.q,{children:Object(c.jsx)(i.i,{md:"6",children:Object(c.jsx)(i.c,{className:"signUpCard",children:Object(c.jsxs)(i.d,{children:[Object(c.jsx)(i.e,(e={className:"cardHeader"},Object(j.a)(e,"className","form-header bg-dark rounded"),Object(j.a)(e,"color","#263238"),Object(j.a)(e,"children",Object(c.jsxs)("h3",{className:"my-3",children:[Object(c.jsx)(i.k,{className:"log",icon:"lock"})," Sign Up:"]})),e)),Object(c.jsx)("label",(t={htmlFor:"defaultFormEmailEx",className:"grey-text font-weight-light"},Object(j.a)(t,"className","name"),Object(j.a)(t,"children","Name"),t)),Object(c.jsx)("input",{type:"name",id:"defaultFormEmailEx",name:"name",value:g,onChange:function(e){return q(e)},className:"form-control"}),Object(c.jsx)("label",(a={htmlFor:"defaultFormEmailEx",className:"grey-text font-weight-light"},Object(j.a)(a,"className","userEmail"),Object(j.a)(a,"children","Email"),a)),Object(c.jsx)("input",{type:"email",id:"defaultFormEmailEx",name:"userEmail",value:d,onChange:function(e){return q(e)},className:"form-control"}),Object(c.jsx)("label",{htmlFor:"defaultFormPasswordEx",className:"grey-text font-weight-light",children:"Password"}),Object(c.jsx)("input",{type:"password",id:"defaultFormPasswordEx",name:"userPassword",value:O,onChange:function(e){return q(e)},className:"form-control"}),Object(c.jsx)("label",{htmlFor:"defaultFormPasswordEx",className:"grey-text font-weight-light",children:"Major"}),Object(c.jsx)("input",{type:"major",id:"defaultFormEmailEx",name:"userMajor",value:k,onChange:function(e){return q(e)},className:"form-control"}),Object(c.jsx)("label",{htmlFor:"defaultFormPasswordEx",className:"grey-text font-weight-light",children:"Description"}),Object(c.jsx)("input",{type:"description",id:"defaultFormEmailEx",name:"userDescription",value:U,onChange:function(e){return q(e)},className:"form-control"}),Object(c.jsx)("div",{className:"text-center mt-4",children:Object(c.jsx)(o.b,{to:"/myprofile",children:Object(c.jsx)(i.b,(r={color:"dark",className:"mb-3"},Object(j.a)(r,"className","bg-dark"),Object(j.a)(r,"type","submit"),Object(j.a)(r,"onClick",(function(e){D(e,d,O)})),Object(j.a)(r,"children","Login"),r))})}),Object(c.jsx)(i.n,{children:Object(c.jsxs)("div",{className:"font-weight-light",children:[Object(c.jsxs)("p",{children:["Already a member?",""]}),Object(c.jsx)(o.b,{to:"/profile",className:"text-blue-500 hover:text-blue-600",children:"Sign in here!"})]})})]})})})})})})},W=(a(131),function(){var e,t=Object(n.useContext)(n.UserContext),a=(t.url,t.name),r=(t.email,t.major),s=t.description;return Object(c.jsx)("div",{children:Object(c.jsx)(i.q,{children:Object(c.jsx)(i.i,{className:"profCard",style:{maxWidth:"40rem"},children:Object(c.jsxs)(i.c,{reverse:!0,children:[Object(c.jsx)(i.f,{cascade:!0,className:"img",style:{height:"20rem"},src:"https://atlantablackstar.com/wp-content/uploads/2016/08/malia-obama_ozv0ql.jpg"}),Object(c.jsxs)(i.d,{cascade:!0,className:"text-center",children:[Object(c.jsx)(i.h,{children:a}),Object(c.jsx)("h5",{className:"indigo-text",children:Object(c.jsx)("strong",{children:r})}),Object(c.jsx)(i.g,{children:s}),Object(c.jsx)("div",{className:"text-center mt-4",children:Object(c.jsx)(o.b,{to:"/SignUp",children:Object(c.jsx)(i.b,(e={color:"dark",className:"mb-3"},Object(j.a)(e,"className","bg-dark"),Object(j.a)(e,"type","submit"),Object(j.a)(e,"onClick",(function(){A.signOut()})),Object(j.a)(e,"children","Sign Out"),e))})})]})]})})})})}),_=a(68),D=a(69),q=a(71),B=a(70),R=Object(n.createContext)({user:null}),z=function(e){Object(q.a)(a,e);var t=Object(B.a)(a);function a(){var e;Object(_.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={user:null},e.componentDidMount=Object(E.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A.onAuthStateChanged(function(){var t=Object(E.a)(y.a.mark((function t(a){var c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:c=t.sent,e.setState({user:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),e}return Object(D.a)(a,[{key:"render",value:function(){return Object(c.jsx)(R.Provider,{value:this.state.user,children:this.props.children})}}]),a}(n.Component);var L=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(l,{}),Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{exact:!0,path:"/",children:Object(c.jsx)(g,{})}),Object(c.jsx)(v.a,{path:"/message",children:Object(c.jsx)(N,{})}),Object(c.jsx)(v.a,{path:"/roommies/:id",children:Object(c.jsx)(w,{})}),Object(c.jsxs)(z,{children:[Object(c.jsx)(v.a,{path:"/myprofile",children:Object(c.jsx)(W,{})}),Object(c.jsx)(v.a,{path:"/profile",children:Object(c.jsx)(I,{})}),Object(c.jsx)(v.a,{path:"/SignUp",children:Object(c.jsx)(M,{})})]})]})})]})})},H=(a(132),a(133),a(134),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function J(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(c.jsx)(L,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tajah93/U-Room",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/tajah93/U-Room","/service-worker.js");H?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):J(e)}))}}()},77:function(e,t,a){},78:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.51feb117.chunk.js.map