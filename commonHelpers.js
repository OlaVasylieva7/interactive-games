(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=c(n);fetch(n.href,o)}})();const u=document.getElementById("icon");u.addEventListener("click",a);function a(){document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?u.src="/img/icons/dark-theme.svg":u.src="/img/icons/light-theme.svg"}const d=document.querySelector(".date__input"),m=document.querySelector(".date__btn"),s=document.querySelector(".date__text");m.addEventListener("click",f);function f(t){d.value%4===0?(s.textContent="Ви народилися у високосний рік!",s.style.color="#039900"):(s.textContent="Ви народилися не у високосний рік!",s.style.color="#900")}const y=document.getElementById("first-number"),p=document.getElementById("second-number");function g(){const t=+y.value||0,e=+p.value||0;if(e===0)return"ділення на нуль!";switch(document.querySelector('input[name="operator"]:checked').value){case"+":return t+e;case"-":return t-e;case"*":return t*e;case"/":return t/e;default:return""}}const E=document.querySelectorAll('input[name="operator"]');E.forEach(t=>{t.addEventListener("click",function(){i.disabled=!1})});const i=document.getElementById("button-result");i.addEventListener("click",function(){const t=document.getElementById("calculator-result"),e=g();t.innerText=e});const h=document.getElementById("convert"),v=document.getElementById("minutes"),b=document.getElementById("time-calculator-result");h.addEventListener("click",function(){const t=parseInt(v.value||0),e=I(t),c=`${e.days} дн. ${e.hours}:${e.minutes}`;b.innerText=c});function I(t){const e=Math.floor(t/1440),c=t%60,r=Math.floor(t%(60*24)/60);return{days:e,hours:r,minutes:c}}document.querySelectorAll(".scientists__item");document.querySelectorAll(".option");
//# sourceMappingURL=commonHelpers.js.map
