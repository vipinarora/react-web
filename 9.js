"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[9],{676:(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>r})},968:(e,t,n)=>{function r(e){if(Array.isArray(e))return e}n.d(t,{Z:()=>r})},692:(e,t,n)=>{function r(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(u)throw l}}return a}}n.d(t,{Z:()=>r})},970:(e,t,n)=>{function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:()=>r})},738:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(968),l=n(692),a=n(961),o=n(970);function u(e,t){return(0,r.Z)(e)||(0,l.Z)(e,t)||(0,a.Z)(e,t)||(0,o.Z)()}},961:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(676);function l(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},9:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(738),l=n(985),a=n.n(l);function o(e){console.log("Props on data",e);var t=(0,l.useState)({fname:"",lname:"",dob:""}),n=(0,r.Z)(t,2),o=n[0],u=n[1],c=(0,l.useState)(!1),m=(0,r.Z)(c,2),s=m[0],i=m[1];return(0,l.useEffect)((function(){var e=sessionStorage.getItem("userData");console.log("UserData--ud",e),e?(e=JSON.parse(e),u({fname:e.customer.firstName,lname:e.customer.lastName,dob:e.customer.birthDate}),i(!0)):i(!1)}),[e.checkDataChange]),a().createElement(a().Fragment,null,a().createElement("div",{className:"p-5 bg-blue-500 text-white text-3xl font-bold"},a().createElement("h1",{className:"p-5 font-bold"},"--:User Data:--"),s?a().createElement(a().Fragment,null,a().createElement("div",null,a().createElement("label",null,"First Name")," :  ",a().createElement("label",null,o.fname)),a().createElement("div",null,a().createElement("label",null,"Last Name")," :  ",a().createElement("label",null,o.lname)),a().createElement("div",null,a().createElement("label",null,"Date of Birth")," :  ",a().createElement("label",null,o.dob))):a().createElement(a().Fragment,null,a().createElement("p",null,"User data is not available"))))}}}]);