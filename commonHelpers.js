(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const l=document.querySelector(".modal__save-btn");document.querySelector(".modal");const a=document.querySelector('[data-action="open-modal"]');a.addEventListener("click",m);l.addEventListener("click",d);function m(){document.body.classList.add("show-modal"),window.addEventListener("keydown",i)}function d(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",i)}const f=document.querySelector(".js-backdrop");f.addEventListener("click",p);function p(o){o.target===o.currentTarget&&d()}function i(o){o.pre,o.code==="Escape"&&d()}const y=document.querySelector(".modal__input"),v=document.getElementById("user__name");y.addEventListener("input",L);function L(o){v.textContent=o.currentTargent.value||"Незнайомець"}const g=document.querySelector(".date__input"),_=document.querySelector(".date__btn"),n=document.querySelector(".date__text");_.addEventListener("click",E);function E(o){g.value%4===0?(n.textContent="Ви народилися у високосний рік!",n.style.color="#039900"):(n.textContent="Ви народилися не у високосний рік!",n.style.color="#900")}
//# sourceMappingURL=commonHelpers.js.map
