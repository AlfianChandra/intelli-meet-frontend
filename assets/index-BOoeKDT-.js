import{s as d}from"./index-CT-DrmgN.js";import{B as y,c as v,o as m,y as h,q as g,aJ as _,a4 as c,aK as S}from"./index-DP13NJlI.js";var P=`
    .p-iftalabel {
        display: block;
        position: relative;
    }

    .p-iftalabel label {
        position: absolute;
        pointer-events: none;
        top: dt('iftalabel.top');
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-size: dt('iftalabel.font.size');
        font-weight: dt('iftalabel.font.weight');
        inset-inline-start: dt('iftalabel.position.x');
        color: dt('iftalabel.color');
        transition-duration: dt('iftalabel.transition.duration');
    }

    .p-iftalabel .p-inputtext,
    .p-iftalabel .p-textarea,
    .p-iftalabel .p-select-label,
    .p-iftalabel .p-multiselect-label,
    .p-iftalabel .p-autocomplete-input-multiple,
    .p-iftalabel .p-cascadeselect-label,
    .p-iftalabel .p-treeselect-label {
        padding-block-start: dt('iftalabel.input.padding.top');
        padding-block-end: dt('iftalabel.input.padding.bottom');
    }

    .p-iftalabel:has(.p-invalid) label {
        color: dt('iftalabel.invalid.color');
    }

    .p-iftalabel:has(input:focus) label,
    .p-iftalabel:has(input:-webkit-autofill) label,
    .p-iftalabel:has(textarea:focus) label,
    .p-iftalabel:has(.p-inputwrapper-focus) label {
        color: dt('iftalabel.focus.color');
    }

    .p-iftalabel .p-inputicon {
        top: dt('iftalabel.input.padding.top');
        transform: translateY(25%);
        margin-top: 0;
    }
`,k={root:"p-iftalabel"},w=y.extend({name:"iftalabel",style:P,classes:k}),$={name:"BaseIftaLabel",extends:d,style:w,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},A={name:"IftaLabel",extends:$,inheritAttrs:!1};function C(e,t,n,r,a,l){return m(),v("span",g({class:e.cx("root")},e.ptmi("root")),[h(e.$slots,"default")],16)}A.render=C;function o(e){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(e)}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function E(e,t,n){return t&&j(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e){var t=x(e,"string");return o(t)=="symbol"?t:t+""}function x(e,t){if(o(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var V=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};L(this,e),this.element=t,this.listener=n}return E(e,[{key:"bindScrollListener",value:function(){this.scrollableParents=_(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}])}();function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function B(e){return z(e)||M(e)||T(e)||I()}function I(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(e,t){if(e){if(typeof e=="string")return f(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function M(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function z(e){if(Array.isArray(e))return f(e)}function f(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function q(e,t,n){return t&&K(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=J(e,"string");return s(t)=="symbol"?t:t+""}function J(e,t){if(s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var W=function(){function e(t){var n=t.init,r=t.type;H(this,e),p(this,"helpers",void 0),p(this,"type",void 0),this.helpers=new Set(n),this.type=r}return q(e,[{key:"add",value:function(n){this.helpers.add(n)}},{key:"update",value:function(){}},{key:"delete",value:function(n){this.helpers.delete(n)}},{key:"clear",value:function(){this.helpers.clear()}},{key:"get",value:function(n,r){var a=this._get(n,r),l=a?this._recursive(B(this.helpers),a):null;return c(l)?l:null}},{key:"_isMatched",value:function(n,r){var a,l=n?.parent;return(l==null||(a=l.vnode)===null||a===void 0?void 0:a.key)===r||l&&this._isMatched(l,r)||!1}},{key:"_get",value:function(n,r){var a,l;return((a=r||n?.$slots)===null||a===void 0||(l=a.default)===null||l===void 0?void 0:l.call(a))||null}},{key:"_recursive",value:function(){var n=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=[];return a.forEach(function(i){i.children instanceof Array?l=l.concat(n._recursive(l,i.children)):i.type.name===n.type?l.push(i):c(i.key)&&(l=l.concat(r.filter(function(u){return n._isMatched(u,i.key)}).map(function(u){return u.vnode})))}),l}}])}();function Y(e,t){if(e){var n=e.props;if(n){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=Object.prototype.hasOwnProperty.call(n,r)?r:t;return e.type.extends.props[t].type===Boolean&&n[a]===""?!0:n[a]}}return null}var Z=S();export{V as C,Z as O,W as _,Y as g,A as s};
