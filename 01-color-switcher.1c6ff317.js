!function(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let o=null;function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{t.setAttribute("disabled",""),r.style.backgroundColor=d(),o=setInterval((()=>{r.style.backgroundColor=d()}),1e3),e.removeAttribute("disabled")})),e.addEventListener("click",(()=>{clearInterval(o),t.removeAttribute("disabled"),e.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.1c6ff317.js.map
