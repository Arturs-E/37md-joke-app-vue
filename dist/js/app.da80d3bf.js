(function(e){function t(t){for(var o,c,i=t[0],s=t[1],u=t[2],j=0,b=[];j<i.length;j++)c=i[j],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/37md-joke-app-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"00a3":function(e,t,n){"use strict";n("5c2a")},"0394":function(e,t,n){},"0f30":function(e,t,n){"use strict";n("e11f")},"1c6f":function(e,t,n){},5162:function(e,t,n){"use strict";n("0394")},"5c2a":function(e,t,n){},"6c7c":function(e,t,n){},"7b6d":function(e,t,n){"use strict";n("1c6f")},b68d:function(e,t,n){},bc72:function(e,t,n){"use strict";n("b68d")},bf2b:function(e,t,n){},c0a1:function(e,t,n){"use strict";n("bf2b")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=n("cf05"),r=n.n(a),c={class:"page-content"},i={class:"nav-wrapper"},s=Object(o["f"])("img",{alt:"Joke logo",src:r.a,class:"logo"},null,-1),u={class:"nav"},l=Object(o["g"])("Jokes"),j=Object(o["g"])("Random Jokes"),b={class:"content-wrapper"};function d(e,t){var n=Object(o["w"])("router-link"),a=Object(o["w"])("router-view");return Object(o["r"])(),Object(o["e"])("div",c,[Object(o["f"])("div",i,[Object(o["h"])(n,{to:"/jokes",exact:""},{default:Object(o["C"])((function(){return[s]})),_:1}),Object(o["f"])("div",u,[Object(o["h"])(n,{to:"/jokes"},{default:Object(o["C"])((function(){return[l]})),_:1}),Object(o["h"])(n,{to:"/random-jokes"},{default:Object(o["C"])((function(){return[j]})),_:1})])]),Object(o["f"])("div",b,[Object(o["h"])(a)])])}n("e934");var f=n("6b0d"),O=n.n(f);const p={},k=O()(p,[["render",d]]);var m=k,h=n("6c02"),g={class:"joke-form-wrapper"},v=Object(o["f"])("hr",{class:"hr"},null,-1),y={class:"jokes-container"},w={class:"joke__question"},J={key:0,class:"joke__answer"},D={class:"joke__button-wrapper"};function V(e,t,n,a,r,c){var i=Object(o["w"])("CreateJokeForm"),s=Object(o["w"])("Button");return Object(o["r"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",g,[Object(o["h"])(i,{onJokeSubmit:e.addJoke},null,8,["onJokeSubmit"])]),v,Object(o["f"])("div",y,[Object(o["D"])(Object(o["f"])("input",{type:"text",class:"input-field",placeholder:"Search joke...","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchInput=t}),onInput:t[1]||(t[1]=function(){return e.searchJoke&&e.searchJoke.apply(e,arguments)})},null,544),[[o["A"],e.searchInput]]),(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(e.searchJoke(),(function(t){return Object(o["r"])(),Object(o["e"])("div",{key:t.id,class:"joke"},[Object(o["f"])("span",w,Object(o["y"])(t.question),1),t.isAnswerVisible?(Object(o["r"])(),Object(o["e"])("span",J,Object(o["y"])(t.answer),1)):Object(o["d"])("",!0),Object(o["f"])("div",D,[Object(o["h"])(s,{title:"Tell me",onOnClick:function(n){return e.setAnswerVisible(t.id)}},null,8,["onOnClick"]),Object(o["h"])(s,{title:"Joke info","additional-classes":"button--secondary",onOnClick:function(n){return e.goToJoke(t.id)}},null,8,["onOnClick"]),Object(o["h"])(s,{title:"Delete","additional-classes":"button--danger",onOnClick:function(n){return e.removeJoke(t.id)}},null,8,["onOnClick"])])])})),128))])],64)}var S=n("5530"),C=n("2909"),q=(n("e9c4"),n("4de4"),n("d3b7"),n("d81d"),n("caad"),n("2532"),n("9612")),_=Object(o["f"])("div",{class:"heading-wrapper"},[Object(o["f"])("h2",{class:"heading2"},"Create a joke")],-1),I={class:"joke-form__label-wrapper"},A={for:"question",class:"joke-form__label"},x=Object(o["g"])(" Question "),T={for:"answer",class:"joke-form__label"},B=Object(o["g"])(" Answer ");function P(e,t,n,a,r,c){var i=Object(o["w"])("Button");return Object(o["r"])(),Object(o["e"])("form",{onSubmit:t[2]||(t[2]=Object(o["E"])((function(){return e.submitHandler&&e.submitHandler.apply(e,arguments)}),["prevent"])),class:"joke-form"},[_,Object(o["f"])("div",I,[Object(o["f"])("label",A,[x,Object(o["D"])(Object(o["f"])("input",{id:"question",type:"text",class:"input-field",placeholder:"Enter the question",ref:"questionInputRef","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.inputValues.question=t})},null,512),[[o["A"],e.inputValues.question]])]),Object(o["f"])("label",T,[B,Object(o["D"])(Object(o["f"])("input",{id:"answer",type:"text",class:"input-field",placeholder:"Enter the punchline","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.inputValues.answer=t})},null,512),[[o["A"],e.inputValues.answer]])]),Object(o["h"])(i,{title:"Create","additional-classes":e.inputValues.question&&e.inputValues.answer?"":"button--disabled"},null,8,["additional-classes"])])],32)}function R(e,t,n,a,r,c){return Object(o["r"])(),Object(o["e"])("button",{onClick:t[0]||(t[0]=function(){return e.clickHandler&&e.clickHandler.apply(e,arguments)}),class:Object(o["n"])(["button",e.additionalClasses])},Object(o["y"])(e.title),3)}var L=Object(o["i"])({name:"Button",props:{title:String,additionalClasses:String},methods:{clickHandler:function(){this.$emit("on-click")}}});n("0f30");const $=O()(L,[["render",R]]);var H=$,N=Object(o["i"])({name:"CreateJokeForm",components:{Button:H},data:function(){return{inputValues:{question:"",answer:""}}},methods:{submitHandler:function(){if(this.inputValues.question&&this.inputValues.answer){this.$emit("joke-submit",{question:this.inputValues.question,answer:this.inputValues.answer}),this.inputValues={question:"",answer:""};var e=this.$refs.questionInputRef;e.focus()}}},mounted:function(){var e=this.$refs.questionInputRef;e.focus()}});n("00a3");const E=O()(N,[["render",P]]);var M=E,F=[{id:"1",question:"Can a kangaroo jump higher than the Empire State Building?",answer:"Of course! Buildings can’t jump.",isAnswerVisible:!1,timestamp:Date.now()},{id:"2",question:"What do you get if you cross an angry sheep with a moody cow?",answer:"An animal that’s in a baaaaaaaaad moooooooood.",isAnswerVisible:!1,timestamp:Date.now()}],U=Object(o["i"])({name:"Jokes",data:function(){return{jokesData:[],uuid:function(){return q["a"].v4()},searchInput:""}},mounted:function(){var e=localStorage.getItem("Vue jokes");e?this.jokesData=JSON.parse(e):(this.jokesData=Object(C["a"])(F),localStorage.setItem("Vue jokes",JSON.stringify(this.jokesData)))},methods:{addJoke:function(e){this.jokesData.push(Object(S["a"])(Object(S["a"])({},e),{},{id:this.uuid(),timestamp:this.getTimestamp(),isAnswerVisible:!1})),localStorage.setItem("Vue jokes",JSON.stringify(this.jokesData))},getTimestamp:function(){return Date.now()},removeJoke:function(e){this.jokesData=this.jokesData.filter((function(t){return t.id!==e})),localStorage.setItem("Vue jokes",JSON.stringify(this.jokesData))},setAnswerVisible:function(e){this.jokesData=this.jokesData.map((function(t){return t.id===e?Object(S["a"])(Object(S["a"])({},t),{},{isAnswerVisible:!t.isAnswerVisible}):t}))},goToJoke:function(e){this.$router.push({name:"joke-info",params:{id:e}})},searchJoke:function(){var e=this;return this.searchInput?this.jokesData.filter((function(t){return t.question.toLowerCase().includes(e.searchInput.toLowerCase())})):this.jokesData}},components:{Button:H,CreateJokeForm:M}});n("c0a1");const G=O()(U,[["render",V]]);var Q=G,W={key:0},z={key:1,class:"joke-info",style:{"margin-bottom":"48px"}},K=Object(o["f"])("strong",null,"Question:",-1),X=Object(o["f"])("strong",null,"Answer:",-1),Y=Object(o["f"])("strong",null,"ID:",-1),Z=Object(o["f"])("strong",null,"Timestamp: ",-1);function ee(e,t,n,a,r,c){var i=Object(o["w"])("Button");return Object(o["r"])(),Object(o["e"])(o["a"],null,[e.joke?(Object(o["r"])(),Object(o["e"])("div",z,[Object(o["f"])("span",null,[K,Object(o["g"])(" "+Object(o["y"])(e.joke.question),1)]),Object(o["f"])("span",null,[X,Object(o["g"])(" "+Object(o["y"])(e.joke.answer),1)]),Object(o["f"])("span",null,[Y,Object(o["g"])(" "+Object(o["y"])(e.id),1)]),Object(o["f"])("span",null,[Z,Object(o["g"])(" "+Object(o["y"])(e.formatTimestamp(e.joke.timestamp)),1)])])):(Object(o["r"])(),Object(o["e"])("h2",W,"We couldn't find the joke. Sorry!")),Object(o["h"])(i,{title:"Go back",onOnClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})})],64)}n("7db0"),n("99af");var te=Object(o["i"])({name:"JokeInfo",components:{Button:H},props:{id:{type:String,required:!0}},data:function(){return{joke:{}}},mounted:function(){var e=this,t=localStorage.getItem("Vue jokes");if(t){var n=JSON.parse(t);this.joke=n.find((function(t){return t.id===e.id}))}},methods:{formatTimestamp:function(e){var t=new Date(e),n=t.toLocaleTimeString("en-us",{hour12:!1}),o=t.toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return"".concat(n," | ").concat(o)}}});n("7b6d");const ne=O()(te,[["render",ee]]);var oe=ne,ae={class:"about"},re={key:0,class:"heading1",style:{"text-align":"center"}},ce={key:1},ie=Object(o["f"])("div",{class:"heading-wrapper"},[Object(o["f"])("h2",{class:"heading2"},"Random jokes")],-1),se={class:"random-jokes-list"},ue={key:2};function le(e,t,n,a,r,c){var i=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["e"])("div",ae,[e.loading?(Object(o["r"])(),Object(o["e"])("h1",re," Loading data... ")):Object(o["d"])("",!0),e.randomJokesData?(Object(o["r"])(),Object(o["e"])("div",ce,[ie,Object(o["f"])("ol",se,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["v"])(e.randomJokesData.jokes,(function(e){var t=e.joke,n=e.id;return Object(o["r"])(),Object(o["e"])("li",{key:n},[Object(o["h"])(i,{to:{name:"random-jokes-info",params:{id:n}}},{default:Object(o["C"])((function(){return[Object(o["g"])(Object(o["y"])(t),1)]})),_:2},1032,["to"])])})),128))])])):(Object(o["r"])(),Object(o["e"])("h2",ue,"There is no data available..."))])}var je=n("bc3a"),be=n.n(je),de=Object(o["i"])({name:"RandomJokes",data:function(){return{loading:!0,randomJokesData:{}}},created:function(){var e=this;be.a.get("https://v2.jokeapi.dev/joke/Programming?type=single&amount=10").then((function(t){e.randomJokesData=t.data,e.loading=!1}))}});n("5162");const fe=O()(de,[["render",le]]);var Oe=fe,pe={key:0,class:"heading1",style:{"text-align":"center"}},ke={key:1,class:"joke-info-wrapper"},me=Object(o["f"])("div",{class:"heading-wrapper"},[Object(o["f"])("h2",{class:"heading2"},"Joke info")],-1),he={class:"joke-info"},ge=Object(o["f"])("strong",null,"Joke:",-1),ve=Object(o["f"])("strong",null,"ID:",-1),ye=Object(o["f"])("strong",null,"Category:",-1),we=Object(o["f"])("strong",null,"Language:",-1);function Je(e,t,n,a,r,c){var i=Object(o["w"])("Button");return Object(o["r"])(),Object(o["e"])(o["a"],null,[e.loading?(Object(o["r"])(),Object(o["e"])("h1",pe," Loading data... ")):Object(o["d"])("",!0),e.randomJokeData?(Object(o["r"])(),Object(o["e"])("div",ke,[me,Object(o["f"])("div",he,[Object(o["f"])("span",null,[ge,Object(o["g"])(" "+Object(o["y"])(e.randomJokeData.joke),1)]),Object(o["f"])("span",null,[ve,Object(o["g"])(" "+Object(o["y"])(e.randomJokeData.id),1)]),Object(o["f"])("span",null,[ye,Object(o["g"])(" "+Object(o["y"])(e.randomJokeData.category),1)]),Object(o["f"])("span",null,[we,Object(o["g"])(" "+Object(o["y"])(e.randomJokeData.lang),1)])])])):Object(o["d"])("",!0),Object(o["h"])(i,{title:"Go back",onOnClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})})],64)}var De=Object(o["i"])({name:"RandomJokeInfo",components:{Button:H},props:{id:{type:String,required:!0}},data:function(){return{loading:!0,randomJokeData:{}}},created:function(){var e=this;be.a.get("https://v2.jokeapi.dev/joke/Any?idRange=".concat(this.id)).then((function(t){e.randomJokeData=t.data,e.loading=!1}))}});n("bc72");const Ve=O()(De,[["render",Je]]);var Se=Ve,Ce=[{path:"/",redirect:"jokes"},{path:"/jokes",name:"jokes",component:Q},{path:"/jokes/:id",name:"joke-info",component:oe,props:!0},{path:"/random-jokes",name:"random-jokes",component:Oe},{path:"/random-jokes/:id",name:"random-jokes-info",component:Se,props:!0}],qe=Object(h["a"])({history:Object(h["b"])("/37md-joke-app-vue/"),routes:Ce}),_e=qe;Object(o["c"])(m).use(_e).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.af6654ba.png"},e11f:function(e,t,n){},e934:function(e,t,n){"use strict";n("6c7c")}});
//# sourceMappingURL=app.da80d3bf.js.map