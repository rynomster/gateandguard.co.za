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
    emergency?: string;
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
  phone: "+27600000000", // Pending client verification
  phoneFormatted: "060 000 0000", // Pending client verification
  whatsapp: "27600000000", // Pending client verification
  whatsappFormatted: "060 000 0000", // Pending client verification
  email: "info@gateandguard.co.za", // Pending client verification
  address: {
    city: "Johannesburg",
    province: "Gauteng",
    display: "South Africa" // Kept neutral until primary territory confirmed
  },
  serviceAreas: [
    // Standard target service areas - subject to final client confirmation
    "Residential Estates",
    "Commercial Properties",
    "Suburban Residences",
    "Industrial Complexes"
  ],
  businessHours: {
    weekdays: "07:30 - 17:00",
    saturday: "08:00 - 13:00",
    sunday: "Closed",
    emergency: undefined // Disabled until emergency SLA is verified
  },
  socialLinks: {
    whatsappUrl: "https://wa.me/27600000000"
  },
  cocDetails: {
    certified: true,
    fencingCocAvailable: true,
    electricalCocAvailable: false,
    note: "Electric fence system compliance inspections and Certificates of Compliance (EFSCOC) issued via registered electric fence system installers."
  },
  trustMetrics: [],
  trustStripItems: [
    { title: "Safer Homes", subtitle: "Perimeter & Alarm Protection", icon: "home" },
    { title: "Smarter Businesses", subtitle: "Access Control & CCTV Integration", icon: "building" },
    { title: "Better Living", subtitle: "Seamless Gate & Garage Automation", icon: "shield" },
    { title: "Proudly South African", subtitle: "Robust Local Security Solutions", icon: "flag" }
  ]
};
