const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};const e=()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};let d=null;t.stop.setAttribute("disabled","disabled"),t.start.addEventListener("click",(function(){t.start.setAttribute("disabled","disabled"),t.stop.removeAttribute("disabled"),d=setInterval(e,1e3)})),t.stop.addEventListener("click",(function(){t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled","disabled"),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.2e17329b.js.map
