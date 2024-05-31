import{BaseError as t}from"make-error";function r(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,n(t,r)}function n(t,r){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},n(t,r)}var e=/*#__PURE__*/function(t){function n(r,n){var e;return(e=t.call(this,"Invalid digit '"+r+"' for base "+n+".")||this).digit=void 0,e.base=void 0,e.digit=r,e.base=n,e}return r(n,t),n}(t),i=/*#__PURE__*/function(t){function n(r,n,e){var i;return(i=t.call(this,"'"+r+"' must be between 2 and "+e+" not '"+n+"'.")||this).ref=void 0,i.base=void 0,i.maxBase=void 0,i.ref=r,i.base=n,i.maxBase=e,i}return r(n,t),n}(t),o=BigInt(0),u=BigInt(1),a=BigInt(2);function f(t,r){if(r===o)return u;var n=f(t,r/a);return r%a===o?n*n:t*n*n}var c="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/",s=c.split("");function v(t,r){var n=BigInt(r.length);return t.split("").reverse().reduce(function(t,i,o){var u=r.indexOf(i);if(-1===u)throw new e(i,r.length);return t+BigInt(u)*f(n,BigInt(o))},BigInt(0))}function g(t,r,n){var o=s;if(r<2||r>o.length)throw new i("fromBase",r,o.length);if(n<2||n>o.length)throw new i("toBase",n,o.length);var u="-"===t[0],a=u?"-":"",f=(u?t.substring(1):t).split("."),c=f[0],g=f[1],l=void 0===g?"":g,h=o.slice(0,r),d=o.slice(0,n),p=function(t,r){for(var n=BigInt(r.length),e="";t>0;)e=r[Number(t%n)]+e,t=(t-t%n)/n;return e||"0"}(v(c,h),d);if(""!==l){var b=function(t,r){var n=r.length;return t.split("").reduce(function(t,i,o){var u=r.indexOf(i);if(-1===u)throw new e(i,r.length);return t+u/Math.pow(n,o+1)},0)}(l,h),B=function(t,r){for(var n=r.length,e="",i=0;i<10&&0!==t;i++){var o=Math.floor(t*n);e+=r[o],t=t*n-o}return e}(b,d);return a+p+"."+B}return a+p}export{i as InvalidBaseError,e as InvalidDigitError,g as convertBase,c as defaultAlphabet};
//# sourceMappingURL=baseroo.module.js.map