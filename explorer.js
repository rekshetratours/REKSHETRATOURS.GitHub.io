
const PLACES = [
  {name:"Kaleshwaram Temple", page:"sri-kaleshwara-muktheeshwara-swamy.html", q:"Sri Kaleshwara Mukteshwara Swamy Temple, Kaleshwaram, Telangana", tel:"కాలేశ్వరం ఆలయం", type:"Temple", dist:0, angle:0, r:0, cat:"temple", desc:"Sri Kaleshwara Mukteshwara Swamy Temple is a major pilgrimage destination known for its spiritual significance, Triveni Sangamam and rich cultural heritage."},
  {name:"Triveni Sangamam", page:"triveni-sangamam.html", tel:"త్రివేణి సంగమం", type:"Theertha", dist:0.5, angle:200, r:1, cat:"theertha", desc:"The sacred confluence of three rivers beside Kaleshwaram temple, a key ritual bathing site for pilgrims."},
  {name:"Adi Mukteshwara Temple", page:"adi-muktheeshwara.html", tel:"ఆది ముక్తేశ్వర ఆలయం", type:"Temple", dist:1, angle:340, r:1, cat:"temple", desc:"An ancient shrine near Kaleshwaram associated with the presiding deity's earliest legend."},
  {name:"Panakanti Brahmana Satram", page:"stay.html", q:"Panakanti Brahmana Satram, Gundam Cheruvu Colony, Adi Mukteshwaralayam Road, Kaleshwaram, Telangana 505504", tel:"పనకంటి బ్రాహ్మణ సత్రం", type:"Satram", dist:1, angle:110, r:1, cat:"heritage", desc:"A traditional choultry near Kaleshwaram offering rest and stay for pilgrims and devotees visiting the temple."},
  {name:"108 Shiva Lingala Temple", page:"shiva-lingala-108-temple.html", tel:"108 శివలింగాల ఆలయం", type:"Temple", dist:2, angle:60, r:1, cat:"temple", desc:"A temple complex housing 108 Shiva lingams, popular with devotees for a full pradakshina circuit."},
  {name:"Saraswati Temple", page:"saraswathi-temple.html", tel:"సరస్వతి ఆలయం", type:"Temple", dist:3, angle:150, r:1, cat:"temple", desc:"A temple dedicated to the goddess of knowledge, part of the Kaleshwaram temple cluster."},
  {name:"Mukti Vanam", page:"mukti-vanam.html", tel:"ముక్తి వనం", type:"Tourist Place", dist:4, angle:250, r:1, cat:"photo", desc:"A landscaped grove near the temple, popular for a quiet walk after darshan."},
  {name:"Pushkar Ghat", page:"pushkar-ghat.html", tel:"పుష్కర్ ఘాట్", type:"Theertha", dist:4, angle:290, r:1, cat:"theertha", desc:"A riverside ghat used during Pushkaram festivities and daily ritual bathing."},
  {name:"Medigadda Barrage", page:"medigadda-barrage.html", tel:"మేడిగడ్డ బ్యారేజ్", type:"Barrage / Project", dist:7, angle:230, r:2, cat:"barrage", desc:"A major irrigation barrage on the Godavari, part of the Kaleshwaram Lift Irrigation Project."},
  {name:"Annaram Barrage", page:"annaram-barrage.html", tel:"అన్నారం బ్యారేజ్", type:"Barrage / Project", dist:12, angle:260, r:2, cat:"barrage", desc:"An engineering landmark and scenic river-front stop on the 50km circuit."},
  {name:"Mahadevpur Temples", page:"mahadevpur-temples.html", tel:"మహాదేవ్‌పూర్ ఆలయాలు", type:"Temple Group", dist:18, angle:50, r:2, cat:"temple", desc:"A cluster of historic temples worth combining with a Kaleshwaram day trip."},
  {name:"Nainpaka Rock-cut Temple", page:"nainpaka-temple.html", tel:"నైన్‌పాక రాతి ఆలయం", type:"Heritage", dist:22, angle:30, r:2, cat:"heritage", desc:"A rare rock-cut cave temple, one of the heritage highlights within the 50km radius."},
  {name:"Somnur Triveni Sangam", page:"kubera-sangamam.html", tel:"సోమ్నూర్ త్రివేణి సంగమం", type:"Theertha", dist:28, angle:190, r:3, cat:"theertha", desc:"A second river confluence further along the circuit, less crowded than the main sangam."},
  {name:"Chennur Temples", page:"chennur-temples.html", tel:"చెన్నూర్ ఆలయాలు", type:"Temple Group", dist:32, angle:290, r:3, cat:"temple", desc:"A temple town group offering an easy extension for multi-day itineraries."},
  {name:"Manthani Temples", page:"manthani-temples.html", tel:"మంథని ఆలయాలు", type:"Temple Group", dist:45, angle:340, r:3, cat:"temple", desc:"The farthest cluster on the 50km circuit, known for its riverside temple architecture."},
];
const PALETTES = ["#e0995a,#a45a4a","#5b8fae,#2f6fae","#8fbf9a,#3f7a52","#c99a3d,#7a4fa0","#d98c8c,#7a1723","#a1c4d8,#2f6fae"];

