export interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "automation" | "fencing" | "cctv" | "coc";
}

export const faqsData: FaqItem[] = [
  {
    category: "general",
    question: "How do I request a site evaluation and quote?",
    answer: "You can request a quote by filling out our online WhatsApp quote form, calling us directly, or sending an email enquiry. We evaluate your security requirements and provide a transparent, detailed quote."
  },
  {
    category: "general",
    question: "What areas do you service?",
    answer: "Gate & Guard Projects services residential, commercial, and estate properties across our primary service regions. Contact our team to confirm coverage for your specific location."
  },
  {
    category: "general",
    question: "Do your installations come with a warranty?",
    answer: "Yes, equipment installed by Gate & Guard Projects carries manufacturer warranties, and we stand behind our technical workmanship."
  },
  {
    category: "automation",
    question: "Will my gate motor work during power outages?",
    answer: "Yes, we equip gate and garage door motors with deep-cycle or lithium battery backup systems to ensure uninterrupted access during power outages."
  },
  {
    category: "fencing",
    question: "Is an Electric Fence Certificate of Compliance (COC) mandatory?",
    answer: "Yes. South African regulations require an Electric Fence System Certificate of Compliance (EFSCOC) whenever an electric fence is newly installed, modified, or when property ownership transfers."
  },
  {
    category: "cctv",
    question: "Can I view my CCTV security cameras remotely on my phone?",
    answer: "Yes, our IP and HD CCTV installations can be configured for remote viewing via secure mobile applications on iOS and Android devices whenever connected to internet."
  },
  {
    category: "coc",
    question: "How long is an Electric Fence Certificate of Compliance valid for?",
    answer: "An Electric Fence COC remains valid indefinitely provided no structural or technical alterations have been made to the system since issuance."
  }
];
