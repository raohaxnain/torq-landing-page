"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronRight, ChevronLeft, RefreshCw } from "lucide-react";

interface InteractiveDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Industry = {
  id: string;
  label: string;
  image: string;
};

type Audience = {
  id: string;
  label: string;
  description: string;
};

type Campaign = {
  id: string;
  title: string;
  items: string[];
};

const INDUSTRIES: Industry[] = [
  {
    id: "yoga",
    label: "Yoga Studio",
    image: "/stock images/pexels-elly-fairytale-3822169.webp",
  },
  {
    id: "auto",
    label: "Auto Dealership",
    image: "/stock images/pexels-sam-mccool-1923523643-28891882.webp",
  },
  {
    id: "dentist",
    label: "Dentist Office",
    image: "/stock images/pexels-fr3nks-305568.webp",
  },
];

const AUDIENCES: Audience[] = [
  {
    id: "high-engagement",
    label: "High Engagement Audience",
    description: "Users who frequently interact with similar content.",
  },
  {
    id: "low-frequency",
    label: "Low Frequency Buyers",
    description: "Users who purchase occasionally but have high potential.",
  },
];

const CAMPAIGN_SETS: Campaign[][] = [
  [
    { id: "c1", title: "Meta / Google Ad", items: ["Carousel Ad", "Video Reel"] },
    { id: "c2", title: "SMS Message", items: ["Welcome Offer", "Reminder"] },
    { id: "c3", title: "Email", items: ["Newsletter", "Promo Blast"] },
  ],
  [
    { id: "c4", title: "TikTok Ad", items: ["Viral Challenge", "Influencer"] },
    { id: "c5", title: "Push Notification", items: ["Flash Sale", "Update"] },
    { id: "c6", title: "Direct Mail", items: ["Postcard", "Brochure"] },
  ],
];

