export interface BlogPostContent {
  mainHeading: string;
  subheading: string;
  paragraphs: string[];
  bulletPoints?: string[];
  quote?: {
    text: string;
    author: string;
    company: string;
  };
  contentImages: string[];
  imageCaptions: string[];
}

const contentImages = [
  "/stock images/AdobeStock_936205009.webp",
  "/stock images/AdobeStock_1667176803.webp",
  "/stock images/pexels-cliff-booth-4058226.webp",
  "/stock images/pexels-fr3nks-305568.webp",
  "/stock images/pexels-sam-mccool-1923523643-28891882.webp",
];

function getRandomImages(count: number): string[] {
  const shuffled = [...contentImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const contentTemplates: BlogPostContent[] = [
  // Template 1: AI & Automation
  {
    mainHeading: "How AI-Powered Automation Transforms Customer Engagement",
    subheading: "THE FUTURE OF PERSONALIZED BUSINESS COMMUNICATION",
    paragraphs: [
      "Artificial intelligence is revolutionizing how businesses interact with their customers. By leveraging machine learning algorithms and natural language processing, companies can now deliver personalized experiences at scale, respond to inquiries instantly, and anticipate customer needs before they arise.",
      "Traditional customer service methods are becoming obsolete as consumers expect immediate, intelligent responses around the clock. AI-powered chatbots and virtual assistants can handle thousands of conversations simultaneously while maintaining a consistent brand voice and gathering valuable insights about customer preferences.",
      "The key to successful AI implementation isn't replacing human interaction entirely—it's about augmenting your team's capabilities. By automating routine tasks and qualifying leads automatically, your sales and support teams can focus on high-value conversations that require emotional intelligence and creative problem-solving.",
    ],
    bulletPoints: [
      "Respond to customer inquiries 24/7 without increasing headcount",
      "Qualify leads automatically based on engagement and behavior patterns",
      "Personalize communication at scale using customer data insights",
      "Reduce response times from hours to seconds",
      "Free up your team to focus on complex, high-value interactions",
    ],
    quote: {
      text: "Since implementing AI-powered automation, we've seen a 300% increase in qualified leads and our customer satisfaction scores have jumped by 45%. The technology pays for itself within the first month.",
      author: "John Smith",
      company: "TechForward Solutions",
    },
    contentImages: getRandomImages(1),
    imageCaptions: ["AI technology transforming business communication"],
  },
  // Template 2: Marketing Strategy
  {
    mainHeading: "Transform Your Marketing Strategy With Data-Driven Insights",
    subheading: "INNOVATIVE APPROACHES FOR MODERN BUSINESSES",
    paragraphs: [
      "In today's digital landscape, successful marketing isn't about casting a wide net—it's about precision targeting. By harnessing the power of data analytics and customer behavior tracking, businesses can create highly targeted campaigns that resonate with their ideal audience and drive measurable results.",
      "The shift from traditional marketing to digital-first strategies has created unprecedented opportunities for businesses of all sizes. Social media platforms, email automation, and content marketing allow you to reach your target audience exactly where they are, with messages tailored to their specific needs and pain points.",
      "The most successful companies aren't just collecting data—they're transforming it into actionable insights. By analyzing customer journeys, identifying drop-off points, and testing different approaches systematically, you can continuously optimize your marketing efforts and maximize return on investment.",
    ],
    bulletPoints: [
      "Enhance customer engagement with personalized content that speaks directly to their needs",
      "Leverage data analytics to identify high-value prospects and optimize ad spend",
      "Optimize your conversion funnel by eliminating friction points in the customer journey",
      "Implement marketing automation to nurture leads and scale your outreach efficiently",
    ],
    quote: {
      text: "Working with data-driven marketing strategies has completely transformed our approach. We've seen unprecedented growth across all channels, with a 200% increase in qualified leads and a 60% reduction in cost per acquisition.",
      author: "Sarah Johnson",
      company: "Marketing Pro",
    },
    contentImages: getRandomImages(2),
    imageCaptions: [
      "Modern business collaboration",
      "Strategic planning session",
    ],
  },
  // Template 3: Sales & Growth
  {
    mainHeading: "Accelerate Business Growth With Smart Lead Generation",
    subheading: "PROVEN STRATEGIES FOR SUSTAINABLE SUCCESS",
    paragraphs: [
      "In today's competitive landscape, businesses need more than just good products—they need intelligent systems that consistently generate high-quality leads. The most successful companies have moved beyond traditional cold calling and batch-and-blast email campaigns, embracing sophisticated automation and targeting strategies that deliver measurable results.",
      "Lead generation isn't just about quantity—it's about quality and timing. By identifying your ideal customer profile, mapping their buyer journey, and delivering the right message at the right moment, you can dramatically improve conversion rates while reducing acquisition costs. Modern tools make it possible to track every interaction and optimize your approach based on real data.",
      "The key to sustainable growth is building a systematic, repeatable process for attracting and qualifying prospects. When you combine smart automation with personalized outreach, you create a scalable engine that continues to perform even as your business grows. This allows your team to focus on closing deals rather than chasing unqualified leads.",
    ],
    bulletPoints: [
      "Generate qualified leads consistently and predictably with automated prospecting",
      "Reduce customer acquisition costs by up to 40% through targeted campaigns",
      "Improve sales team productivity by automating routine follow-up tasks",
      "Track and optimize every touchpoint in the customer journey with detailed analytics",
      "Scale operations without proportional increase in overhead or headcount",
    ],
    quote: {
      text: "The results speak for themselves. Within three months, we doubled our lead generation while reducing costs by 35%. The systematic approach to prospecting has been a complete game-changer for our business.",
      author: "Michael Chen",
      company: "Growth Ventures",
    },
    contentImages: getRandomImages(1),
    imageCaptions: ["Successful business meeting"],
  },
];

export function getRandomContent(): BlogPostContent {
  const template =
    contentTemplates[Math.floor(Math.random() * contentTemplates.length)];
  // Return a fresh copy with newly randomized images
  return {
    ...template,
    contentImages: getRandomImages(template.contentImages.length),
  };
}
