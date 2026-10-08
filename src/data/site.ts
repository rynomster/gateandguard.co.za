export interface TrustMetric {
  label: string;
  value: string;
  description?: string;
}

export interface SiteData {
  companyName: string;
  legalName?: string;
  tagline: string;
  descriptor: string;
  siteUrl: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  address?: {
    street?: string;
    suburb?: string;
    city: string;
    province: string;
    postalCode?: string;
    display: string;
  };
  serviceAreas: string[];
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    emergency: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    whatsappUrl: string;
  };
  cocDetails: {
    certified: boolean;
    fencingCocAvailable: boolean;
    electricalCocAvailable: boolean;
    note: string;
  };
  trustMetrics?: TrustMetric[];
  trustStripItems: Array<{
    title: string;
    subtitle: string;
    icon: string;
  }>;
}

export const siteData: SiteData = {
  companyName: "Gate & Guard Projects",
  legalName: "Gate & Guard Projects (Pty) Ltd",
  tagline: "Protect. Automate. Connect.",
  descriptor: "Security | Automation | Access | Solutions",
  siteUrl: "https://rynomster.github.io/gateandguard.co.za",
  phone: "+27600000000", // TODO: Client to provide exact primary phone
  phoneFormatted: "060 000 0000",
  whatsapp: "27600000000", // TODO: Client to provide exact WhatsApp number (country code format without +)
  whatsappFormatted: "060 000 0000",
  email: "info@gateandguard.co.za", // TODO: Client to confirm primary enquiry email
  address: {
    city: "Johannesburg",
    province: "Gauteng",
    display: "Gauteng & Surrounding Areas, South Africa"
  },
  serviceAreas: [
    "Sandton",
    "Randburg",
    "Midrand",
    "Centurion",
    "Pretoria",
    "East Rand",
    "West Rand",
    "Johannesburg South"
  ],
  businessHours: {
    weekdays: "07:30 - 17:00",
    saturday: "08:00 - 13:00",
    sunday: "Closed (Emergency Callouts Available)",
    emergency: "24/7 Callouts Available"
  },
  socialLinks: {
    whatsappUrl: "https://wa.me/27600000000"
  },
  cocDetails: {
    certified: true,
    fencingCocAvailable: true,
    electricalCocAvailable: true,
    note: "Certificates of Compliance (COC) issued for qualified electric fence and perimeter installations."
  },
  // Optional metrics - leave empty or populated with confirmed figures only
  trustMetrics: [
    // { label: "Completed Projects", value: "500+" },
    // { label: "Client Satisfaction", value: "99%" },
  ],
  trustStripItems: [
    { title: "Safer Homes", subtitle: "Perimeter & Alarm Protection", icon: "home" },
    { title: "Smarter Businesses", subtitle: "Access Control & CCTV Integration", icon: "building" },
    { title: "Better Living", subtitle: "Seamless Gate & Garage Automation", icon: "shield" },
    { title: "Proudly South African", subtitle: "Robust Local Security Solutions", icon: "flag" }
  ]
};
