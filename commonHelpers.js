(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const _ of r.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const Y="/interactive-games/assets/dark-theme-8e966008.svg",K="/interactive-games/assets/light-theme-8d45d858.svg",I=document.getElementById("icon");I.addEventListener("click",z);function z(){document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?I.src=Y:I.src=K}const Q=document.querySelector(".js-backdrop"),Z=document.querySelector(".modal__btn-close"),ee=document.querySelector('[data-action="open-thanks-modal"]');document.querySelector(".thanks__modal");Q.addEventListener("click",se);Z.addEventListener("click",q);ee.addEventListener("click",te);function te(){document.body.classList.add("show-modal"),window.addEventListener("keydown",ne)}function q(){document.body.classList.remove("show-modal")}function se(e){e.target===e.currentTarget&&q()}function ne(e){e.press,e.code==="Escape"&&q()}const ie=document.querySelectorAll('a[href*="#"]');for(let e of ie)e.addEventListener("click",t=>{t.preventDefault();const s=e.getAttribute("href").substr(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})});const oe=document.querySelector(".submenu__list"),ce=document.querySelectorAll("section"),re=document.querySelector(".interactive");function ae(){oe.addEventListener("click",e=>{e.preventDefault();const t=e.target.dataset.id,s={numerical:"Числовий",game:"Ігровий",acquaintance:"Ознайомчий"};if(s.hasOwnProperty(t)){const c=s[t];re.innerHTML=`
        <a href="" class="interactive">${c}
          <svg class="arrow" width="10" height="14">
            <use href="/img/icons/symbol-defs.svg#icon-arrow"></use>
          </svg>
        </a>
      `,le(t)}})}function le(e){ce.forEach(t=>{t.style.display=t.classList.contains(e)?"block":"none"})}ae();const b=document.querySelector(".date__input"),ue=document.querySelector(".date__btn"),g=document.querySelector(".date__text");ue.addEventListener("click",de);function de(e){b.value%4===0&&b.value>0?(g.textContent="Ви народилися у високосний рік!",g.style.color="#039900"):b.value%4!==0?(g.textContent="Ви народилися не у високосний рік!",g.style.color="#900"):(g.textContent="Потрібно ввести рік народження",g.style.color="#900"),b.value=""}const me=document.getElementById("date__input"),fe=document.getElementById("date__button"),E=document.getElementById("text");fe.addEventListener("click",_e);function _e(){const e=Math.floor(Math.random()*10+1);Number(me.value)===e?(E.textContent=`Вітаю, ви вгадали число! ${e}`,E.style.color="#039900"):(E.textContent=`Ви програли, комп'ютер загадав число ${e}`,E.style.color="#900")}const ge="/interactive-games/assets/stone-d9390922.svg",pe="/interactive-games/assets/scissors-55d3cf71.svg",he="/interactive-games/assets/paper-2c852eaf.svg",H=["stone","scissors","paper"],L=document.getElementById("comp__button");function ve(){const e=Math.floor(Math.random()*H.length),t=H[e];return t==="stone"?L.innerHTML=`<img src="${ge}"/>`:t==="scissors"?L.innerHTML=`<img src="${pe}"/>`:t==="paper"?L.innerHTML=`<img src="${he}"/>`:L.innerHTML="",t}let j=0,D=0;function ye(e,t){return e===t?"Нічия!":e==="stone"&&t==="scissors"||e==="scissors"&&t==="paper"||e==="paper"&&t==="stone"?(D++,"Ви виграли!"):(j++,"Комп'ютер виграв!")}document.querySelectorAll(".rsp__btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.id.split("__")[0],s=ve(),c=ye(t,s);document.querySelector(".rsp__text").textContent=c,document.getElementById("counter__comp").textContent="Комп’ютер - "+j,document.getElementById("counter__user").textContent="Ви - "+D})});const be=document.getElementById("first-number"),Ee=document.getElementById("second-number");function Le(){const e=+be.value||0,t=+Ee.value||0;switch(document.querySelector('input[name="operator"]:checked').value){case"+":return e+t;case"-":return e-t;case"*":return e*t;case"/":return t!==0?e/t:"ділення на нуль!";default:return""}}const Te=document.querySelectorAll('input[name="operator"]');Te.forEach(e=>{e.addEventListener("click",function(){F.disabled=!1})});const F=document.getElementById("button-result");F.addEventListener("click",function(){const e=document.getElementById("calculator-result"),t=Le();e.innerText=t});const $e=document.getElementById("convert"),Se=document.getElementById("minutes"),ke=document.getElementById("time-calculator-result");$e.addEventListener("click",function(){const e=parseInt(Se.value||0),t=Me(e),s=`${t.days} дн. ${t.hours}:${t.minutes}`;ke.innerText=s});function Me(e){const t=Math.floor(e/1440),s=e%60,c=Math.floor(e%(60*24)/60);return{days:t,hours:c,minutes:s}}const Ce="/interactive-games/assets/dino-stationary-997a5dc6.png",xe="/interactive-games/assets/dino-lose-46c995dd.png",Ie=1e-5,Be=document.querySelector("#game"),we=document.querySelector("#score"),Ae=document.querySelector("#start-message"),G=document.querySelector("#gameover-message"),qe=document.getElementById("start-game");qe.addEventListener("click",U,{once:!0});let v,y,B;function w(e){if(v==null){v=e,window.requestAnimationFrame(w);return}const t=e-v;if(Fe(t,y),Je(t,y),tt(t,y),Ne(t),He(t),Pe())return Re();v=e,window.requestAnimationFrame(w)}function U(){v=null,y=1,B=0,De(),We(),et(),Ae.classList.add("hide"),G.classList.add("hide"),window.requestAnimationFrame(w)}function Ne(e){y+=e*Ie}function He(e){B+=e*.01,we.textContent=Math.floor(B)}function Oe(e,t){return e.left<t.right&&e.top<t.bottom&&e.right>t.left&&e.bottom>t.top}function Pe(){const e=Xe();return st().some(t=>Oe(t,e))}function Re(){Ye(),setTimeout(()=>{document.addEventListener("keydown",U,{once:!0}),G.classList.remove("hide")},100)}function C(e,t){return parseFloat(getComputedStyle(e).getPropertyValue(t))||0}function p(e,t,s){e.style.setProperty(t,s)}function k(e,t,s){p(e,t,C(e,t)+s)}const je=.05,A=document.querySelectorAll(".ground");function De(){p(A[0],"--left",0),p(A[1],"--left",100)}function Fe(e,t){A.forEach(s=>{k(s,"--left",e*t*je*-1),C(s,"--left")<=-100&&k(s,"--left",200)})}const f=document.querySelector("#dino"),Ge=.45,Ue=.0015,Ve=2,O=100;let h,T,$,M;function We(){h=!1,T=0,$=0,M=0,p(f,"--bottom",0),document.removeEventListener("keydown",P),document.addEventListener("keydown",P)}function Je(e,t){Ke(e,t),ze(e)}function Xe(){return f.getBoundingClientRect()}function Ye(){f.src=xe}function Ke(e,t){if(h){f.src=Ce;return}$>=O&&(T=(T+1)%Ve,f.src=`/img/dino/dino-run-${T}.png`,$-=O),$+=e*t}function ze(e){h&&(k(f,"--bottom",M*e),C(f,"--bottom")<=0&&(p(f,"--bottom",0),h=!1),M-=Ue*e)}function P(e){e.code!=="Space"||h||(M=Ge,h=!0)}const Qe=.05,V=500,Ze=2e3;let S;function et(){S=V,document.querySelectorAll(".cactus").forEach(e=>{e.remove()})}function tt(e,t){document.querySelectorAll(".cactus").forEach(s=>{k(s,"--left",e*t*Qe*-1),C(s,"--left")<=-100&&s.remove()}),S<=0&&(nt(),S=it(V,Ze)/t),S-=e}function st(){return[...document.querySelectorAll(".cactus")].map(e=>e.getBoundingClientRect())}function nt(){const e=document.createElement("img");e.src=e,e.classList.add("cactus"),p(e,"--left",100),Be.append(e)}function it(e,t){return Math.floor(Math.random()*(t-e+1)+e)}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("field"),t=document.getElementById("ball");e.addEventListener("click",function(s){let c=e.getBoundingClientRect(),o=s.clientX-c.left,r=s.clientY-c.top,_=o-t.clientWidth/2,x=r-t.clientHeight/2;_=Math.max(0,Math.min(_,e.clientWidth-t.clientWidth)),x=Math.max(0,Math.min(x,e.clientHeight-t.clientHeight)),t.style.left=_+"px",t.style.top=x+"px"})});const W=document.getElementById("one__input"),J=document.getElementById("two__input"),X=document.getElementById("three__input"),R=document.querySelector(".enter__number__text");function ot(e,t,s){return Math.max(e,t,s)}function N(){const e=W.value,t=J.value,s=X.value;if(!isNaN(e)&&!isNaN(t)&&!isNaN(s)){const c=ot(+e,+t,+s);R.textContent="Найбільше число, яке ви ввели - "+c}else R.textContent="Будь ласка, введіть тільки числа"}W.addEventListener("input",N);J.addEventListener("input",N);X.addEventListener("input",N);new Swiper(".swiper",{slidesPerView:1,spaceBetween:18,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},freeMode:!0,speed:800,keyboard:!0});const n=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1,url:"/img/scientists/albert-einstein.jpg",alt:"Albert Einstein"},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2,url:"/img/scientists/isaac-newton.jpg",alt:"Isaac Newton"},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3,url:"/img/scientists/galileo-galilei.jpg",alt:"Galileo Galilei"},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4,url:"/img/scientists/marie-curie.jpg",alt:"Marie Curie"},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5,url:"/img/scientists/johannes-kepler.jpg",alt:"Johannes Kepler"},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6,url:"/img/scientists/nicolau-copernicus.jpg",alt:"Nicolaus Copernicus"},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7,url:"/img/scientists/max-planck.jpg",alt:"Max Planck"},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8,url:"/img/scientists/katherine-blodgett.jpg",alt:"Katherine Blodgett"},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9,url:"/img/scientists/ada-lovelace.jpg",alt:"Ada Lovelace"},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10,url:"/img/scientists/sarah-goode.jpg",alt:"Sarah E. Goode"},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11,url:"/img/scientists/lise-meitner.jpg",alt:"Lise Meitner"},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12,url:"/img/scientists/hanna-hammarström.jpg",alt:"Hanna Hammarström"}],l=document.querySelectorAll(".option"),a=document.querySelectorAll(".scientists__item");let i=0;l[0].addEventListener("click",ct);l[1].addEventListener("click",rt);l[2].addEventListener("click",at);l[3].addEventListener("click",lt);l[4].addEventListener("click",ut);l[5].addEventListener("click",dt);l[6].addEventListener("click",mt);l[7].addEventListener("click",ft);l[8].addEventListener("click",_t);function u(){a.forEach(e=>e.innerHTML="")}function d(){a.forEach(e=>e.style.transform="scaleX(-1)")}function m(){a.forEach(e=>e.style.transform="scaleX(1)")}function ct(){d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let e of n)e.born>=1801&&e.born<=1900&&(a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${e.url}" alt="${e.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${e.name} ${e.surname}</h3><p class="scientists__years">${e.born} - ${e.dead}</p></div></li>`,i+=1);i=0},250),setTimeout(()=>!0,1e3)},1e3)}function rt(){n.sort((e,t)=>e.name.localeCompare(t.name)),d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let e of n)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${e.url}" alt="${e.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${e.name} ${e.surname}</h3><p class="scientists__years">${e.born} - ${e.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}function at(){n.sort((e,t)=>e.dead-e.born-(t.dead-t.born)),d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let e of n)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${e.url}" alt="${e.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${e.name} ${e.surname}</h3><p class="scientists__years">${e.born} - ${e.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}function lt(){n.sort((e,t)=>t.born-e.born),d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{a[0].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${n[0].url}" alt="${n[0].alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${n[0].name} ${n[0].surname}</h3><p class="scientists__years">${n[0].born} - ${n[0].dead}</p></div></li>`},250),setTimeout(()=>!0,1e3)},1e3)}function ut(){const e=n.find(t=>t.name==="Albert"&&t.surname==="Einstein");d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{a[0].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${e.url}" alt="${e.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${e.name} ${e.surname}</h3><p class="scientists__years">${e.born} - ${e.dead}</p></div></li>`},250),setTimeout(()=>!0,1e3)},1e3)}function dt(){const e=n.filter(t=>t.surname[0]!=="C");d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let t of e)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${t.url}" alt="${t.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${t.name} ${t.surname}</h3><p class="scientists__years">${t.born} - ${t.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}function mt(){const e=n.filter(t=>t.name[0]!=="A");d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let t of e)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${t.url}" alt="${t.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${t.name} ${t.surname}</h3><p class="scientists__years">${t.born} - ${t.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}function ft(e){n.sort((t,s)=>t.dead-t.born-(s.dead-s.born)),d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{a[0].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${n[0].url}" alt="${n[0].alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${n[0].name} ${n[0].surname}</h3><p class="scientists__years">${n[0].born} - ${n[0].dead}</p></div></li>`,a[1].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${n[n.length-1].url}" alt="${n[n.length-1].alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${n[n.length-1].name} ${n[n.length-1].surname}</h3><p class="scientists__years">${n[n.length-1].born} - ${n[n.length-1].dead}</p></div></li>`},250),setTimeout(()=>!0,1e3)},1e3)}function _t(e){const t=n.filter(s=>s.name[0]===s.surname[0]);d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let s of t)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${s.url}" alt="${s.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${s.name} ${s.surname}</h3><p class="scientists__years">${s.born} - ${s.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}document.addEventListener("keydown",function(e){e.keyCode===32&&e.preventDefault()});
//# sourceMappingURL=commonHelpers.js.map
