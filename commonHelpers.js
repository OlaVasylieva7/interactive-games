(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const Y="/interactive-games/assets/dark-theme-8e966008.svg",K="/interactive-games/assets/light-theme-8d45d858.svg",T=document.getElementById("icon");T.addEventListener("click",z);function z(){document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?(T.src=Y,T.style.animation):T.src=K}const Q=document.querySelector(".js-backdrop"),Z=document.querySelector(".modal__btn-close"),ee=document.querySelector('[data-action="open-thanks-modal"]');document.querySelector(".thanks__modal");Q.addEventListener("click",ne);Z.addEventListener("click",q);ee.addEventListener("click",te);function te(){document.body.classList.add("show-modal"),window.addEventListener("keydown",se)}function q(){document.body.classList.remove("show-modal")}function ne(e){e.target===e.currentTarget&&q()}function se(e){e.press,e.code==="Escape"&&q()}const ie=document.querySelectorAll('a[href*="#"]');for(let e of ie)e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})});const oe=document.querySelector(".submenu__list"),ce=document.querySelectorAll("section"),re=document.querySelector(".interactive");function ae(){oe.addEventListener("click",e=>{e.preventDefault();const t=e.target.dataset.id,n={numerical:"Числовий",game:"Ігровий",acquaintance:"Ознайомчий"};if(n.hasOwnProperty(t)){const c=n[t];re.innerHTML=`
        <a href="" class="interactive">${c}
          <svg class="arrow" width="10" height="14">
            <use href="/img/icons/symbol-defs.svg#icon-arrow"></use>
          </svg>
        </a>
      `,le(t)}})}function le(e){ce.forEach(t=>{t.style.display=t.classList.contains(e)?"block":"none"})}ae();const b=document.querySelector(".date__input"),ue=document.querySelector(".date__btn"),_=document.querySelector(".date__text");ue.addEventListener("click",de);function de(e){b.value%4===0&&b.value>0?(_.textContent="Ви народилися у високосний рік!",_.style.color="#039900"):b.value%4!==0?(_.textContent="Ви народилися не у високосний рік!",_.style.color="#900"):(_.textContent="Потрібно ввести рік народження",_.style.color="#900"),b.value=""}const me=document.getElementById("date__input"),fe=document.getElementById("date__button"),E=document.getElementById("text");fe.addEventListener("click",ge);function ge(){const e=Math.floor(Math.random()*10+1);Number(me.value)===e?(E.textContent=`Вітаю, ви вгадали число! ${e}`,E.style.color="#039900"):(E.textContent=`Ви програли, комп'ютер загадав число ${e}`,E.style.color="#900")}const H=["stone","scissors","paper"],L=document.getElementById("comp__button");function _e(){const e=Math.floor(Math.random()*H.length),t=H[e];return t==="stone"?L.innerHTML='<img src="./img/rsp/stone.png"/>':t==="scissors"?L.innerHTML='<img src="./img/rsp/scissors.png"/>':t==="paper"?L.innerHTML='<img src="./img/rsp/paper.png"/>':L.innerHTML="",t}let j=0,D=0;function pe(e,t){return e===t?"Нічия!":e==="stone"&&t==="scissors"||e==="scissors"&&t==="paper"||e==="paper"&&t==="stone"?(D++,"Ви виграли!"):(j++,"Комп'ютер виграв!")}document.querySelectorAll(".rsp__btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.id.split("__")[0],n=_e(),c=pe(t,n);document.querySelector(".rsp__text").textContent=c,document.getElementById("counter__comp").textContent="Комп’ютер - "+j,document.getElementById("counter__user").textContent="Ви - "+D})});const he=document.getElementById("first-number"),ye=document.getElementById("second-number");function ve(){const e=+he.value||0,t=+ye.value||0;switch(document.querySelector('input[name="operator"]:checked').value){case"+":return e+t;case"-":return e-t;case"*":return e*t;case"/":return t!==0?e/t:"ділення на нуль!";default:return""}}const be=document.querySelectorAll('input[name="operator"]');be.forEach(e=>{e.addEventListener("click",function(){F.disabled=!1})});const F=document.getElementById("button-result");F.addEventListener("click",function(){const e=document.getElementById("calculator-result"),t=ve();e.innerText=t});const Ee=document.getElementById("convert"),Le=document.getElementById("minutes"),Te=document.getElementById("time-calculator-result");Ee.addEventListener("click",function(){const e=parseInt(Le.value||0),t=$e(e),n=`${t.days} дн. ${t.hours}:${t.minutes}`;Te.innerText=n});function $e(e){const t=Math.floor(e/1440),n=e%60,c=Math.floor(e%(60*24)/60);return{days:t,hours:c,minutes:n}}const Se=1e-5,Me=document.querySelector("#game"),Ce=document.querySelector("#score"),ke=document.querySelector("#start-message"),G=document.querySelector("#gameover-message"),xe=document.getElementById("start-game");xe.addEventListener("click",U,{once:!0});let y,v,B;function w(e){if(y==null){y=e,window.requestAnimationFrame(w);return}const t=e-y;if(Oe(t,v),Fe(t,v),Ke(t,v),Ie(t),Be(t),Ae())return qe();y=e,window.requestAnimationFrame(w)}function U(){y=null,v=1,B=0,He(),De(),Ye(),ke.classList.add("hide"),G.classList.add("hide"),window.requestAnimationFrame(w)}function Ie(e){v+=e*Se}function Be(e){B+=e*.01,Ce.textContent=Math.floor(B)}function we(e,t){return e.left<t.right&&e.top<t.bottom&&e.right>t.left&&e.bottom>t.top}function Ae(){const e=Ge();return ze().some(t=>we(t,e))}function qe(){Ue(),setTimeout(()=>{document.addEventListener("keydown",U,{once:!0}),G.classList.remove("hide")},100)}function x(e,t){return parseFloat(getComputedStyle(e).getPropertyValue(t))||0}function p(e,t,n){e.style.setProperty(t,n)}function C(e,t,n){p(e,t,x(e,t)+n)}const Ne=.05,A=document.querySelectorAll(".ground");function He(){p(A[0],"--left",0),p(A[1],"--left",100)}function Oe(e,t){A.forEach(n=>{C(n,"--left",e*t*Ne*-1),x(n,"--left")<=-100&&C(n,"--left",200)})}const f=document.querySelector("#dino"),Pe=.45,Re=.0015,je=2,O=100;let h,$,S,k;function De(){h=!1,$=0,S=0,k=0,p(f,"--bottom",0),document.removeEventListener("keydown",P),document.addEventListener("keydown",P)}function Fe(e,t){Ve(e,t),We(e)}function Ge(){return f.getBoundingClientRect()}function Ue(){f.src="../img/dino/dino-lose.png"}function Ve(e,t){if(h){f.src="../img/dino/dino-stationary.png";return}S>=O&&($=($+1)%je,f.src=`../img/dino/dino-run-${$}.png`,S-=O),S+=e*t}function We(e){h&&(C(f,"--bottom",k*e),x(f,"--bottom")<=0&&(p(f,"--bottom",0),h=!1),k-=Re*e)}function P(e){e.code!=="Space"||h||(k=Pe,h=!0)}const Je=.05,V=500,Xe=2e3;let M;function Ye(){M=V,document.querySelectorAll(".cactus").forEach(e=>{e.remove()})}function Ke(e,t){document.querySelectorAll(".cactus").forEach(n=>{C(n,"--left",e*t*Je*-1),x(n,"--left")<=-100&&n.remove()}),M<=0&&(Qe(),M=Ze(V,Xe)/t),M-=e}function ze(){return[...document.querySelectorAll(".cactus")].map(e=>e.getBoundingClientRect())}function Qe(){const e=document.createElement("img");e.src="../img/dino/cactus.png",e.classList.add("cactus"),p(e,"--left",100),Me.append(e)}function Ze(e,t){return Math.floor(Math.random()*(t-e+1)+e)}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("field"),t=document.getElementById("ball");e.addEventListener("click",function(n){let c=e.getBoundingClientRect(),o=n.clientX-c.left,r=n.clientY-c.top,g=o-t.clientWidth/2,I=r-t.clientHeight/2;g=Math.max(0,Math.min(g,e.clientWidth-t.clientWidth)),I=Math.max(0,Math.min(I,e.clientHeight-t.clientHeight)),t.style.left=g+"px",t.style.top=I+"px"})});const W=document.getElementById("one__input"),J=document.getElementById("two__input"),X=document.getElementById("three__input"),R=document.querySelector(".enter__number__text");function et(e,t,n){return Math.max(e,t,n)}function N(){const e=W.value,t=J.value,n=X.value;if(!isNaN(e)&&!isNaN(t)&&!isNaN(n)){const c=et(+e,+t,+n);R.textContent="Найбільше число, яке ви ввели - "+c}else R.textContent="Будь ласка, введіть тільки числа"}W.addEventListener("input",N);J.addEventListener("input",N);X.addEventListener("input",N);new Swiper(".swiper",{slidesPerView:1,spaceBetween:18,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},freeMode:!0,speed:800,keyboard:!0});const s=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1,url:"/img/scientists/albert-einstein.jpg",alt:"Albert Einstein"},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2,url:"/img/scientists/isaac-newton.jpg",alt:"Isaac Newton"},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3,url:"/img/scientists/galileo-galilei.jpg",alt:"Galileo Galilei"},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4,url:"/img/scientists/marie-curie.jpg",alt:"Marie Curie"},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5,url:"/img/scientists/johannes-kepler.jpg",alt:"Johannes Kepler"},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6,url:"/img/scientists/nicolau-copernicus.jpg",alt:"Nicolaus Copernicus"},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7,url:"/img/scientists/max-planck.jpg",alt:"Max Planck"},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8,url:"/img/scientists/katherine-blodgett.jpg",alt:"Katherine Blodgett"},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9,url:"/img/scientists/ada-lovelace.jpg",alt:"Ada Lovelace"},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10,url:"/img/scientists/sarah-goode.jpg",alt:"Sarah E. Goode"},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11,url:"/img/scientists/lise-meitner.jpg",alt:"Lise Meitner"},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12,url:"/img/scientists/hanna-hammarström.jpg",alt:"Hanna Hammarström"}],l=document.querySelectorAll(".option"),a=document.querySelectorAll(".scientists__item");let i=0;l[0].addEventListener("click",tt);l[1].addEventListener("click",nt);l[2].addEventListener("click",st);l[3].addEventListener("click",it);l[4].addEventListener("click",ot);l[5].addEventListener("click",ct);l[6].addEventListener("click",rt);l[7].addEventListener("click",at);l[8].addEventListener("click",lt);function u(){a.forEach(e=>e.innerHTML="")}function d(){a.forEach(e=>e.style.transform="scaleX(-1)")}function m(){a.forEach(e=>e.style.transform="scaleX(1)")}function tt(){d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let e of s)e.born>=1801&&e.born<=1900&&(a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${e.url}" alt="${e.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${e.name} ${e.surname}</h3><p class="scientists__years">${e.born} - ${e.dead}</p></div></li>`,i+=1);i=0},250),setTimeout(()=>!0,1e3)},1e3)}function nt(){s.sort((e,t)=>e.name.localeCompare(t.name)),d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let e of s)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${e.url}" alt="${e.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${e.name} ${e.surname}</h3><p class="scientists__years">${e.born} - ${e.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}function st(){s.sort((e,t)=>e.dead-e.born-(t.dead-t.born)),d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let e of s)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${e.url}" alt="${e.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${e.name} ${e.surname}</h3><p class="scientists__years">${e.born} - ${e.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}function it(){s.sort((e,t)=>t.born-e.born),d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{a[0].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${s[0].url}" alt="${s[0].alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${s[0].name} ${s[0].surname}</h3><p class="scientists__years">${s[0].born} - ${s[0].dead}</p></div></li>`},250),setTimeout(()=>!0,1e3)},1e3)}function ot(){const e=s.find(t=>t.name==="Albert"&&t.surname==="Einstein");d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{a[0].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${e.url}" alt="${e.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${e.name} ${e.surname}</h3><p class="scientists__years">${e.born} - ${e.dead}</p></div></li>`},250),setTimeout(()=>!0,1e3)},1e3)}function ct(){const e=s.filter(t=>t.surname[0]!=="C");d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let t of e)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${t.url}" alt="${t.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${t.name} ${t.surname}</h3><p class="scientists__years">${t.born} - ${t.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}function rt(){const e=s.filter(t=>t.name[0]!=="A");d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let t of e)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${t.url}" alt="${t.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${t.name} ${t.surname}</h3><p class="scientists__years">${t.born} - ${t.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}function at(e){s.sort((t,n)=>t.dead-t.born-(n.dead-n.born)),d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{a[0].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${s[0].url}" alt="${s[0].alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${s[0].name} ${s[0].surname}</h3><p class="scientists__years">${s[0].born} - ${s[0].dead}</p></div></li>`,a[1].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${s[s.length-1].url}" alt="${s[s.length-1].alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${s[s.length-1].name} ${s[s.length-1].surname}</h3><p class="scientists__years">${s[s.length-1].born} - ${s[s.length-1].dead}</p></div></li>`},250),setTimeout(()=>!0,1e3)},1e3)}function lt(e){const t=s.filter(n=>n.name[0]===n.surname[0]);d(),setTimeout(u,250),setTimeout(()=>{m(),setTimeout(()=>{for(let n of t)a[i].innerHTML=`<li class="scientists__item"><img class="scientists__img" src="${n.url}" alt="${n.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${n.name} ${n.surname}</h3><p class="scientists__years">${n.born} - ${n.dead}</p></div></li>`,i+=1;i=0},250),setTimeout(()=>!0,1e3)},1e3)}document.addEventListener("keydown",function(e){e.keyCode===32&&e.preventDefault()});
//# sourceMappingURL=commonHelpers.js.map
