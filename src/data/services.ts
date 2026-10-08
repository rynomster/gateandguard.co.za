export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  icon: string;
  heroImage: string;
  cardImage: string;
  features: string[];
  useCases: string[];
  whatIsIncluded: string[];
  supportedBrands?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export const servicesData: Service[] = [
  {
    slug: "intruder-alarms",
    title: "Intruder Alarm Systems",
    shortTitle: "Intruder Alarms",
    summary: "Reliable perimeter and indoor intruder detection with immediate alert notifications for homes and commercial sites.",
    description: "Protect your property with responsive, state-of-the-art intruder alarm solutions. We design, install, repair, and upgrade wired and wireless alarm systems tailored to South African residential and commercial risk profiles.",
    icon: "bell",
    heroImage: "/assets/images/services/intruder-alarms.jpg",
    cardImage: "/assets/images/services/intruder-alarms.jpg",
    features: [
      "Wired & wireless zone setup",
      "Outdoor passives & beam protection",
      "Mobile app alerts & smart phone integration",
      "Armed response transmitter linking",
      "Battery backup for load-shedding resilience"
    ],
    useCases: [
      "Residential homes & sectional title complexes",
      "Retail shops & commercial offices",
      "Warehouses & industrial yards",
      "Perimeter yard beam protection"
    ],
    whatIsIncluded: [
      "On-site risk assessment & layout planning",
      "Control panel, keypad & passive infrared detector installation",
      "Outdoor dual-tech beams & door contacts",
      "System testing & user operational training"
    ],
    supportedBrands: ["Paradox", "Inim", "IDS", "Ajax", "Texecom"],
    faqs: [
      {
        question: "Will my alarm system work during load-shedding?",
        answer: "Yes, all our alarm installations include high-capacity deep-cycle or lithium battery backups designed to keep your system operational during power outages."
      },
      {
        question: "Can I connect the alarm system to my smartphone?",
        answer: "Absolutely. Modern IP and GSM alarm modules allow real-time notifications, remote arming/disarming, and status monitoring directly from your iOS or Android device."
      }
    ]
  },
  {
    slug: "electric-fencing",
    title: "Electric Fencing Solutions",
    shortTitle: "Electric Fencing",
    summary: "High-voltage physical and psychological perimeter deterrents built for max security and full COC compliance.",
    description: "Fortify your boundary lines with robust electric fence installations, repairs, and energizer upgrades. Our fencing systems provide continuous perimeter surveillance, high-voltage deterrence, and instant alarm trigger capabilities.",
    icon: "zap",
    heroImage: "/assets/images/services/electric-fencing.jpg",
    cardImage: "/assets/images/services/electric-fencing.jpg",
    features: [
      "Wall-top & free-standing fence installations",
      "High-output energizers with keypad control",
      "Stainless steel & heavy galvanized wire options",
      "Anti-gate jump & siren integration",
      "Certificate of Compliance (COC) issuance"
    ],
    useCases: [
      "Private suburban residences",
      "Residential estates & complexes",
      "Commercial parks & industrial perimeters",
      "Agricultural boundaries"
    ],
    whatIsIncluded: [
      "Perimeter structural audit & pole mounting",
      "High-tensile wire stringing & tensioner fittings",
      "Energizer installation & earth spike array",
      "Alarm siren & warning sign compliance"
    ],
    supportedBrands: ["Nemtek", "Gallagher", "Stafix", "Hammer"],
    faqs: [
      {
        question: "Do I need a Certificate of Compliance (COC) for my electric fence?",
        answer: "Yes, South African legislation requires an Electric Fence System Certificate of Compliance (EFSCOC) for all new, modified, or property-transfer electric fence installations."
      },
      {
        question: "What happens if a tree branch touches the fence?",
        answer: "Modern smart energizers feature adjustable sensitivity and intelligent fault filtering to minimize false alarms caused by foliage while maintaining high security against intrusion."
      }
    ]
  },
  {
    slug: "gate-and-garage-automation",
    title: "Gate & Garage Door Automation",
    shortTitle: "Gate & Garage Automation",
    summary: "Smooth, heavy-duty motor automation for sliding gates, swing gates, and garage doors with battery backup.",
    description: "Upgrade your property entrance with fast, durable, and secure gate and garage door motors. From heavy industrial sliding gates to automated sectional garage doors, we deliver turnkey automation with long-lasting reliability.",
    icon: "cpu",
    heroImage: "/assets/images/services/gate-garage-automation.jpg",
    cardImage: "/assets/images/services/gate-garage-automation.jpg",
    features: [
      "Sliding & swing gate motor installation",
      "Sectional & tip-up garage door automation",
      "High-speed motors for fast entry security",
      "Safety infrared beam installation",
      "Lithium battery backup systems"
    ],
    useCases: [
      "Suburban home entrance gates",
      "Complex & estate heavy-traffic access points",
      "Commercial factory sliding gates",
      "Residential garage doors"
    ],
    whatIsIncluded: [
      "Base plate alignment & rack gear installation",
      "Motor unit, controller & power setup",
      "Safety beam alignment & remote transmitter programming",
      "Manual override key testing"
    ],
    supportedBrands: ["Centurion Systems", "ET Nice", "Gemini", "Digidoor"],
    faqs: [
      {
        question: "How long will my gate motor operate on battery backup during load-shedding?",
        answer: "Standard dual-battery and lithium-upgraded motors typically support 30 to 100+ open/close cycles, ensuring uninterrupted access throughout prolonged load-shedding periods."
      },
      {
        question: "Why does my gate stop halfway or reverse?",
        answer: "This is often caused by obstructed track debris, worn rack gears, failing battery voltage, or misaligned safety beams. Our technicians perform fast diagnostic repairs."
      }
    ]
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation & Surveillance",
    shortTitle: "CCTV Installation",
    summary: "Crystal-clear HD & IP camera coverage with color night vision and remote mobile phone view.",
    description: "Monitor your premises 24/7 with high-definition CCTV systems. We supply and configure analogue HD and IP camera networks equipped with smart motion detection, night vision, and remote live viewing from anywhere in the world.",
    icon: "video",
    heroImage: "/assets/images/services/cctv-installation.jpg",
    cardImage: "/assets/images/services/cctv-installation.jpg",
    features: [
      "High-definition 4K & IP camera systems",
      "Full-color night vision (ColorVu / Full-Color)",
      "Smart human & vehicle detection analytics",
      "NVR / DVR storage with expandable hard drives",
      "Remote mobile app viewing setup"
    ],
    useCases: [
      "Home entrance & perimeter monitoring",
      "Business point-of-sale & office surveillance",
      "Warehouse stock room monitoring",
      "Complex perimeter boundary oversight"
    ],
    whatIsIncluded: [
      "Camera placement strategic planning",
      "Clean cabling & conduit installation",
      "Recorder configuration & network setup",
      "Mobile app pairing on smartphones & tablets"
    ],
    supportedBrands: ["Hikvision", "Dahua", "Uniview", "Provision-ISR"],
    faqs: [
      {
        question: "Can I watch my CCTV camera footage on my phone while away?",
        answer: "Yes, as long as your camera recorder is connected to an active internet connection (Wi-Fi or LTE), you can stream live footage and view playback from anywhere via mobile app."
      },
      {
        question: "Do color night vision cameras require bright floodlights?",
        answer: "No, modern color night vision cameras use ultra-sensitive sensors and warm white fill-lights to capture full-color video even in extremely low ambient lighting conditions."
      }
    ]
  },
  {
    slug: "access-control",
    title: "Access Control Systems",
    shortTitle: "Access Control",
    summary: "Keypads, RFID cards, biometric readers, and turnstiles for seamless, secure entry management.",
    description: "Take total command over who enters your property. We engineer tailored access control solutions ranging from single-door keypad locks to multi-door biometric systems and estate visitor management integrations.",
    icon: "lock",
    heroImage: "/assets/images/services/access-control.jpg",
    cardImage: "/assets/images/services/access-control.jpg",
    features: [
      "Biometric fingerprint & facial recognition readers",
      "RFID card & key fob access panels",
      "Digital pin pad entry keypads",
      "Magnetic door locks & striker plates",
      "Visitor management software integration"
    ],
    useCases: [
      "Office buildings & server rooms",
      "Residential estate boom gates",
      "Gyms, schools & healthcare facilities",
      "Industrial distribution centers"
    ],
    whatIsIncluded: [
      "Hardware mounting & lock mechanism installation",
      "Controller panel setup & power supplies",
      "User credential enrolling (cards, pins, biometrics)",
      "System administration guidance"
    ],
    supportedBrands: ["ZKTeco", "Hikvision", "Centurion", "SupaGateway", "Virdi"],
    faqs: [
      {
        question: "Can we track entry and exit times of staff or visitors?",
        answer: "Yes, management software connected to your access control system records exact time-stamped log reports for every credential scan."
      }
    ]
  },
  {
    slug: "intercoms",
    title: "Intercom Systems",
    shortTitle: "Intercoms",
    summary: "Clear audio and video intercoms connecting gate stations directly to monitors or mobile phones.",
    description: "Communicate securely with visitors at your gate before granting access. We install wired video intercoms, wireless GSM intercoms, and IP smart intercoms for private residences, office complexes, and housing estates.",
    icon: "phone-call",
    heroImage: "/assets/images/services/intercoms.jpg",
    cardImage: "/assets/images/services/intercoms.jpg",
    features: [
      "GSM mobile-dialing intercom systems",
      "HD video indoor touch screen monitors",
      "Vandal-resistant outdoor gate stations",
      "Remote gate trigger directly from handset or phone",
      "Multi-tenant estate system capabilities"
    ],
    useCases: [
      "Private home main entrance gates",
      "Sectional title townhouse complexes",
      "Commercial office receptionist desks",
      "Industrial access gates"
    ],
    whatIsIncluded: [
      "Gate station & indoor monitor mounting",
      "Wiring or GSM SIM card installation",
      "Gate lock relay wiring for remote opening",
      "System test & sound clarity adjustment"
    ],
    supportedBrands: ["Commax", "Kocom", "Hikvision", "Centurion G-Ultra", "Bticino"],
    faqs: [
      {
        question: "How does a GSM intercom work?",
        answer: "A GSM intercom uses a SIM card to call your mobile phone or landline when a visitor presses the gate button. You can speak to them and press a button on your phone key pad to open the gate."
      }
    ]
  },
  {
    slug: "diy-projects",
    title: "DIY Security Supply & Guided Support",
    shortTitle: "DIY Projects",
    summary: "Quality pre-configured security kits, supply-only hardware, and professional remote assistance.",
    description: "For handy homeowners and property managers who prefer self-installation, Gate & Guard Projects supplies complete hardware kits with pre-programmed remotes, pre-configured energizer boxes, and expert advice.",
    icon: "wrench",
    heroImage: "/assets/images/services/diy-projects.jpg",
    cardImage: "/assets/images/services/diy-projects.jpg",
    features: [
      "Pre-assembled & programmed motor packages",
      "DIY electric fence energizer & bracket kits",
      "Wireless alarm starter bundles",
      "Plug-and-play CCTV camera systems",
      "Telephonic & WhatsApp technical guidance"
    ],
    useCases: [
      "Self-installation homeowners",
      "Farm & rural property self-maintenance",
      "Property managers & facility teams",
      "Security hardware replacement"
    ],
    whatIsIncluded: [
      "Complete hardware & mounting accessories",
      "Wiring connection guides & diagrams",
      "Pre-programming of remotes & wireless sensors",
      "Dedicated technical phone consultation support"
    ],
    supportedBrands: ["Centurion", "Nemtek", "Paradox", "Hikvision"],
    faqs: [
      {
        question: "Do you offer advice if I get stuck installing a DIY kit?",
        answer: "Yes! All DIY kits supplied by Gate & Guard Projects come with direct phone/WhatsApp technical support to guide you through installation and troubleshooting."
      },
      {
        question: "Can Gate & Guard send a technician if I can't complete the DIY installation?",
        answer: "Absolutely. If you run into difficulties, our professional technicians are available for on-site commissioning, compliance verification, or complete installation."
      }
    ]
  }
];
