export interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "automation" | "fencing" | "cctv" | "coc";
}

export const faqsData: FaqItem[] = [
  {
    category: "general",
    question: "How do I request a site inspection and quote?",
    answer: "You can request a quote by filling out our quick WhatsApp quote form, calling us directly, or sending an email enquiry. We will evaluate your site requirements and provide a clear, detailed estimate."
  },
  {
    category: "general",
    question: "What areas do you service?",
    answer: "Gate & Guard Projects services Greater Johannesburg, Sandton, Randburg, Midrand, Centurion, Pretoria, East Rand, West Rand, and surrounding Gauteng regions."
  },
  {
    category: "general",
    question: "Do your installations come with a warranty?",
    answer: "Yes, all hardware installed by Gate & Guard Projects carries manufacturer warranties (typically 12 to 24 months), and we guarantee our installation workmanship."
  },
  {
    category: "automation",
    question: "Will my gate motor work during load-shedding power outages?",
    answer: "Yes, we equip gate and garage motors with heavy-duty deep-cycle or upgraded lithium battery backups to ensure smooth open and close operations during power cuts."
  },
  {
    category: "fencing",
    question: "Is an Electric Fence Certificate of Compliance (COC) mandatory?",
    answer: "Yes. In South Africa, electrical machinery regulations require an Electric Fence System Certificate of Compliance whenever a property with an electric fence is sold, modified, or freshly installed."
  },
  {
    category: "cctv",
    question: "Can I view my CCTV security cameras remotely on my mobile phone?",
    answer: "Yes, our CCTV installations are configured for remote viewing via secure mobile applications on iOS and Android devices whenever connected to Wi-Fi or LTE internet."
  },
  {
    category: "coc",
    question: "How long is an Electric Fence Certificate of Compliance valid for?",
    answer: "An Electric Fence COC remains valid indefinitely provided no structural or technical alterations have been made to the system since issuance."
  }
];
