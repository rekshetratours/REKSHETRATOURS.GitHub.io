
const PLACES = [
  {name:"Kaleshwaram Temple", page:"sri-kaleshwara-muktheeshwara-swamy.html", q:"Sri Kaleshwara Mukteshwara Swamy Temple, Kaleshwaram, Telangana", tel:"కాలేశ్వరం ఆలయం", type:"Temple", dist:0, angle:0, r:0, cat:"temple", desc:"Sri Kaleshwara Mukteshwara Swamy Temple is a major pilgrimage destination known for its spiritual significance, Triveni Sangamam and rich cultural heritage."},
  {name:"Triveni Sangamam", page:"triveni-sangamam.html", tel:"త్రివేణి సంగమం", type:"Theertha", dist:0.5, angle:200, r:1, cat:"theertha", desc:"The sacred confluence of three rivers beside Kaleshwaram temple, a key ritual bathing site for pilgrims."},
  {name:"Kusha Theertham (Ashta Theertham)", page:"kusha-theertham.html", q:"Kusha Theertham, Kaleshwaram, Telangana", tel:"కుశ తీర్థం", type:"Ashta Theertham", dist:0.5, angle:230, r:1, cat:"theertha", desc:"One of the eight Ashta Theerthalu of the Kaleshwaram Panchakrosa Godavari Parikrama on the Godavari bank. (Approx. distance)"},
  {name:"Triveni Sangamam Boating", page:"triveni-sangamam.html", q:"Triveni Sangamam Kaleshwaram, Telangana", tel:"త్రివేణి సంగమం బోటింగ్", type:"Tourist Place / Boating", dist:0.5, angle:245, r:1, cat:"photo", desc:"Boating at the Triveni Sangamam, where the Godavari and Pranahita meet beside the Kaleshwaram temple. (Approx. distance)"},
  {name:"Sangameshwara Swamy Temple", page:"sangameshwara-eleshwaram.html", q:"Sangameshwara Swamy Temple, Kaleshwaram, Telangana", tel:"సంగమేశ్వర స్వామి ఆలయం", type:"Temple", dist:0.7, angle:260, r:1, cat:"temple", desc:"Sangameshwara Swamy darshan after the sangama snanam, a stop on the Kaleshwaram one-day and two-day tours. (Approx. distance)"},
  {name:"Nalgonda Pochamma Temple", q:"Nalgonda Pochamma Temple, Kaleshwaram, Telangana", tel:"నల్లగొండ పోచమ్మ ఆలయం", type:"Temple", dist:0.8, angle:320, r:1, cat:"temple", desc:"Nalgonda Pochamma darshanam, a Kaleshwaram tour stop. (Approx. distance)"},
  {name:"Adi Mukteshwara Temple", page:"adi-muktheeshwara.html", tel:"ఆది ముక్తేశ్వర ఆలయం", type:"Temple", dist:1, angle:340, r:1, cat:"temple", desc:"An ancient shrine near Kaleshwaram associated with the presiding deity's earliest legend."},
  {name:"Panakanti Brahmana Satram", page:"stay.html", q:"Panakanti Brahmana Satram, Gundam Cheruvu Colony, Adi Mukteshwaralayam Road, Kaleshwaram, Telangana 505504", tel:"పనకంటి బ్రాహ్మణ సత్రం", type:"Satram", dist:1, angle:110, r:1, cat:"heritage", desc:"A traditional choultry near Kaleshwaram offering rest and stay for pilgrims and devotees visiting the temple."},
  {name:"Jnana Theertham (Ashta Theertham)", page:"jnana-theertham.html", q:"Jnana Theertham, Kaleshwaram, Telangana", tel:"జ్ఞాన తీర్థం", type:"Ashta Theertham", dist:1, angle:275, r:1, cat:"theertha", desc:"One of the eight Ashta Theerthalu of the Kaleshwaram Panchakrosa Godavari Parikrama on the Godavari bank. (Approx. distance)"},
  {name:"Yama Gundam (Yamakonam)", page:"yamakonam.html", q:"Yama Gundam, Kaleshwaram, Telangana", tel:"యమ గుండం", type:"Temple / Kundam", dist:1, angle:40, r:1, cat:"temple", desc:"Yama Gundam, the sacred kundam where parikrama traditionally begins, with Yama darshanam. (Approx. distance)"},
  {name:"Bhaktanjaneya Swamy Temple (Yama Gundam)", q:"Bhaktanjaneya Swamy Temple, Yama Gundam, Kaleshwaram, Telangana", tel:"భక్తాంజనేయ స్వామి ఆలయం", type:"Temple", dist:1, angle:70, r:1, cat:"temple", desc:"Bhaktanjaneya Swamy temple on the Yama Gundam embankment. (Approx. distance)"},
  {name:"Dakshinamurthy Temple", q:"Dakshinamurthy Temple, Kaleshwaram, Telangana", tel:"దక్షిణామూర్తి ఆలయం", type:"Temple", dist:1.2, angle:300, r:1, cat:"temple", desc:"Dakshinamurthy darshanam, the closing stop of the one-day tour. (Approx. distance)"},
  {name:"Chitsukheswara Theertham (Ashta Theertham)", page:"chitsukheswara-theertham.html", q:"Chitsukheswara Theertham, Kaleshwaram, Telangana", tel:"చిత్సుఖేశ్వర తీర్థం", type:"Ashta Theertham", dist:1.5, angle:95, r:1, cat:"theertha", desc:"One of the eight Ashta Theerthalu of the Kaleshwaram Panchakrosa Godavari Parikrama on the Godavari bank. (Approx. distance)"},
  {name:"Vayasa Theertham (Ashta Theertham)", page:"vayasa-theertham.html", q:"Vayasa Theertham, Kaleshwaram, Telangana", tel:"వాయస తీర్థం", type:"Ashta Theertham", dist:1.5, angle:310, r:1, cat:"theertha", desc:"One of the eight Ashta Theerthalu of the Kaleshwaram Panchakrosa Godavari Parikrama on the Godavari bank. (Approx. distance)"},
  {name:"Ramalayam (Rama Temple)", q:"Ramalayam, Kaleshwaram, Telangana", tel:"రామాలయం", type:"Temple", dist:1.5, angle:125, r:1, cat:"temple", desc:"Sri Rama temple (Ramalayam) in Kaleshwaram. (Approx. distance)"},
  {name:"Chandrashekhara Swamy Temple", q:"Chandrashekhara Swamy Temple, Kaleshwaram, Telangana", tel:"చంద్రశేఖర స్వామి ఆలయం", type:"Temple", dist:1.5, angle:205, r:1, cat:"temple", desc:"Chandrashekhara Swamy temple in Kaleshwaram. (Approx. distance)"},
  {name:"Anjaneya Swamy Temple (Adi Mukteshwara bypass road)", q:"Anjaneya Swamy Temple, Adi Mukteshwara Temple bypass road, Kaleshwaram, Telangana", tel:"ఆంజనేయ స్వామి ఆలయం", type:"Temple", dist:1.5, angle:355, r:1, cat:"temple", desc:"Anjaneya Swamy temple on the bypass road near the Adi Mukteshwara temple. (Approx. distance)"},
  {name:"Lakshmi Narasimha Swamy Temple – Kaleshwaram", q:"Lakshmi Narasimha Swamy Temple, Kaleshwaram, Telangana", tel:"లక్ష్మీ నరసింహ స్వామి ఆలయం – కాళేశ్వరం", type:"Temple", dist:1.8, angle:95, r:1, cat:"temple", desc:"Lakshmi Narasimha Swamy temple in Kaleshwaram town. (Approx. distance)"},
  {name:"108 Shiva Lingala Temple", page:"shiva-lingala-108-temple.html", tel:"108 శివలింగాల ఆలయం", type:"Temple", dist:2, angle:60, r:1, cat:"temple", desc:"A temple complex housing 108 Shiva lingams, popular with devotees for a full pradakshina circuit."},
  {name:"Pakshi Theertham (Ashta Theertham)", page:"pakshi-theertham.html", q:"Pakshi Theertham, Kaleshwaram, Telangana", tel:"పక్షి తీర్థం", type:"Ashta Theertham", dist:2, angle:330, r:1, cat:"theertha", desc:"One of the eight Ashta Theerthalu of the Kaleshwaram Panchakrosa Godavari Parikrama on the Godavari bank. (Approx. distance)"},
  {name:"Saraswati Temple", page:"saraswathi-temple.html", tel:"సరస్వతి ఆలయం", type:"Temple", dist:3, angle:150, r:1, cat:"temple", desc:"A temple dedicated to the goddess of knowledge, part of the Kaleshwaram temple cluster."},
  {name:"Brahma Theertham (Ashta Theertham)", page:"brahma-theertham.html", q:"Brahma Theertham, Kaleshwaram, Telangana", tel:"బ్రహ్మ తీర్థం", type:"Ashta Theertham", dist:3, angle:135, r:1, cat:"theertha", desc:"One of the eight Ashta Theerthalu of the Kaleshwaram Panchakrosa Godavari Parikrama on the Godavari bank. (Approx. distance)"},
  {name:"Kaleshwaram Inter-State Bridge", q:"Kaleshwaram Inter State Bridge, Telangana Maharashtra border", tel:"కాళేశ్వరం అంతర్రాష్ట్ర వంతెన", type:"Tourist Place / Bridge", dist:3, angle:185, r:1, cat:"photo", desc:"The inter-state bridge at Kaleshwaram linking Telangana and Maharashtra, with views of the Godavari-Pranahita confluence. (Approx. distance)"},
  {name:"Pranahita Bridge", q:"Pranahita Bridge, Kaleshwaram, Telangana", tel:"ప్రాణహిత వంతెన", type:"Tourist Place / Bridge", dist:3.5, angle:165, r:1, cat:"photo", desc:"The bridge over the Pranahita river near Kaleshwaram, a scenic viewpoint. (Approx. distance)"},
  {name:"Mukti Vanam", page:"mukti-vanam.html", tel:"ముక్తి వనం", type:"Tourist Place", dist:4, angle:250, r:1, cat:"photo", desc:"A landscaped grove near the temple, popular for a quiet walk after darshan."},
  {name:"Pushkar Ghat", page:"pushkar-ghat.html", tel:"పుష్కర్ ఘాట్", type:"Theertha", dist:4, angle:290, r:1, cat:"theertha", desc:"A riverside ghat used during Pushkaram festivities and daily ritual bathing."},
  {name:"Narasimha Theertham (Ashta Theertham)", page:"narasimha-theertham.html", q:"Narasimha Theertham, Kaleshwaram, Telangana", tel:"నరసింహ తీర్థం", type:"Ashta Theertham", dist:4.5, angle:170, r:1, cat:"theertha", desc:"One of the eight Ashta Theerthalu of the Kaleshwaram Panchakrosa Godavari Parikrama on the Godavari bank. (Approx. distance)"},
  {name:"Hanuma Theertham (Ashta Theertham)", page:"hanuma-theertham.html", q:"Hanuma Theertham, Kaleshwaram, Telangana", tel:"హనుమ తీర్థం", type:"Ashta Theertham", dist:5.5, angle:20, r:1, cat:"theertha", desc:"One of the eight Ashta Theerthalu of the Kaleshwaram Panchakrosa Godavari Parikrama on the Godavari bank. (Approx. distance)"},
  {name:"Medigadda Barrage", page:"medigadda-barrage.html", tel:"మేడిగడ్డ బ్యారేజ్", type:"Barrage / Project", dist:7, angle:230, r:2, cat:"barrage", desc:"A major irrigation barrage on the Godavari, part of the Kaleshwaram Lift Irrigation Project."},
  {name:"Kannepalli (Lakshmi) Pump House", q:"Kannepalli Pump House, Kaleshwaram Lift Irrigation Project, Mahadevpur, Telangana", tel:"కన్నెపల్లి (లక్ష్మీ) పంప్ హౌస్", type:"Tourist Place / Pump House", dist:10, angle:205, r:2, cat:"photo", desc:"The Lakshmi pump house at Kannepalli, the first pumping station of the Kaleshwaram Lift Irrigation Project. A separate stop from Medigadda Barrage. (Approx. distance)"},
  {name:"Annaram Barrage", page:"annaram-barrage.html", tel:"అన్నారం బ్యారేజ్", type:"Barrage / Project", dist:12, angle:260, r:2, cat:"barrage", desc:"An engineering landmark and scenic river-front stop on the 50km circuit."},
  {name:"Mallikarjuna Swamy Temple – Begulur", q:"Mallikarjuna Swamy Temple, Begulur, Telangana", tel:"మల్లికార్జున స్వామి ఆలయం – బేగులూరు", type:"Temple", dist:12, angle:215, r:2, cat:"temple", desc:"Mallikarjuna Swamy temple at Begulur, on the two-day pilgrimage route. (Approx. distance)"},
  {name:"Anjaneya Swamy Temple – Begulur", q:"Anjaneya Swamy Temple, Begulur, Telangana", tel:"ఆంజనేయ స్వామి ఆలయం – బేగులూరు", type:"Temple", dist:12, angle:235, r:2, cat:"temple", desc:"Anjaneya Swamy temple at Begulur. (Approx. distance)"},
  {name:"Elakeshwara Temple – Edapalli", page:"elakeshwara-edapalli.html", q:"Elakeshwara Temple, Edapalli, Telangana", tel:"ఎలకేశ్వరుడు – ఎడపల్లి", type:"Temple", dist:14, angle:15, r:2, cat:"temple", desc:"Elakeshwara Swamy temple at Edapalli, part of the Panchakrosa route. (Approx. distance)"},
  {name:"Amareshwara Temple – Ambatpally", page:"ambatpally-amareshwara.html", q:"Amareshwara Swamy Temple, Ambatpally, Telangana", tel:"అమరేశ్వరుడు – అంబటిపల్లి", type:"Temple", dist:16, angle:100, r:2, cat:"temple", desc:"Amareshwara Swamy temple at Ambatpally. (Approx. distance)"},
  {name:"Uma Maheshwara Temple – Mahadevpur", page:"uma-maheshwara-mahadevpur.html", q:"Umamaheshwara Swamy Temple, Mahadevpur, Telangana", tel:"ఉమామహేశ్వర స్వామి ఆలయం – మహాదేవ్‌పూర్", type:"Temple", dist:18, angle:50, r:2, cat:"temple", desc:"Sri Uma Maheshwara Swamy temple at Mahadevpur, an easy stop on the way to or from Kaleshwaram."},
  {name:"Mandaragiri Venkateswara Swamy Temple", q:"Mandaragiri Venkateswara Swamy Temple, Mahadevpur, Telangana", tel:"మందరగిరి వేంకటేశ్వర స్వామి ఆలయం", type:"Temple", dist:19, angle:75, r:2, cat:"temple", desc:"Mandaragiri Venkateswara Swamy temple in the Mahadevpur area, a hill-top Vaishnava shrine to combine with Mahadevpur darshan. (Approx. distance)"},
  {name:"Mandavi Sangamam", page:"mandavi-sangamam.html", q:"Mandavi Sangamam, Damarakunta, Pokkur, Telangana", tel:"మాండవి సంగమం", type:"Sangamam", dist:20, angle:120, r:2, cat:"theertha", desc:"The third sangamam, where the Manair (Mandavi) meets the Godavari near Damarakunta and Pokkur. Annapurna Pushkareshwara temple is nearby."},
  {name:"Shiva Narayana Kshetram – Suraram", page:"shiva-keshava-suraram.html", q:"Shiva Keshava Temple, Suraram, Telangana", tel:"శివ నారాయణ క్షేత్రం – సూరారం", type:"Temple", dist:20, angle:150, r:2, cat:"temple", desc:"Shiva-Keshava (Shiva Narayana) temple at Suraram. (Approx. distance)"},
  {name:"Annapurna Pushkareshwara Temple – Damarakunta", page:"annapurna-pushkareshwara-damarakunta.html", q:"Annapurna Pushkareshwara Temple, Damarakunta, Telangana", tel:"అన్నపూర్ణ పుష్కరేశ్వరుడు – దామరకుంట", type:"Temple", dist:20, angle:135, r:2, cat:"temple", desc:"Annapurna Mata and Pushkareshwara Linga beside Mandavi Sangamam at Damarakunta. (Approx. distance)"},
  {name:"Nainpaka Rock-cut Temple", page:"nainpaka-temple.html", tel:"నైన్‌పాక రాతి ఆలయం", type:"Heritage", dist:22, angle:30, r:2, cat:"heritage", desc:"A rare rock-cut cave temple, one of the heritage highlights within the 50km radius."},
  {name:"Kattarasala Mallanna Temple", page:"kattarasala-mallanna.html", q:"Kattarasala Mallanna Temple, Telangana", tel:"కత్తరసాల మల్లన్న", type:"Temple", dist:24, angle:115, r:2, cat:"temple", desc:"Kattarasala Mallanna temple on the two-day route. (Approx. distance)"},
  {name:"Kubera Sangamam (Somnur)", page:"kubera-sangamam.html", q:"Somnur Sangam, Indravati Godavari Sangamam, Kubera Sangamam", tel:"కుబేర సంగమం (సోమ్నూర్)", type:"Sangamam", dist:28, angle:190, r:3, cat:"theertha", desc:"Kubera Sangamam (Pulastya Theertham), the confluence of Indravati and Godavari near Somnur, the second of the three sangamams. Less crowded than the main sangam."},
  {name:"Saptakoteshwaram – Koteswara Temple, Narayanapur", page:"saptakoteshwara-narayanapur.html", q:"Saptakoteshwara Temple, Narayanapur, Telangana", tel:"సప్తకోటేశ్వరం – కోటేశ్వరుడు, నారాయణపూర్", type:"Temple", dist:30, angle:250, r:3, cat:"temple", desc:"Saptakoteshwaram (Koteswara) temple at Narayanapur. (Approx. distance)"},
  {name:"Vishweshwara Lingam – Narayanapur", page:"vishweshwara-lingam-narayanapur.html", q:"Vishweshwara Lingam, Narayanapur, Telangana", tel:"విశ్వేశ్వర లింగం – నారాయణపూర్", type:"Temple", dist:30, angle:270, r:3, cat:"temple", desc:"Vishweshwara Lingam at Narayanapur. (Approx. distance)"},
  {name:"Amba Agasteshwara Swamy Temple – Chennur", page:"amba-agastheeshwara-chennur.html", q:"Amba Agasteshwara Swamy Temple, Chennur, Telangana", tel:"అంబ అగస్తేశ్వర స్వామి ఆలయం – చెన్నూరు", type:"Temple", dist:32, angle:285, r:3, cat:"temple", desc:"The ancient Amba Agasteshwara Swamy temple at Chennur."},
  {name:"Ramalingeshwara Swamy Temple – Chennur", q:"Ramalingeswara Swamy Temple, Chennur, Telangana", tel:"రామలింగేశ్వర స్వామి ఆలయం – చెన్నూరు", type:"Temple", dist:32, angle:300, r:3, cat:"temple", desc:"Sri Ramalingeshwara Swamy temple in Chennur town."},
  {name:"Kalaratri Mahakali Temple – Chennur", q:"Kalaratri Mahakali Temple, Chennur, Telangana", tel:"కాళరాత్రి మహాకాళి ఆలయం – చెన్నూరు", type:"Temple", dist:32, angle:315, r:3, cat:"temple", desc:"The Kalaratri Mahakali shakti shrine at Chennur."},
  {name:"Rameshwara Lingam – Godavari Revu, Chennur", page:"rameshwara-lingam-chennur.html", q:"Rameshwara Lingam, Godavari Revu, Chennur, Telangana", tel:"రామేశ్వర లింగం – గోదావరి రేవు, చెన్నూరు", type:"Temple", dist:32, angle:330, r:3, cat:"temple", desc:"Rameshwara Lingam at the Godavari revu in Chennur. (Approx. distance)"},
  {name:"Sarpakara Narasimha Kshetram – Akkipalli", page:"sarvakara-narasimha-kshetram.html", q:"Sarpakara Narasimha Kshetram, Akkipalli, Telangana", tel:"సర్పాకార నరసింహ క్షేత్రం – అక్కిపల్లి", type:"Temple", dist:38, angle:300, r:3, cat:"temple", desc:"Sarpakara (Sarvakara) Narasimha kshetram at Akkipalli. (Approx. distance)"},
  {name:"Kala Bhairava Temple", q:"Kala Bhairava Temple, Akkipalli, Telangana", tel:"కాల భైరవ ఆలయం", type:"Temple", dist:38, angle:315, r:3, cat:"temple", desc:"Kala Bhairava temple on the two-day route after Akkipalli. (Approx. distance)"},
  {name:"Vitaleshwara Temple – Sironcha", q:"Vitaleshwara Temple, Sironcha, Maharashtra", tel:"విఠలేశ్వరుడు – సిరొంచ", type:"Temple", dist:40, angle:200, r:3, cat:"temple", desc:"Vitaleshwara temple at Sironcha across the Pranahita (Maharashtra). (Approx. distance)"},
  {name:"Siddheshwara Temple – Sironcha", q:"Siddheshwara Temple, Sironcha, Maharashtra", tel:"సిద్ధేశ్వరుడు – సిరొంచ", type:"Temple", dist:40, angle:210, r:3, cat:"temple", desc:"Siddheshwara temple at Sironcha across the Pranahita (Maharashtra). (Approx. distance)"},
  {name:"Prathapagiri Gutta – Kataram", q:"Prathapagiri Gutta, Kataram, Telangana", tel:"ప్రతాపగిరి గుట్ట – కటారం", type:"Nature / Hill", dist:40, angle:80, r:3, cat:"nature", desc:"Prathapagiri Gutta, a granite hill with views over the Godavari near Kataram, on the two-day route. (Approx. distance)"},
  {name:"Gontemma Gutta – Kataram", q:"Gonthemma Gutta, Kataram, Telangana", tel:"గొంతెమ్మ గుట్ట – కటారం", type:"Nature / Hill", dist:40, angle:65, r:3, cat:"nature", desc:"Gontemma Gutta, a hill with old fort walls near Kataram. (Approx. distance)"},
  {name:"Pandavula Gutta – Kataram", q:"Pandavula Gutta, Kataram, Telangana", tel:"పాండవుల గుట్ట – కటారం", type:"Nature / Hill", dist:40, angle:92, r:3, cat:"nature", desc:"Pandavula Gutta, a hill site near Kataram on the two-day route. (Approx. distance)"},
  {name:"Arjuna Gutta", q:"Arjuna Gutta, Telangana", tel:"అర్జున గుట్ట", type:"Nature / Hill", dist:40, angle:340, r:3, cat:"nature", desc:"Arjuna Gutta, a hill stop on the two-day route before Sironcha. (Approx. distance)"},
  {name:"Manthani Temples", page:"manthani-temples.html", tel:"మంథని ఆలయాలు", type:"Temple Group", dist:45, angle:340, r:3, cat:"temple", desc:"The farthest cluster on the 50km circuit, known for its riverside temple architecture."},
  {name:"Kodavatanch (Kotancha) Temple", q:"Kodavatancha Temple, Telangana", tel:"కొడవటంచ ఆలయం", type:"Temple", dist:45, angle:355, r:3, cat:"temple", desc:"Kodavatanch (Kotancha) temple in the Manthani area, on the northern end of the circuit. (Approx. distance)"},
  {name:"Sundilla Lakshmi Narasimha Swamy Temple", q:"Sundilla Lakshmi Narasimha Swamy Temple, Telangana", tel:"సుందిళ్ళ లక్ష్మీ నరసింహ స్వామి ఆలయం", type:"Temple", dist:55, angle:15, r:4, cat:"temple", ext:true, desc:"Lakshmi Narasimha Swamy temple at Sundilla, beyond Manthani on the extended circuit. (Approx. distance)"},
  {name:"Sundilla (Parvathi) Barrage", q:"Sundilla Barrage (Parvathi Barrage), Telangana", tel:"సుందిళ్ళ (పార్వతి) బ్యారేజ్", type:"Barrage / Project", dist:55, angle:30, r:4, cat:"barrage", ext:true, desc:"The third barrage of the Kaleshwaram Lift Irrigation Project on the Godavari, near Manthani. Can be combined with the Sundilla temple. (Approx. distance)"},
  {name:"Hemachala Lakshmi Narasimha Swamy Temple – Mallur", q:"Hemachala Lakshmi Narasimha Swamy Temple, Mallur, Mangapet, Telangana", tel:"హేమాచల లక్ష్మీ నరసింహ స్వామి ఆలయం – మల్లూరు", type:"Temple", dist:110, angle:150, r:4, cat:"temple", ext:true, desc:"The forest-set Hemachalam temple at Mallur (Mangapet mandal) with a self-manifested Narasimha deity. Far from Kaleshwaram, so plan as a separate extended-circuit day. (Approx. distance)"},
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
    const radiusPct = [0,13,25,38,45][p.r];
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
