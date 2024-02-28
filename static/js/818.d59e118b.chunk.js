"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[818],{1626:function(n,e,t){t.d(e,{Z:function(){return c}});var r,o=t(168),i=t(7924).ZP.p(r||(r=(0,o.Z)(["\nwidth: 600px;\nmargin: 0 auto;\nmargin-top: 64px;\ntext-align: center;\ncolor: #1e90ff;\nfont-size: 24px;\nfont-weight: bold;\n"]))),a=t(184),c=function(n){var e=n.text;return(0,a.jsx)(i,{children:e})}},5224:function(n,e,t){t.d(e,{Z:function(){return c}});var r,o=t(168),i=t(7924).ZP.p(r||(r=(0,o.Z)(["\nmargin: 0 auto;\nmargin-top: 64px;\ntext-align: center;\ncolor: #1e90ff;\nfont-size: 24px;\nfont-weight: bold;\n"]))),a=t(184),c=function(n){var e=n.text;return(0,a.jsx)(i,{children:e})}},1198:function(n,e,t){t.d(e,{Z:function(){return Z}});var r,o,i,a=t(9439),c=t(2791),u=t(4420),d=t(8239),s=t(168),l=t(7924),f=l.ZP.div(r||(r=(0,s.Z)(["\n margin-top: 16px;\n display: flex;\n justify-content: center;\n"]))),p=l.ZP.input(o||(o=(0,s.Z)(["\n  width: 380px;\n  padding: 8px;\n  font-size: 16px;\n  border: 1px solid #0056b3;\n\n  @media screen and (max-width: 767px) {\n    width: 236px;\n  }\n"]))),x=l.ZP.button(i||(i=(0,s.Z)(["\n  font-size: 24px;\n  background-color: #8ed1fa;\n  color: white;\n  border: none;\n  border-radius: 3px;\n\n\n"]))),h=t(484),m=t(1788),g=t(184),Z=function(){var n=(0,c.useState)(""),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=(0,u.I0)(),i=(0,u.v9)(m.AD);(0,c.useEffect)((function(){r(i)}),[i]);return(0,g.jsxs)(f,{children:[(0,g.jsx)(p,{type:"text",placeholder:"Search tasks...",value:t,onChange:function(n){var e=n.target.value;r(e),o((0,d.v)(e))}}),(0,g.jsx)(x,{children:(0,g.jsx)(h.eaK,{})})]})}},4555:function(n,e,t){t.d(e,{Z:function(){return P}});t(2791);var r,o,i,a,c,u,d,s=t(4420),l=t(8239),f=t(168),p=t(7924),x=p.ZP.li(r||(r=(0,f.Z)(["\n  max-width: 800px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  // background-color: #f5f5f5;\n  background-color: ",";\n  padding: 10px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n"])),(function(n){return"true"===n.completed?"#d3d3d3":"#f5f5f5"})),h=p.ZP.h3(o||(o=(0,f.Z)(["\n  color: #0056b3;\n"]))),m=p.ZP.p(i||(i=(0,f.Z)(["\n  color: #333;\n  margin-bottom: 10px;\n"]))),g=p.ZP.button(a||(a=(0,f.Z)(["\n  width: 150px;\n  background-color: #1e90ff;\n  color: white;\n  border: none;\n  padding: 5px 10px;\n  cursor: pointer;\n  margin-right: 10px;\n  border-radius: 3px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n"]))),Z=(0,p.ZP)(g)(c||(c=(0,f.Z)(["\n  background-color: #ff7070;\n  &:hover {\n    background-color: #e63900;\n  }\n"]))),b=p.ZP.p(u||(u=(0,f.Z)(["\n  color: #333;\n"]))),k=t(5264),j=t(184),v=function(n){var e=n.date,t=(0,s.I0)();return(0,j.jsxs)(x,{completed:e.completed?"true":"false",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(h,{children:e.name}),(0,j.jsx)(m,{children:e.description})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)(g,{onClick:function(){t((0,l.Wl)(e.id)),k.Notify.success("Status of the task was changed!")},children:e.completed?"Mark Incomplete":"Complete"}),(0,j.jsx)(Z,{onClick:function(){t((0,l._5)(e.id)),k.Notify.success("Task was deleted!")},children:"Delete"}),(0,j.jsx)(j.Fragment,{children:""!==e.dueDate?(0,j.jsxs)(b,{children:["Need to be completed till: ",e.dueDate]}):null})]})]},e.id)},w=p.ZP.ul(d||(d=(0,f.Z)(["\n  margin-top: 18px;\n"]))),P=function(n){var e=n.array;return(0,j.jsx)(w,{children:0!==e.length&&e.map((function(n){return(0,j.jsx)(v,{date:n},n.id)}))})}},5818:function(n,e,t){t.r(e);var r=t(4555),o=t(4420),i=t(1788),a=t(1626),c=t(1198),u=t(5224),d=t(184);e.default=function(){var n=(0,o.v9)(i.nI);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Z,{text:"Not Completed Tasks:"}),(0,d.jsx)(c.Z,{}),0===n.length?(0,d.jsx)(a.Z,{text:"You haven't added any tasks here yet. Use the form to create new tasks and start organizing your to-do list!"}):(0,d.jsx)(r.Z,{array:n})]})}},1788:function(n,e,t){t.d(e,{AD:function(){return i},nI:function(){return c},rw:function(){return a}});var r=t(3553),o=function(n){return n.tasks.tasks},i=function(n){return n.tasks.searchFilter},a=(0,r.P1)([o,i],(function(n,e){return n.filter((function(n){return n.completed&&n.name.toLowerCase().includes(e.toLowerCase())}))})),c=(0,r.P1)([o,i],(function(n,e){return n.filter((function(n){return!n.completed&&n.name.toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=818.d59e118b.chunk.js.map