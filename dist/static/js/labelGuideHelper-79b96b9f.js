import{aS as Z,aV as x,d9 as D,aJ as O,V as F,aq as H,da as _,be as B,aX as z,f as K,aY as W,db as $,dc as E,dd as G}from"./SeriesDataSchema-e01fbb85.js";var q=Math.PI*2,I=Z.CMD,N=["top","right","bottom","left"];function aa(e,s,o,a,v){var f=o.width,n=o.height;switch(e){case"top":a.set(o.x+f/2,o.y-s),v.set(0,-1);break;case"bottom":a.set(o.x+f/2,o.y+n+s),v.set(0,1);break;case"left":a.set(o.x-s,o.y+n/2),v.set(-1,0);break;case"right":a.set(o.x+f+s,o.y+n/2),v.set(1,0);break}}function ra(e,s,o,a,v,f,n,i,h){n-=e,i-=s;var u=Math.sqrt(n*n+i*i);n/=u,i/=u;var r=n*o+e,c=i*o+s;if(Math.abs(a-v)%q<1e-4)return h[0]=r,h[1]=c,u-o;if(f){var b=a;a=G(v),v=G(b)}else a=G(a),v=G(v);a>v&&(v+=q);var t=Math.atan2(i,n);if(t<0&&(t+=q),t>=a&&t<=v||t+q>=a&&t+q<=v)return h[0]=r,h[1]=c,u-o;var m=o*Math.cos(a)+e,M=o*Math.sin(a)+s,p=o*Math.cos(v)+e,S=o*Math.sin(v)+s,k=(m-n)*(m-n)+(M-i)*(M-i),w=(p-n)*(p-n)+(S-i)*(S-i);return k<w?(h[0]=m,h[1]=M,Math.sqrt(k)):(h[0]=p,h[1]=S,Math.sqrt(w))}function R(e,s,o,a,v,f,n,i){var h=v-e,u=f-s,r=o-e,c=a-s,b=Math.sqrt(r*r+c*c);r/=b,c/=b;var t=h*r+u*c,m=t/b;i&&(m=Math.min(Math.max(m,0),1)),m*=b;var M=n[0]=e+m*r,p=n[1]=s+m*c;return Math.sqrt((M-v)*(M-v)+(p-f)*(p-f))}function Y(e,s,o,a,v,f,n){o<0&&(e=e+o,o=-o),a<0&&(s=s+a,a=-a);var i=e+o,h=s+a,u=n[0]=Math.min(Math.max(v,e),i),r=n[1]=Math.min(Math.max(f,s),h);return Math.sqrt((u-v)*(u-v)+(r-f)*(r-f))}var C=[];function ea(e,s,o){var a=Y(s.x,s.y,s.width,s.height,e.x,e.y,C);return o.set(C[0],C[1]),a}function va(e,s,o){for(var a=0,v=0,f=0,n=0,i,h,u=1/0,r=s.data,c=e.x,b=e.y,t=0;t<r.length;){var m=r[t++];t===1&&(a=r[t],v=r[t+1],f=a,n=v);var M=u;switch(m){case I.M:f=r[t++],n=r[t++],a=f,v=n;break;case I.L:M=R(a,v,r[t],r[t+1],c,b,C,!0),a=r[t++],v=r[t++];break;case I.C:M=E(a,v,r[t++],r[t++],r[t++],r[t++],r[t],r[t+1],c,b,C),a=r[t++],v=r[t++];break;case I.Q:M=$(a,v,r[t++],r[t++],r[t],r[t+1],c,b,C),a=r[t++],v=r[t++];break;case I.A:var p=r[t++],S=r[t++],k=r[t++],w=r[t++],j=r[t++],A=r[t++];t+=1;var J=!!(1-r[t++]);i=Math.cos(j)*k+p,h=Math.sin(j)*w+S,t<=1&&(f=i,n=h);var Q=(c-p)*w/k+p;M=ra(p,S,w,j,j+A,J,Q,b,C),a=Math.cos(j+A)*k+p,v=Math.sin(j+A)*w+S;break;case I.R:f=a=r[t++],n=v=r[t++];var U=r[t++],X=r[t++];M=Y(f,n,U,X,c,b,C);break;case I.Z:M=R(a,v,f,n,c,b,C,!0),a=f,v=n;break}M<u&&(u=M,o.set(C[0],C[1]))}return u}var T=new x,y=new x,l=new x,P=new x,L=new x;function na(e,s){if(e){var o=e.getTextGuideLine(),a=e.getTextContent();if(a&&o){var v=e.textGuideLineConfig||{},f=[[0,0],[0,0],[0,0]],n=v.candidates||N,i=a.getBoundingRect().clone();i.applyTransform(a.getComputedTransform());var h=1/0,u=v.anchor,r=e.getComputedTransform(),c=r&&K([],r),b=s.get("length2")||0;u&&l.copy(u);for(var t=0;t<n.length;t++){var m=n[t];aa(m,0,i,T,P),x.scaleAndAdd(y,T,P,b),y.transform(c);var M=e.getBoundingRect(),p=u?u.distance(y):e instanceof W?va(y,e.path,l):ea(y,M,l);p<h&&(h=p,y.transform(r),l.transform(r),l.toArray(f[0]),y.toArray(f[1]),T.toArray(f[2]))}oa(f,s.get("minTurnAngle")),o.setShape({points:f})}}}var g=[],d=new x;function oa(e,s){if(s<=180&&s>0){s=s/180*Math.PI,T.fromArray(e[0]),y.fromArray(e[1]),l.fromArray(e[2]),x.sub(P,T,y),x.sub(L,l,y);var o=P.len(),a=L.len();if(!(o<.001||a<.001)){P.scale(1/o),L.scale(1/a);var v=P.dot(L),f=Math.cos(s);if(f<v){var n=R(y.x,y.y,l.x,l.y,T.x,T.y,g,!1);d.fromArray(g),d.scaleAndAdd(L,n/Math.tan(Math.PI-s));var i=l.x!==y.x?(d.x-y.x)/(l.x-y.x):(d.y-y.y)/(l.y-y.y);if(isNaN(i))return;i<0?x.copy(d,y):i>1&&x.copy(d,l),d.toArray(e[1])}}}}function fa(e,s,o){if(o<=180&&o>0){o=o/180*Math.PI,T.fromArray(e[0]),y.fromArray(e[1]),l.fromArray(e[2]),x.sub(P,y,T),x.sub(L,l,y);var a=P.len(),v=L.len();if(!(a<.001||v<.001)){P.scale(1/a),L.scale(1/v);var f=P.dot(s),n=Math.cos(o);if(f<n){var i=R(y.x,y.y,l.x,l.y,T.x,T.y,g,!1);d.fromArray(g);var h=Math.PI/2,u=Math.acos(L.dot(s)),r=h+u-o;if(r>=h)x.copy(d,l);else{d.scaleAndAdd(L,i/Math.tan(Math.PI/2-r));var c=l.x!==y.x?(d.x-y.x)/(l.x-y.x):(d.y-y.y)/(l.y-y.y);if(isNaN(c))return;c<0?x.copy(d,y):c>1&&x.copy(d,l)}d.toArray(e[1])}}}}function V(e,s,o,a){var v=o==="normal",f=v?e:e.ensureState(o);f.ignore=s;var n=a.get("smooth");n&&n===!0&&(n=.3),f.shape=f.shape||{},n>0&&(f.shape.smooth=n);var i=a.getModel("lineStyle").getLineStyle();v?e.useStyle(i):f.style=i}function ta(e,s){var o=s.smooth,a=s.points;if(a)if(e.moveTo(a[0][0],a[0][1]),o>0&&a.length>=3){var v=B(a[0],a[1]),f=B(a[1],a[2]);if(!v||!f){e.lineTo(a[1][0],a[1][1]),e.lineTo(a[2][0],a[2][1]);return}var n=Math.min(v,f)*o,i=z([],a[1],a[0],n/v),h=z([],a[1],a[2],n/f),u=z([],i,h,.5);e.bezierCurveTo(i[0],i[1],i[0],i[1],u[0],u[1]),e.bezierCurveTo(h[0],h[1],h[0],h[1],a[2][0],a[2][1])}else for(var r=1;r<a.length;r++)e.lineTo(a[r][0],a[r][1])}function ia(e,s,o){var a=e.getTextGuideLine(),v=e.getTextContent();if(!v){a&&e.removeTextGuideLine();return}for(var f=s.normal,n=f.get("show"),i=v.ignore,h=0;h<D.length;h++){var u=D[h],r=s[u],c=u==="normal";if(r){var b=r.get("show"),t=c?i:O(v.states[u]&&v.states[u].ignore,i);if(t||!O(b,n)){var m=c?a:a&&a.states[u];m&&(m.ignore=!0);continue}a||(a=new F,e.setTextGuideLine(a),!c&&(i||!n)&&V(a,!0,"normal",s.normal),e.stateProxy&&(a.stateProxy=e.stateProxy)),V(a,!1,u,r)}}if(a){H(a.style,o),a.style.fill=null;var M=f.get("showAbove"),p=e.textGuideLineConfig=e.textGuideLineConfig||{};p.showAbove=M||!1,a.buildPath=ta}}function ha(e,s){s=s||"labelLine";for(var o={normal:e.getModel(s)},a=0;a<_.length;a++){var v=_[a];o[v]=e.getModel([v,s])}return o}export{fa as a,ha as g,oa as l,ia as s,na as u};
