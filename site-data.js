// site-data.js  —  KALESHWARAM LISTS (ikkade add / edit cheyandi)
// Ee file lo entries add chesthe, ee pages lo automatic ga kanipisthayi:
//   kaleshwaram.html (kshetralu) • sangamamulu.html • ashta-theerthalu.html • kaleshwaram-temples.html • index.html cards
//
// Prathi entry lo vaade fields (anni optional, te tappa):
//   te: "తెలుగు పేరు"   en: "English name"   desc: "చిన్న వివరణ"   address: "చిరునామా"
//   page: "xyz.html" (details page unte)   map: "Google Maps link"
//   phone: "9391254540"   whatsapp: "9391254540"   order: number (numbered lists lo)
// Kotha entry: { ... }, ane block ni list lo copy chesi, last lo comma petti paste cheyandi.

window.KAL = {

  // ===== పంచక్రోశ పరిక్రమణలోని క్షేత్రాలు  (kaleshwaram.html) =====
  KSHETRALU: [
    { te:"గోదావరి స్నానం", en:"Godavari Snanam", page:"godavari-snanam.html" },
    { te:"సంగమేశ్వరుడు – ఇళేశ్వరం", en:"Sangameshwara – Eleshwaram", page:"sangameshwara-eleshwaram.html" },
    { te:"శ్రీ కాళేశ్వర ముక్తేశ్వర స్వామి దర్శనం", en:"Sri Kaleshwara Muktheeshwara Swamy", page:"sri-kaleshwara-muktheeshwara-swamy.html" },
    { te:"ఆది ముక్తేశ్వరుడు", en:"Adi Muktheeshwara", page:"adi-muktheeshwara.html" },
    { te:"కుబేర సంగమం", en:"Kubera Sangamam", page:"kubera-sangamam.html" },
    { te:"అంబటిపల్లి అమరేశ్వరుడు", en:"Ambatpally Amareshwara", page:"ambatpally-amareshwara.html" },
    { te:"శివ–కేశవ ఆలయం – సూరారం", en:"Shiva-Keshava Temple – Suraram", page:"shiva-keshava-suraram.html" },
    { te:"రామదేవగిరి వెంకటేశ్వరుడు", en:"Ramadevigiri Venkateshwara", page:"ramadevigiri-venkateshwara.html" },
    { te:"ఉమా మహేశ్వర లింగం – మహాదేవపూర్", en:"Uma Maheshwara Lingam – Mahadevpur", page:"uma-maheshwara-mahadevpur.html" },
    { te:"ఎలకేశ్వరుడు – ఎడపల్లి", en:"Elakeshwara – Edapalli", page:"elakeshwara-edapalli.html" },
    { te:"అన్నపూర్ణ పుష్కరేశ్వరుడు – దామరకుంట", en:"Annapurna Pushkareshwara – Damarakunta", page:"annapurna-pushkareshwara-damarakunta.html" },
    { te:"కత్తరసాల మల్లన్న", en:"Kattarasala Mallanna", page:"kattarasala-mallanna.html" },
    { te:"సప్తకోటేశ్వరం – కోటేశ్వరుడు, నారాయణపూర్", en:"Saptakoteshwara – Koteswara, Narayanapur", page:"saptakoteshwara-narayanapur.html" },
    { te:"విశ్వేశ్వర లింగం – నారాయణపూర్", en:"Vishweshwara Lingam – Narayanapur", page:"vishweshwara-lingam-narayanapur.html" },
    { te:"రామేశ్వర లింగం – గోదావరి రేవు, చెన్నూరు", en:"Rameshwara Lingam – Godavari Revu, Chennur", page:"rameshwara-lingam-chennur.html" },
    { te:"అంబ అగస్తేశ్వర లింగం – చెన్నూరు", en:"Amba Agastheeshwara Lingam – Chennur", page:"amba-agastheeshwara-chennur.html" },
    { te:"సర్వాకార నారసింహ క్షేత్రం", en:"Sarvakara Narasimha Kshetram", page:"sarvakara-narasimha-kshetram.html" },
    { te:"రత్నాచల భైరవుడు – పారుపల్లి", en:"Ratnachala Bhairava – Parupelli", page:"ratnachala-bhairava-parupelli.html" }
  ],

  // ===== సంగమములు  (sangamamulu.html) =====
  SANGAMAMULU: [
    { te:"త్రివేణి సంగమం – కాళేశ్వరం", en:"Triveni Sangamam", desc:"కాళేశ్వరం ఆలయం పక్కనున్న మూడు నదుల పవిత్ర సంగమం; యాత్రికుల ముఖ్య స్నాన స్థలం.", map:"https://www.google.com/maps/search/?api=1&query=Triveni+Sangamam+Kaleshwaram" },
    { te:"కుబేర సంగమం", en:"Kubera Sangamam", page:"kubera-sangamam.html" },
    { te:"సంగమేశ్వరుడు – ఇళేశ్వరం", en:"Sangameshwara – Eleshwaram", page:"sangameshwara-eleshwaram.html" },
    { te:"సోమ్నూర్ త్రివేణి సంగమం", en:"Somnur Triveni Sangam", desc:"50 KM సర్క్యూట్ లో ఉన్న మరో నదీ సంగమం; ప్రధాన సంగమం కంటే ప్రశాంతంగా ఉంటుంది.", map:"https://www.google.com/maps/search/?api=1&query=Somnur+Sangam" }
  ],

  // ===== అష్ట తీర్థాలు  (ashta-theerthalu.html) — order = పరిక్రమణ క్రమ సంఖ్య =====
  ASHTA: [
    { order:1, te:"కుశ తీర్థం", en:"Kusha Theertham", page:"kusha-theertham.html" },
    { order:2, te:"బ్రహ్మ తీర్థం", en:"Brahma Theertham", page:"brahma-theertham.html" },
    { order:3, te:"చిత్సుఖేశ్వర తీర్థం", en:"Chitsukheswara Theertham", page:"chitsukheswara-theertham.html" },
    { order:4, te:"జ్ఞాన తీర్థం", en:"Jnana Theertham", page:"jnana-theertham.html" },
    { order:5, te:"వాయస తీర్థం", en:"Vayasa Theertham", page:"vayasa-theertham.html" },
    { order:6, te:"పక్షి తీర్థం", en:"Pakshi Theertham", page:"pakshi-theertham.html" },
    { order:7, te:"నరసింహ తీర్థం", en:"Narasimha Theertham", page:"narasimha-theertham.html" },
    { order:8, te:"హనుమ తీర్థం", en:"Hanuma Theertham", page:"hanuma-theertham.html" }
  ],

  // Map image (595 x 670 px) meeda number hotspots: x,y = number circle pixel position
  ASHTA_MAP: { w:595, h:670, spots:[
    { n:1, title:"పక్షి తీర్థం", page:"pakshi-theertham.html", x:139, y:102 },
    { n:2, title:"వాయస తీర్థం", page:"vayasa-theertham.html", x:203, y:95 },
    { n:3, title:"జ్ఞాన తీర్థం", page:"jnana-theertham.html", x:313, y:175 },
    { n:4, title:"కుశ తీర్థం (సంగమ)", page:"kusha-theertham.html", x:336, y:205 },
    { n:5, title:"చిత్సుఖేశ్వర తీర్థం", page:"chitsukheswara-theertham.html", x:415, y:346 },
    { n:6, title:"బ్రహ్మ తీర్థం", page:"brahma-theertham.html", x:463, y:464 },
    { n:7, title:"నరసింహ తీర్థం", page:"narasimha-theertham.html", x:534, y:551 },
    { n:8, title:"హనుమ తీర్థం", page:"hanuma-theertham.html", x:586, y:621 }
  ]},

  // ===== కాళేశ్వరం లోని దేవాలయాలు  (kaleshwaram-temples.html) =====
  TEMPLES: [
    { te:"శ్రీ కాళేశ్వర ముక్తేశ్వర స్వామి ఆలయం", en:"Sri Kaleshwara Mukteshwara Swamy Temple", desc:"త్రివేణి సంగమం, ఆధ్యాత్మిక ప్రాశస్త్యంతో ప్రసిద్ధి చెందిన ప్రధాన పుణ్యక్షేత్రం.", page:"sri-kaleshwara-muktheeshwara-swamy.html", map:"https://www.google.com/maps/search/?api=1&query=Kaleshwaram+Temple" },
    { te:"ఆది ముక్తేశ్వర ఆలయం", en:"Adi Mukteshwara Temple", desc:"కాళేశ్వరం సమీపంలోని ప్రాచీన ఆలయం.", page:"adi-muktheeshwara.html" },
    { te:"సరస్వతి ఆలయం", en:"Saraswati Temple", desc:"కాళేశ్వరం ఆలయ సముదాయంలోని జ్ఞాన దేవత సరస్వతీ ఆలయం." },
    { te:"108 శివలింగాల ఆలయం", en:"108 Shiva Lingala Temple", desc:"108 శివలింగాలతో కూడిన ఆలయ ప్రాంగణం." }
  ],

  // ===== సత్రములు =====
  SATRAMS: [
    { te:"పనకంటి బ్రాహ్మణ సత్రం", en:"Panakanti Brahmana Satram",
      address:"Gundam Cheruvu Colony, Adi Mukteshwaralayam Road, Kaleshwaram, Telangana 505504",
      phone:"9391254540", whatsapp:"9391254540",
      map:"https://www.google.com/maps/dir/?api=1&destination=Panakanti+Brahmana+Satram%2C+Gundam+Cheruvu+Colony%2C+Adi+Mukteshwaralayam+Road%2C+Kaleshwaram%2C+Telangana+505504&travelmode=driving" }
  ],

  // ===== వసతి సౌకర్యాలు (lodges / guest houses) — ippudu khali; add cheyandi =====
  ACCOMMODATION: [
  ]
};
