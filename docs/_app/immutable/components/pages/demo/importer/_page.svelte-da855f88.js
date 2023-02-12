import{S as W,i as X,s as Y,w as g,a as v,k as n,q as S,x as tt,c as w,l as m,r,m as y,h as e,y as et,b as a,G as s,B as ct,f as at,t as St,z as rt}from"../../../../chunks/index-13e87bf7.js";import{D as pt}from"../../../../chunks/Document-a093bba3.js";const st={metadata:{title:"Importer demo.",author:"Ben Schmidt",date:"2023-02-05T00:00:00.000Z"},document:{"pandoc-api-version":[1,22,1],meta:{author:{t:"MetaInlines",c:[{t:"Str",c:"Ben"},{t:"Space"},{t:"Str",c:"Schmidt"}]},date:{t:"MetaInlines",c:[{t:"Str",c:"2023-02-05"}]},title:{t:"MetaInlines",c:[{t:"Str",c:"Importer"},{t:"Space"},{t:"Str",c:"demo."}]}},blocks:[{t:"Para",c:[{t:"Str",c:"Markdown"},{t:"Space"},{t:"Str",c:"documents"},{t:"Space"},{t:"Str",c:"have"},{t:"Space"},{t:"Str",c:"different"},{t:"Space"},{t:"Str",c:"parts"},{t:"Space"},{t:"Str",c:"that"},{t:"Space"},{t:"Str",c:"we"},{t:"Space"},{t:"Str",c:"want"},{t:"Space"},{t:"Str",c:"to"},{t:"Space"},{t:"Str",c:"load"},{t:"Space"},{t:"Str",c:"into"},{t:"Space"},{t:"Str",c:"pandoc."},{t:"Space"},{t:"Str",c:"For"},{t:"Space"},{t:"Str",c:"this,"},{t:"Space"},{t:"Str",c:"I’ve"},{t:"SoftBreak"},{t:"Str",c:"implemented"},{t:"Space"},{t:"Str",c:"a"},{t:"Space"},{t:"Str",c:"custom"},{t:"Space"},{t:"Str",c:"rollup"},{t:"Space"},{t:"Str",c:"loader"},{t:"Space"},{t:"Str",c:"that"},{t:"Space"},{t:"Str",c:"runs"},{t:"Space"},{t:"Str",c:"system"},{t:"Space"},{t:"Str",c:"pandoc"},{t:"Space"},{t:"Str",c:"to"},{t:"Space"},{t:"Str",c:"load"},{t:"Space"},{t:"Str",c:"the"},{t:"Space"},{t:"Str",c:"JSON"},{t:"Space"},{t:"Str",c:"representation"},{t:"Space"},{t:"Str",c:"that"},{t:"Space"},{t:"Code",c:[["",[],[]],"pandoc-svelte-components"]},{t:"Space"},{t:"Str",c:"consumes."}]},{t:"Para",c:[{t:"Str",c:"Pandoc"},{t:"Space"},{t:"Str",c:"parsing"},{t:"Space"},{t:"Str",c:"is"},{t:"Space"},{t:"Str",c:"kind"},{t:"Space"},{t:"Str",c:"of"},{t:"Space"},{t:"Str",c:"expensive"},{t:"Space"},{t:"Str",c:"(with,"},{t:"Space"},{t:"Str",c:"e.g.,"},{t:"Space"},{t:"Str",c:"a"},{t:"Space"},{t:"Str",c:"blog"},{t:"Space"},{t:"Str",c:"with"},{t:"Space"},{t:"Str",c:"hundreds"},{t:"Space"},{t:"Str",c:"of"},{t:"Space"},{t:"Str",c:"posts,"},{t:"Space"},{t:"Str",c:"we"},{t:"Space"},{t:"Str",c:"don’t"},{t:"Space"},{t:"Str",c:"want"},{t:"Space"},{t:"Str",c:"to"},{t:"Space"},{t:"Str",c:"spin"},{t:"Space"},{t:"Str",c:"it"},{t:"Space"},{t:"Str",c:"up"},{t:"Space"},{t:"Str",c:"and"},{t:"Space"},{t:"Str",c:"parse"},{t:"Space"},{t:"Str",c:"each"},{t:"Space"},{t:"Str",c:"time.)"},{t:"Space"},{t:"Str",c:"So"},{t:"Space"},{t:"Str",c:"I"},{t:"Space"},{t:"Str",c:"use"},{t:"Space"},{t:"Str",c:"a"},{t:"Space"},{t:"Str",c:"cache"},{t:"Space"},{t:"Str",c:"(located"},{t:"Space"},{t:"Str",c:"by"},{t:"Space"},{t:"Str",c:"default"},{t:"Space"},{t:"Str",c:"at"},{t:"Space"},{t:"Code",c:[["",[],[]],"cache"]},{t:"Space"},{t:"Str",c:"in"},{t:"Space"},{t:"Str",c:"the"},{t:"Space"},{t:"Str",c:"project"},{t:"Space"},{t:"Str",c:"root)"},{t:"Space"},{t:"Str",c:"to"},{t:"Space"},{t:"Str",c:"hold"},{t:"Space"},{t:"Str",c:"the"},{t:"Space"},{t:"Str",c:"JSON"},{t:"Space"},{t:"Str",c:"formatted"},{t:"Space"},{t:"Str",c:"data."}]},{t:"Para",c:[{t:"Str",c:"Pandoc’s"},{t:"Space"},{t:"Str",c:"internal"},{t:"Space"},{t:"Str",c:"syntax"},{t:"Space"},{t:"Str",c:"is"},{t:"Space"},{t:"Str",c:"also"},{t:"Space"},{t:"Str",c:"extremely"},{t:"Space"},{t:"Str",c:"wasteful"},{t:"Space"},{t:"Str",c:"with"},{t:"Space"},{t:"Str",c:"regard"},{t:"Space"},{t:"Str",c:"to"},{t:"Space"},{t:"Str",c:"spaces."},{t:"Space"},{t:"Str",c:"It"},{t:"Space"},{t:"Str",c:"has"},{t:"Space"},{t:"Str",c:"a"},{t:"Space"},{t:"Str",c:"special"},{t:"Space"},{t:"Str",c:"element"},{t:"Space"},{t:"Str",c:"called"},{t:"Space"},{t:"Code",c:[["",[],[]],"Space"]},{t:"Space"},{t:"Str",c:"so"},{t:"Space"},{t:"Str",c:"that"},{t:"Space"},{t:"Str",c:"the"},{t:"Space"},{t:"Str",c:"paragraph"},{t:"Space"},{t:"Code",c:[["",[],[]],'"This too shall pass."']},{t:"Space"},{t:"Str",c:"is"},{t:"SoftBreak"},{t:"Str",c:"rendered"},{t:"Space"},{t:"Str",c:"internally"},{t:"Space"},{t:"Str",c:"as"},{t:"Space"},{t:"Code",c:[["",[],[]],'{"t":"Para","c":[{"t":"Str","c":"This"},{"t":"Space"},{"t":"Str","c":"too"},{"t":"Space"},{"t":"Str","c":"shall"},{"t":"Space"},{"t":"Str","c":"pass."}]}']},{t:"Space"},{t:"Str",c:"instead"},{t:"Space"},{t:"Str",c:"of"},{t:"Space"},{t:"Str",c:"just"},{t:"Space"},{t:"Code",c:[["",[],[]],'{"t":"Para","c":[{"t":"Str","c":"This too shall pass."}']},{t:"Str",c:"."},{t:"Space"},{t:"Str",c:"The"},{t:"Space"},{t:"Str",c:"benefits"},{t:"Space"},{t:"Str",c:"of"},{t:"Space"},{t:"Str",c:"this"},{t:"Space"},{t:"Str",c:"to"},{t:"Space"},{t:"Str",c:"downstream"},{t:"Space"},{t:"Str",c:"renderers"},{t:"Space"},{t:"Str",c:"are"},{t:"Space"},{t:"Str",c:"slim."}]}]}};function ot(l){let p,f,T,P,Z=l[0].title+"",$,E,d,x,J,h,A=JSON.stringify(l[0])+"",H,N,u,M,O,o,R,K=JSON.stringify(l[1].meta)+"",j,q,k,_,D,I,i,z,L=JSON.stringify(l[1],void 0,2)+"",F,G,C;return p=new pt({props:{ast:l[1]}}),{c(){g(p.$$.fragment),f=v(),T=n("hr"),P=S('\nThis is a representation of the markdown document at `page.md` which has the title "'),$=S(Z),E=S(`"

`),d=n("h2"),x=S("The metadata loaded directly from the import is:"),J=v(),h=n("pre"),H=S(A),N=v(),u=n("h2"),M=S("The JSON representation of the metadata *internal* to pandoc is:"),O=v(),o=n("pre"),R=S("  "),j=S(K),q=S(`
`),k=v(),_=n("h2"),D=S("The JSON representation of the document is:"),I=v(),i=n("pre"),z=S(""),F=S(L),G=S(`
`)},l(t){tt(p.$$.fragment,t),f=w(t),T=m(t,"HR",{}),P=r(t,'\nThis is a representation of the markdown document at `page.md` which has the title "'),$=r(t,Z),E=r(t,`"

`),d=m(t,"H2",{});var c=y(d);x=r(c,"The metadata loaded directly from the import is:"),c.forEach(e),J=w(t),h=m(t,"PRE",{});var Q=y(h);H=r(Q,A),Q.forEach(e),N=w(t),u=m(t,"H2",{});var U=y(u);M=r(U,"The JSON representation of the metadata *internal* to pandoc is:"),U.forEach(e),O=w(t),o=m(t,"PRE",{});var b=y(o);R=r(b,"  "),j=r(b,K),q=r(b,`
`),b.forEach(e),k=w(t),_=m(t,"H2",{});var V=y(_);D=r(V,"The JSON representation of the document is:"),V.forEach(e),I=w(t),i=m(t,"PRE",{});var B=y(i);z=r(B,""),F=r(B,L),G=r(B,`
`),B.forEach(e)},m(t,c){et(p,t,c),a(t,f,c),a(t,T,c),a(t,P,c),a(t,$,c),a(t,E,c),a(t,d,c),s(d,x),a(t,J,c),a(t,h,c),s(h,H),a(t,N,c),a(t,u,c),s(u,M),a(t,O,c),a(t,o,c),s(o,R),s(o,j),s(o,q),a(t,k,c),a(t,_,c),s(_,D),a(t,I,c),a(t,i,c),s(i,z),s(i,F),s(i,G),C=!0},p:ct,i(t){C||(at(p.$$.fragment,t),C=!0)},o(t){St(p.$$.fragment,t),C=!1},d(t){rt(p,t),t&&e(f),t&&e(T),t&&e(P),t&&e($),t&&e(E),t&&e(d),t&&e(J),t&&e(h),t&&e(N),t&&e(u),t&&e(O),t&&e(o),t&&e(k),t&&e(_),t&&e(I),t&&e(i)}}}function it(l){const{metadata:p,document:f}=st;return[p,f]}class mt extends W{constructor(p){super(),X(this,p,it,ot,Y,{})}}export{mt as default};
