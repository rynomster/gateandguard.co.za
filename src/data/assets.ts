export interface AssetRegistryItem {
  id: string;
  path: string;
  alt: string;
  role: string;
  provenance: "client" | "stock" | "generated";
  approvalStatus: "approved" | "pending_approval" | "illustrative_only";
  credit?: string;
  dimensions?: {
    width: number;
    height: number;
    aspectRatio: string;
  };
  eagerLoad?: boolean;
}

export const assetRegistry: Record<string, AssetRegistryItem> = {
  heroBg: {
    id: "hero-bg",
    path: "/assets/images/hero/hero-bg.jpg",
    alt: "Modern South African residential driveway gate at dusk with warm exterior lighting",
    role: "Homepage Hero Visual",
    provenance: "stock",
    approvalStatus: "illustrative_only",
    dimensions: {
      width: 1920,
      height: 1080,
      aspectRatio: "16:9"
    },
    eagerLoad: true
  },
  serviceAutomation: {
    id: "service-gate-automation",
    path: "/assets/images/services/gate-garage-automation.jpg",
    alt: "Heavy-duty sliding gate motor unit installed along a driveway gear rack",
    role: "Gate & Garage Automation Category Image",
    provenance: "stock",
    approvalStatus: "illustrative_only",
    dimensions: {
      width: 800,
      height: 600,
      aspectRatio: "4:3"
    }
  },
  serviceElectricFencing: {
    id: "service-electric-fencing",
    path: "/assets/images/services/electric-fencing.jpg",
    alt: "Neatly fitted 8-strand electric fence mounted above boundary wall",
    role: "Electric Fencing Category Image",
    provenance: "stock",
    approvalStatus: "illustrative_only",
    dimensions: {
      width: 800,
      height: 600,
      aspectRatio: "4:3"
    }
  },
  serviceCctv: {
    id: "service-cctv",
    path: "/assets/images/services/cctv-installation.jpg",
    alt: "Full-color night vision CCTV turret camera mounted under soffit",
    role: "CCTV Category Image",
    provenance: "stock",
    approvalStatus: "illustrative_only",
    dimensions: {
      width: 800,
      height: 600,
      aspectRatio: "4:3"
    }
  },
  serviceIntruderAlarms: {
    id: "service-intruder-alarms",
    path: "/assets/images/services/intruder-alarms.jpg",
    alt: "Outdoor motion sensor beam mounted on exterior residential wall",
    role: "Intruder Alarms Category Image",
    provenance: "stock",
    approvalStatus: "illustrative_only",
    dimensions: {
      width: 800,
      height: 600,
      aspectRatio: "4:3"
    }
  },
  serviceAccessControl: {
    id: "service-access-control",
    path: "/assets/images/services/access-control.jpg",
    alt: "Weatherproof access control keypad unit mounted at entrance gate",
    role: "Access Control Category Image",
    provenance: "stock",
    approvalStatus: "illustrative_only",
    dimensions: {
      width: 800,
      height: 600,
      aspectRatio: "4:3"
    }
  },
  serviceIntercoms: {
    id: "service-intercoms",
    path: "/assets/images/services/intercoms.jpg",
    alt: "Vandal-resistant gate station intercom mounted on boundary pillar",
    role: "Intercom Systems Category Image",
    provenance: "stock",
    approvalStatus: "illustrative_only",
    dimensions: {
      width: 800,
      height: 600,
      aspectRatio: "4:3"
    }
  },
  serviceDiy: {
    id: "service-diy-projects",
    path: "/assets/images/services/diy-projects.jpg",
    alt: "Security hardware kit and pre-programmed equipment components",
    role: "DIY Security Supply Category Image",
    provenance: "stock",
    approvalStatus: "illustrative_only",
    dimensions: {
      width: 800,
      height: 600,
      aspectRatio: "4:3"
    }
  },
  logoHorizontalPng: {
    id: "logo-horizontal-png",
    path: "/assets/brand/logo-horizontal.png",
    alt: "Gate & Guard Projects Logo",
    role: "Primary Header Logo",
    provenance: "client",
    approvalStatus: "approved"
  },
  logoHorizontalWebp: {
    id: "logo-horizontal-webp",
    path: "/assets/brand/logo-horizontal.webp",
    alt: "Gate & Guard Projects Logo",
    role: "Primary Header Logo WebP",
    provenance: "client",
    approvalStatus: "approved"
  },
  logoMarkPng: {
    id: "logo-mark-png",
    path: "/assets/brand/logo-mark.png",
    alt: "Gate & Guard Shield Mark",
    role: "Brand Emblem Mark",
    provenance: "client",
    approvalStatus: "approved"
  },
  logoMarkWebp: {
    id: "logo-mark-webp",
    path: "/assets/brand/logo-mark.webp",
    alt: "Gate & Guard Shield Mark",
    role: "Brand Emblem Mark WebP",
    provenance: "client",
    approvalStatus: "approved"
  }
};
