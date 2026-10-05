/* Casual copy deterrent for photos (cannot stop screenshots; images are also watermarked) */
(function(){
  var st=document.createElement('style');
  st.textContent='img,video{-webkit-user-drag:none;user-drag:none;-webkit-touch-callout:none}img{-webkit-user-select:none;user-select:none}';
  document.head.appendChild(st);
  function isMedia(t){return t&&(t.tagName==='IMG'||t.tagName==='VIDEO');}
  document.addEventListener('contextmenu',function(e){if(isMedia(e.target))e.preventDefault();});
  document.addEventListener('dragstart',function(e){if(isMedia(e.target))e.preventDefault();});
  function nodl(){document.querySelectorAll('video').forEach(function(v){v.setAttribute('controlsList','nodownload');v.setAttribute('disablePictureInPicture','');});}
  if(document.readyState!=='loading')nodl();else document.addEventListener('DOMContentLoaded',nodl);
})();
