
function openModule(module){

 const map = {
   nexus: "modules/nexus.html",
   rts: "modules/rts.html",
   pms: "modules/pms.html",
   fas: "modules/fas.html",
   fms: "modules/fms.html"
 }

 fetch(map[module])
 .then(r=>r.text())
 .then(html=>{
   document.getElementById("workspace").innerHTML = html
 })
}
