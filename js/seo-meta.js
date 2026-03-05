// seo-meta.js — MiraLocks
// Injecte automatiquement Schema.org (LocalBusiness) + Open Graph + Twitter Card
// À inclure dans TOUTES les pages HTML, juste après <meta charset>
(function () {
  'use strict';

  // ── CONFIGURATION GLOBALE DU SALON ────────────────────────────────────────
  var SALON = {
    name:        'Institut MiraLocks',
    url:         'https://miralocks.com',
    logo:        'https://miralocks.com/assets/logo-512.png',
    image:       'https://miralocks.com/assets/og-image.jpg', // image 1200x630 à créer
    phone:       '+22897989001',
    whatsapp:    'https://wa.me/22897989001',
    email:       'contact@miralocks.com',
    address: {
      street:    'Lomé',
      city:      'Lomé',
      region:    'Maritime',
      country:   'TG',
      postalCode:''
    },
    geo: {
      latitude:  '6.1375',
      longitude: '1.2123'
    },
    hours: [
      'Mo-Fr 09:00-19:00',
      'Sa 08:00-18:00'
    ],
    priceRange:  '₣₣',
    social: {
      instagram: 'https://instagram.com/miralocks_togo',
      facebook:  'https://facebook.com/miralocks'
    },
    description: 'Institut spécialisé en création, entretien et réparation de locks à Lomé, Togo. Experts en dreadlocks, tresses et soins capillaires naturels.'
  };

  // ── CONFIGURATION PAR PAGE ────────────────────────────────────────────────
  var PAGES = {
    'index.html': {
      title:       'Institut MiraLocks — Salon Locks & Dreadlocks à Lomé, Togo',
      description: 'Spécialiste locks, dreadlocks et tresses à Lomé. Création, entretien, réparation. Prenez rendez-vous facilement via WhatsApp.',
      keywords:    'locks, dreadlocks, salon locks Lomé, coiffure afro Togo, entretien locks, tresses',
      type:        'website'
    },
    'services.html': {
      title:       'Nos Services — Locks, Dreadlocks, Tresses | MiraLocks Lomé',
      description: 'Découvrez tous nos services : création de locks, entretien, réparation, tresses et soins capillaires naturels à Lomé, Togo.',
      keywords:    'services locks, création dreadlocks, entretien locks Lomé, tresses afro',
      type:        'website'
    },
    'gallery.html': {
      title:       'Galerie — Nos Réalisations Locks & Dreadlocks | MiraLocks',
      description: 'Photos et vidéos de nos réalisations : locks, dreadlocks, tresses et coiffures afro. Découvrez notre savoir-faire.',
      keywords:    'galerie locks, photos dreadlocks, réalisations coiffure afro Lomé',
      type:        'website'
    },
    'rendezvous.html': {
      title:       'Prendre Rendez-vous — Institut MiraLocks Lomé',
      description: 'Réservez votre rendez-vous chez MiraLocks. Service rapide via WhatsApp. Création, entretien et réparation de locks à Lomé.',
      keywords:    'rendez-vous locks Lomé, réserver coiffure afro, booking MiraLocks',
      type:        'website'
    },
    'contact.html': {
      title:       'Contact & Localisation — Institut MiraLocks Lomé, Togo',
      description: 'Contactez l\'Institut MiraLocks à Lomé. Téléphone, WhatsApp, adresse et horaires d\'ouverture.',
      keywords:    'contact MiraLocks, adresse salon locks Lomé, horaires coiffure',
      type:        'website'
    },
    'about.html': {
      title:       'À Propos — L\'Histoire de l\'Institut MiraLocks',
      description: 'Découvrez l\'histoire et la philosophie de l\'Institut MiraLocks, expert en locks et dreadlocks à Lomé, Togo.',
      keywords:    'histoire MiraLocks, salon locks Togo, expert dreadlocks Lomé',
      type:        'website'
    },
    'blog.html': {
      title:       'Blog & Conseils Capillaires — Institut MiraLocks',
      description: 'Conseils, astuces et actualités sur les locks, dreadlocks et soins capillaires naturels par l\'Institut MiraLocks.',
      keywords:    'blog locks, conseils dreadlocks, entretien locks naturels, astuces coiffure afro',
      type:        'blog'
    },
    'faq.html': {
      title:       'Questions Fréquentes — Locks & Dreadlocks | MiraLocks',
      description: 'Toutes les réponses à vos questions sur les locks : durée, entretien, prix, douleur, hygiène. Expert MiraLocks Lomé.',
      keywords:    'FAQ locks, questions dreadlocks, entretien locks durée, locks douloureux',
      type:        'website'
    },
    'avis.html': {
      title:       'Avis Clients — Institut MiraLocks Lomé',
      description: 'Découvrez les témoignages et avis de nos clients satisfaits. Institut MiraLocks, votre spécialiste locks à Lomé, Togo.',
      keywords:    'avis MiraLocks, témoignages clients locks Lomé, satisfaction salon',
      type:        'website'
    }
  };

  // ── DÉTECTION DE LA PAGE COURANTE ─────────────────────────────────────────
  var pageName = window.location.pathname.split('/').pop() || 'index.html';
  if (pageName === '' || pageName === '/') pageName = 'index.html';
  var pageMeta = PAGES[pageName] || PAGES['index.html'];
  var canonicalUrl = SALON.url + '/' + pageName;

  // ── INJECTION DES BALISES META ────────────────────────────────────────────
  function setMeta(name, content, attr) {
    attr = attr || 'name';
    var existing = document.querySelector('meta[' + attr + '="' + name + '"]');
    if (existing) {
      existing.setAttribute('content', content);
    } else {
      var meta = document.createElement('meta');
      meta.setAttribute(attr, name);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  }

  function setLink(rel, href) {
    var existing = document.querySelector('link[rel="' + rel + '"]');
    if (existing) {
      existing.href = href;
    } else {
      var link = document.createElement('link');
      link.rel  = rel;
      link.href = href;
      document.head.appendChild(link);
    }
  }

  // Title
  if (!document.title || document.title === 'MiraLocks') {
    document.title = pageMeta.title;
  }

  // Meta de base
  setMeta('description',     pageMeta.description);
  setMeta('keywords',        pageMeta.keywords);
  setMeta('author',          SALON.name);
  setMeta('robots',          'index, follow');
  setMeta('theme-color',     '#c9a84c');

  // Canonical
  setLink('canonical', canonicalUrl);

  // ── OPEN GRAPH ────────────────────────────────────────────────────────────
  setMeta('og:type',        pageMeta.type,         'property');
  setMeta('og:url',         canonicalUrl,           'property');
  setMeta('og:title',       pageMeta.title,         'property');
  setMeta('og:description', pageMeta.description,   'property');
  setMeta('og:image',       SALON.image,            'property');
  setMeta('og:image:width', '1200',                 'property');
  setMeta('og:image:height','630',                  'property');
  setMeta('og:image:alt',   SALON.name + ' — Salon Locks Lomé', 'property');
  setMeta('og:site_name',   SALON.name,             'property');
  setMeta('og:locale',      'fr_FR',                'property');

  // ── TWITTER CARD ──────────────────────────────────────────────────────────
  setMeta('twitter:card',        'summary_large_image', 'name');
  setMeta('twitter:title',       pageMeta.title,        'name');
  setMeta('twitter:description', pageMeta.description,  'name');
  setMeta('twitter:image',       SALON.image,           'name');
  setMeta('twitter:image:alt',   SALON.name,            'name');

  // ── SCHEMA.ORG — LocalBusiness + BeautySalon ─────────────────────────────
  function injectSchema() {
    // Supprimer l'ancien schema si rechargé
    var old = document.getElementById('schema-miralocks');
    if (old) old.remove();

    var schema = {
      '@context': 'https://schema.org',
      '@type': ['BeautySalon', 'LocalBusiness'],
      '@id': SALON.url + '#business',
      'name': SALON.name,
      'description': SALON.description,
      'url': SALON.url,
      'logo': {
        '@type': 'ImageObject',
        'url': SALON.logo
      },
      'image': SALON.image,
      'telephone': SALON.phone,
      'email': SALON.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': SALON.address.street,
        'addressLocality': SALON.address.city,
        'addressRegion': SALON.address.region,
        'addressCountry': SALON.address.country
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': SALON.geo.latitude,
        'longitude': SALON.geo.longitude
      },
      'openingHours': SALON.hours,
      'priceRange': SALON.priceRange,
      'currenciesAccepted': 'XOF',
      'paymentAccepted': 'Cash, Mobile Money',
      'areaServed': {
        '@type': 'City',
        'name': 'Lomé',
        'sameAs': 'https://www.wikidata.org/wiki/Q3745'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Services Capillaires MiraLocks',
        'itemListElement': [
          {
            '@type': 'Offer',
            'name': 'Création de Locks',
            'description': 'Création de dreadlocks sur tout type de cheveux'
          },
          {
            '@type': 'Offer',
            'name': 'Entretien de Locks',
            'description': 'Resserrage, nettoyage et entretien régulier des locks'
          },
          {
            '@type': 'Offer',
            'name': 'Réparation de Locks',
            'description': 'Réparation et renforcement des locks abîmées'
          },
          {
            '@type': 'Offer',
            'name': 'Tresses Africaines',
            'description': 'Tresses traditionnelles et modernes'
          }
        ]
      },
      'sameAs': [
        SALON.social.instagram,
        SALON.social.facebook
      ],
      'potentialAction': {
        '@type': 'ReserveAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': SALON.url + '/rendezvous.html',
          'actionPlatform': [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform'
          ]
        },
        'result': {
          '@type': 'Reservation',
          'name': 'Rendez-vous MiraLocks'
        }
      }
    };

    // FAQ Schema sur la page FAQ
    if (pageName === 'faq.html') {
      var faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Combien de temps faut-il pour créer des locks ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La création de locks prend entre 2 et 6 heures selon la longueur et l\'épaisseur des cheveux.'
            }
          },
          {
            '@type': 'Question',
            'name': 'À quelle fréquence faut-il entretenir ses locks ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Un entretien toutes les 4 à 8 semaines est recommandé pour garder des locks soignées.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Les locks sont-elles douloureuses à créer ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'La création de locks n\'est pas douloureuse si elle est réalisée correctement par un professionnel.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Peut-on défaire des locks ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, il est possible de défaire des locks récentes (moins de 6 mois) avec de la patience et les bons produits.'
            }
          }
        ]
      };
      injectSchemaScript('schema-faq-miralocks', faqSchema);
    }

    // BreadcrumbList sur toutes les pages (sauf accueil)
    if (pageName !== 'index.html') {
      var pageLabel = {
        'services.html':         'Services',
        'gallery.html':          'Galerie',
        'rendezvous.html':       'Rendez-vous',
        'contact.html':          'Contact',
        'about.html':            'À Propos',
        'blog.html':             'Blog',
        'faq.html':              'FAQ',
        'avis.html':             'Avis',
        'mentions-legales.html': 'Mentions Légales',
        'confidentialite.html':  'Confidentialité'
      };
      var breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Accueil',
            'item': SALON.url + '/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': pageLabel[pageName] || pageName,
            'item': canonicalUrl
          }
        ]
      };
      injectSchemaScript('schema-breadcrumb-miralocks', breadcrumb);
    }

    injectSchemaScript('schema-miralocks', schema);
  }

  function injectSchemaScript(id, data) {
    var old = document.getElementById(id);
    if (old) old.remove();
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id   = id;
    script.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(script);
  }

  // Injecter au plus tôt
  if (document.head) {
    injectSchema();
  } else {
    document.addEventListener('DOMContentLoaded', injectSchema);
  }

  // ── API publique (pour debug / admin) ────────────────────────────────────
  window.MiraLocksSEO = {
    salon:  SALON,
    pages:  PAGES,
    reload: injectSchema
  };

})();
