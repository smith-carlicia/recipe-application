(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{171:function(e,t,c){},173:function(e,t,c){},178:function(e,t,c){},273:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(28),i=c.n(s),r=(c(171),c(172),c(275)),j=c(76),o=c(52),d=c(276),l=c(280),b=(c(173),c(1)),h=function(e){return Object(b.jsxs)(l.a,{className:"navbar",mode:"horizontal",children:[Object(b.jsx)(l.a.Item,{children:e.home}),Object(b.jsx)(l.a.Item,{children:e.about}),Object(b.jsx)(l.a.Item,{children:e.add}),Object(b.jsx)(l.a.Item,{children:e.find}),Object(b.jsx)(l.a.Item,{children:e.login}),Object(b.jsx)(l.a.Item,{children:e.test})]})},p=c(104),x=c(162),m=(c(178),function(e){return Object(b.jsx)(x.a,{className:"words",type:"text",children:Object(b.jsx)(p.b,{to:e.to,children:e.name})})}),O=c(113),u=(c.p,c(277).a.Title),g=r.a.Content,f=r.a.Header,y=function(){var e={height:"120px",width:"300px",float:"right",marginTop:"100px",marginRight:"20px",display:"flex"};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{home:Object(b.jsx)(m,{to:"/",name:"Home"}),about:Object(b.jsx)(m,{to:"/about",name:"About"}),add:Object(b.jsx)(m,{to:"/add",name:"Add Recipe"}),find:Object(b.jsx)(m,{to:"/find",name:"Find Recipe"}),login:Object(b.jsx)(m,{to:"/signin",name:"Login"})}),Object(b.jsxs)(g,{children:[Object(b.jsxs)(j.a,{children:[Object(b.jsx)(o.a,{span:8}),Object(b.jsx)(o.a,{children:Object(b.jsx)(g,{children:Object(b.jsx)("div",{children:Object(b.jsx)(u,{className:"recipe",children:"R e c i p e A p p"})})})}),Object(b.jsx)(o.a,{span:6})]}),Object(b.jsx)(j.a,{children:Object(b.jsx)(o.a,{span:24,children:Object(b.jsxs)(f,{style:{height:"250px"},children:[Object(b.jsxs)(d.a,{style:e,children:[Object(b.jsx)(O.b,{}),Object(b.jsx)("h3",{children:"Browse Many Recipes by Categories"})]}),Object(b.jsxs)(d.a,{style:e,children:[Object(b.jsx)(O.a,{}),Object(b.jsx)("h3",{children:"Add Your Own Recipes"})]}),Object(b.jsxs)(d.a,{style:e,children:[Object(b.jsx)(O.c,{}),Object(b.jsx)("h3",{children:"Become Part of Our Community"})]})]})})})]})]})},v=r.a.Content,w=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{home:Object(b.jsx)(m,{to:"/",name:"Home"}),add:Object(b.jsx)(m,{to:"/add",name:"Add Recipe"}),find:Object(b.jsx)(m,{to:"/find",name:"Find Recipe"})}),Object(b.jsxs)(v,{children:[Object(b.jsxs)(j.a,{children:[Object(b.jsx)(o.a,{span:15}),Object(b.jsx)(o.a,{span:6,children:Object(b.jsx)("h1",{children:"About Recipe App"})}),Object(b.jsx)(o.a,{span:3})]}),Object(b.jsx)(j.a,{}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(o.a,{span:11,children:Object(b.jsx)(d.a,{width:"40px",height:"450px",cover:Object(b.jsx)("img",{alt:"cooking",src:"https://images.unsplash.com/photo-1607567087368-5bc5715c223d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"})})}),Object(b.jsx)(o.a,{span:1}),Object(b.jsx)(o.a,{span:10,children:Object(b.jsx)("h4",{children:"Recipe App is the perfect application for people to post and look up recipes to satisfy their hunger. This community serves as a location for people to connect and positively impact others through an age old past time, cooking."})}),Object(b.jsx)(o.a,{span:2})]})]})]})},_=c(109),I=c(125),C=c(86),R=c(278),F=c(279),P=c(85),A=c.n(P),D=r.a.Content,H=function(){var e=Object(n.useState)("default"),t=Object(C.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({_id:"",recipe_name:"",recipe_creator:""}),i=Object(C.a)(s,2),r=i[0],l=i[1],p=function(e){e.persist(),l(Object(I.a)(Object(I.a)({},r),{},Object(_.a)({},e.target.name,e.target.value))),console.log(e.target.name+": "+e.target.value)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{home:Object(b.jsx)(m,{to:"/",name:"Home"}),about:Object(b.jsx)(m,{to:"/about",name:"About"}),find:Object(b.jsx)(m,{to:"/find",name:"Find Recipe"})}),Object(b.jsxs)(D,{children:[Object(b.jsxs)(R.a,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:{size:c},onValuesChange:function(e){var t=e.size;a(t)},size:c,children:[Object(b.jsx)(R.a.Item,{label:"Recipe Name",children:Object(b.jsx)(F.a,{placeholder:"Recipe Name",name:"recipe_name",value:r.r_name,id:"recipe_name",onChange:p})}),Object(b.jsx)(R.a.Item,{label:"Recipe Creator",children:Object(b.jsx)(F.a,{placeholder:"Recipe Creator",name:"recipe_creator",value:r.r_creator,id:"recipe_creator",onChange:p})}),Object(b.jsx)(R.a.Item,{label:"Duration",children:Object(b.jsx)(F.a,{placeholder:"Duration",name:"recipe_duration",value:r.r_duration,id:"recipe_duration",onChange:p})}),Object(b.jsx)(R.a.Item,{label:"Ingredients",children:Object(b.jsx)(F.a,{placeholder:"Ingredients",name:"recipe_ingredients",value:r.r_ingredients,id:"recipe_ingredients",onChange:p})}),Object(b.jsx)(R.a.Item,{label:"Description",children:Object(b.jsx)(F.a,{placeholder:"Description",name:"recipe_description",value:r.r_description,id:"recipe_description",onChange:p})}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault();var t={name:r.recipe_name,creator:r.recipe_creator,duration:r.recipe_duration,rating:r.recipe_rating,image:r.recipe_image,ingredients:r.recipe_indgredients,description:r.recipe_description};A.a.post("http://localhost:3001/api/adding/",t).then((function(e){console.log(e.data),alert("saved")})).catch((function(e){console.log(e)}))},children:"Save"})]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(o.a,{span:7}),Object(b.jsx)(o.a,{span:11,children:Object(b.jsx)(d.a,{children:Object(b.jsx)("h2",{children:"Added Recipe goes here"})})}),Object(b.jsx)(o.a,{span:6})]})]})]})},k=(r.a.Content,function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){A.a.get("http://localhost:3001/api/get/").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}))}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{home:Object(b.jsx)(m,{to:"/",name:"Home"}),about:Object(b.jsx)(m,{to:"/about",name:"About"}),add:Object(b.jsx)(m,{to:"/add",name:"Add Recipe"})}),Object(b.jsx)("h1",{id:"title",children:"Find Recipes"}),Object(b.jsx)("table",{id:"employee",children:Object(b.jsx)("tbody",{children:c&&c.map((function(e){var t=e._id,n=e.name,s=e.creator,i=e.description,r=e.ingredients,j=e.duration;return Object(b.jsxs)(d.a,{bordered:!0,style:{width:300},children:[Object(b.jsx)("h4",{children:"Recipe Name:"}),Object(b.jsx)("p",{children:n}),Object(b.jsx)("h4",{children:"Creator:"}),Object(b.jsx)("p",{children:s}),Object(b.jsx)("h4",{children:"Duration:"}),Object(b.jsx)("p",{children:j}),Object(b.jsx)("h4",{children:"Ingredients:"}),Object(b.jsx)("p",{children:r}),Object(b.jsx)("h4",{children:"Description:"}),Object(b.jsx)("p",{children:i}),Object(b.jsx)("button",{onClick:function(){return function(e){A.a.delete("".concat("http://localhost:3001/api/delete/","/").concat(e)).then((function(t){var n=c.filter((function(t){return e!==t._id}));a(n)}))}(t)},children:"delete"})]},t)}))})})]})}),S=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{home:Object(b.jsx)(m,{to:"/",name:"Home"}),login:Object(b.jsx)(m,{to:"/signin",name:"Login"})}),Object(b.jsxs)(R.a,{children:[Object(b.jsx)(R.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(b.jsx)(F.a,{})}),Object(b.jsx)(R.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(b.jsx)(F.a,{})}),Object(b.jsx)(R.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(b.jsx)(F.a.Password,{})}),Object(b.jsx)(R.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,c){return c&&t("password")!==c?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(b.jsx)(F.a.Password,{})}),Object(b.jsx)(R.a.Item,{children:Object(b.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})]})},T=c(281),N=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{home:Object(b.jsx)(m,{to:"/",name:"Home"}),about:Object(b.jsx)(m,{to:"/about",name:"About"}),add:Object(b.jsx)(m,{to:"/add",name:"Add Recipe"}),find:Object(b.jsx)(m,{to:"/find",name:"Find Recipe"})}),Object(b.jsxs)(R.a,{initialValues:{remember:!0},children:[Object(b.jsx)(R.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(b.jsx)(F.a,{})}),Object(b.jsx)(R.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(b.jsx)(F.a.Password,{})}),Object(b.jsx)(R.a.Item,{children:Object(b.jsx)(m,{type:"text",to:"/signup",name:"No Account? Sign Up Here!"})}),Object(b.jsx)(R.a.Item,{name:"remember",valuePropName:"checked",children:Object(b.jsx)(T.a,{children:"Remember me"})}),Object(b.jsx)(R.a.Item,{children:Object(b.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})]})},q=c(29),B=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(p.a,{children:Object(b.jsxs)(q.c,{children:[Object(b.jsx)(q.a,{exact:!0,path:"/",component:y}),Object(b.jsx)(q.a,{exact:!0,path:"/about",component:w}),Object(b.jsx)(q.a,{exact:!0,path:"/add",component:H}),Object(b.jsx)(q.a,{exact:!0,path:"/find",component:k}),Object(b.jsx)(q.a,{exact:!0,path:"/signup",component:S}),Object(b.jsx)(q.a,{exact:!0,path:"/signin",component:N})]})})})};var E=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(B,{})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,282)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),z()}},[[273,1,2]]]);
//# sourceMappingURL=main.87c34af8.chunk.js.map