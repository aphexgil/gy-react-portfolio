(this["webpackJsonpgy-react-portfolio"]=this["webpackJsonpgy-react-portfolio"]||[]).push([[0],{23:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(10),s=a.n(n),l=a(3),o=(a(23),a(40),a(32)),r=a(13),d=a(16),j=a(1);var b=function(e){var t=Object(c.useState)(!0),a=Object(l.a)(t,2),i=a[0],n=a[1];return Object(j.jsx)(d.a,{fluid:!0,className:"navigation",children:Object(j.jsxs)(o.a,{collapseOnSelect:!0,defaultActiveKey:"About",expand:"sm",onSelect:function(t){n("About"===t),e.setPage(t)},variant:"dark",className:"nav",activeKey:e.currentPage,children:[Object(j.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(j.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(j.jsxs)(r.a,{className:"me-auto",children:[Object(j.jsx)(r.a.Link,{active:i,eventKey:"About",className:"header-link",children:"About Me"}),Object(j.jsx)(r.a.Link,{eventKey:"Portfolio",className:"header-link",children:"Portfolio"}),Object(j.jsx)(r.a.Link,{eventKey:"Contact",className:"header-link",children:"Contact"}),Object(j.jsx)(r.a.Link,{eventKey:"Resume",className:"header-link",children:"Resume"})]})})]})})};var m=function(e){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)(b,{setPage:e.setPage,currentPage:e.currentPage}),Object(j.jsxs)("h2",{className:"title",children:["G",Object(j.jsx)("span",{className:"hide-letters",children:"il "}),"Y",Object(j.jsx)("span",{className:"hide-letters",children:"oung"})]})]})},A=a.p+"static/media/gy-headshot-xs.57e9a09b.png";var h=function(e){var t=e.aboutSeen,a=e.setAboutSeen,i=Object(c.useState)(!1),n=Object(l.a)(i,2),s=n[0],o=n[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:t?"about-title":"about-title slide-in-from-top",onAnimationEnd:function(){return a(!0)},children:"About Me"}),Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)("div",{className:"headshot",children:Object(j.jsx)("img",{src:A,className:"headshot-img slide-in-from-left",style:s?{}:{display:"none"},onLoad:function(){return o(!0)}})}),Object(j.jsx)("div",{className:"bio slide-in-from-right",style:s?{}:{display:"none"},children:"Hello! My name is Gil Young. I am a creative, curious web developer who is eager to bring his years of classroom experience to bear on an agile engineering team. My thorough understanding of full-stack programming and my outstanding quantitative reasoning skills make me an asset in myriad development contexts. I am just as comfortable building and styling front-end React components as I am designing database structures. Collaboration is at the core of everything I do, and I think it is essential that technical information is communicated clearly, concisely and with kindness. Finally, I am a relentless problem-solver and a natural autodidact\u2013\u2013finding novel solutions is my happy place. If you have problems that need solving, don\u2019t hesitate to reach out!"})]})]})},g=a(35),u=a.p+"static/media/dbug-xs.afde7fde.png",p=a.p+"static/media/fantasy-bball-xs.d6db4da8.png",O=a.p+"static/media/flex-fly-xs.e6f8f9fc.png",N=a.p+"static/media/tech-blog-xs.84d24888.png",v=a.p+"static/media/code-quiz-xs.f6040582.png",I=a.p+"static/media/weather-dash-xs.1de41dd1.png",M=a.p+"static/media/github.0f2c24f0.png";var x=function(e){var t=e.portfolioSeen,a=e.setPortfolioSeen,i=Object(c.useState)(!1),n=Object(l.a)(i,2),s=n[0],o=n[1],r=Object(c.useState)(!1),d=Object(l.a)(r,2),b=d[0],m=d[1],A=Object(c.useState)(!1),h=Object(l.a)(A,2),x=h[0],y=h[1],k=Object(c.useState)(!1),Z=Object(l.a)(k,2),f=Z[0],G=Z[1],Y=Object(c.useState)(!1),W=Object(l.a)(Y,2),L=W[0],R=W[1],S=Object(c.useState)(!1),w=Object(l.a)(S,2),D=w[0],T=w[1],z=[{title:"DBUG",link:"https://cswag-dbug.herokuapp.com/",image:u,repo:"https://github.com/saramangelo/cswag-p3",loaded:s,setLoaded:o},{title:"Fantasy Basketball",link:"https://fantasy-league.herokuapp.com/",image:p,repo:"https://github.com/aphexgil/fantasy-league",loaded:b,setLoaded:m},{title:"FlexFly",link:"https://yacovkopel.github.io/FlexFly/",image:O,repo:"https://github.com/YacovKopel/FlexFly",loaded:x,setLoaded:y},{title:"Tech Blog",link:"https://gy-tech-blog.herokuapp.com/",image:N,repo:"https://github.com/aphexgil/tech-blog",loaded:f,setLoaded:G},{title:"Code Quiz",link:"https://aphexgil.github.io/code-quiz/",image:v,repo:"https://github.com/aphexgil/code-quiz",loaded:L,setLoaded:R},{title:"Weather Dashboard",link:"https://aphexgil.github.io/weather-forecast/",image:I,repo:"https://github.com/aphexgil/weather-forecast",loaded:D,setLoaded:T}];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"portfolio-container",children:[Object(j.jsx)("h1",{className:t?"":"slide-in-from-top",onAnimationEnd:function(){return a(!0)},children:"My Projects"}),Object(j.jsx)("div",{className:"projects-container",children:z&&z.map((function(e,t){return Object(j.jsxs)("div",{id:t,className:"project-card",children:[Object(j.jsx)(g.a,{src:e.image,className:"project-image slide-in-from-top",style:e.loaded?{}:{display:"block",backgroundColor:"#FFF"},onLoad:function(){return e.setLoaded(!0)}}),Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"overlay-text",children:[Object(j.jsx)("a",{href:e.link,target:"_blank",className:"project-title",children:e.title}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:e.link,target:"_blank",children:Object(j.jsx)("span",{className:"material-symbols-rounded link-icon",children:" output "})}),Object(j.jsx)("a",{href:e.repo,target:"_blank",children:Object(j.jsx)("img",{src:M,className:"github-icon"})})]})})]})}))})]})})},y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMDFUMTM6MjY6MzktMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTAxVDEzOjM3OjU3LTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTAxVDEzOjM3OjU3LTA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTNjNTExMC03M2I0LTQyNzAtYjA1Zi1lMGQ0ZTVjN2VhMzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTkzYzUxMTAtNzNiNC00MjcwLWIwNWYtZTBkNGU1YzdlYTM3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NTkzYzUxMTAtNzNiNC00MjcwLWIwNWYtZTBkNGU1YzdlYTM3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OTNjNTExMC03M2I0LTQyNzAtYjA1Zi1lMGQ0ZTVjN2VhMzciIHN0RXZ0OndoZW49IjIwMjMtMDQtMDFUMTM6MjY6MzktMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy41IChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtXisB4AAAJHSURBVGiB7Zn/UepAEMc/2MCjA/MqeFiBWIFYgelAO1Ar0A7UCtQKxAperECtgLOC9Y+FGQx3JLd3IeD4mckAx9xmv9n7tZuBiLDL7PXtQCq/AvrmRwu4AGaANFwzYNKpl+sQEd91LvFMArY6vQaBZfQNKCKfRQUcJD7PaEICrJvDX+Dd7I2B0Bz4NNobG/uZCQmojPbGxn5mQgKc0d6hsZ+Z3BEoiJ/8SeSOAMAooW80uSMAWyJgin0lmhr7mVh3lLgz2HtlhwV8AKXZEyOhnXhBBfxrYecV3QNcskeRNB2n71rY6M15aI7AED0uh3hCh43L5lEkTRFwwFXgv3s0D3D53ImnKQKgUaiA/Vr7ERtecXy0SSkdcO5pf0DF9UrbnPgReKm1DYHbnM5YiEnqS0/bBH90NkaMgHf8E/qaHvKABW0mcZ1H4LjW5tBJXRl8KIDT+fcKHaqudW9DJWAoIpWnKjETkVGkrdtAheO/iFyLyOn8fkEb1nJGISIuUUTIeZ/Ns9wCmDsaElFmcn4Zr83UwlK55oZnGZ0XEXnrQgCiFTlfJEREnuX7kLI6v2Dl/pZVyMcIPVb8Cfx/ia42ZeJ9BisNmQSA7sxT2uUPVlYE5CyvO3RDu89os5Hc7wccOkyusBcFosg5hOoUwA2ru3YKnc6BEGM0Na3nExY6nQMhpmg0OhlWm4jAMkP0CF4SXwj+wFN33bSAZQpUSEm74XWCnoS/0aeAZUZodMbz34vPQ/R4fYPHedgeAWZ+9HvineBXQN98AZtePqt2XpqTAAAAAElFTkSuQmCC",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDQtMDFUMTM6MzQ6MzQtMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTAxVDEzOjM4OjAzLTA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTAxVDEzOjM4OjAzLTA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZjgyMDhkMC01N2Y0LTQ4MDktYTU1YS02MDc1ZDYyY2FiNjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MmY4MjA4ZDAtNTdmNC00ODA5LWE1NWEtNjA3NWQ2MmNhYjY4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MmY4MjA4ZDAtNTdmNC00ODA5LWE1NWEtNjA3NWQ2MmNhYjY4Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZjgyMDhkMC01N2Y0LTQ4MDktYTU1YS02MDc1ZDYyY2FiNjgiIHN0RXZ0OndoZW49IjIwMjMtMDQtMDFUMTM6MzQ6MzQtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy41IChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puj5cWwAAAHoSURBVGiB7ZjxcYIwGMWfvf5fugEblBHsBo7QTmC7gRtoJ2g3kA3QCaoTtE5QnOD1jyQ05gIIBAK9/O68IxDzvfd9ksTMSGLK3PgW0JVgwDfBgG9ua54nAO4G0FHFGcCh9ClJ8xORXJP84bhYU2i70Dvj5ToQAcggMj9GDgAeAeTqhvkOrDBe8YDQttJvmBX4AhAPJqcdOYB71TArEBvtI8RL5Iuz1KAT6Y26aTSFKNvelaIG7GXstKrTNevAN4A5gFcMU42zjDWXsStpspBt0H81VNY3V3/DmFdNPkkm5txL8oVk7nCOz+WYZpxEajAp+tQZIMWCtrQMHpPcORC/k2OZ4y9Zvpg2MqDISgK1rUZZ1mMZq4pWBkh31WiTdZ3WBhRZiYAnVlcjl33aZN2pAbK8GhHJ1NI/pWUzxuuzruPEgCKjvRoLiozn8rpr1nszQIoM2kRGtGd9wW7bdecGFFvaBeuGtg7i9GaALK9G16zrFOOa22mXp1wpgGd5/Q5g4XDsWXHRowHg759T5HjcwQz0RWFg8scqwYBvggHfBAO+CQZ8Yxo4eVHRjAuNpoGP4XS0JtUb5l4IEEfYDwOJacoR4sQuVzds70AC4A3j+jmdIDTNoYkH7BWYFP9uFpocwYBvggHf/AIV2ce0Rrhd8wAAAABJRU5ErkJggg==";var Z=function(e){var t=e.contactSeen,a=e.setContactSeen;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(d.a,{className:"main-container contact",children:[Object(j.jsx)("h1",{className:t?"":"slide-in-from-top",onAnimationEnd:function(){return a(!0)},children:"Contact Me"}),Object(j.jsxs)("div",{className:"contact-card slide-in-from-left",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"tel:+1310-401-4147",className:"phone-icon-link",children:Object(j.jsx)("img",{src:y,className:"phone-icon"})}),": ",Object(j.jsx)("a",{href:"tel:+1310-401-4147",className:"phone-link",children:"+1-310-401-4147"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"mailto:gil.young.1994@gmail.com",className:"email-icon-link",children:Object(j.jsx)("img",{src:k,className:"email-icon"})}),": ",Object(j.jsx)("a",{href:"mailto:gil.young.1994@gmail.com",className:"email-link",children:"gil.young.1994@gmail.com"})]})]})]})})},f=a.p+"static/media/gil-young-resume.ef1600d9.pdf";var G=function(e){var t=e.resumeSeen,a=e.setResumeSeen;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(d.a,{className:"main-container resume",children:[Object(j.jsx)("h1",{className:t?"":"slide-in-from-top",onAnimationEnd:function(){return a(!0)},children:"Download Resume"}),Object(j.jsx)("a",{href:f,download:!0,children:Object(j.jsx)("div",{className:"resume-card slide-in-from-left",children:"gil-young-resume.pdf"})})]})})};var Y=function(e){var t=Object(c.useState)(!1),a=Object(l.a)(t,2),i=a[0],n=a[1],s=Object(c.useState)(!1),o=Object(l.a)(s,2),r=o[0],d=o[1],b=Object(c.useState)(!1),m=Object(l.a)(b,2),A=m[0],g=m[1],u=Object(c.useState)(!1),p=Object(l.a)(u,2),O=p[0],N=p[1];return"About"===e.currentPage?Object(j.jsx)("div",{className:"about-wrapper",children:Object(j.jsx)(h,{aboutSeen:i,setAboutSeen:n})}):"Portfolio"===e.currentPage?Object(j.jsx)("div",{className:"portfolio-wrapper",children:Object(j.jsx)(x,{portfolioSeen:r,setPortfolioSeen:d})}):"Contact"===e.currentPage?Object(j.jsx)("div",{className:"contact-wrapper",children:Object(j.jsx)(Z,{contactSeen:A,setContactSeen:g})}):Object(j.jsx)("div",{className:"resume-wrapper",children:Object(j.jsx)(G,{resumeSeen:O,setResumeSeen:N})})},W=a.p+"static/media/linkedin.19cab02e.png",L=a.p+"static/media/stack-overflow.72bf2352.png";var R=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(j.jsx)(d.a,{fluid:!0,className:"footer-container",children:Object(j.jsxs)(r.a,{className:"footer-links",children:[Object(j.jsx)(r.a.Link,{href:"https://github.com/aphexgil",target:"_blank",children:Object(j.jsx)("img",{src:M,className:"footer-image fade-in-delay",style:a?{}:{filter:"opacity(0%)"},onAnimationStart:function(){return i(!0)}})}),Object(j.jsx)(r.a.Link,{href:"https://www.linkedin.com/in/gilyoung1994/",target:"_blank",children:Object(j.jsx)("img",{src:W,className:"footer-image fade-in-delay",style:a?{}:{filter:"opacity(0%)"},onAnimationStart:function(){return i(!0)}})}),Object(j.jsx)(r.a.Link,{href:"https://stackoverflow.com/users/21308195/aphexgil",target:"_blank",children:Object(j.jsx)("img",{src:L,className:"footer-image fade-in-delay",style:a?{}:{filter:"opacity(0%)"},onAnimationStart:function(){return i(!0)}})})]})})};var S=function(){var e=Object(c.useState)("About"),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"body",children:[Object(j.jsx)(m,{setPage:i,currentPage:a}),Object(j.jsx)(Y,{currentPage:a}),Object(j.jsx)(R,{className:"footer"})]})})};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4618b5a7.chunk.js.map