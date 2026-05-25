import{b as r}from"./index-BX1DR_go.js";const n={upload:(e,o)=>{const t=new FormData;return t.append("file",o),r.post(e,t,{}).then(a=>a.data?.data?.id?a.data.data:a.data)}};export{n as u};