function grad(i){ const p = PALETTES[i % PALETTES.length]; return `linear-gradient(150deg, ${p})`; }
function markerClass(cat){ return {temple:"temple", theertha:"theertha", photo:"photo", heritage:"heritage", nature:"nature", barrage:"heritage"}[cat] || "temple"; }
function markerIcon(cat){ return {temple:"🛕", theertha:"🌊", photo:"📷", heritage:"🏛️", nature:"🌿", barrage:"🌉"}[cat] || "🛕"; }

const list = document.getElementById('placeList');
const canvas = document.getElementById('mapCanvas');
document.getElementById('placeCount').textContent = PLACES.length;

PLACES.forEach((p,i)=>{
  const row = document.createElement('div');
  row.className='place-row'; row.dataset.cat=p.cat;
  row.innerHTML = `<div class="idx">${i+1}</div>
    <div class="thumb" style="background:${grad(i)}">${markerIcon(p.cat)}</div>
    <div class="info"><div class="name">${p.name}</div><div class="type">${p.type}</div></div>
    <div class="dist">${p.dist} km</div>`;
  row.addEventListener('click', ()=>showDetail(p,i));
  list.appendChild(row);

  if(p.dist>0){
    const radiusPct = [0,13,25,38][p.r];
    const rad = p.angle * Math.PI/180;
    const x = 50 + radiusPct * Math.cos(rad);
    const y = 50 + radiusPct * Math.sin(rad);
    const m = document.createElement('div');
    m.className = 'marker ' + markerClass(p.cat);
    m.style.left = Math.min(94,Math.max(6,x)) + '%';
    m.style.top = Math.min(90,Math.max(8,y)) + '%';
    m.textContent = markerIcon(p.cat);
    m.title = p.name;
    m.addEventListener('click', ()=>showDetail(p,i));
    canvas.appendChild(m);
  }

});

function showDetail(p,i){
  document.getElementById('dName').textContent = p.name;
  document.getElementById('dNameTel').textContent = p.tel;
  document.getElementById('dDist').textContent = p.dist + ' km';
  document.getElementById('dType').textContent = p.type;
  document.getElementById('dTime').textContent = Math.max(1, Math.round(p.dist*2)) + ' min';
  document.getElementById('dDesc').textContent = p.desc;
  const dp = document.querySelector('.detail-photo');
  dp.style.background = grad(i);
  dp.querySelector('.detail-photo-icon').textContent = markerIcon(p.cat);
  const ph = document.getElementById('dPhotos');
  if(ph){ ph.href = p.page || 'gallery.html'; ph.textContent = p.page ? '📖 Details & Photos' : '📷 View Photos'; }
  // Get Directions -> selected place (not always the main temple)
  const dir = document.getElementById('dDir');
  if(dir){
    const q = p.q || (p.name + (p.dist < 18 ? ', Kaleshwaram, Telangana' : ', Telangana'));
    dir.href = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(q) + '&travelmode=driving';
  }
}

// chip counts
document.querySelectorAll('.chip[data-filter]').forEach(chip=>{
  const f = chip.dataset.filter;
  if(f==='all') return;
  const n = PLACES.filter(p=>p.cat===f).length;
  chip.insertAdjacentText('beforeend', ' (' + n + ')');
  if(n===0) chip.style.opacity = '.55';
});
const emptyMsg = document.createElement('div');
emptyMsg.style.cssText = 'display:none;padding:18px;color:#7a6a5a;font-size:.9rem;text-align:center';
emptyMsg.textContent = 'ఈ విభాగంలో ప్రదేశాలు త్వరలో చేరుస్తాము / Places coming soon.';
list.appendChild(emptyMsg);

document.querySelectorAll('.chip[data-filter]').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('.chip[data-filter]').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    const f = chip.dataset.filter;
    let n=0;
    document.querySelectorAll('.place-row').forEach(row=>{
      const show = f==='all' || row.dataset.cat===f;
      row.style.display = show ? 'flex' : 'none';
      if(show) n++;
    });
    emptyMsg.style.display = n===0 ? 'block' : 'none';
    document.getElementById('placeCount').textContent = n;
  });
});
