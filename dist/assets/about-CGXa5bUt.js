import{s as T,I as P,v as x,x as A,y as E,z as N,B as F,C as U,D as L,E as g,G as $,H as j,J as B,b as a,K as q,L as Y,M as Z,N as w,O as H,P as J,r as K,Q,R as V,S as W,T as X,U as ee,W as ae,X as ie,Y as le,Z as oe,$ as G,_ as ne,p as M,o as r,f as z,w as i,j as y,k as u,a as o,n as te,c as C,F as S,l as p,t as v,a0 as se,d as s,i as re}from"./index-BtbbZjYl.js";import{V as I,a as D,b as h,c as k}from"./VCard-D0cE-0iR.js";const de="/assets/intro-Buul-g75.jpg",ce=T({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:P,iconColor:String,lineColor:String,...x(),...A(),...E(),...N()},"VTimelineDivider"),ue=F()({name:"VTimelineDivider",props:ce(),setup(e,l){let{slots:d}=l;const{sizeClasses:_,sizeStyles:m}=U(e,"v-timeline-divider__dot"),{backgroundColorStyles:b,backgroundColorClasses:c}=L(g(e,"dotColor")),{roundedClasses:t}=$(e,"v-timeline-divider__dot"),{elevationClasses:n}=j(e),{backgroundColorClasses:f,backgroundColorStyles:R}=L(g(e,"lineColor"));return B(()=>a("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[a("div",{class:["v-timeline-divider__before",f.value],style:R.value},null),!e.hideDot&&a("div",{key:"dot",class:["v-timeline-divider__dot",n.value,t.value,_.value],style:m.value},[a("div",{class:["v-timeline-divider__inner-dot",c.value,t.value],style:b.value},[d.default?a(Y,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},d.default):a(q,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),a("div",{class:["v-timeline-divider__after",f.value],style:R.value},null)])),{}}}),O=T({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:P,iconColor:String,lineInset:[Number,String],...x(),...Z(),...N(),...A(),...E(),...w()},"VTimelineItem"),me=F()({name:"VTimelineItem",props:O(),setup(e,l){let{slots:d}=l;const{dimensionStyles:_}=H(e),m=J(0),b=K();return Q(b,c=>{var t;c&&(m.value=((t=c.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:t.getBoundingClientRect().width)??0)},{flush:"post"}),B(()=>{var c,t;return a("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":V(m.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${V(e.lineInset)})`:V(0)},e.style]},[a("div",{class:"v-timeline-item__body",style:_.value},[(c=d.default)==null?void 0:c.call(d)]),a(ue,{ref:b,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:d.icon}),e.density!=="compact"&&a("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((t=d.opposite)==null?void 0:t.call(d))])])}),{}}}),ve=T({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...W(O({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...x(),...X(),...w(),...ee()},"VTimeline"),ge=F()({name:"VTimeline",props:ve(),setup(e,l){let{slots:d}=l;const{themeClasses:_}=ae(e),{densityClasses:m}=ie(e),{rtlClasses:b}=le();oe({VTimelineDivider:{lineColor:g(e,"lineColor")},VTimelineItem:{density:g(e,"density"),dotColor:g(e,"dotColor"),fillDot:g(e,"fillDot"),hideOpposite:g(e,"hideOpposite"),iconColor:g(e,"iconColor"),lineColor:g(e,"lineColor"),lineInset:g(e,"lineInset"),size:g(e,"size")}});const c=G(()=>{const n=e.side?e.side:e.density!=="default"?"end":null;return n&&`v-timeline--side-${n}`}),t=G(()=>{const n=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return n;case"start":return n[0];case"end":return n[1];default:return null}});return B(()=>a(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,t.value,{"v-timeline--inset-line":!!e.lineInset},_.value,m.value,c.value,b.value,e.class],style:[{"--v-timeline-line-thickness":V(e.lineThickness)},e.style]},d)),{}}}),fe={name:"VocazioneMissione",data(){return{generalGovernment:[{name:"Madre Fatima Godiño",role:"Superiora generale",email:"fatimagodin-o@libero.it"},{name:"Suor Ancilla Rinadi",role:"Vicaria generale e prima consigliera"},{name:"Suor Chiara Lusetti",role:"Consigliera ed Economa generale"},{name:"Suor Solange Badaraco",role:"Consigliera generale"},{name:"Suor Mariapia Giannasi",role:"Consigliera generale"},{name:"Suor Giovanna Banchi Fabrizi",role:"Segretaria generale"}],italyDelegation:[{name:"Suor Franca Facchetti",role:"Delegata regionale",email:"mfvifranca@gmail.com"},{name:"Suor Rosa Ferretti",role:"Consigliera ed Economa regionale"},{name:"Suor Carla Bisso",role:"Consigliera regionale"}],latinAmericanDelegation:[{name:"Sr Ana Inés Alvariza",role:"Delegata regionale",email:"alvarizaradio@gmail.com"},{name:"Sr Ana Laura Rivero",role:"Consigliera ed Economa regionale"},{name:"Sr Claudete De Carvalho",role:"Consigliera regionale"}],timelineEvents:[{date:"10 Dicembre 1929",text:`A Reggio Emilia (Italia), nell'oratorio detto delle "Otto facce", Luisa Ferrari (che assunse il nome di Giovanna Francesca dello Spirito Santo) si riunì ad altre 6 compagne, e alla presenza del cappuccino Daniele Coppini da Torricella di Sissa (PR), si consacrarono al Signore.`,color:"primary",icon:"mdi-calendar-check"},{date:"10 Dicembre 1930",text:"Inizia ufficialmente l'Istituto delle Missionarie Francescane del Verbo Incarnato con l'apertura della prima casa in Calabria, segnando l'inizio della missione delle religiose.",color:"secondary",icon:"mdi-calendar-plus"},{date:"21 Dicembre 1932",text:`Il padre Daniele Coppini aiuta Madre Giovanna nella stesura del primo "abbozzo di Regola" dell'Istituto delle Terziarie Francescane "Spose del Verbo".`,color:"accent",icon:"mdi-pencil"},{date:"1930",text:"Si apre la prima casa a Motta Filocastro (CZ-Italia), su invito del parroco Achille Fosco. Le religiose si dedicano alla formazione religiosa dei bambini e all'assistenza degli anziani e infermi.",color:"green",icon:"mdi-home-city"},{date:"1932-1933",text:"Apertura di case in altre località della Calabria e dell'Emilia, tra cui Salsomaggiore (PR), Sabbione (RE), e Villarotta (RE).",color:"blue",icon:"mdi-city"},{date:"11 Ottobre 1947",text:"Vengono approvate le Costituzioni dell'Istituto dalla Congregazione per i Religiosi della Santa Sede.",color:"purple",icon:"mdi-file-document"},{date:"9 Giugno 1972",text:"Il decreto di Lode della Santa Sede conferma la validità e la missione dell'Istituto delle Missionarie Francescane del Verbo Incarnato.",color:"red",icon:"mdi-certificate"}]}},metaInfo(){return{title:"La Nostra Vocazione-Missione - Suore Francescane Missionarie del Verbo Incarnato",meta:[{name:"description",content:"Scopri la vocazione e missione delle Suore Francescane Missionarie del Verbo Incarnato."},{name:"keywords",content:"vocazione, missione, francescane, Verbo Incarnato, suor, consacrate, religiose"},{name:"robots",content:"index, follow"},{property:"og:title",content:"La Nostra Vocazione-Missione"},{property:"og:description",content:"Unisciti a noi nel nostro impegno per vivere la missione del Verbo Incarnato."}]}}},Ce={class:"font-weight-bold"},ye=["href"],be={key:1},_e=["href"],ze={key:1},Se=["href"],pe={key:1};function Ie(e,l,d,_,m,b){const c=M("v-header"),t=M("v-typography");return r(),z(re,null,{default:i(()=>[a(y,null,{default:i(()=>[a(u,{cols:"12"},{default:i(()=>[a(c,{class:"text-center"},{default:i(()=>l[0]||(l[0]=[o("h1",{class:"mb-2"},"Chi Siamo",-1)])),_:1})]),_:1})]),_:1}),a(y,{class:"bg-451C"},{default:i(()=>[a(u,{cols:"12",md:"6"},{default:i(()=>[a(te,{src:de,alt:"Vocazione e missione",class:"mb-4",lazy:""})]),_:1}),a(u,{cols:"12",md:"6"},{default:i(()=>[a(c,null,{default:i(()=>l[1]||(l[1]=[o("h2",{class:"mb-4"},"La Nostra Vocazione-Missione",-1),o("p",null," Siamo donne consacrate a Dio e vogliamo seguire più da vicino Gesù, Verbo Incarnato e in Lui donare la nostra vita alla gloria di Dio e proclamare le meraviglie del suo Amore per l'umanità. Nel mistero dell’incarnazione, la nostra vocazione-missione vissuta nel “qui e ora”, trova il centro vitale della propria identità. ",-1),o("p",null," Nello spirito francescano che ci caratterizza, siamo chiamate ad essere fraternità evangelica, che in un clima di famiglia, esprime l’ut unum sint, si estende alla Chiesa e con Essa si apre all'universo e alla sua storia, amando tutte le creature. ",-1),o("p",null," Siamo inviate a preparare le vie del Signore ed a far sì che ogni persona prenda consapevolezza di essere dimora di Dio, privilegiando i più bisognosi di ogni realtà. Viviamo in piccole comunità, attualmente presenti in Angola, Bolivia, Brasile, Italia, Uruguay e partecipiamo ad una comunità intercongregazionale in Turchia. ",-1),o("p",null," Unite dallo stesso ideale di vita, formiamo e siamo riconosciute dalla Chiesa Cattolica come Famiglia religiosa di vita apostolica e missionaria. ",-1),o("p",null," Madre Giovanna Francesca dello Spirito Santo è la nostra fondatrice. ",-1)])),_:1})]),_:1})]),_:1}),a(y,null,{default:i(()=>[a(u,{cols:"12"},{default:i(()=>l[2]||(l[2]=[o("h2",{class:"mb-4"},"Breve Storia dell'Istituto",-1)])),_:1})]),_:1}),a(ge,{dense:""},{default:i(()=>[(r(!0),C(S,null,p(m.timelineEvents,(n,f)=>(r(),z(me,{key:f,color:n.color,icon:n.icon},{opposite:i(()=>[a(y,null,{default:i(()=>[a(u,{cols:"12"},{default:i(()=>[o("span",Ce,v(n.date),1)]),_:2},1024)]),_:2},1024)]),default:i(()=>[a(I,{flat:""},{default:i(()=>[a(D,null,{default:i(()=>[o("p",null,v(n.text),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["color","icon"]))),128))]),_:1}),a(se,{class:"my-6"}),a(y,null,{default:i(()=>[a(u,{cols:"12"},{default:i(()=>[l[5]||(l[5]=o("h2",{class:"mb-4"},"Organizzazione",-1)),a(t,{class:"text-black body-1 mb-4"},{default:i(()=>l[3]||(l[3]=[o("b",null,"Struttura dell'Istituto:",-1),s(" Il suo scopo è di aiutare l'Istituto, le singole comunità e ogni persona a costruire e vivere nell'unità e fedeltà al carisma di fondazione, in un servizio di minorità. La struttura dà fondamento all'Istituto, e il Governo accompagna nella realizzazione del progetto dello stesso, mediante un servizio fraterno e responsabile. ")])),_:1}),l[6]||(l[6]=o("br",null,null,-1)),a(t,{class:"text-black body-1 mb-4"},{default:i(()=>l[4]||(l[4]=[o("b",null,"Autorità collegiale e personale:",-1),s(" Nell'Istituto l'autorità è esercitata in forma collegiale e personale. L'autorità collegiale è esercitata dal Capitolo generale e provinciale legittimamente congregati. L'autorità personale è esercitata in modo ordinario dalla Superiora generale, provinciale e locale. ")])),_:1})]),_:1}),a(u,{cols:"12"},{default:i(()=>[l[8]||(l[8]=o("h3",{class:"mb-2"},"Composizione del Governo Generale (2021-2027)",-1)),a(y,null,{default:i(()=>[(r(!0),C(S,null,p(m.generalGovernment,(n,f)=>(r(),z(u,{key:f,cols:"12",md:"4"},{default:i(()=>[a(I,{class:"pa-3"},{default:i(()=>[a(h,{class:"headline"},{default:i(()=>[s(v(n.name),1)]),_:2},1024),a(k,null,{default:i(()=>[s(v(n.role),1)]),_:2},1024),a(D,null,{default:i(()=>[n.email?(r(),C("a",{key:0,href:"mailto:"+n.email},v(n.email),9,ye)):(r(),C("span",be,"-"))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),a(t,{class:"body-1"},{default:i(()=>l[7]||(l[7]=[o("span",{class:"text-black"},[o("b",null,"Indirizzo della Casa Generale:"),o("br"),s(" Casa Madonna, Via Madre Giovanna Ferrari, 1"),o("br"),s(" 50014 Fiesole (FI) - ITALIA"),o("br"),s(" Tel. (0039) 055/59200"),o("br"),o("b",null,"Email:"),s(),o("a",{href:"mailto:casamadre@francescaneverbo.com"},"casamadre@francescaneverbo.com")],-1)])),_:1})]),_:1}),a(u,{cols:"12"},{default:i(()=>[l[10]||(l[10]=o("h3",{class:"mb-2"},"Composizione del Governo Delegato - Italia (Luglio 2022 - Luglio 2025)",-1)),a(y,null,{default:i(()=>[(r(!0),C(S,null,p(m.italyDelegation,(n,f)=>(r(),z(u,{key:f,cols:"12",md:"4"},{default:i(()=>[a(I,{class:"pa-3"},{default:i(()=>[a(h,{class:"headline"},{default:i(()=>[s(v(n.name),1)]),_:2},1024),a(k,null,{default:i(()=>[s(v(n.role),1)]),_:2},1024),a(D,null,{default:i(()=>[n.email?(r(),C("a",{key:0,href:"mailto:"+n.email},v(n.email),9,_e)):(r(),C("span",ze,"-"))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),a(t,{class:"body-1"},{default:i(()=>l[9]||(l[9]=[o("span",{class:"text-black"},[o("b",null,"Per contattare la Delegata:"),s(" 0039 - 348 930 96 96")],-1)])),_:1})]),_:1}),a(u,{cols:"12"},{default:i(()=>[l[12]||(l[12]=o("h3",{class:"mb-2"},"Delegazione Latinoamericana (Uruguay - Brasile - Bolivia, 2023 - 2026)",-1)),a(y,null,{default:i(()=>[(r(!0),C(S,null,p(m.latinAmericanDelegation,(n,f)=>(r(),z(u,{key:f,cols:"12",md:"4"},{default:i(()=>[a(I,{class:"pa-3"},{default:i(()=>[a(h,{class:"headline"},{default:i(()=>[s(v(n.name),1)]),_:2},1024),a(k,null,{default:i(()=>[s(v(n.role),1)]),_:2},1024),a(D,null,{default:i(()=>[n.email?(r(),C("a",{key:0,href:"mailto:"+n.email},v(n.email),9,Se)):(r(),C("span",pe,"-"))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),a(t,{class:"body-1"},{default:i(()=>l[11]||(l[11]=[o("span",{class:"text-black"},[o("b",null,"Indirizzo della Delegazione:"),o("br"),s(" Casa Delegazione, Millán 3127"),o("br"),s(" Montevideo c.p.11.700 - URUGUAY"),o("br"),s(" Tel. (00598) 2/203 31 68")],-1)])),_:1})]),_:1})]),_:1})]),_:1})}const he=ne(fe,[["render",Ie],["__scopeId","data-v-2bb40b17"]]);export{he as default};
