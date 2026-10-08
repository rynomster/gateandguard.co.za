export interface GalleryItem {
  id: string;
  title: string;
  category: "automation" | "fencing" | "cctv" | "alarms" | "access";
  categoryLabel: string;
  image: string;
  description: string;
  location?: string;
  alt: string;
  isIllustrative?: boolean;
  provenance?: "client" | "stock" | "generated";
}

export const galleryCategories = [
  { id: "all", label: "All Solutions" },
  { id: "automation", label: "Gate & Garage Automation" },
  { id: "fencing", label: "Electric Fencing" },
  { id: "cctv", label: "CCTV & Surveillance" },
  { id: "alarms", label: "Intruder Alarms" },
  { id: "access", label: "Access Control & Intercoms" }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "proj-1",
    title: "Heavy-Duty Sliding Gate Motor Setup",
    category: "automation",
    categoryLabel: "Gate Automation",
    image: "/assets/images/gallery/gate-motor-1.jpg",
    description: "Sliding gate motor installation featuring rack gear alignment, safety infrared beams, and battery backup support.",
    alt: "Sliding gate motor installed along a residential driveway gate",
    isIllustrative: true,
    provenance: "stock"
  },
  {
    id: "proj-2",
    title: "Wall-Top Stainless Steel Electric Fence",
    category: "fencing",
    categoryLabel: "Electric Fencing",
    image: "/assets/images/gallery/electric-fence-1.jpg",
    description: "8-strand stainless steel perimeter electric fence with high-tension line brackets and energizer integration.",
    alt: "Stainless steel 8-strand electric fence mounted cleanly on boundary wall",
    isIllustrative: true,
    provenance: "stock"
  },
  {
    id: "proj-3",
    title: "IP CCTV Perimeter Surveillance System",
    category: "cctv",
    categoryLabel: "CCTV Surveillance",
    image: "/assets/images/gallery/cctv-1.jpg",
    description: "High-definition turret camera setup monitoring boundary line and driveway entry.",
    alt: "CCTV turret camera mounted under soffit overlooking property entrance",
    isIllustrative: true,
    provenance: "stock"
  },
  {
    id: "proj-4",
    title: "Outdoor Perimeter Motion Detection",
    category: "alarms",
    categoryLabel: "Intruder Alarms",
    image: "/assets/images/gallery/alarm-1.jpg",
    description: "Outdoor dual-tech passive detectors providing early perimeter intrusion detection.",
    alt: "Outdoor motion sensor mounted on exterior wall",
    isIllustrative: true,
    provenance: "stock"
  },
  {
    id: "proj-5",
    title: "Access Control Keypad & Reader Unit",
    category: "access",
    categoryLabel: "Access Control",
    image: "/assets/images/gallery/access-1.jpg",
    description: "Weatherproof keyless entry keypad and reader unit for controlled pedestrian or vehicle access.",
    alt: "Access control keypad unit at property entrance",
    isIllustrative: true,
    provenance: "stock"
  },
  {
    id: "proj-6",
    title: "Video Intercom & Gate Station Unit",
    category: "access",
    categoryLabel: "Intercom Systems",
    image: "/assets/images/gallery/intercom-1.jpg",
    description: "Vandal-resistant gate station intercom connecting main entry directly to indoor monitor or phone.",
    alt: "Gate station intercom mounted on boundary entrance pillar",
    isIllustrative: true,
    provenance: "stock"
  }
];
