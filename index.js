let performPromiseObject=e=>{if("object"==typeof e){let r=Object.keys(e),t=r.map(r=>(console.log(Object.keys(e[r])),(Object.keys(e[r])||[]).length?performPromiseObject(e[r]):e[r]));return Promise.all(t).then(e=>{let t=new Object;return e.forEach((e,o)=>{t[r[o]]=e}),Promise.resolve(t)})}};module.exports=(e=>performPromiseObject(e).then(e=>e).catch(e=>Promise.reject(new Error(e))));