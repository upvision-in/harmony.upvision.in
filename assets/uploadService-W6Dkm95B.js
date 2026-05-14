import{d as o}from"./index-CtCd4Dso.js";const n={upload:(d,e)=>{const t=new FormData;return t.append("file",e),o.post(d,t,{}).then(a=>a.data?.data?.id?a.data.data:a.data)}};export{n as u};
