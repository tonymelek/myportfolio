(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"name":"Community Fete","about_p1":"Touchless Buying and selling Experience for Community Fetes, starting with scanning a QR code to start the app.","about_p2":"The application is sclable and can accept any number of shops and users upto the hosting server capacity. There are currently 3 account types (Merchant, User and Admin) , each one has their customized dashboard and secured APIs","about_p3":"NO More Crowds NO More Queues","about_p4":"Technology embracing the community","technologies":"React,Bootstrap,CSS,NodeJs / Express, My SQL,Sequelize, JWT,Bcrypt","github_link":"https://github.com/tonymelek/communityFete","deployed_app":"https://community-fete.herokuapp.com/"},{"name":"Ez Portal","about_p1":"Ez Portal is a HR web application that has multiple access levels and previledges based on the access levels","about_p2":"The application is designed in a way to be scalable so many more features can be added in the future , for example leave request and approval and every employee can see their remaining leaves, sign in and out buttons to auto fill timesheets and calculate the payroll and the departments budgets.","about_p3":"","about_p4":"","technologies":"HTML,CSS,Bootstrap,Javascript,Jquery,NodeJS /Express,HandleBars,MySQL, Sequelize,JWT,Bcrypt","github_link":"https://github.com/tonymelek/EzPortal","deployed_app":"https://ez-portal.herokuapp.com/"},{"name":"BandEar","about_p1":"Using multiple Web APIs (Spotify,Bands in town, IP Info, Google Maps) to search artists and display their top hits.","about_p2":"The application displays a list of upcoming events(if there is any) for the selected artist /band and displays all the info. on the map including venue and nearby accomodations.","about_p3":"The aim of the app was to integrate all these options into one place for music lovers","about_p4":"","technologies":"HTML,CSS,Javascript,JQuery,AJAX,Materilize CSS","github_link":"https://github.com/tonymelek/BandEaR_Discover_live_artists","deployed_app":"https://tonymelek.github.io/BandEaR_Discover_live_artists/"},{"name":"Weather Dash Board","about_p1":"Using Open Weather Web API and customised city search engine to display current weather and 5 days forecast.","about_p2":"The app saves a list of favourite cities on local storage for better user experience.","about_p3":"","about_p4":"","technologies":"HTML,CSS,Javascript,JQuery,AJAX","github_link":"https://github.com/tonymelek/weather_dashboard","deployed_app":"https://tonymelek.github.io/weather_dashboard/"}]')},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(27),i=a.n(n),l=(a(36),a(37),a(11)),r=a(3),o=(a(38),a(1));function d(){return Object(o.jsx)("div",{className:"notFound__main",children:Object(o.jsxs)("div",{className:"pageError__container",children:[Object(o.jsx)("h1",{children:"Error 404"}),Object(o.jsx)("h2",{children:"Page not found"})]})})}var j=a(9),m=(a(40),a(13));function h(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"d-flex flex-wrap justify-content-around align-items-center",children:[Object(o.jsxs)("div",{className:"d-flex flex-column",children:[Object(o.jsxs)("p",{children:["Phone: ",Object(o.jsx)("a",{href:"tel:0426 081 060",children:"0426 081 060"})]}),Object(o.jsxs)("p",{children:["Email: ",Object(o.jsx)("a",{href:"mailto:tonymelek.au@gmail.com",children:"tonymelek.au@gmail.com"})]})]}),Object(o.jsxs)("div",{className:"d-flex",children:[Object(o.jsxs)("div",{className:"d-flex flex-column align-items-center mb-2",children:[Object(o.jsx)("a",{href:"https://github.com/tonymelek",target:"_blank",children:Object(o.jsx)(m.a,{className:"icons"})}),Object(o.jsx)("p",{children:"Github"})]}),Object(o.jsxs)("div",{className:"d-flex flex-column align-items-center  mb-2",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/tonymelek/",target:"_blank",children:Object(o.jsx)(m.b,{className:"icons"})}),Object(o.jsx)("p",{children:"LinkedIn"})]}),Object(o.jsxs)("div",{className:"d-flex flex-column align-items-center  mb-2",children:[Object(o.jsx)("a",{href:"./resume/TonyMelek_Resume.pdf",download:!0,children:Object(o.jsx)(m.c,{className:"icons"})}),Object(o.jsx)("p",{children:"Resume"})]})]})]})})}var b=a(29);a(41);function p(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!(window.innerWidth<600)),i=Object(j.a)(n,2),d=i[0],m=i[1],h=Object(r.f)().pathname.split("/")[1];return Object(c.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth<600?m(!1):m(!0)}))}),[]),Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{className:"burger__menu cursor-pointer",onClick:function(){return s(!a)},children:Object(o.jsx)(b.a,{})}),Object(o.jsxs)("nav",{className:"navbar ".concat(d||a?"d-flex ":"d-none"," "),children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{className:"react__link ".concat(""===h?"active":""),to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{className:"react__link ".concat("portfolio"===h?"active":""),to:"/portfolio",children:"Projects"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{className:"react__link ".concat("contact-me"===h?"active":""),to:"/contact-me",children:"Contact Me"})})]})]})}a(47);function u(e){var t=e.project;return Object(o.jsx)("div",{className:"project__brief__main",children:Object(o.jsxs)("div",{className:"d-flex flex-column project__brief__item",children:[Object(o.jsx)("img",{src:"./projects/".concat(t.name,".png"),alt:t.name,className:"project__snap"}),Object(o.jsx)("h3",{className:"text-center",children:t.name}),Object(o.jsx)("p",{className:"p-2",children:t.about_p1}),Object(o.jsx)("p",{className:"click__note",children:"**Click the project card for details**"})]})})}a(48);function x(e){var t=e.project,a=e.setShowProjectCard;return Object(o.jsx)("div",{className:"project__card__main container animate__animated animate__pulse ",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("div",{className:"card-header",children:[Object(o.jsx)("p",{className:"close-display",onClick:function(){return a(!1)},children:"X"}),Object(o.jsx)("h2",{className:"text-center",children:t.name})]}),Object(o.jsxs)("div",{className:"card-body row",children:[Object(o.jsx)("div",{className:"col-12  col-lg-6",children:Object(o.jsx)("img",{src:"./projects/".concat(t.name,".png"),alt:t.name})}),Object(o.jsxs)("div",{className:"col-12  col-lg-6 ",children:[Object(o.jsx)("h3",{children:"Description"}),Object(o.jsx)("p",{children:t.about_p1}),Object(o.jsx)("p",{children:t.about_p2}),Object(o.jsx)("p",{children:t.about_p3}),Object(o.jsx)("p",{children:t.about_p4}),Object(o.jsx)("h3",{children:"Technologies Used"}),Object(o.jsx)("ul",{className:"list-unstyled d-inline-flex flex-wrap ",children:t.technologies.split(",").map((function(e){return Object(o.jsx)("li",{className:"m-2 tech__item",children:e},"tech")}))}),Object(o.jsxs)("div",{className:"project__links d-flex justify-content-between",children:[Object(o.jsx)("a",{href:t.deployed_app,target:"_blank",className:"btn btn-success mx-2 deploy__link",children:"View Depolyed Project"}),Object(o.jsx)("a",{href:t.github_link,target:"_blank",className:"btn btn-success mx-2 repo__link",children:"View GitHub Repository"})]})]})]}),Object(o.jsx)("div",{className:"card-footer",children:Object(o.jsx)("button",{className:"btn btn-info mx-auto w-50 d-block",onClick:function(){return a(!1)},children:" Close"})})]})})}var O=a(30);a(49);function _(){var e=Object(c.useState)({name:"",about_p1:"",about_p2:"",about_p3:"",about_p4:"",technologies:"",github_link:"",deployed_app:""}),t=Object(j.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),i=Object(j.a)(n,2),l=i[0],r=i[1];return Object(o.jsxs)("div",{className:"projects__main position-relative",children:[Object(o.jsx)(p,{}),l&&Object(o.jsx)("div",{className:"project__card__container",children:Object(o.jsx)(x,{project:a,setShowProjectCard:r})}),Object(o.jsx)("div",{className:"my__projects d-flex flex-wrap justify-content-between align-items-center mx-5  cursor-pointer ".concat(l?"hazy":""),children:O.map((function(e,t){return Object(o.jsx)("div",{onClick:function(){return function(e){s(e),r(!0)}(e)},className:"card flex-grow-1 m-3 project__summary animate__animated animate__fadeInUp animate__delay-".concat(t,"s"),children:Object(o.jsx)(u,{project:e})},e.name)}))}),Object(o.jsx)(h,{})]})}a(50);function f(){return Object(o.jsxs)("div",{className:"home__main position-relative",children:[Object(o.jsx)(p,{}),Object(o.jsxs)("div",{className:"main__content__container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"text-center my__name",children:"Tony Melek"}),Object(o.jsx)("h2",{className:"text-center text-light",children:"Full stack web developer and passionate learner"})]}),Object(o.jsxs)("div",{className:"row m-5",children:[Object(o.jsx)("div",{className:"col-12 col-lg-3  d-flex justify-content-center animate__animated animate__fadeInLeft",children:Object(o.jsx)("img",{src:"./photo/tony.jpg",alt:"tony",className:"my__photo"})}),Object(o.jsx)("div",{className:"col-lg-1"}),Object(o.jsxs)("div",{className:"col-12 col-lg-8 d-flex flex-column align-items-center animate__animated animate__fadeInRight",children:[Object(o.jsx)("h1",{className:"titles",children:"About Me"}),Object(o.jsxs)("div",{className:"card p-3",children:[Object(o.jsx)("p",{children:" Full-stack web developer with a telecommunications engineering background and data analysis experience. Obtained a Certificate from the Coding Bootcamp at Monash University, through which I have developed new skills such as HTML, CSS, Javascript, JQuery,Node.Js, React.js, MySQL and responsive web design"}),Object(o.jsx)("p",{children:"My Technical Skill list :"}),Object(o.jsx)("div",{className:"d-flex flex-wrap",children:["html","css","js","react","sass","bootstrap","materialize","node","sql","mongo","handlebars"].map((function(e){return Object(o.jsx)("div",{className:"m-2",children:Object(o.jsx)("img",{src:"./technologies/".concat(e,".png"),alt:"texh",width:"50"})},e)}))})]})]})]})]}),Object(o.jsx)(h,{})]})}a(51);var g=a(31),v=a.n(g);function y(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("Submit"),i=Object(j.a)(n,2),l=i[0],r=i[1];return Object(o.jsxs)("div",{className:"contact__main",children:[Object(o.jsx)(p,{}),Object(o.jsxs)("div",{className:"main__content container",children:[Object(o.jsx)("h1",{className:"titles",children:"Contact Me"}),Object(o.jsx)("div",{className:"card animate__animated animate__backInDown",children:Object(o.jsx)("div",{className:"card-body",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r("Sending...");var t=e.target.sender_name.value,a=e.target.sender_email.value,c=e.target.sender_message.value;v()({method:"post",url:"https://37fr3l0ug9.execute-api.ap-southeast-2.amazonaws.com/emailer",headers:{"Content-Type":"application/json"},data:{sender_name:t,sender_email:a,sender_message:c}}).then((function(e){s("Thank you, Message has been e-mailed to Tony")})).catch((function(e){return s(e.response.data)}))},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsxs)("label",{for:"InputName",children:["Name ",Object(o.jsx)("sup",{className:"text-danger",children:"*"})]}),Object(o.jsx)("input",{type:"text",name:"sender_name",className:"form-control",id:"InputName",placeholder:"Enter your name",required:!0})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{for:"Email1",children:"Email address"}),Object(o.jsx)("input",{type:"email",name:"sender_email",className:"form-control",id:"Email1",placeholder:"Enter your email address"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsxs)("label",{for:"message",children:["Message",Object(o.jsx)("sup",{className:"text-danger",children:"*"})]}),Object(o.jsx)("textarea",{className:"form-control",id:"message",name:"sender_message",placeholder:"Type your message here ..",required:!0})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-end",children:[""===a&&Object(o.jsx)("button",{type:"submit",className:"btn btn-primary w-lg-25",disabled:"Sending..."===l,children:l}),""!==a&&Object(o.jsx)("h5",{className:"text-success",children:a})]})]})})})]}),Object(o.jsx)(h,{})]})}var N=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(l.a,{children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/",exact:!0,children:Object(o.jsx)(f,{})}),Object(o.jsx)(r.a,{path:"/portfolio",children:Object(o.jsx)(_,{})}),Object(o.jsx)(r.a,{path:"/contact-me",children:Object(o.jsx)(y,{})}),Object(o.jsx)(r.a,{path:"*",children:Object(o.jsx)(d,{})})]})})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),k()}},[[70,1,2]]]);
//# sourceMappingURL=main.269e5d18.chunk.js.map