"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(z,v){
var j=require('@stdlib/math-base-assert-is-nanf/dist');function m(e,r,n,y){var a,i,t;if(e<=0)return 0;for(a=0,i=y,t=0;t<e;t++)j(r[i])||(a+=1),i+=n;return a}v.exports=m
});var q=u(function(A,c){
var l=require('@stdlib/strided-base-stride2offset/dist'),R=s();function _(e,r,n){return R(e,r,n,l(e,n))}c.exports=_
});var p=u(function(B,d){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=q(),O=s();E(f,"ndarray",O);d.exports=f
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),o,x=g(b(__dirname,"./native.js"));h(x)?o=k:o=x;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
