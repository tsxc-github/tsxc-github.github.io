const v="3.3.0",$={"Content-Type":"application/json"},h=e=>`${e.replace(/\/?$/,"/")}api/`,u=(e,t="")=>{if(typeof e=="object"&&e.errno)throw new TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},f=({serverURL:e,lang:t,paths:r,type:o,signal:a})=>fetch(`${h(e)}article?path=${encodeURIComponent(r.join(","))}&type=${encodeURIComponent(o.join(","))}&lang=${t}`,{signal:a}).then(n=>n.json()).then(n=>u(n,"Get counter").data),U=({serverURL:e,lang:t,path:r,type:o,action:a})=>fetch(`${h(e)}article?lang=${t}`,{method:"POST",headers:$,body:JSON.stringify({path:r,type:o,action:a})}).then(n=>n.json()).then(n=>u(n,"Update counter").data),R=({serverURL:e,lang:t,paths:r,signal:o})=>f({serverURL:e,lang:t,paths:r,type:["time"],signal:o}),w=e=>U({...e,type:"time",action:"inc"}),L=(e="")=>e.replace(/\/$/u,""),b=e=>/^(https?:)?\/\//.test(e),d=e=>{const t=L(e);return b(t)?t:`https://${t}`},j=e=>{e.name!=="AbortError"&&console.error(e.message)},m=e=>{const{path:t}=e.dataset;return t!=null&&t.length?t:null},y=(e,t)=>{t.forEach((r,o)=>{const a=e[o].time;typeof a=="number"&&(r.innerText=a.toString())})},S=({serverURL:e,path:t=window.location.pathname,selector:r=".waline-pageview-count",update:o=!0,lang:a=navigator.language})=>{const n=new AbortController,i=Array.from(document.querySelectorAll(r)),p=l=>{const s=m(l);return s!==null&&t!==s},g=l=>R({serverURL:d(e),paths:l.map(s=>m(s)??t),lang:a,signal:n.signal}).then(s=>y(s,l)).catch(j);if(o){const l=i.filter(c=>!p(c)),s=i.filter(p);w({serverURL:d(e),path:t,lang:a}).then(c=>y(c,l)),s.length&&g(s)}else g(i);return n.abort.bind(n)};export{S as pageviewCount,v as version};
//# sourceMappingURL=pageview.js.map
