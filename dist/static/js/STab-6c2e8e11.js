import{a7 as r,x as i,q as c,a8 as s,F as p,aj as h,k as d,o as a,ac as u,ab as m,aY as T}from"./plugins-libs-4a048428.js";const $={name:"STab",props:["relationKey"],setup(t,l){const{parent:e}=i(t.relationKey);return{parent:e}},data(){return{tabsActive:0}},mounted(){this.init()},activated(){this.init()},deactivated(){this.setScrollCache()},beforeUnmount(){this.setScrollCache()},methods:{init(){c(()=>{let t=this.parent.getScrollTop(this.$options.name,this.$el.scrollTop);t!=null&&(this.$el.scrollTop=t,console.log("mounted",this.$el.scrollTop))})},setScrollCache(){this.parent.setScrollTop(this.$options.name,this.$el.scrollTop),console.log("beforeUnmount",this.$el.scrollTop)},btnclick(t){t==1?this.$router.push({path:"/list"}):t==2&&this.$router.push({path:"/allTest"})},rendered(){setTimeout(()=>{let t=this.parent.getScrollTop(this.$options.name,this.$el.scrollTop);t!=null&&(this.$el.scrollTop=t,console.log("mounted",this.$el.scrollTop))},20)}}},f={class:"backto",style:{background:"white"}};function _(t,l,e,b,k,g){const n=T;return a(),s("div",f,[(a(),s(p,null,h(100,o=>u("div",{key:100+o},m(o)+"测试van-back-top ",1)),64)),d(n,{bottom:90,target:".backto"})])}const v=r($,[["render",_]]);export{v as default};
