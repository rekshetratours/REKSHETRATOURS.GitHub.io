/* tour-popup.js — itinerary stop meida mouse teesukelthe info popup; mouse tolagagane marugu avtundi.
   Touch devices lo: card lo unna "ⓘ" button nokkandi. Data: tour-info.js (window.TOUR_INFO) */
(function(){
  var INFO=window.TOUR_INFO||{};
  var pop=document.createElement('div');
  pop.className='tp-pop'; pop.id='tpPop'; pop.setAttribute('role','tooltip'); pop.hidden=true;
  document.body.appendChild(pop);
  var cur=null, hideT=null, y0=0, w0=0;

  function build(card){
    var cb=card.querySelector('input[data-id]'); if(!cb) return false;
    var d=INFO[cb.getAttribute('data-id')]; if(!d) return false;
    var title=(card.querySelector('.it-title')||{}).textContent||'';
    var sub=(card.querySelector('.it-sub')||{}).textContent||'';
    pop.textContent='';
    var h=document.createElement('strong'); h.className='tp-t tel'; h.textContent=title; pop.appendChild(h);
    if(sub){var s=document.createElement('span'); s.className='tp-s'; s.textContent=sub; pop.appendChild(s);}
    var p=document.createElement('p'); p.className='tp-d tel'; p.textContent=d.d; pop.appendChild(p);
    if(d.p){var a=document.createElement('a'); a.className='tp-a tel'; a.href=d.p; a.textContent='పూర్తి వివరాలు →'; pop.appendChild(a);}
    return true;
  }
  function place(card){
    var r=card.getBoundingClientRect(), vw=document.documentElement.clientWidth, vh=window.innerHeight;
    pop.style.visibility='hidden'; pop.hidden=false;
    var w=Math.min(340,vw-16); pop.style.width=w+'px';
    var h=pop.offsetHeight;
    var left=Math.max(8,Math.min(r.left,vw-w-8));
    var top=r.bottom-2;                       /* card kinda, gap lekunda */
    if(top+h>vh-8 && r.top-h+2>8) top=r.top-h+2; /* ki place ledu ante paina */
    pop.style.left=left+'px'; pop.style.top=Math.max(8,top)+'px';
    pop.style.visibility='';
  }
  function show(card){
    clearTimeout(hideT);
    if(cur===card && !pop.hidden) return;
    if(!build(card)) return;
    cur=card; place(card); y0=window.pageYOffset; w0=window.innerWidth;
    var cb=card.querySelector('input[data-id]'); if(cb) cb.setAttribute('aria-describedby','tpPop');
  }
  function hide(){
    clearTimeout(hideT); pop.hidden=true;
    if(cur){var cb=cur.querySelector('input[data-id]'); if(cb) cb.removeAttribute('aria-describedby');}
    cur=null;
  }
  function soon(){clearTimeout(hideT); hideT=setTimeout(hide,120);}

  var cards=document.querySelectorAll('.it-card');
  var canHover=window.matchMedia&&window.matchMedia('(hover:hover)').matches;
  cards.forEach(function(card){
    if(!card.querySelector('input[data-id]')) return;
    if(canHover){
      card.addEventListener('mouseenter',function(){show(card);});
      card.addEventListener('mouseleave',soon);
    }
    card.addEventListener('focusin',function(e){if(!e.target.classList.contains('tp-btn'))show(card);});
    card.addEventListener('focusout',soon);
    /* touch / keyboard: info button */
    var b=document.createElement('button'); b.type='button'; b.className='tp-btn'; b.textContent='ⓘ';
    b.setAttribute('aria-label','వివరాలు చూడండి');
    b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation(); if(cur===card&&!pop.hidden){hide();}else{show(card);}});
    card.querySelector('.it-row').appendChild(b);
  });
  pop.addEventListener('mouseenter',function(){clearTimeout(hideT);});
  pop.addEventListener('mouseleave',soon);
  document.addEventListener('click',function(e){if(!pop.hidden && !pop.contains(e.target) && !(cur&&cur.contains(e.target))) hide();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')hide();});
  /* chinna scroll / mobile address-bar resize ki hide cheyyakunda — nijanga scroll chesthe matrame */
  window.addEventListener('scroll',function(){if(!pop.hidden&&Math.abs(window.pageYOffset-y0)>60)hide();},{passive:true});
  window.addEventListener('resize',function(){if(!pop.hidden&&window.innerWidth!==w0)hide();});
})();
