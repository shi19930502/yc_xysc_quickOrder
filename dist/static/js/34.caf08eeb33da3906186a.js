webpackJsonp([34],{"C2/U":function(e,t,n){var o=n("TRCM");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var s=n("rjj0").default;s("adc00f84",o,!0,{})},CzGC:function(e,t,n){"use strict";function o(e){n("C2/U")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("TsXO"),i=n("wuKz"),a=n("XyMi"),r=o,g=Object(a.a)(s.a,i.a,i.b,!1,r,null,null);t.default=g.exports},"Dz/E":function(e,t,n){e.exports=n.p+"static/img/bg@2x.0b963d4.png"},TRCM:function(e,t,n){var o=n("kxFB");t=e.exports=n("FZ+f")(!0),t.push([e.i,".yd-scrollview:after{height:0}.Login{height:100%;background:url("+o(n("Dz/E"))+");background-size:100% 100%}.Login input{font-family:PingFang-SC-Medium;font-size:.28rem}.Login .logo{padding-top:1.74rem;padding:1.62rem 0 1.2rem}.Login .logo img{width:2.6rem;height:2.84rem}.Login .form{width:5.3rem;margin:0 auto}.Login .form .form-group{border-bottom:1px solid #c6c6c6;padding:.18rem 0;margin-bottom:.15rem}.Login .form .form-group .yd-input{height:.46rem;font-size:.28rem}.Login .form .form-group img.pswicon{width:.4rem;height:.46rem}.Login .form .loginbtn{width:100%;margin-top:.3rem;height:.78rem;background:#00a3ff;border-radius:.39rem;color:#fff;font-size:.31rem;text-align:center}.Login .reg{padding-top:2.5rem;width:100%;text-align:center}.Login .reg span{color:#00a3ff}.Login .forget{color:#626262;font-size:.24rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.Login .l_footer{text-align:center;margin-top:1.2rem}","",{version:3,sources:["D:/Web/源生汇_小源送菜/前端/微信快捷下单/src/views/f_login.vue"],names:[],mappings:"AACA,qBACE,QAAU,CACX,AACD,OACE,YAAa,AAEb,yCAA+C,AAC/C,yBAA2B,CAC5B,AACD,aACI,+BAAkC,AAClC,gBAAmB,CACtB,AACD,aACI,oBAAqB,AACrB,wBAA4B,CAC/B,AACD,iBACM,aAAc,AACd,cAAgB,CACrB,AACD,aACI,aAAc,AACd,aAAe,CAClB,AACD,yBACM,gCAAiC,AACjC,iBAAmB,AACnB,oBAAuB,CAC5B,AACD,mCACQ,cAAgB,AAChB,gBAAmB,CAC1B,AACD,qCACQ,YAAc,AACd,aAAgB,CACvB,AACD,uBACM,WAAY,AACZ,iBAAmB,AACnB,cAAgB,AAChB,mBAAoB,AACpB,qBAAuB,AACvB,WAAY,AACZ,iBAAmB,AACnB,iBAAmB,CACxB,AACD,YACI,mBAAoB,AACpB,WAAY,AACZ,iBAAmB,CACtB,AACD,iBACM,aAAe,CACpB,AACD,eACI,cAAe,AACf,iBAAmB,AACnB,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,yBAA0B,AAC1B,sCAAuC,AAC/B,6BAA+B,CAC1C,AACD,iBACI,kBAAmB,AACnB,iBAAmB,CACtB",file:"f_login.vue",sourcesContent:["\n.yd-scrollview:after {\n  height: 0;\n}\n.Login {\n  height: 100%;\n  /*background: url(../assets/firstImgs/bg_bg.png);*/\n  background: url(../assets/firstImgs/bg@2x.png);\n  background-size: 100% 100%;\n}\n.Login input {\n    font-family: 'PingFang-SC-Medium';\n    font-size: 0.28rem;\n}\n.Login .logo {\n    padding-top: 1.74rem;\n    padding: 1.62rem 0 1.2rem 0;\n}\n.Login .logo img {\n      width: 2.6rem;\n      height: 2.84rem;\n}\n.Login .form {\n    width: 5.3rem;\n    margin: 0 auto;\n}\n.Login .form .form-group {\n      border-bottom: 1px solid #C6C6C6;\n      padding: 0.18rem 0;\n      margin-bottom: 0.15rem;\n}\n.Login .form .form-group .yd-input {\n        height: 0.46rem;\n        font-size: 0.28rem;\n}\n.Login .form .form-group img.pswicon {\n        width: 0.4rem;\n        height: 0.46rem;\n}\n.Login .form .loginbtn {\n      width: 100%;\n      margin-top: 0.3rem;\n      height: 0.78rem;\n      background: #00A3FF;\n      border-radius: 0.39rem;\n      color: #fff;\n      font-size: 0.31rem;\n      text-align: center;\n}\n.Login .reg {\n    padding-top: 2.5rem;\n    width: 100%;\n    text-align: center;\n}\n.Login .reg span {\n      color: #00A3FF;\n}\n.Login .forget {\n    color: #626262;\n    font-size: 0.24rem;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n}\n.Login .l_footer {\n    text-align: center;\n    margin-top: 1.2rem;\n}\n"],sourceRoot:""}])},TsXO:function(e,t,n){"use strict";var o=n("mvHQ"),s=n.n(o),i=n("//Fk"),a=n.n(i);n("pyzf");t.a={data:function(){return{enterFlg:!0,showLogin:!1,openId:"",username:"",password:"",isFirst:!0,checkbox:!1,ycLogo:!!CONFIG.ssbhbgimg,version:""}},created:function(){var e=this;this.$dialog.loading.close(),this.getVersion(),window.sessionStorage.setItem("isQrCode",2),window.sessionStorage.setItem("loginSellerId","goLogin"),this.$store.commit("login",{}),this.$root.userInfo={},this.$root.config.isSearch?(this.$dialog.loading.open("加载中，请稍后..."),this.postRequest("customer/wxAuthor",{code:this.$root.config.code}).then(function(t){e.$dialog.loading.close(),t&&0==t.data.state&&t.data.aaData.openid?(e.$dialog.loading.open("快捷登录中，请稍后..."),e.openId=t.data.aaData.openid,window.sessionStorage.setItem("openId",e.openId),e.postRequest("",{openId:t.data.aaData.openid,systemId:SYSTEMID,flag:1,authCode:"O0i9",permisson:"no",nac:"y"},!0).then(function(t){e.$dialog.loading.close(),t&&200==t.status&&0==t.data.state?t.data&&0==t.data.state&&(e.$root.config.ssbhbgimg&&8==e.$root.config.systemid?e.whoLogin(t.data):(e.isFirst=!1,t.data.sessionUser.token=t.data.token,"buyer"==t.data.sessionUser.typeId||"purchaser"==t.data.sessionUser.typeId?(e.$dialog.alert({mes:"尊敬的"+t.data.sessionUser.nickName+",请使用供应商账号登录"}),e.showLogin=!0):"main"==t.data.loginUser.extend?e.merchantOrbuyer(t):(e.$dialog.alert({mes:"尊敬的"+t.data.sessionUser.nickName+",请使用供应商账号登录"}),e.showLogin=!0))):(e.$dialog.toast({mes:"快捷登录失败，请使用账号密码登录！",timeout:1500}),e.showLogin=!0)})):e.showLogin=!0})):this.showLogin=!0},mounted:function(){if(this.$store.dispatch("changeNavBarTitle","登录"),localStorage.getItem("accountObj")){var e=JSON.parse(localStorage.getItem("accountObj"));this.checkbox=e.checkbox,this.username=e.username}},methods:{getVersion:function(){var e=this;this.postRequest("datadic/list",{dataType:"SYSTEM_VERSION",key:"01"}).then(function(t){if(0==t.data.state&&t.data.success)for(var n=0;n<t.data.aaData.length;n++)if("SYSTEM_VERSION"==t.data.aaData[n].dataType){e.version=t.data.aaData[n].value;break}})},reg:function(){this.$router.push({name:"UserReg"})},updateMyDetail:function(e){var t=this;return new a.a(function(n,o){t.$nextTick(function(){t.$dialog.confirm({title:" ",mes:"是否将"+t.username+"与微信绑定,方便下次直接登录!",opts:[{txt:"否",color:!1,callback:function(){n()}},{txt:"是",color:!0,callback:function(){t.postRequest("user/updateMyDetail",{wxopenid:sessionStorage.getItem("openId")?sessionStorage.getItem("openId"):"",userId:e.data.sessionUser.userId,token:e.data.token},!1,!0).then(function(e){n(e.data)})}}]})})})},loginBuyer:function(e){var t=this;this.$store.commit("login",e.data.sessionUser),this.$root.userInfo=JSON.parse(localStorage.getItem("quickUserInfo")),sessionStorage.getItem("openId")&&this.isFirst?this.updateMyDetail(e).then(function(e){t.$router.push({name:"Enshrine"})}):this.$router.push({name:"Enshrine"})},loginMerchant:function(e){var t=this;this.$store.commit("login",e.data.sessionUser),this.$root.userInfo=JSON.parse(localStorage.getItem("quickUserInfo"));var n="f_index";7==SYSTEMID&&(n="f_jcgl"),sessionStorage.getItem("openId")&&this.isFirst?this.updateMyDetail(e).then(function(e){t.$router.push({name:n})}):this.$router.push({name:n})},merchantOrbuyer:function(e){"merchant_buyer"==e.data.sessionUser.typeId&&(e.data.sessionUser.typeId="merchant"),this.loginMerchant(e)},downEnter:function(e){if(this.enterFlg){var t=e||window.event;t&&13==t.keyCode&&this.login(!1)}},login:function(e){var t=this;return""==this.username?(this.$dialog.alert({mes:"请输入用户名"}),!1):""==this.password?(this.$dialog.alert({mes:"请输入密码"}),!1):(this.$dialog.loading.open("登录中，请稍后..."),void this.postRequest("",{loginName:this.username,password:this.password,systemId:SYSTEMID,flag:1,permisson:"no",authCode:"O0i9",nac:"y"},!0).then(function(e){if(t.enterFlg=!1,t.$dialog.loading.close(),e&&200==e.status)if(e.data&&0==e.data.state)if(t.$root.config.ssbhbgimg&&8==t.$root.config.systemid)t.whoLogin(e.data);else if(e.data.sessionUser.token=e.data.token,"buyer"==e.data.sessionUser.typeId||"purchaser"==e.data.sessionUser.typeId)t.$dialog.alert({mes:"尊敬的"+e.data.sessionUser.nickName+",请使用供应商账号登录"});else if("main"==e.data.loginUser.extend){var n={checkbox:t.checkbox,username:""};t.checkbox&&(n.username=t.username),window.localStorage.setItem("accountObj",s()(n)),t.merchantOrbuyer(e)}else t.$dialog.alert({mes:"尊敬的"+e.data.sessionUser.nickName+",请使用供应商账号登录"}),t.showLogin=!0;else t.diaConfirm(e.data.msg);else t.diaConfirm(e.data.msg)}))},diaConfirm:function(e){var t=this;this.$dialog.confirm({title:"提示：",mes:e,opts:[{txt:"确定",color:!0,callback:function(){t.enterFlg=!0}}]})},whoLogin:function(e){var t=this;return new a.a(function(n,o){t.postRequest("customer/list",{id:e.sessionUser.typeCode,token:e.token}).then(function(n){0==n.data.state&&n.data.success&&("md"==t.$root.config.loginname?"004"==n.data.aaData[0].extend?(e.sessionUser.typeId="merchant",e.sessionUser.extend=n.data.aaData[0].extend,e.sessionUser.token=e.token,t.$store.commit("login",e.sessionUser),t.$root.userInfo=JSON.parse(localStorage.getItem("quickUserInfo")),t.$router.push({name:"f_index"})):t.$dialog.alert({mes:"请使用门店权限账号登录！"}):"001"==n.data.aaData[0].extend?(e.sessionUser.typeId="merchant",e.sessionUser.extend=n.data.aaData[0].extend,e.sessionUser.token=e.token,t.$store.commit("login",e.sessionUser),t.$root.userInfo=JSON.parse(localStorage.getItem("quickUserInfo")),t.$router.push({name:"f_index"})):t.$dialog.alert({mes:"请使用一批权限账号登录！"}))})})}}}},WIFG:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAuCAYAAABap1twAAAFKUlEQVRYR+2ZWYxTZRTHf+fe223amQGBYRaWsIQ3FZCYCL6QCCb6gMryqHGJCRrDg7YqUUPUoE4xMRq3RHF5ZJFojDFgwotgYhBR3whLWGZhAGGWTpe7HHPbzsgyM71lWqIJ30uTfuec79f/953vnHsr3OhI97bgeY9gyEpRvR1hDhAHMiinVeQvPN2PYXxDsrXvRpeRqh3fPbsI13hNRDaAhir7i62qOzC913l+1tHK9ldbBAdcv8Pk7hWvCLIZCF+3kHIRYQglgTBtDJCColv59cCb7NzgBgUNBvhhX4JhZ7fA6isCZxV2gO5hKPsLsuAyTWdNBma56PEpJGL3gDwssAGIjfgp7KXBWsuzLUNBICsDpnvj4O4VZHk5oCp8jaGvUnCGiDZE0ZxRnLNFCPnTgEQ9csM5wlYCT94QeNT/1p9S9CCYq0m2ZipBVgbs7N4lwtpyoKyiT5Ap/Egs0YBVMFEpwY01HBQJOXjDWSzrfkG2j6ipym5S7esmB5juelKQz0pBNK+urME1jxB1whOCXbuqqEfOKmC6i8XUb0EiZSWfItnx+USQ4yv49vFmMWPHgOnFYB4bi1eG60WxSltV1fDVNI2cfzWJwcdl3wvqZhfy0oL+8WKNv1C6+2WBrUU4YR9Odj2haFNVyo2lpJ0bwIrtFGVVSUU2k2x/q0pAFensPYbofD+Get5ywpFTuPb110tVMgJmqEAhP1cM42AxaVROaKp1IUgpua4ZYyvYeXaxiPF78Rcqhxi2VmLZU4lOkBBBQXPq4YQu0eDsF2FZaQ1rCamWI1UAdm8S4b3SFsgWbD7C0NgNnb1rV/XPoidZQjwj6JZysmwi2fF+cMBt3Z+K8nTp18mDqH0E0wpQ1gLK6Do2hrFEML4v79InpNo3Bgfs7N4jwkNFZ9e9A4lexLRrCBiyUXeamN6fZRG+I9W2phrAvSLlLHPsBUSMPJ5pBdSnspnhOuS9iFih4+VM/olkezGrgyVJunufwH0lZ2M+lpnDK9QQMOzguFHBOzF5QEfm0WReYHDQJDdlzKugsmRXWEQvC42NLgPudLH0ZHDAbT2PoX7N9WICS0FuKzv/DOT8bKkKZCJjKd55UYF7S2b6t8JhMLIIu3mh7asR99KinV0pEXmnZgCTDKQqL5Jq6/TDFAEl3d0DtE4ybi3dezXZ3nYl4MjZOqlqroKCgSO129JK6JbfQ4Y9EXcfMK+46cn2knhlBUcAjyrGUgq5Jqz4zQN0Mko4OiB4h4FFEwN6oWXYhSk1qbuVlBuZ9+tzKHxZDPtQMEDyzZiGGTT+pO1cz4VIf30B/a5ZIh6aN6ruGesO6MMNehkajXjx0zLiVR2RugIW2ycvQ0jSgjyu6BfYmsQw4oHbs7oC+sFjHecl13MKYSbKOY22zSXbNSPwOa4roBF2iE/rk/6eM6OAzW2zyVxsCdxg1B1w4Nx5aZh6ehRw+NIcmmbOuAUY6H7zt/iWgunuf2uxX+qqqST/CwVvZfFkttjvRJqi/eTzPwisUDhAJPIAA7nmwOWurvegX+rCYZe8HcLQFXhygEjIplAw/xulbvTpxn8HGHaIFqz/XjcT6MKcwKiuWzxZON+/KsAG6y6Gck1gjP/uuRZQV8XwPBLRARl2fqvc8mfydxKP3bx2fwQ0k3UlHvljPMBBIAFqo3Km5gIFDSg6G8R/izakyfbG0cdO0l3b/W44aJx626nql6Q6ijylZ98tfQkS7gcC61BN1Btg3PgiQwq7iJnPjfwT9Q9YokdcfaPcIgAAAABJRU5ErkJggg=="},azMD:function(e,t,n){e.exports=n.p+"static/img/logo_ysh@2x.4006bd5.png"},dlhz:function(e,t){e.exports="data:image/png;base64,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"},kxFB:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},wuKz:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s});var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("yd-layout",[e.showLogin?o("div",{staticClass:"Login"},[o("div",{staticClass:"logo flex flex-x-center"},[o("img",{staticStyle:{width:"4.78rem",height:"2.34rem"},attrs:{src:n("azMD"),alt:""}})]),e._v(" "),o("div",{staticClass:"form"},[o("div",{staticClass:"flex form-group"},[o("img",{staticClass:"pswicon",attrs:{src:n("dlhz"),alt:""}}),e._v(" "),o("yd-input",{staticStyle:{"padding-left":"10px"},attrs:{type:"text","show-success-icon":!1,max:"20",placeholder:"请输入用户名"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),o("div",{staticClass:"flex form-group"},[o("img",{staticClass:"pswicon",attrs:{src:n("WIFG"),alt:""}}),e._v(" "),o("yd-input",{staticStyle:{"padding-left":"10px"},attrs:{type:"password","show-success-icon":!1,max:"20",placeholder:"请输入密码"},nativeOn:{keydown:function(t){return e.downEnter(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),o("div",{staticClass:"flex flex-x-end forget"},[o("div",[o("yd-checkbox",{model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}},[e._v("记住账号")])],1)]),e._v(" "),o("div",{staticClass:" flex flex-x-center"},[o("div",{staticClass:"loginbtn flex flex-y-center flex-x-center",on:{click:e.login}},[o("span",[e._v("登录")])])])]),e._v(" "),e._e(),e._v(" "),o("div",{staticClass:"l_footer"},[e._v(e._s(e.$root.config.footerName))]),e._v(" "),o("div",{staticStyle:{"text-align":"center","margin-top":".3rem"}},[e._v("版本号"+e._s(e.version))])]):e._e()])},s=[]}});
//# sourceMappingURL=34.caf08eeb33da3906186a.js.map