export default function InteractiveDemoModal({
  isOpen,
  onClose,
}: InteractiveDemoModalProps) {
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);
  const [campaignSetIndex, setCampaignSetIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsAnimating(false);
    }, 300); // Match transition duration
  };

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  const handleCycleCampaigns = () => {
    setCampaignSetIndex((prev) => (prev + 1) % CAMPAIGN_SETS.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNext(); // Go to confirmation
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Circle expansion animation overlay (optional, keeping consistent with previous design if desired, but user asked for fade in) */}
      {/* We'll use a simple fade in background */}
      <div className="absolute inset-0 bg-lime-200 animate-fade-in" />

      <div className="relative z-10 h-full w-full overflow-y-auto bg-lime-200 flex flex-col">
        {/* Header / Close Button */}
        <div className="flex justify-between items-center p-6 sm:p-8">
          <div className="text-xl font-bold text-slate-900">
            {step < 5 && `0${step}`}
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-900">
             MULTI-CHANNEL CAMPAIGN DEMO
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-white/50 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5 text-slate-900" />
          </button>
        </div>

        {/* Content Area */}
        <div className={`flex-1 flex flex-col items-center justify-center px-4 sm:px-6 transition-opacity duration-300 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          
          {/* STEP 1: Industry Selection */}
          {step === 1 && (
            <div className="w-full max-w-6xl space-y-12">
              <h2 className="text-4xl sm:text-6xl font-medium text-center text-slate-900">
                Pick an industry.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INDUSTRIES.map((industry, index) => (
                  <div
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className="group cursor-pointer flex flex-col text-left"
                  >
                    <div
                      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl transition-all duration-300 mb-6 ${
                        selectedIndustry === industry.id
                          ? "ring-4 ring-white scale-[1.02]"
                          : "group-hover:scale-[1.01]"
                      }`}
                    >
                      <Image
                        src={industry.image}
                        alt={industry.label}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm font-bold text-slate-900">
                        0{index + 1}
                      </div>
                      <div className="text-3xl font-medium text-slate-900">
                        {industry.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Audience Selection */}
          {step === 2 && (
            <div className="w-full max-w-5xl space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl sm:text-6xl font-medium text-slate-900">
                  Pick an audience to target.
                </h2>
                <p className="text-slate-700 max-w-2xl mx-auto text-lg">
                  Based on our insights, we&apos;ve identified key segments for your campaign.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AUDIENCES.map((audience) => (
                  <div
                    key={audience.id}
                    onClick={() => setSelectedAudience(audience.id)}
                    className={`cursor-pointer p-8 rounded-2xl border-2 transition-all duration-300 h-64 flex flex-col justify-center ${
                      selectedAudience === audience.id
                        ? "bg-white border-white shadow-xl scale-[1.02]"
                        : "bg-white/40 border-transparent hover:bg-white/60"
                    }`}
                  >
                    <div className="text-sm font-bold text-slate-500 mb-2">0{AUDIENCES.indexOf(audience) + 1}</div>
                    <h3 className="text-3xl font-medium text-slate-900 mb-2">
                      {audience.label}
                    </h3>
                    {/* <p className="text-slate-600">{audience.description}</p> */}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Campaign Selection */}
          {step === 3 && (
            <div className="w-full max-w-6xl space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl sm:text-6xl font-medium text-slate-900">
                  Your campaign deliverables.
                </h2>
                <p className="text-slate-700 max-w-2xl mx-auto text-lg">
                  Multi-channel campaigns designed to maximize reach and conversion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CAMPAIGN_SETS[campaignSetIndex].map((campaign, idx) => (
                  <div
                    key={campaign.id}
                    className="bg-white/40 p-8 rounded-2xl h-64 flex flex-col justify-center"
                  >
                    <div className="text-sm font-bold text-slate-500 mb-2">0{idx + 1}</div>
                    <h3 className="text-2xl font-medium text-slate-900 mb-4">
                      {campaign.title}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-6">
                <button
                  onClick={handleCycleCampaigns}
                  className="cursor-pointer bg-white h-16 w-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  title="Show me another idea"
                >
                  <RefreshCw className="w-6 h-6 text-slate-900" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Lead Form */}
          {step === 4 && (
            <div className="w-full max-w-2xl space-y-12">
              <div className="text-center">
                <h2 className="text-4xl sm:text-6xl font-medium text-slate-900 mb-6">
                  Send me my results.
                </h2>
                <p className="text-slate-700">
                  We&apos;ll email you the complete campaign breakdown based on your choices.
                </p>
              </div>

              <form id="lead-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">FIRST NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-6 py-4 bg-white/50 rounded-xl border-none focus:ring-2 focus:ring-slate-900 text-black placeholder:text-black caret-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">LAST NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-6 py-4 bg-white/50 rounded-xl border-none focus:ring-2 focus:ring-slate-900 text-black placeholder:text-black caret-black"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 bg-white/50 rounded-xl border-none focus:ring-2 focus:ring-slate-900 text-black placeholder:text-black caret-black"
                  />
                </div>
              </form>
            </div>
          )}

          {/* STEP 5: Confirmation */}
          {step === 5 && (
            <div className="w-full max-w-2xl text-center space-y-8 animate-scale-in">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl font-medium text-slate-900">
                Demo results will arrive shortly.
              </h2>
              <p className="text-slate-700 text-xl">
                Check your inbox for the complete breakdown.
              </p>
            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="w-[calc(100%-3rem)] max-w-7xl mx-auto mb-6 rounded-2xl bg-white py-6 px-4 sm:px-8 mt-6 md:mt-auto flex justify-between items-center z-20">
          {/* Left Button (Back) */}
          <div className="w-1/3 flex justify-start">
            {step > 1 && step < 5 && (
              <button
                onClick={handleBack}
                className="cursor-pointer text-slate-900 font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>
            )}
          </div>

          {/* Right Button (Next/Action) */}
          <div className="w-1/3 flex justify-end">
            {step === 1 && (
              <button
                onClick={handleNext}
                disabled={!selectedIndustry}
                className="cursor-pointer text-slate-900 font-bold uppercase tracking-wider flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
              >
                See Customer Insight <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {step === 2 && (
              <button
                onClick={handleNext}
                disabled={!selectedAudience}
                className="cursor-pointer text-slate-900 font-bold uppercase tracking-wider flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
              >
                See Campaign <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {step === 3 && (
              <button
                onClick={handleNext}
                className="cursor-pointer text-slate-900 font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                Book a Demo <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {step === 4 && (
              <button
                onClick={handleSubmit}
                disabled={!formData.firstName || !formData.lastName || !formData.email}
                className="cursor-pointer text-slate-900 font-bold uppercase tracking-wider flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
              >
                Submit <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {step === 5 && (
              <button
                onClick={onClose}
                className="cursor-pointer text-slate-900 font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                Close <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
