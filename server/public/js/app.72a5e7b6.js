(function(t){function e(e){for(var n,r,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)r=i[d],o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},o={app:0},a=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("div",{staticClass:"container"},[s("PostsContainer")],1),s("Bar")],1)},a=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Posts")]),s("form",{staticClass:"mb-3",on:{submit:function(e){e.preventDefault(),t.edit?t.updatePost(t.post):t.addPost()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Body"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})]),s("button",{staticClass:"btn btn-block",class:t.edit?"btn-success":"btn-info",attrs:{type:"submit"},domProps:{textContent:t._s(t.edit?"Update Post":"Add Post")}})]),t._l(t.posts,function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.posts.length>0,expression:"posts.length > 0"}],key:e._id,staticClass:"card card-body mb-2"},[s("h3",{staticClass:"card-title"},[t._v(t._s(e.title))]),s("p",{staticClass:"lead"},[t._v(t._s(e.body))]),s("hr"),s("button",{staticClass:"btn btn-success mb-1",on:{click:function(s){return t.editPost(e)}}},[t._v("Edit")]),s("button",{staticClass:"btn btn-danger",on:{click:function(s){return t.deletePost(e._id)}}},[t._v("Delete")])])}),s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.posts.length,expression:"posts.length == 0"}],staticClass:"card card-body bg-info text-light mb-5"},[s("p",{staticClass:"lead text-center font-weight-bold"},[t._v("No posts yet ? Add your first post :D")])])],2)},i=[],l=s("bc3a"),c={name:"PostsContainer",data:function(){return{posts:[],post:{_id:"",title:"",body:""},edit:!1}},created:function(){this.fetchPosts()},methods:{fetchPosts:function(t){var e=this;this.setScroll();var s="api/posts";l.get(s).then(function(t){console.log(t.data),e.posts=t.data}).catch(function(t){return console.log(t)})},addPost:function(){var t=this;l.post("api/posts",this.post).then(function(e){t.post.title="",t.post.body="",alert("Post added successfully!"),t.fetchPosts()}).catch(function(t){return console.log(t)})},editPost:function(t){this.edit=!0,this.post._id=t._id,this.post.title=t.title,this.post.body=t.body,this.setScroll()},updatePost:function(t){var e=this;l.put("api/posts/".concat(t._id),t).then(function(t){e.edit=!1,e.setData(),alert("Post updated successfully!"),e.fetchPosts()}).catch(function(t){return console.log(t)})},deletePost:function(t){var e=this;confirm("Are you sure ?")&&l.delete("api/posts/".concat(t)).then(function(t){alert("Post deleted successfully!"),e.fetchPosts()}).catch(function(t){return console.log(t)})},setScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},setData:function(){this.post._id="",this.post.title="",this.post.body=""}}},u=c,d=s("2877"),p=Object(d["a"])(u,r,i,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-danger navbar-laravel mb-3"},[s("div",{staticClass:"container"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("ExpressVue")])])])}],b={},m=Object(d["a"])(b,v,h,!1,null,null,null),_=m.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center bg-dark mt-5"},[s("p",{staticClass:"lead text-light p-2"},[t._v("\n    Developed By\n    "),s("a",{staticClass:"text-warning",attrs:{href:"https://yaser-alazm.com",target:"_blank"}},[t._v("Yaser AlAzm")]),t._v(" with\n    "),s("span",{staticClass:"text-warning"},[t._v("NodeJS@ExpressJS Framework")]),s("span",{staticClass:"text-success"},[t._v(" @VueJs")]),t._v(" and\n    "),s("span",{staticClass:"text-info"},[t._v("MongoDB")])])])}],P={},x=Object(d["a"])(P,g,y,!1,null,null,null),C=x.exports,w={name:"app",components:{PostsContainer:f,Navbar:_,Bar:C}},O=w,j=Object(d["a"])(O,o,a,!1,null,null,null),k=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.72a5e7b6.js.map