(this["webpackJsonpuser_-mgmt-react"]=this["webpackJsonpuser_-mgmt-react"]||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),o=(a(32),a(33),a(10)),u=a(1),i=a(5),m=a.n(i),s=a(8),p=a(6),E=a(9),d=a.n(E),v=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),o=Object(p.a)(c,2),u=o[0],i=o[1],E=Object(n.useState)(),v=Object(p.a)(E,2),b=v[0],g=v[1],h=Object(n.useState)(),f=Object(p.a)(h,2),w=f[0],y=f[1],O=function(){var e=Object(s.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("dont reload",a+u,b,w),e.next=4,d.a.post("http://api.ybcreates.ml/user",{name:a,email:u,password:b,gender:w});case 4:n=e.sent,console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null," User resgistration"),l.a.createElement("form",{onSubmit:O},l.a.createElement("div",null,l.a.createElement("label",null,"Name"),l.a.createElement("input",{value:a,type:"text",onChange:function(e){r(e.target.value)},placeholder:"Enter your name"})),l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{value:u,onChange:function(e){i(e.target.value)},type:"email",placeholder:"Enter your email id"})),l.a.createElement("div",null,l.a.createElement("label",null,"Password"),l.a.createElement("input",{value:b,onChange:function(e){g(e.target.value)},type:"password",placeholder:"Create new password"})),l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"Gender"),l.a.createElement("select",{onChange:function(e){y(e.target.value)},value:w},l.a.createElement("option",{value:"male"},"Male"),l.a.createElement("option",{value:"female"},"Female"),l.a.createElement("option",{value:"other"},"Other")))),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"Submit"))))},b=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),o=Object(p.a)(c,2),u=o[0],i=o[1],E=function(){var e=Object(s.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("dont reload",a,u),e.next=4,d.a.post("http://api.ybcreates.ml/login ",{email:a,password:u});case 4:n=e.sent,localStorage.setItem("token",n.data.token);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,d.a.get("http://api.ybcreates.ml/protected",{headers:{token:t}});case 3:a=e.sent,console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null," User Login"),l.a.createElement("form",{onSubmit:E},l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{value:a,onChange:function(e){r(e.target.value)},type:"email",placeholder:"Enter your email id"})),l.a.createElement("div",null,l.a.createElement("label",null,"Password"),l.a.createElement("input",{value:u,onChange:function(e){i(e.target.value)},type:"password",placeholder:"Enter password"})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"Submit")),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",onClick:v},"Check Protected"))))};var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Register")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/login"},"Login")))),l.a.createElement("div",{className:"App"},l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(v,null)),l.a.createElement(u.a,{path:"/login"},l.a.createElement(b,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.14bd463f.chunk.js.map