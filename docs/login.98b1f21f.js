parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V6cR":[function(require,module,exports) {
var e=document.getElementById("menu-mobile");function o(e){e.stopPropagation(),document.getElementById("mobileMenu").classList.toggle("show"),console.log("entro showMenu()"),console.log(document.getElementById("mobileMenu").getElementsByClassName("show"))}function n(){var e=document.getElementById("mobileMenu");e.classList.contains("show")&&(e.classList.remove("show"),console.log("Me sali"))}window.addEventListener("click",n),e.addEventListener("click",o);
},{}],"vRFQ":[function(require,module,exports) {

},{}],"q0Yr":[function(require,module,exports) {
"use strict";require("./dropdown.js"),require("../sass/main.scss");var s=$("#inputName"),a=$("#inputSurnameA"),i=$("#inputSurnameB"),l=$("#inputEmailA"),n=$("#inputEmailB"),d=$("#inputPasswordA"),v=$("#inputPasswordB"),e=$("#inputEmail"),o=$("#inputPassword"),r=[];s.keypress(function(){s.removeClass("is-invalid")}),s.blur(function(){s.removeClass("is-invalid")}),a.keypress(function(){a.removeClass("is-invalid")}),a.blur(function(){a.removeClass("is-invalid")}),i.keypress(function(){i.removeClass("is-invalid")}),i.blur(function(){i.removeClass("is-invalid")}),l.keypress(function(){l.removeClass("is-invalid"),$("#mail").css("display","none")}),l.blur(function(){l.removeClass("is-invalid"),$("#mail").css("display","none")}),n.keypress(function(){n.removeClass("is-invalid")}),n.blur(function(){n.removeClass("is-invalid")}),d.keypress(function(){d.removeClass("is-invalid"),$("#pass1").css("display","none")}),d.blur(function(){d.removeClass("is-invalid"),$("#pass1").css("display","none")}),v.keypress(function(){v.removeClass("is-invalid"),$("#pass2").css("display","none")}),v.blur(function(){v.removeClass("is-invalid"),$("#pass2").css("display","none")});var u=function(){!s.val()&&s.addClass("is-invalid"),!a.val()&&a.addClass("is-invalid"),!i.val()&&i.addClass("is-invalid"),!l.val()&&l.addClass("is-invalid"),!n.val()&&n.addClass("is-invalid"),!d.val()&&d.addClass("is-invalid"),!v.val()&&v.addClass("is-invalid"),console.log(d.val(),v.val()),s.val()&&a.val()&&i.val()&&l.val()&&n.val()&&d.val()&&""!==v.val()&&t(l.val(),n.val())&&c(d.val(),v.val())&&m()};window.validateInputsRegister=u;var t=function(s,a){return s==a||(l.addClass("is-invalid"),n.addClass("is-invalid"),$("#mail").css("display","block"),!1)},c=function(s,a){return s==a?(console.log(s,a),s.length<6?(d.addClass("is-invalid"),$("#pass1").css("display","block"),v.addClass("is-invalid"),!1):(console.log("entre a más de 6 carácteres"),!0)):(d.addClass("is-invalid"),v.addClass("is-invalid"),$("#pass2").css("display","block"),!1)},p=function(){!e.val()&&e.addClass("is-invalid"),!o.val()&&o.addClass("is-invalid"),e.val()&&""!==o.val()&&add()},m=function(){var n={name:s.val(),firstSurname:a.val(),lastSurname:i.val(),email:l.val(),password:d.val()};r.push(n),console.log(r)};
},{"./dropdown.js":"V6cR","../sass/main.scss":"vRFQ"}]},{},["q0Yr"], null)
//# sourceMappingURL=/login.98b1f21f.js.map