/* Kaleshwaram Temple Info Box (ఆలయ సమాచారం)
   Use: <script src="kw-box.js" defer></script>
   - Page lo <div id="kw-slot"></div> unte, box akkade (column lo) vastundi.
   - Lekapothe: desktop lo kudi vaipu floating box, mobile lo page chivara.
   Data: updates.json (same folder).  Full page: updates.html */
(function(){
  var MAX = 3;                         // box lo entha items chupinchali
  var LINK = "updates.html";
  var TITLE = "🛕 ఆలయ సమాచారం";
  var MOBILE_BEFORE = "";              // slot ledani page lo, mobile lo ee selector mundu pettali (optional)

  var slot = document.getElementById("kw-slot");
  if (!slot) { try{ if(sessionStorage.getItem("kwb-closed")) return; }catch(e){} }

  var font=document.createElement("link");
  font.rel="stylesheet"; font.href="https://fonts.googleapis.com/css2?family=Mandali&display=swap";
  document.head.appendChild(font);

  var css=".kwb{--sf:#e8761a;--mr:#7a1f1f;--ln:#f0dcc0;font-family:'Mandali',system-ui,sans-serif;background:#fff7ea;color:#2b1a12;border:1px solid var(--ln);border-radius:14px;box-shadow:0 8px 24px rgba(122,31,31,.18);overflow:hidden;width:min(92%,420px);margin:16px auto;line-height:1.5;box-sizing:border-box}"+
  ".kwb *{box-sizing:border-box}.kwb[hidden]{display:none}"+
  ".kwb-h{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,#7a1f1f,#e8761a);color:#fff;padding:9px 12px;font-size:1rem}"+
  ".kwb-x{background:none;border:0;color:#fff;font-size:1.2rem;cursor:pointer;line-height:1}"+
  ".kwb-b{padding:8px 12px 10px;max-height:300px;overflow-y:auto}"+
  ".kwb-i{padding:8px 0;border-bottom:1px dashed var(--ln);font-size:.92rem}.kwb-i:last-child{border:0}"+
  ".kwb-tag{display:inline-block;font-size:.7rem;padding:0 8px;border-radius:999px;background:var(--sf);color:#fff;margin-right:6px;font-family:system-ui,sans-serif}"+
  ".kwb-tag.imp{background:var(--mr)}"+
  ".kwb-new{font-size:.7rem;color:#d12b2b;font-weight:700;font-family:system-ui,sans-serif}"+
  ".kwb-d{display:block;font-size:.74rem;color:#7b6455;font-family:system-ui,sans-serif}"+
  ".kwb-f{display:block;text-align:center;padding:9px;background:#fff;border-top:1px solid var(--ln);color:var(--mr);text-decoration:none;font-size:.95rem}"+
  ".kwb-f:hover{background:#fff1d9}"+
  "@media(min-width:1100px){.kwb{position:fixed;right:18px;top:110px;width:290px;margin:0;z-index:99999}}"+
  /* column (slot) mode */
  ".kwb.kwb-slot{position:static;width:100%;margin:0;height:100%;display:flex;flex-direction:column;z-index:auto;box-shadow:0 3px 10px rgba(0,0,0,.1)}"+
  ".kwb-slot .kwb-h{padding:12px 16px;font-size:1.2rem}"+
  ".kwb-slot .kwb-b{flex:1;min-height:0;max-height:none;overflow-y:auto;-webkit-overflow-scrolling:touch;scrollbar-width:thin;padding:10px 16px}"+
  ".kwb-slot .kwb-i{font-size:1.02rem}"+
  ".kwb-slot .kwb-f{padding:12px;font-size:1rem}"+
  "@media(max-width:620px){.kwb-slot .kwb-h{padding:9px 10px;font-size:1rem}.kwb-slot .kwb-b{padding:4px 10px}.kwb-slot .kwb-i{font-size:.86rem}.kwb-slot .kwb-d{font-size:.7rem}.kwb-slot .kwb-f{padding:9px 6px;font-size:.84rem}}";
  var st=document.createElement("style"); st.textContent=css; document.head.appendChild(st);

  var today=new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Kolkata"});
  function esc(s){return String(s||"").replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}

  function build(list){
    var box=document.createElement("aside");
    box.className="kwb"+(slot?" kwb-slot":"");
    box.setAttribute("aria-label","Temple information");
    var body = list.length ? list.map(function(u){
        var isNew=(new Date(today)-new Date(u.date))<=3*864e5;
        return '<div class="kwb-i"><span class="kwb-tag'+(u.important?' imp':'')+'">'+esc(u.tag)+'</span>'+
          (isNew?'<span class="kwb-new">NEW</span>':'')+'<span class="kwb-d">'+esc(u.date)+'</span>'+esc(u.short||u.te)+'</div>';
      }).join("")
      : '<div class="kwb-i">ప్రస్తుతం కొత్త సమాచారం లేదు.</div>';
    box.innerHTML='<div class="kwb-h"><span>'+TITLE+'</span>'+(slot?'':'<button class="kwb-x" aria-label="Close">×</button>')+'</div>'+
      '<div class="kwb-b">'+body+'</div><a class="kwb-f" href="'+LINK+'">అన్ని నవీకరణలు చూడండి →</a>';
    box.addEventListener("click",function(e){ if(e.target.closest(".kwb-b")) location.href=LINK; });
    if (slot) { slot.appendChild(box); return; }
    box.querySelector(".kwb-x").onclick=function(){box.hidden=true;try{sessionStorage.setItem("kwb-closed","1")}catch(e){}};
    var before = window.innerWidth < 1100 && MOBILE_BEFORE ? document.querySelector(MOBILE_BEFORE) : null;
    if (before && before.parentNode) before.parentNode.insertBefore(box, before);
    else (document.body||document.documentElement).appendChild(box);
  }

  fetch("updates.json?v="+Date.now()).then(function(r){return r.json()}).then(function(all){
    var list=all.filter(function(u){return !u.until||u.until>=today})
                .sort(function(a,b){return b.date>a.date?1:b.date<a.date?-1:0}).slice(0,MAX);
    if(!list.length && !slot) return;
    build(list);
  }).catch(function(){ if(slot) build([]); });
})();
