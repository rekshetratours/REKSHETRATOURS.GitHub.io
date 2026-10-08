# rekshetratours.com – SEO Fix Pack

Based on the homepage audit (8 Oct 2026). Paste the snippets into the matching pages.

---

## 1. Homepage `<head>` (replace existing title/description)

```html
<title>Kaleshwaram Temple Tours & Yatra Packages | కాళేశ్వరం యాత్ర – Rekshetra Tours</title>
<meta name="description" content="Book Kaleshwaram temple darshan, pujas, Triveni Sangamam & 50 KM pilgrimage tours from Rekshetra Tours. One-day & two-day yatra, stay and transport help. కాళేశ్వరం యాత్ర, దర్శనం, పూజలు.">
<link rel="canonical" href="https://rekshetratours.com/">
<link rel="alternate" hreflang="te" href="https://rekshetratours.com/">
<link rel="alternate" hreflang="en" href="https://rekshetratours.com/">
<meta name="twitter:card" content="summary_large_image">
```

Notes:
- Keep the description around 150–160 characters.
- Meta keywords are ignored by Google; keep them only if you like, but put the effort into title, H1 and body text.

---

## 2. JSON-LD schema (paste before `</body>` on the homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://rekshetratours.com/#business",
      "name": "Rekshetra Tours",
      "alternateName": "Eshwara Kshetra Consulting",
      "url": "https://rekshetratours.com/",
      "logo": "https://rekshetratours.com/logo.jpg",
      "image": "https://rekshetratours.com/logo.jpg",
      "email": "info@rekshetratours.com",
      "description": "Kaleshwaram pilgrimage and temple tour planning: darshan, pujas, Triveni Sangamam and 50 KM temple circuit.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kaleshwaram",
        "addressRegion": "Telangana",
        "postalCode": "505504",
        "addressCountry": "IN"
      },
      "areaServed": "Telangana",
      "sameAs": ["https://www.youtube.com/@REKSHETRATOURSKALESWARAM"]
    },
    {
      "@type": "TouristAttraction",
      "name": "Sri Kaleshwara Mukteshwara Swamy Temple",
      "description": "Shiva temple at Kaleshwaram with two lingas on a single pedestal, at the Godavari–Pranahita–Saraswati confluence.",
      "touristType": "Pilgrims",
      "geo": { "@type": "GeoCoordinates", "latitude": 18.81139, "longitude": 79.90667 },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kaleshwaram",
        "addressRegion": "Telangana",
        "postalCode": "505504",
        "addressCountry": "IN"
      }
    }
  ]
}
</script>
```

Do not add `aggregateRating` until you have real, visible reviews on the page; fake or invisible ratings can trigger a Google penalty.

---

## 3. FAQ schema (for faq.html – edit answers to match the page text exactly)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the Kaleshwaram temple timings?",
      "acceptedAnswer": { "@type": "Answer", "text": "<copy from timings.html>" }
    },
    {
      "@type": "Question",
      "name": "How to reach Kaleshwaram temple from Hyderabad?",
      "acceptedAnswer": { "@type": "Answer", "text": "<copy from how-to-reach.html>" }
    },
    {
      "@type": "Question",
      "name": "Where to stay near Kaleshwaram temple?",
      "acceptedAnswer": { "@type": "Answer", "text": "<copy from stay.html>" }
    }
  ]
}
</script>
```

---

## 4. Keyword → page map

| Target keyword | Page | Title tag suggestion |
|---|---|---|
| Kaleshwaram temple timings | timings.html | Kaleshwaram Temple Timings, Darshan & Abhishekam Hours |
| Kaleshwaram pooja timings and cost | pujalu.html | Kaleshwaram Temple Pujas & Sevas – Timings, Types |
| Hyderabad to Kaleshwaram distance | kaleshwaram-distance.html | Kaleshwaram Distance from Hyderabad, Warangal, Karimnagar |
| Kaleshwaram accommodation / rooms | stay.html | Kaleshwaram Temple Accommodation – Satram, Lodges, Choultry |
| Kaleshwaram one day tour | kaleshwaram-one-day-tour.html | Kaleshwaram One Day Tour Plan & Itinerary |
| Kaleshwaram history / two lingas | history.html | Kaleshwaram Temple History – Two Shiva Lingas on One Panavattam |
| Triveni Sangamam Kaleshwaram | triveni-sangamam.html | Kaleshwaram Triveni Sangamam – Godavari, Pranahita, Saraswati |
| Temples near Kaleshwaram | kaleshwaram-nearby-temples.html | Temples Near Kaleshwaram within 50 KM |
| కాళేశ్వరం ఆలయం దర్శన సమయాలు | timings.html (Telugu H2) | add a Telugu H2 on the same page |
| Trilinga kshetram | history.html | add a section: Srisailam, Draksharamam, Kaleshwaram |

---

## 5. Footer link fixes (these all point to `index.html#circuit` today)

Create a separate page for each so Google sees unique content:

- saraswathi-temple.html
- medigadda-barrage.html
- annaram-barrage.html
- mahadevpur-temples.html
- nainpaka-temple.html
- chennur-temples.html
- manthani-temples.html
- yamakonam.html

Each page: 300+ words, one H1, distance from Kaleshwaram, how to reach, 2–3 photos with alt text, and a link back to kaleshwaram-nearby-temples.html.

---

## 6. Quick wins checklist

- [ ] Submit sitemap.xml in Google Search Console
- [ ] Create a Google Business Profile for Rekshetra Tours (category: Travel agency / Tour operator) and ask real visitors for reviews
- [ ] Add image alt text in Telugu and English on every photo
- [ ] Replace the "Visitors: …" counter placeholder with a working one or remove it
- [ ] Link to rekshetratours.com from the YouTube channel description and the temple-related pages you control
- [ ] Use one H1 per page and keep the keyword in the first 100 words
