(window.webpackJsonp=window.webpackJsonp||[]).push([["mui-cputils"],{2096:function(e,t,r){var i,s;i=[r(16),r(9),r(11),r(2),r(13),r(35),r(6),r(1),r(63),r(96),r(103),r(17)],void 0===(s=function(e,t,r,i,s,n,o,a,c,u,p,h){"use strict";var d=new o.default({color:"orange",name:"publisher"});return r.Model.extend({_defaultCategories:{dflt:[{id:"business",name:h.getString("share-cp-category-business")},{id:"causes",name:h.getString("share-cp-category-causes")},{id:"education",name:h.getString("share-cp-category-education")},{id:"events",name:h.getString("share-cp-category-events")},{id:"food",name:h.getString("share-cp-category-food")},{id:"how_to",name:h.getString("share-cp-category-howto")},{id:"lifestyle",name:h.getString("share-cp-category-lifestyle")},{id:"photography",name:h.getString("share-cp-category-photography")},{id:"sports",name:h.getString("share-cp-category-sports")},{id:"stories",name:h.getString("share-cp-category-stories")},{id:"travel",name:h.getString("share-cp-category-travel")},{id:"other",name:h.getString("share-cp-category-other")}]},initialize:function(e){this._pubController=e.pubController,this.cpService=a.cps,this.apiKey=a.cpkey,this.publishedContentBases=a.publishedContentBases,this._htCC={},this.confirmView=p,n.featuresLoaded().then(function(){n.hasFeature("use-published-content-base-override")&&"object"==typeof a.publishedContentBasesOverride&&t.assign(this.publishedContentBases,a.publishedContentBasesOverride)}.bind(this))},checkPublishState:function(e){return this._pubController.checkPublishState(e)},checkUnpublishedState:function(e,t){return this._pubController.checkUnpublishedState(e,t)},remixDoc:function(e,t,r){var s=i.defer(),n=u.getAppByType(e),o=n.registeredName?n.registeredName:e;return n.load().then((function(){var i=n.getStorageImpl();"function"==typeof i.doRemix?i.doRemix(e,t,r).then(function(e){s.resolve(e)}.bind(this),(function(e){s.reject(e)})):s.reject("app "+o+" does not support remix")}),(function(){s.reject("app "+o+" failed to load")})),s.promise},_verifyAssetId:function(e){var t=e.mrvlDoc,r=t.getMyApp(),s=!t.IS_REF&&"ginger-snap"===r.registeredName,n=!t.IS_REF&&r.isDocPublished(t);if(s)return n?i(r.getCPAlias(t)||r.getCPAssetId(t)):i();var o=!t.IS_REF&&r.getCPProjectId(t);return!o&&(o=r.generateCPProjectId(t)),this.checkPublishState(o).then((function(e,t,r){var i=e.id;return 0===i.indexOf("US/")&&(i=i.substr(3)),i}),(function(e,t,r){return 404!==e.status&&d.error("non-404 error checking publish state:"+r,e),e}))},_defaultUnpublishCompositeDoc:function(e){var t=e.mrvlDoc,r=t.getMyApp(),n=i.defer();return this._verifyAssetId(e).then(function(i){if(i){var o=r.getCPCommunity(),a="https://"+this.cpService+"/api/v2/"+o+"/assets/"+i;s.ajax({type:"DELETE",url:a,headers:{Accept:"*/*","X-Api-Key":this.apiKey},success:function(i){e.isDelete?n.resolve(i):r.resetDocPublishData(t,n)}.bind(this),error:function(i){if(i&&404===i.status)e.isDelete?n.resolve():r.resetDocPublishData(t,n);else{var s="Unpublish error: "+i.status;d.error(s,i),n.reject({reason:s,xhr:i})}}.bind(this)})}else e.isDelete?n.resolve():r.resetDocPublishData(t,n)}.bind(this),(function(e){if(404!==e.status){var t="Non-404 verify asset error in unpublish: "+e.status;d.error(t,e),n.reject({reason:t,xhr:e})}else n.resolve()})),n.promise},unpublishCompositeDoc:function(e){var t=e.mrvlDoc,r=i.defer(),s=t.getMyApp();t.get("syncGroupName");return e.isDelete?r.resolve():t.pull().then((function(){r.resolve()}),(function(e){return d.error("publisher failed to unpublish, dcx pull failed",e),i.reject(e)})),r.promise.then(function(){return s.load().then(function(){var r=s.getPublishImpl();return r&&r.unpublishCompositeDocIfNeeded?r.unpublishCompositeDocIfNeeded(e).then((function(e){return e}),(function(e){return d.error("Unpublish error in implementation!",{error:e,doc:t}),i.reject(e)})):this._defaultUnpublishCompositeDoc(e)}.bind(this))}.bind(this))},appNameFromCommunity:function(e){if(!this.communityToApp){var r={};t.each(u.apps,(function(e){r[e.getConfig().community]=e.getAppTypeID()})),this.communityToApp=r}return this.communityToApp[e]},cpLink:function(e,t,r){var i=this.appNameFromCommunity(e),s=this.publishedContentBases[i];return r||(d.warn("cpLink called with no cpAlias",{community:e,cpAssetId:t}),r=t),s+"/"+r+"/"},getHardCodedCommunityCategories:function(e,t){return this._defaultCategories?this._defaultCategories[e]?this._defaultCategories[e]:this._defaultCategories.dflt:null},getCommunityCategories:function(e,t){if(!this._htCC[e]){var r=i.defer(),n=this.getHardCodedCommunityCategories(e,t);this._htCC[e]=r,n?r.resolve(n):s.ajax({type:"GET",url:"https://"+this.cpService+"/api/v2/"+e+"/categories",headers:{Accept:"application/hal+json","X-Api-Key":this.apiKey},success:function(e){var i,s,n=[];if(e&&e._embedded&&e._embedded.categories){for(s=0;s<e._embedded.categories.length;s++)if(e._embedded.categories[s].id===t){i=e._embedded.categories[s];break}i&&(n=i.sub_categories)}r.resolve(n)},error:function(e){r.reject(e)}})}return this._htCC[e].promise}})}.apply(t,i))||(e.exports=s)}}]);
//# sourceMappingURL=mui-cputils-a2db3046.js.map