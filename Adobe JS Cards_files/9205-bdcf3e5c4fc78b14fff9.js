(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9205],{88305:function(e,n,t){"use strict";t.d(n,{Z:function(){return A}});var r=t(59937),o=t.n(r),i=t(809),a=t.n(i),c=t(28140),u=t(92447),l=t(32292),s=t(69762),f=t(99246),v="/static/content/checkout";function d(e,n){return e.localeCompare(n)}function p(e,n){return"".concat(v,"/").concat(e).concat(function(e){return Object.keys(e).sort(d).reduce((function(n,t){return"".concat(n,";").concat(t,"=").concat(e[t])}),"")}(n))}function h(e){var n=function(e){var n=e.split("/").pop().split(";"),t=(0,s.Z)(n),r=t[0],o=t.slice(1).reduce((function(e,n){if(null!==n&&void 0!==n&&n.length){var t=n.split("="),r=(0,l.Z)(t,2),o=r[0],i=r[1];"env"!==o&&"host"!==o&&(e[o]=i)}return e}),{});return{resourceName:r,variables:o}}(e);if(n){var t=p(n.resourceName,n.variables);return t.includes("zh-hant")&&(t=t.replace("zh-hant","zh_TW")),t}}var y=function e(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];if(null===t||void 0===t||!t.length)throw new Error("No fetch method is provided");var o=function(){var n=(0,u.Z)(a().mark((function n(){var r,o,i,u,l,s=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(r=s.length,o=new Array(r),i=0;i<r;i++)o[i]=s[i];if(u=t[0],!(l=t.slice(1)).length){n.next=6;break}return n.abrupt("return",u.apply(void 0,o).catch((function(){return e.apply(void 0,(0,c.Z)(l)).apply(void 0,o)})));case 6:return n.abrupt("return",u.apply(void 0,o));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return o};function O(e){return!(null!==e&&void 0!==e&&e.includes(f.R.P_UC_AEM_AUTHOR)||null!==e&&void 0!==e&&e.includes(f.R.UC_AEM_PUBLISH))}function b(e){return null===e||void 0===e?void 0:e.includes(f.R.P_UC_AEM_AUTHOR)}function g(e,n,t){return t&&(e=e.replace("odin.adobe.com","commerce-stg.adobe.com")),e.includes("zh-hant")&&(e=e.replace("zh-hant","zh_TW")),n&&(e="".concat(e,";").concat(n)),e}var m=t(10982),E=t(59831),P=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=function(){var n=arguments.length<=0?void 0:arguments[0],t=h(n);if(t)return e("".concat((0,E.jU)()).concat(o().STORE).concat(t),arguments.length<=1?void 0:arguments[1]);throw new Error("Cannot find a static URL for content")},a=function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o[0]=g(o[0],r,t),e.apply(void 0,o).then((function(e){if(e.ok)return e;throw new Error("Failed to fetch AEM resource")}))};return n?y(i,a):y(a,i)},A=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return P(m.fetch,!n&&O(e),b(e),n)}},59205:function(e,n,t){"use strict";t.d(n,{O:function(){return ie}});var r=t(809),o=t.n(r),i=t(26265),a=t(32292),c=t(92447),u=t(38347),l=t(67294),s=t(37244),f=t.n(s),v=t(34937),d=t(27261),p=t(74047),h=t(52700),y=t(88305),O=t(76410),b=t(73864),g=t(15074),m=t(87835),E=t(99246),P=t(20544);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function w(){var e=(0,d.Z)(["\n        ","\n      "]);return w=function(){return e},e}var T=new Set(b.SUPPORTED_VALUES.LANGUAGES),I=function(){function e(n,t){(0,p.Z)(this,e),(0,i.Z)(this,"client",void 0),(0,i.Z)(this,"logger",void 0),this.client=t}return(0,h.Z)(e,[{key:"fetch",value:function(){var e=(0,c.Z)(o().mark((function e(n,t){var r,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.query({query:(0,O.Ps)(w(),n.toQuery()),variables:t,context:{content:!0}});case 2:if(r=e.sent,i=r.data,!(a=r.error)){e.next=7;break}throw a;case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()}]),e}(),C=function(){function e(n){(0,p.Z)(this,e),(0,i.Z)(this,"logger",void 0),this.logger=n}return(0,h.Z)(e,[{key:"fetch",value:function(e,n,t,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";if(!T.has(n.locale))return Promise.reject(new Error("Unsupported content language"));var i=null===r||void 0===r?void 0:r.includes(E.R.P_UC_AEM_AUTHOR);i&&(n._ts="".concat(Date.now()));var a={logger:this.logger,timeout:b.DEFAULT_HTTP_TIMEOUT};return(0,g.fetchPersistentQuery)({queryName:"checkout/".concat(t),variables:_(_({},n),{},{env:(0,P.D)()}),options:{fetchOptions:a,fetch:(0,y.Z)(r,o)},env:m.T.PRODUCTION}).then((function(e){return null===e||void 0===e?void 0:e.data}))}}]),e}(),S=function(){function e(n,t){(0,p.Z)(this,e),(0,i.Z)(this,"fetcher",void 0),this.fetcher=void 0===t?new C(n):new I(n,t)}return(0,h.Z)(e,[{key:"fetch",value:function(e,n,t,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return this.fetcher.fetch(e,n,t,r,o)}}]),e}(),j=t(70558);function k(){var e=(0,d.Z)(["\n  query GET_PERSONALIZED_CONTENT($input: PersonalizedContentInput!) {\n    personalizedContent(input: $input) {\n      surfaceId\n      containers {\n        containerId\n        containerLabel\n        data\n        dataType\n        analytics {\n          actionBlockId\n          campaignId\n          containerId\n          controlGroupId\n          treatmentId\n          variationId\n        }\n      }\n    }\n  }\n"]);return k=function(){return e},e}var D=(0,O.Ps)(k());function Z(e,n,t,r,o,i,a,c,u,l){var s=[];return o&&s.push({name:"comSourcePageName",value:o}),i&&s.push({name:"comProductArrangementCode",value:i}),a&&s.push({name:"comDeviceType",value:a.isMobile||a.isTablet?j.DeviceType.mobile:j.DeviceType.desktop}),c&&s.push({name:"comMarketSegment",value:c}),u&&s.push({name:"comOfferId",value:u}),l&&s.push({name:"comOfferType",value:l}),{input:{clientId:e,country:n,locale:t,surfaceId:"unified_checkout_v3",svar:r,additionalParameters:s}}}var R=t(28140),U=t(7187),N=t.n(U),x="floodgate",M=t(1375),z=t(24129);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}(0,M.B0)();var q="AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg",B=function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=(null===t||void 0===t||null===(e=t.match("(^|;)\\s*".concat(q,"\\s*=\\s*([^;]+)")))||void 0===e?void 0:e.pop())||"";return r=(null===(n=r.match(/MCMID%7C([0-9]+)/))||void 0===n?void 0:n[1])||""};var H=function(){var e=(0,c.Z)(o().mark((function e(n){var t,r,i,a,c,u,l,s,f,v,d,p,h,y,O,b,g,m,E,P,A;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appContext,a=n.cookie,c=n.logger,u=n.userAccessToken,l=n.personalizationParameters,s={features:[],featuresAnalytics:[]},e.next=4,null===i||void 0===i||null===(t=i.res)||void 0===t?void 0:t.floodgateClientSDK;case 4:if(f=e.sent){e.next=8;break}return null===c||void 0===c||c.error({label:x},"Floodgate not initialized; returning empty list"),e.abrupt("return",s);case 8:return v=l.additionalParameters,d=void 0===v?[]:v,p=l.clientId,h=l.svar,y=void 0===h?"":h,O=l.country,b=void 0===O?"":O,g=l.locale,m=l.surfaceId,E=B(a)||(null===i||void 0===i||null===(r=i.res)||void 0===r?void 0:r[z.s.CLIENT_SESSION_ID]),P=F(F({},u?{userAccessToken:u}:{}),{},{visitorId:E}),A=null===d||void 0===d?void 0:d.reduce((function(e,n){var t=n.name,r=n.value;return e[t]=r,e}),{}),e.prev=12,e.next=15,new Promise((function(e){f.getFeatures(F(F({},P),{},{clientId1:"unified_checkout_server_v3_audience",visitorId:E,context:F({analyticsParams:"visitorId",comClientUi:y,comCountry:b,comCustomerUi:p,comLocale:g,surfaceId:m,visitorId:E},A),meta:!0}),(function(n,t){if(n)return null===c||void 0===c||c.error({label:x,error:n},"Error retrieving audience features"),void e(s);var r=(s=V(t)).features;null===c||void 0===c||c.info({label:x},"Retrieved audience features: ".concat((0,R.Z)(r))),e(s)}))}));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(12),null===c||void 0===c||c.error({label:x,error:e.t0},"Error retrieving audience features");case 20:return e.abrupt("return",s);case 21:case"end":return e.stop()}}),e,null,[[12,17]])})));return function(n){return e.apply(this,arguments)}}();function V(e){var n={features:[],featuresAnalytics:[]};return Array.isArray(e)?(e.forEach((function(e){Array.isArray(null===e||void 0===e?void 0:e.features)&&(n.features=[].concat((0,R.Z)(n.features),(0,R.Z)(e.features))),Array.isArray(null===e||void 0===e?void 0:e.release_analytics_params)&&(n.featuresAnalytics=[].concat((0,R.Z)(n.featuresAnalytics),(0,R.Z)(e.release_analytics_params)))})),n):n}function G(e){var n=N()(null===e||void 0===e?void 0:e.replace(/\s/g,""));return n?n.split(","):void 0}function K(e,n){var t=G(null===n||void 0===n?void 0:n[f().app.ADD_FEATURES.name]),r=G(null===n||void 0===n?void 0:n[f().app.REMOVE_FEATURES.name]),o=Array.from(e||[]);return null!==t&&void 0!==t&&t.length&&(o=o.concat(t)),null!==r&&void 0!==r&&r.length&&(o=o.filter((function(e){return!r.includes(e)}))),Array.from(new Set((0,R.Z)(o)))}var Q=function(){var e=(0,c.Z)(o().mark((function e(n){var t,r,i,a,c,u,l,s,f,v,d,p,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.appContext,r=n.cookie,i=n.features,a=void 0===i?[]:i,c=n.logger,u=n.personalizationParameters,l=n.queryParams,s=n.userAccessToken,f=n.visitorId,e.next=3,H({appContext:t,cookie:r,userAccessToken:s,logger:c,personalizationParameters:u,visitorId:f});case 3:return v=e.sent,d=v.features,p=v.featuresAnalytics,h=K([].concat((0,R.Z)(a),(0,R.Z)(d)),l),e.abrupt("return",{features:h,featuresAnalytics:p});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),$=t(96029),W=t(65455),Y=t(47758),J=t(10975),X=t(19291),ee=t(2385),ne=t(57332),te=l.createElement;function re(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?re(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ie=function(e,n){return function(t){var r=function(n){var r=n.content,o=(0,u.Z)(n,["content"]);return te(v.ContentEntryProvider,{value:r,model:e},te(t,o))};return r.getInitialProps=function(){var r=(0,c.Z)(o().mark((function r(i){var c,u,l,s,v,d,p,h,y,O,b,g,m,P,A,_,w,T,I,C,j,k,R,U,N,x,M,z,L,F,q,B,H,V,G,K,te,re,ie,ae,ce,ue,le,se,fe,ve,de,pe,he,ye,Oe,be,ge,me;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(l=i.store,s=i.logger,v=i.features,d=i.apolloClient,p=l.getState(),h=l,y=(0,W.n$)(p),(0,X.Lf)()||null===v||void 0===v||!v.includes(E.R.P_UC_PERSONALIZED_CONTENT)){r.next=36;break}if(P=null===(O=h.getAccessToken)||void 0===O?void 0:O.call(h),A=(0,$.vl)(p),_=(0,W.mT)(p),w=(0,$.i2)(p),T=(0,$.tD)(p),I=null===A||void 0===A?void 0:A[f().app.PA_CODE.name],C=h.getUserDeviceDetails(),j=null===A||void 0===A?void 0:A[f().app.MARKET_SEGMENT.name],k=null===(b=h.getQueryParamsOfferIds())||void 0===b?void 0:b[0],R=n===ne.Z.SEGMENTATION?(null===A||void 0===A?void 0:A[f().app.OFFER_TYPE.name])||ee.m_.Base:void 0,U={Cookie:null===(g=i.req)||void 0===g||null===(m=g.headers)||void 0===m?void 0:m.cookie},P&&(U[J.A.name.AUTHORIZATION]="Bearer ".concat(P)),N=Z(w,_,y,T,n,I,C,j,k,R),x=N.input,M=x.clientId,z=x.locale,L=x.surfaceId,!(M&&z&&L)){r.next=36;break}return re=Q({appContext:i,cookie:null===(F=i.req)||void 0===F||null===(q=F.headers)||void 0===q?void 0:q.cookie,features:v,logger:s,personalizationParameters:N.input,queryParams:A,userAccessToken:P}),ie=d.query({query:D,variables:N,context:{headers:U}}),r.next=24,Promise.all([ie,re]);case 24:ae=r.sent,ce=(0,a.Z)(ae,2),ue=ce[0],le=ce[1],se=le.features,fe=le.featuresAnalytics,i.features=(0,Y.h)(se),ve={},de=[],null===ue||void 0===ue||null===(B=ue.data)||void 0===B||null===(H=B.personalizedContent)||void 0===H||null===(V=H.containers)||void 0===V||V.forEach((function(e){ve[e.containerLabel]=e.data,null!==e&&void 0!==e&&e.analytics&&de.push(null===e||void 0===e?void 0:e.analytics)})),null===(G=h.setPersonalizedContentVariationsState)||void 0===G||G.call(h,ve),null===(K=h.setPersonalizedContentAnalyticsData)||void 0===K||K.call(h,de),null===(te=h.setPersonalizedContentFloodgateAudienceFlags)||void 0===te||te.call(h,fe);case 36:return pe=(null===(c=h.getPersonalizedContentVariationByAEMQueryName)||void 0===c?void 0:c.call(h,n))||"",he=new S(s).fetch(e,{locale:y},n,v,pe),ye=null===(u=t.getInitialProps)||void 0===u?void 0:u.call(t,i),r.next=41,Promise.all([ye,he]);case 41:return Oe=r.sent,be=(0,a.Z)(Oe,2),ge=be[0],me=be[1],r.abrupt("return",oe(oe({},ge),{},{content:me}));case 46:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),r}}},47758:function(e,n,t){"use strict";t.d(n,{h:function(){return a},N:function(){return c}});var r,o=t(19291),i=t(67294);function a(e){var n=e||r||[];return(0,o.Lf)()&&!r&&(r=n),n}function c(e){return(0,i.useMemo)((function(){return a(e)}),[e])}},24129:function(e,n,t){"use strict";t.d(n,{s:function(){return r}});var r={ADOBE_ACCESS_TOKEN:"adobeAccessToken",ADOBE_USER_PROFILE:"adobeUserProfile",ADOBE_AUTH_SOURCE:"adobeAuthSource",APP_FEATURES:"features",CLIENT_SESSION_ID:"clientSessionId"}},1375:function(e,n,t){"use strict";t.d(n,{Zb:function(){return f},Ib:function(){return v},B0:function(){return d}});var r=t(26265),o=t(41681),i=t(97803),a=t(24817),c=t(34155);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e){return(0,a.Z0)(e)?c.env.IMS_CLT_APP_SECRET:c.env.IMS_CLT_SECRET}function f(e){return l(l({},(0,o.ft)(e)),{},{secret:s(e)})}function v(){return{domain:(0,o.Fy)(),clientId:d(),secret:c.env.IMS_SVR_SECRET,authCode:c.env.IMS_SVR_AUTH_CODE}}function d(){return i.$.UNIFIED_CHECKOUT_SERVER}}}]);