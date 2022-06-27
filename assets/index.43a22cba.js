var c=Object.defineProperty;var p=(o,r,e)=>r in o?c(o,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[r]=e;var a=(o,r,e)=>(p(o,typeof r!="symbol"?r+"":r,e),e);const u=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}};u();class h extends HTMLElement{constructor(){super();a(this,"_baseUrl","http://api.core.jerico-ri.test.socib.es/api");this.attachShadow({mode:"open"}),this.hasAttribute("api-url")?this.renderComponent():this.renderEmpty()}renderEmpty(){this.main().innerHTML="<span>No API url provided</span>"}renderComponent(){if(this.getAttribute("is-expanded")){this.main().innerHTML='<img class="loading-img" src="./assets/loading.gif" alt="loading">';const e=this.getAttribute("api-url");fetch(e).then(i=>i.json()).then(i=>{this.style().innerHTML=this.css(i),this.main().innerHTML=this.html(i),this.addLogic()}).catch(i=>{this.main().innerHTML="<span>Network error, please try again later...</span>"})}else this.main().innerHTML='<button id="expand-btn">expand</button>',this.style().innerHTML=this.css(),this.addLogic()}css(){return`
    *{
      box-sizing: border-box;
      color: #333;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    a{
      color: #277FC2;
    }
    :host{
      display: inline-flex;
      justify-content: flex-start;
      max-width: min(100%, 1000px);
      width: max-content;
    }
    #main{
      display: inline-flex;
      flex-direction: column;
      width: max-content;
      max-width: 100%;
      width: max-content;
      background-color: #fff;
      gap: 8px;
    }
    button{
      background-color: #277FC2;
      color: #fff;
      border: none;
      padding: 4px;
      border-radius: 4px;
      width: max-content;
    }
    #content-div{
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-left: 2px solid #dddb04;
      border-bottom: 2px solid #dddb04;
      padding: 8px;
      border-bottom-left-radius: 8px;
      max-width: 100%;
    }
    .obj-div{
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-left: 2px solid #dddb04;
      border-bottom: 2px solid #dddb04;
      padding: 8px;
      border-bottom-left-radius: 8px;
      max-width: 100%;
    }
    #title-div{
      font-size: 1.5em;
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .keywords-div{
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    strong{
      font-size: 0.9em;
    }
    `}html(e){delete e.entity_id;const i=document.createElement("div"),t=document.createElement("div");t.id="title-div",i.appendChild(t),e.title?(t.innerHTML=`<strong class="title">${e.title}</strong>`,delete e.title):e.name&&(t.innerHTML+=`<strong class="title">${e.name}</strong>`,delete e.name),this.getAttribute("is-root")||(t.innerHTML+='<button id="expand-btn">collapse</button>');const n=document.createElement("div");return n.id="content-div",i.appendChild(n),n.innerHTML+=this.objToHtml(e),i.innerHTML}objToHtml(e){return Object.keys(e).reduce((i,t)=>(typeof e[t]=="object"?e[t]&&(i+=`<div class="${t==="keywords"?"keywords-div":"obj-div"}"><strong>${t}: </strong>`,i+=this.objToHtml(e[t]),i+="</div>"):i+=`<div><strong>${t}: </strong>${this.renderLink(e[t])}</div>`,i),"")}renderLink(e){return typeof e=="string"&&e.startsWith("http")?e.includes(this._baseUrl)?`<api-detail api-url="${e}" is-expanded="false"></api-detail>`:`<a href="${e}" target="_blank">${e}</a>`:e}addLogic(){const e=this.shadowRoot.querySelector("#expand-btn");e==null||e.addEventListener("click",()=>{this.setAttribute("is-expanded",!this.getAttribute("is-expanded"))})}static get observedAttributes(){return["api-url","is-expanded"]}attributeChangedCallback(e,i,t){i!==t&&this.hasAttribute("api-url")&&this.renderComponent()}style(){if(this.shadowRoot.querySelector("style"))return this.shadowRoot.querySelector("style");const e=document.createElement("style");return this.shadowRoot.appendChild(e),e}main(){if(this.shadowRoot.querySelector("#main"))return this.shadowRoot.querySelector("#main");const e=document.createElement("div");return e.id="main",this.shadowRoot.appendChild(e),e}getAttribute(e){return this.parse(super.getAttribute(d(e)))}parse(e){try{return JSON.parse(e)}catch{return e}}setAttribute(e,i){super.setAttribute(d(e),JSON.stringify(i))}hasAttribute(e){return super.hasAttribute(d(e))}}function d(o){return o.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}customElements.define("api-detail",h);const f="http://api.core.jerico-ri.test.socib.es/api";window.addEventListener("hashchange",()=>l(window.location.hash));function l(o){o||(o="#/project/9232ed6633d7f733e1299031867737f94b284568/");const r=o.replace("#",f)+"?format=json";document.querySelector("#main-detail").setAttribute("api-url",r)}l(window.location.hash);
