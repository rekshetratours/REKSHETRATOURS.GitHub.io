/* Adi Mukteshwara: always route Google Maps directions to the correct point */
(function(){
  var URL='https://www.google.com/maps/dir/?api=1&destination=18.810598%2C79.897533&travelmode=driving';
  function isAdi(s){try{s=decodeURIComponent(s||'')}catch(e){s=s||''}return /adi[\s+_-]*mukt(h)?e+shwara/i.test(s)}
  function fix(){
    var links=document.querySelectorAll('a[href*="google.com/maps"]');
    for(var i=0;i<links.length;i++){var a=links[i];if(isAdi(a.getAttribute('href'))&&a.getAttribute('href')!==URL)a.setAttribute('href',URL)}
    var n=document.getElementById('dName'),d=document.getElementById('dDir');
    if(n&&d&&isAdi(n.textContent)&&d.getAttribute('href')!==URL)d.setAttribute('href',URL);
  }
  fix();
  new MutationObserver(fix).observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['href']});
})();
