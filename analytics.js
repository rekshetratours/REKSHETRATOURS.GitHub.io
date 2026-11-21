/* analytics.js — Google Analytics 4 (GA4). 
   Setup: analytics.google.com lo Property create chesi "Measurement ID" (G-XXXXXXXXXX) ikkada petti, file save cheyandi.
   ID empty ga unte emi load avvadu. */
(function(){
  var GA_ID=''; // <-- ikkada G-XXXXXXXXXX petti
  if(!GA_ID||location.hostname==='localhost')return;
  var s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID; document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[]; function gtag(){dataLayer.push(arguments);} window.gtag=gtag;
  gtag('js',new Date()); gtag('config',GA_ID,{anonymize_ip:true});
})();
