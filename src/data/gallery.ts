export interface GalleryItem {
  id: string;
  title: string;
  category: "automation" | "fencing" | "cctv" | "alarms" | "access";
  categoryLabel: string;
  image: string;
  description: string;
  location?: string;
  alt: string;
}

export const galleryCategories = [
  { id: "all", label: "All Projects" },
  { id: "automation", label: "Gate & Garage Automation" },
  { id: "fencing", label: "Electric Fencing" },
  { id: "cctv", label: "CCTV & Surveillance" },
  { id: "alarms", label: "Intruder Alarms" },
  { id: "access", label: "Access Control & Intercoms" }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "proj-1",
    title: "Heavy-Duty Sliding Gate Motor Installation",
    category: "automation",
    categoryLabel: "Gate Automation",
    image: "/assets/images/gallery/gate-motor-1.jpg",
    description: "Centurion high-speed sliding gate motor with lithium battery backup and heavy-duty rack mounting.",
    location: "Sandton, Johannesburg",
    alt: "Installed Centurion sliding gate motor along a paved driveway gate"
  },
  {
    id: "proj-2",
    title: "Wall-Top Stainless Steel Electric Fence",
    category: "fencing",
    categoryLabel: "Electric Fencing",
    image: "/assets/images/gallery/electric-fence-1.jpg",
    description: "8-strand stainless steel electric fence installation with high-tension brackets and energizer integration.",
    location: "Randburg, Johannesburg",
    alt: "Stainless steel 8-strand electric fence mounted cleanly on brick perimeter wall"
  },
  {
    id: "proj-3",
    title: "IP CCTV Perimeter Surveillance System",
    category: "cctv",
    categoryLabel: "CCTV Surveillance",
    image: "/assets/images/gallery/cctv-1.jpg",
    description: "Full-color night vision 4K IP cameras monitoring residential boundary lines and main gate area.",
    location: "Midrand, Gauteng",
    alt: "High-definition CCTV turret camera mounted under soffit overlooking driveway"
  },
  {
    id: "proj-4",
    title: "Wireless Alarm & Outdoor Passives Installation",
    category: "alarms",
    categoryLabel: "Intruder Alarms",
    image: "/assets/images/gallery/alarm-1.jpg",
    description: "Paradox outdoor dual-tech passive detectors providing early perimeter intrusion detection.",
    location: "Centurion, Pretoria",
    alt: "Outdoor motion sensor mounted on exterior wall protecting home courtyard"
  },
  {
    id: "proj-5",
    title: "Estate Access Control & Biometric Reader",
    category: "access",
    categoryLabel: "Access Control",
    image: "/assets/images/gallery/access-1.jpg",
    description: "Weatherproof biometric fingerprint reader and key fob scanner mounted at main complex visitor entrance.",
    location: "Fourways, Johannesburg",
    alt: "Biometric access control pedestal unit next to estate entrance boom gate"
  },
  {
    id: "proj-6",
    title: "GSM Video Intercom & Gate Opener System",
    category: "access",
    categoryLabel: "Intercom Systems",
    image: "/assets/images/gallery/intercom-1.jpg",
    description: "Anti-vandal metal gate intercom station linked to smartphone app for remote gate opening.",
    location: "Bryanston, Sandton",
    alt: "Vandal-resistant metal intercom station mounted on stone entrance pillar"
  }
];
