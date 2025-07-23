import{B as D}from"./BaseWrapper-C006pVb2.js";import{u as N,e as Y}from"./emitter-Bz9VaCba.js";import{u as g}from"./http-CaakouuI.js";import{B as z,c as C,o as $,y as O,q as j,d as E,A as f,D as M,E as L,p as t,w as p,u as a,F as T,a as s,e as k,r as I,t as x,b as V,_ as q}from"./index-i551c2DS.js";import{h as G}from"./moment-C5S46NFB.js";import{s as v}from"./index-BVID-4ga.js";import{s as U,a as h}from"./index-B5-zJ3fb.js";import{s as H}from"./index-InBU1k2x.js";import"./index-Dq7h7Pqt.js";import"./index-CLFI1681.js";var R=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }
`,W={root:function(b){var r=b.props;return["p-floatlabel",{"p-floatlabel-over":r.variant==="over","p-floatlabel-on":r.variant==="on","p-floatlabel-in":r.variant==="in"}]}},J=z.extend({name:"floatlabel",style:R,classes:W}),K={name:"BaseFloatLabel",extends:H,props:{variant:{type:String,default:"over"}},style:J,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},y={name:"FloatLabel",extends:K,inheritAttrs:!1};function Q(u,b,r,i,P,m){return $(),C("span",j({class:u.cx("root")},u.ptmi("root")),[O(u.$slots,"default")],16)}y.render=Q;const X={class:"prof-container"},Z={class:"avatar-wrapper"},ee=["src"],ae={style:{padding:"0",margin:"0","font-size":"30px"}},le={style:{padding:"0",margin:"0",display:"flex","flex-flow":"row wrap","align-items":"center","justify-content":"center"}},te={style:{padding:"0",margin:"0","font-size":"11px"}},oe={style:{display:"flex","justify-content":"center",gap:"0.5rem"}},se={style:{display:"flex","flex-flow":"column",gap:"0.5rem"}},ne={style:{display:"flex",gap:"0.5rem","margin-top":"1rem"}},ie={style:{display:"flex","flex-flow":"column",gap:"0.5rem"}},re={style:{display:"flex",gap:"0.5rem","margin-top":"1rem"}},pe=E({__name:"ClientProfile",setup(u){f(59);const b=N(),r=f({name:"",email:""}),i=M(),P=f(""),m=f(!1),w=f(!1),n=f({oldPass:"",newPass:"",confirmPass:""});L(async()=>{_()});const _=async()=>{await g().httpGet("/users/profile").then(l=>{r.value.name=l.profile.name,r.value.email=l.profile.email,P.value=l.profile.createdAt}).catch(l=>{console.log(l)})},S=()=>{const l=document.createElement("input");l.type="file",l.accept="image/jpeg, image/png",l.click(),l.onchange=e=>{setTimeout(async()=>{i.add({severity:"info",summary:"Please wait...",detail:"Updating your changes...",life:3e3});const c=new FormData;c.append("image",e.target.files[0]),await g().httpPost("/users/profile/avatar/upload",c).then(o=>{setTimeout(()=>{b.setAvatar(o.fileUrl),i.add({severity:"success",summary:"Success!",detail:"Updated!",life:3e3})},2e3)}).catch(o=>{console.log(o),i.add({severity:"error",summary:"Failed!",detail:"Something went wrong",life:3e3})})},1e3)}},d=f(),F=async()=>{if(d.value.name===""){i.add({severity:"error",summary:"Opss",detail:"Please fill all fields",life:3e3});return}await g().httpPost("/users/profile/update",d.value).then(l=>{l.status==200&&(i.add({severity:"success",summary:"Success!",detail:l.message,life:3e3}),m.value=!1,_(),Y.emit("profileUpdated"))}).catch(l=>{console.log(l),i.add({severity:"error",summary:"Failed!",detail:l.response.data.message,life:3e3})})},A=()=>{m.value=!0,d.value={...r.value}},B=async()=>{if(n.value.oldPass===""||n.value.newPass===""||n.value.confirmPass===""){i.add({severity:"error",summary:"Opss",detail:"Please fill all fields",life:3e3});return}if(n.value.newPass.length<8){i.add({severity:"error",summary:"Opss",detail:"New password at lease 8 characters",life:3e3});return}if(n.value.newPass==n.value.oldPass){i.add({severity:"error",summary:"Opss",detail:"New password cannot be the same as the old one",life:3e3});return}if(n.value.newPass!==n.value.confirmPass){i.add({severity:"error",summary:"Opss",detail:"Confirmation password mismatch the new password",life:3e3});return}await g().httpPost("/users/profile/password/update",n.value).then(l=>{i.add({severity:"success",summary:"Success!",detail:l.message,life:3e3}),w.value=!1}).catch(l=>{console.log(l),i.add({severity:"error",summary:"Failed!",detail:l.response.data.message,life:3e3})})};return(l,e)=>{const c=I("fasicon");return $(),C(T,null,[t(D,null,{default:p(()=>[s("div",X,[s("div",Z,[s("img",{src:a(b).getAvatar!=null?a(k).baseUserContent+a(b).getAvatar:a(k).defaultAvatar,alt:"User Avatar"},null,8,ee),s("span",{onClick:S,class:"change-avatar"},[t(c,{icon:"image"})])]),s("h2",ae,x(r.value.name),1),s("p",le,[t(c,{icon:"at"}),V("   "+x(r.value.email),1)]),s("p",te,[t(c,{icon:"door-open"}),V(" joined since "+x(a(G)(P.value).format("DD MMM YYYY")),1)]),s("div",oe,[t(a(v),{onClick:A,label:"Profile",icon:"pi pi-pencil",style:{width:"150px"}}),t(a(v),{onClick:e[0]||(e[0]=o=>w.value=!0),label:"Password",icon:"pi pi-lock",style:{width:"150px"}})])])]),_:1}),t(a(U),{visible:m.value,"onUpdate:visible":e[4]||(e[4]=o=>m.value=o),modal:"",header:"Update Profile",style:{width:"30rem"},"close-on-escape":!0,maximizable:!0},{default:p(()=>[s("div",se,[t(a(y),{variant:"in"},{default:p(()=>[t(a(h),{id:"over_label",modelValue:d.value.name,"onUpdate:modelValue":e[1]||(e[1]=o=>d.value.name=o),style:{width:"100%"}},null,8,["modelValue"]),e[10]||(e[10]=s("label",{for:"over_label"},"Name",-1))]),_:1,__:[10]}),t(a(y),{variant:"in"},{default:p(()=>[t(a(h),{disabled:"",id:"over_label",modelValue:d.value.email,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value.email=o),style:{width:"100%"}},null,8,["modelValue"]),e[11]||(e[11]=s("label",{for:"over_label"},"E-Mail",-1))]),_:1,__:[11]})]),s("div",ne,[t(a(v),{type:"button",label:"Cancel",severity:"secondary",onClick:e[3]||(e[3]=o=>m.value=!1)}),t(a(v),{type:"button",label:"Update",onClick:F})])]),_:1},8,["visible"]),t(a(U),{visible:w.value,"onUpdate:visible":e[9]||(e[9]=o=>w.value=o),modal:"",header:"Update Password",style:{width:"30rem"},"close-on-escape":!0,maximizable:!0},{default:p(()=>[s("div",ie,[t(a(y),{variant:"in"},{default:p(()=>[t(a(h),{id:"over_label",modelValue:n.value.oldPass,"onUpdate:modelValue":e[5]||(e[5]=o=>n.value.oldPass=o),style:{width:"100%"},type:"password"},null,8,["modelValue"]),e[12]||(e[12]=s("label",{for:"over_label"},"Old Password",-1))]),_:1,__:[12]}),t(a(y),{variant:"in"},{default:p(()=>[t(a(h),{id:"over_label",modelValue:n.value.newPass,"onUpdate:modelValue":e[6]||(e[6]=o=>n.value.newPass=o),style:{width:"100%"},type:"password",min:"8"},null,8,["modelValue"]),e[13]||(e[13]=s("label",{for:"over_label"},"New Password",-1))]),_:1,__:[13]}),t(a(y),{variant:"in"},{default:p(()=>[t(a(h),{id:"over_label",modelValue:n.value.confirmPass,"onUpdate:modelValue":e[7]||(e[7]=o=>n.value.confirmPass=o),style:{width:"100%"},type:"password"},null,8,["modelValue"]),e[14]||(e[14]=s("label",{for:"over_label"},"Re-enter New Password",-1))]),_:1,__:[14]})]),s("div",re,[t(a(v),{type:"button",label:"Cancel",severity:"secondary",onClick:e[8]||(e[8]=o=>w.value=!1)}),t(a(v),{type:"button",label:"Update",onClick:B})])]),_:1},8,["visible"])],64)}}}),ge=q(pe,[["__scopeId","data-v-f04263a1"]]);export{ge as default};
