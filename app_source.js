const TIERS = ["AMC", "Gold", "Platinum"];

const DATA = {
  categories: [
    {
      slug: "resort",
      name: "Resort & Leisure Hotel",
      badge: "Leisure & Seasonal",
      color: "#ead06a",
      colorDark: "#fff",
      colorTint: "#E7EEE9",
      icon: iconSun(),
      short: "Pricing that moves with school holidays, festivals and weekend demand — plus the ancillary revenue leisure guests spend on.",
      intro: "Leisure demand doesn't move evenly through the week or the year. We track the calendar events that drive your bookings and price ahead of them, while building out the ancillary revenue lines most resorts leave on the table.",
      offers: [
        { title: "Availability and demand-based pricing", desc: "Room prices move up or down depending on how many rooms are left and how much guests want to stay." },
        { title: "Monitoring of school holidays, festivals and long weekends", desc: "We track the dates when demand is naturally higher, so you don't miss the chance to charge more." },
        { title: "Monitoring of your top 3–4 competitors with AI-powered tool", desc: "Our AI-assisted tool keeps an eye on a handful of similar nearby properties, so your rates stay competitive." },
        { title: "Weekday versus weekend rate tracking", desc: "Weekday and weekend bookings behave differently, so each one gets priced on its own." },
        { title: "Promotions optimization", desc: "We decide when to run offers and discounts, and when it's better to hold your rate steady." },
        { title: "Daily pickup tracking", desc: "We check every day how many new bookings came in, so we can react quickly if needed." },
        { title: "Weekly and monthly revenue reports", desc: "A report every week, plus a fuller monthly review, showing how your property is performing." },
        { title: "Ancillary revenue inclusion and optimization", desc: "We help you earn more from add-ons like meals, spa and activities, not just room bookings." }
      ],
      addl: [],
      why: [
        { title: "Your calendar is your biggest lever.", desc: "We watch school holidays, festivals, long weekends and weekday-versus-weekend shifts, so pricing moves ahead of demand instead of reacting to it." },
        { title: "Rooms aren't the only revenue line.", desc: "Meal packages, spa, activities and transfers add up. We help you price and sell them alongside the room, not as an afterthought." }
      ],
      suggested: ["Gold", "Platinum"],
      planNote: "Platinum suits larger, amenity-rich resorts; Gold fits a leaner leisure property.",
      hideSuggested: true,
      pricingPlans: [
        {
          name: "AMC",
          price: "₹30,000",
          period: "for 3 months",
          features: [
            "Get listed on OTAs",
            "Channel manager integration and setup",
            "Monthly rates and offer optimization",
            "Monthly report"
          ]
        },
        {
          name: "Standard Revenue Management Plan",
          price: "₹20,000",
          period: "per month",
          features: [
            "Get listed on OTAs and optimize existing listings",
            "Dynamic pricing",
            "Day to day rate management based on availability",
            "Biweekly revenue updates",
            "Monthly report",
            "Weekly review replies across OTAs",
            "Dedicated RM"
          ]
        },
        {
          name: "Gold",
          price: "₹30,000",
          period: "per month",
          features: [
            "Dynamic pricing based on demand and availability",
            "Weekly compset vs 2 competitors",
            "Weekly and monthly revenue reports",
            "Demand forecasting",
            "ORM report",
            "Biweekly and monthly review meet",
            "Dedicated RM"
          ]
        },
        {
          name: "Platinum",
          price: "₹50,000",
          period: "per month",
          features: [
            "Dynamic pricing based on demand and availability",
            "Weekly compset with our AI-powered internal tool",
            "Weekly and monthly revenue reports",
            "Demand forecasting with our internal AI-powered tool",
            "ORM report with deep insights into subcategories, along with competitor set comparison",
            "Automated review replies within an hour",
            "Weekly and monthly review meet",
            "Dedicated RM + RM Head"
          ]
        }
      ],
      faqs: [
        {
          q: "How do you handle seasonal and festival demand?",
          a: "We track school holidays, festivals and long weekends ahead of time, and raise your rates on the dates demand is naturally high — so you're not caught pricing too low when your property could be filling at a premium."
        },
        {
          q: "How does the AI-powered competitor tool help?",
          a: "It watches a handful of similar nearby resorts and flags when their rates move, so we can keep your pricing competitive without checking each platform by hand. Our revenue managers still make the final pricing calls."
        },
        {
          q: "What ancillary revenue can a resort earn beyond rooms?",
          a: "Leisure guests spend on more than just the room — meals, spa, activities, transfers and packages. We help you set these up and price them so a booking earns more than the nightly rate alone."
        },
        {
          q: "What is the difference between the Standard, Gold and Platinum plans?",
          a: "Standard covers OTA listing, channel manager, day-to-day rate management and regular reporting. Gold adds dynamic pricing, weekly compset and demand forecasting. Platinum adds our AI-powered internal tools, a deeper ORM report with competitor comparison, and automated review replies within an hour."
        },
        {
          q: "Do you provide reports I can share with my owners?",
          a: "Yes. You get weekly and monthly revenue reports in a clear format you can pass straight on to owners, over WhatsApp or email."
        }
      ]
    },
    {
      slug: "business-hotel",
      name: "Business Hotel",
      badge: "Business & Transient",
      color: "#16233A",
      colorDark: "#fff",
      colorTint: "#E7EAEF",
      icon: iconBuilding(),
      short: "Forecast market demand, capture the B2B account, and hold your rate position against the right competitors.",
      intro: "Full-service and business hotels live and die by the weekday. We forecast market demand using data trends and AI-assisted analysis, track the exhibitions and conferences that move it, and keep rate positioning intact against your real competitor set.",
      offers: [
        { title: "Market demand forecasting", desc: "We forecast how busy your market will be using demand data and AI-assisted analysis, so rooms are priced right ahead of time." },
        { title: "B2B discount optimization", desc: "We manage the discounts given to B2B clients so you don't give away more than needed." },
        { title: "Conference and exhibition tracking with rate optimization", desc: "We track nearby events and exhibitions, and push your rates higher on the dates they bring in extra business travellers." },
        { title: "ADR positioning tracked against your top 3–5 competitors", desc: "We compare your average room rate with a few similar hotels, so you're not underpriced or overpriced." },
        { title: "Weekend and last-minute demand management", desc: "We manage slower weekends and last-minute bookings together, to keep occupancy steady through the week." },
        { title: "Weekly and monthly revenue reports", desc: "A report every week, plus a fuller monthly review, showing how your property is performing." },
        { title: "Upselling strategy recommendations", desc: "Simple ideas to help your front desk sell room upgrades and extras." },
        { title: "AI-driven ORM reports", desc: "We use AI-assisted tools to track your online reviews and reputation, and report the key insights to you." }
      ],
      addl: [],
      why: [
        { title: "Weekdays make or break a business hotel.", desc: "We forecast market demand and track the conferences and exhibitions nearby, so rates move ahead of the events that drive your weekday demand." },
        { title: "Your reputation should work as hard as your rooms.", desc: "AI-driven ORM reports keep your online reputation visible, and upselling recommendations turn more of every stay into revenue." }
      ],
      suggested: ["Gold", "Platinum"],
      planNote: "Sized to the property — a single-location hotel typically starts on Gold.",
      hideSuggested: true,
      pricingPlans: [
        {
          name: "Express Setup",
          price: "₹15,000",
          period: "one-time",
          features: [
            "Get listed on OTAs",
            "Channel manager setup",
            "One-time rates and offer setup",
            "Training to front office staff"
          ]
        },
        {
          name: "AMC",
          price: "₹30,000",
          period: "for 3 months",
          features: [
            "Get listed on OTAs",
            "Channel manager integration and setup",
            "Monthly rates and offer optimization",
            "Monthly report"
          ]
        },
        {
          name: "Standard Revenue Management Plan",
          price: "₹20,000",
          period: "per month",
          features: [
            "Get listed on OTAs and optimize existing listings",
            "Dynamic pricing",
            "Day to day rate management based on availability",
            "Biweekly revenue updates",
            "Monthly report",
            "Weekly review replies across OTAs",
            "Dedicated RM"
          ]
        },
        {
          name: "Gold",
          price: "₹30,000",
          period: "per month",
          features: [
            "Dynamic pricing based on demand and availability",
            "Weekly compset vs 2 competitors",
            "Weekly and monthly revenue reports",
            "Demand forecasting",
            "ORM report",
            "Biweekly and monthly review meet",
            "Dedicated RM"
          ]
        },
        {
          name: "Platinum",
          price: "₹50,000",
          period: "per month",
          features: [
            "Dynamic pricing based on demand and availability",
            "Weekly compset with our AI-powered internal tool",
            "Weekly and monthly revenue reports",
            "Demand forecasting with our internal AI-powered tool",
            "ORM report with deep insights into subcategories, along with competitor set comparison",
            "Automated review replies within an hour",
            "Weekly and monthly review meet",
            "Dedicated RM + RM Head"
          ]
        }
      ],
      faqs: [
        {
          q: "How do the automated review replies work?",
          a: "On the Platinum plan, guest reviews across your OTA and review platforms are answered automatically within an hour, using replies tailored to the review — so no positive or negative review goes unanswered, even outside working hours."
        },
        {
          q: "What is demand forecasting and how does it help my hotel?",
          a: "Demand forecasting predicts how busy upcoming dates are likely to be, using past booking trends, local events and market signals. This lets us set the right rates ahead of time instead of reacting late, so you capture more revenue on high-demand dates and stay competitive on quieter ones."
        },
        {
          q: "How is AI actually used in the Platinum plan?",
          a: "AI assists our team — it isn't left to run on its own. Our internal AI-powered tool speeds up compset tracking and demand forecasting, and drafts review replies, while our revenue managers review the strategy and stay accountable for your pricing."
        },
        {
          q: "What is an ORM report?",
          a: "ORM stands for Online Reputation Management. The report tracks your guest reviews and ratings across platforms. On Platinum, it goes deeper — breaking down feedback by subcategory (cleanliness, staff, location and more) and comparing you against your competitor set."
        },
        {
          q: "What is the difference between the Gold and Platinum plans?",
          a: "Gold covers dynamic pricing, weekly compset against 2 competitors, demand forecasting, reporting and an ORM report. Platinum adds our AI-powered internal tools for compset and forecasting, a deeper ORM report with subcategory and competitor insights, and automated review replies within an hour."
        }
      ]
    },
    {
      slug: "boutique-hotel",
      name: "Boutique Hotel",
      badge: "Boutique & Premium",
      color: "#6B4453",
      colorDark: "#fff",
      colorTint: "#F0E6EA",
      icon: iconDiamond(),
      short: "Price to protect your rate positioning without leaving rooms empty, and turn your reputation into direct bookings.",
      intro: "At a boutique property, the risk cuts both ways — the wrong pricing can leave rooms empty, or erode the brand if you discount too hard. Guests choose you for your character and your reviews, not a chain name, so we price against the handful of properties you actually compete with and work to convert that reputation into bookings that come straight to you.",
      offers: [
        { title: "Premium pricing strategy", desc: "We price rooms to match your property's premium positioning, not just to fill beds." },
        { title: "AI-powered market demand", desc: "Our AI-assisted tool reads market demand and competitor movement, so your rates stay competitive without checking each platform by hand." },
        { title: "AI-powered compset tracking", desc: "We check your room rate against a handful of properties truly like yours nearby, not the whole city, and use AI-assisted forecasting to see demand coming before it hits." },
        { title: "ADR protection by avoiding excessive discounts", desc: "We avoid steep discounting that could hurt how guests perceive your property." },
        { title: "Direct booking incentive design", desc: "We design direct-rate incentives and return-guest offers, so more bookings come straight to you instead of through an OTA." },
        { title: "AI-powered ORM analysis with fast review replies", desc: "Our AI-assisted tools track your online reviews and reply on your behalf where enabled — since for a boutique property, your reputation often is the brand." },
        { title: "Weekly revenue report, plus biweekly and monthly review meetings", desc: "A weekly report, with review meetings twice a month and a monthly meeting to plan ahead." },
        { title: "Curated experience upsell", desc: "Ideas to help your team sell what makes you different — a signature breakfast, a local experience, a character room upgrade — instead of generic add-ons." }
      ],
      addl: [],
      why: [
        { title: "Guests choose you for experience.", desc: "Your review score and the experience guests actually have are what sell the next booking. AI-powered ORM analysis and fast review replies keep that reputation actively managed, not just tracked." },
        { title: "Your rate should reflect what makes you different.", desc: "Premium pricing strategy and AI-powered compset tracking against truly comparable boutique properties, plus curated experience upsell — a signature breakfast, a local experience, a character upgrade — help your rate hold without needing to be the cheapest option nearby." }
      ],
      suggested: ["Platinum"],
      planNote: "Our most senior-managed tier — built for properties where rate integrity matters as much as occupancy.",
      hideSuggested: true,
      pricingPlans: [
        {
          name: "Gold",
          price: "₹35,000",
          period: "per month",
          features: [
            "Dynamic pricing based on demand and availability",
            "Weekly compset vs 3 comparable boutique properties",
            "Weekly and monthly revenue reports",
            "Demand forecasting",
            "ORM report",
            "Automated review replies powered by AI tool",
            "Direct booking incentive design",
            "Biweekly and monthly review meet",
            "Dedicated RM"
          ]
        },
        {
          name: "Platinum",
          price: "₹55,000",
          period: "per month",
          features: [
            "Dynamic pricing based on AI-assisted demand and compset reports",
            "Weekly compset vs 3 comparable boutique properties, with internal AI-powered tool",
            "Weekly and monthly revenue reports",
            "Demand forecasting with our internal AI-powered tool",
            "ORM report with deep insights into subcategories, along with competitor set comparison",
            "Automated review replies powered by AI tool, within an hour",
            "Direct booking incentive design",
            "Weekly and monthly review meet",
            "Dedicated RM + RM Head"
          ]
        }
      ],
      faqs: [
        {
          q: "Will you discount my rooms to fill them?",
          a: "No. For a boutique property, protecting your rate positioning matters as much as occupancy. We avoid steep discounting that could cheapen how guests see your property, and focus instead on pricing to demand and growing direct bookings."
        },
        {
          q: "How do you help me get more direct bookings?",
          a: "We design direct-rate incentives and return-guest offers, and track where bookings are leaking to OTAs — so more guests book straight with you, which matters even more for a smaller property where OTA commission eats a bigger share of each stay."
        },
        {
          q: "How do you use my online reputation?",
          a: "We can't control your reviews or service, but we track them through AI-powered ORM analysis and reply to reviews quickly on your behalf where enabled — since for a boutique property, your reputation often is the brand."
        },
        {
          q: "How is AI used in the Platinum plan?",
          a: "AI assists our team — it isn't left to run on its own. Our internal AI-powered tool speeds up compset tracking and demand forecasting, and drafts review replies, while our revenue managers stay accountable for your pricing."
        },
        {
          q: "What is the difference between the Gold and Platinum plans?",
          a: "Gold covers dynamic pricing, weekly compset against 3 comparable boutique properties, demand forecasting, reporting, an ORM report, automated review replies, direct booking incentive design and biweekly plus monthly review meetings, with a dedicated RM. Platinum adds AI-assisted dynamic pricing based on demand and compset data, a deeper ORM report with competitor comparison, review replies within an hour, weekly plus monthly review meetings, and an RM Head alongside your dedicated RM."
        }
      ]
    },
    {
      slug: "premium-luxury-hotel",
      name: "Premium & Luxury Hotel",
      badge: "4-Star & Ultra-Premium",
      color: "#4A3B6B",
      colorDark: "#fff",
      colorTint: "#EAE6F0",
      icon: iconCrown(),
      short: "Strict rate integrity across every channel, with guest-experience upsell built into how you price.",
      intro: "At the top of the market, revenue management is as much about protecting the brand as filling rooms. We hold rate parity across OTA and direct channels, keep discount tolerance to a minimum, and build guest-experience upsell — suites, butler service, spa — directly into your pricing.",
      offers: [
        { title: "Premium rate strategy that protects brand positioning", desc: "We set rates to protect how your brand is seen, not just to fill rooms, with AI-assisted market forecast guiding the strategy." },
        { title: "Luxury-segment AI driven compset monitoring, 4-star and above", desc: "We compare you only against other 4-star and luxury properties, with AI-driven compset monitoring and rate suggestions guiding your pricing." },
        { title: "Rate parity across OTA and direct channels", desc: "The same room shows the same price everywhere it's sold, so you don't undercut yourself." },
        { title: "Strict discount tolerance and rate integrity controls", desc: "We keep discounting to a minimum so your rates stay strong and consistent." },
        { title: "Guest-experience-linked upsell — suites, butler, spa, room or meal upgrades", desc: "We help you sell suites, butler service, spa experiences, and room or meal upgrades, not just rooms." },
        { title: "Direct booking and loyalty channel growth", desc: "We help grow bookings that come straight to you, using personalized packages to upsell experience and drive revenue from your website rather than third parties." },
        { title: "AI-driven ORM reports", desc: "We use AI-assisted tools to track your online reviews and reputation, and report the key insights to you." },
        { title: "Monthly revenue meetings and biweekly strategy reviews", desc: "Regular check-ins, twice a month, to review numbers and plan strategy." }
      ],
      addl: [],
      why: [
        { title: "One wrong price undercuts the whole brand.", desc: "We hold rate parity across OTA and direct channels and keep discount tolerance to a minimum, so your positioning stays intact everywhere you're sold." },
        { title: "Luxury guests pay for experience, not just a room.", desc: "Guest-experience upsell — suites, spa, room and meal upgrades — plus personalised packages for direct bookings turn every stay into more than a room rate." }
      ],
      suggested: ["Platinum"],
      planNote: "Our top engagement tier — built for 4-star and above, and ultra-premium properties where every channel must hold the same rate.",
      hideSuggested: true,
      pricingPlans: [
        {
          name: "Gold",
          price: "₹40,000",
          period: "per month",
          features: [
            "Dynamic pricing based on demand and availability",
            "Weekly compset vs 2 competitors with internal AI-powered tool",
            "Weekly and monthly revenue reports",
            "Demand forecasting",
            "ORM report",
            "Automated review replies powered by AI tool",
            "Biweekly and monthly review meet",
            "Dedicated RM"
          ]
        },
        {
          name: "Platinum",
          price: "₹60,000",
          period: "per month",
          features: [
            "Dynamic pricing based on AI-assisted demand and compset reports",
            "Weekly compset vs 4 competitors with internal AI-powered tool",
            "Weekly and monthly revenue reports",
            "Demand forecasting with our internal AI-powered tool",
            "ORM report with deep insights into subcategories, along with competitor set comparison",
            "Automated review replies powered by AI tool, within an hour",
            "Weekly and monthly review meet",
            "Dedicated RM + RM Head"
          ]
        }
      ],
      faqs: [
        {
          q: "How do you protect rate integrity across all my channels?",
          a: "We hold rate parity across your OTA and direct channels, so the same room shows the same price everywhere. This stops you undercutting yourself and protects how the market values your brand."
        },
        {
          q: "Do you discount to drive occupancy?",
          a: "Discounts are always an option, but our focus would be to offer experience to justify the premium pricing, rather than lead with discounting to fill rooms."
        },
        {
          q: "What kind of upsell can you build into pricing?",
          a: "Suites, butler service, spa, room and meal upgrades, and other premium experiences. We help package and price these so a stay earns well beyond the room rate, in a way that fits a luxury guest's expectations."
        },
        {
          q: "How is AI used?",
          a: "AI assists our team — it isn't left to run on its own. Our internal AI-powered tool speeds up compset tracking and demand forecasting, and drafts review replies within an hour, while our revenue managers and RM Head stay accountable for your strategy."
        },
        {
          q: "What is the difference between the Gold and Platinum plans?",
          a: "Gold covers dynamic pricing, weekly compset against 2 competitors with our AI-powered tool, demand forecasting, reporting, an ORM report, automated review replies powered by AI, and a dedicated RM. Platinum adds AI-assisted dynamic pricing based on demand and compset reports, a wider weekly compset against 4 competitors, a deeper ORM report with competitor comparison, review replies within an hour, and an RM Head alongside your dedicated RM."
        }
      ]
    },
    {
      slug: "serviced-apartment",
      name: "Serviced Apartment",
      badge: "Extended Stay",
      color: "#8A6A22",
      colorDark: "#fff",
      colorTint: "#F1EBDC",
      icon: iconKey(),
      short: "Length-of-stay pricing plus full revenue management for guests who book by the night, week or month.",
      intro: "Serviced apartments earn differently to hotels — the unit that's worth optimizing for a 3-night stay isn't worth optimizing the same way for a 30-night booking. We price by length of stay, and run the same market forecasting and rate management that keeps a business hotel full.",
      offers: [
        { title: "Length-of-stay based pricing — nightly, weekly and monthly rates", desc: "Guests staying longer get a fairer rate than someone booking just a night or two." },
        { title: "Market demand forecasting", desc: "We forecast how busy your market will be using demand data and AI-assisted analysis, so rooms are priced right ahead of time." },
        { title: "B2B discount optimization", desc: "We manage the discounts given to B2B clients so you don't give away more than needed." },
        { title: "Conference and exhibition tracking with rate optimization", desc: "We track nearby events and exhibitions, and push your rates higher on the dates they bring in extra business travellers." },
        { title: "ADR positioning tracked against your top 3–5 competitors", desc: "We compare your average room rate with a few similar properties, so you're not underpriced or overpriced." },
        { title: "Weekend and last-minute demand management", desc: "We manage slower weekends and last-minute bookings together, to keep occupancy steady through the week." },
        { title: "Weekly and monthly revenue reports", desc: "A report every week, plus a fuller monthly review, showing how your property is performing." },
        { title: "AI-driven ORM reports", desc: "We use AI-assisted tools to track your online reviews and reputation, and report the key insights to you." }
      ],
      addl: [],
      why: [
        { title: "A 3-night stay and a 30-night stay shouldn't be priced the same way.", desc: "Length-of-stay based pricing — nightly, weekly and monthly — makes sure every booking, short or long, is priced right." },
        { title: "The same market discipline as a business hotel, built for extended stays.", desc: "Market demand forecasting, B2B discount optimization and ADR positioning keep your longer-stay units competitive without leaving revenue on the table." }
      ],
      suggested: ["Gold", "Platinum"],
      planNote: "Sized to the property — a single-location serviced apartment typically starts on Gold.",
      hideSuggested: true,
      pricingPlans: [
        {
          name: "Express Setup",
          price: "₹15,000",
          period: "one-time",
          features: [
            "Get listed on OTAs and corporate booking platforms",
            "Channel manager setup",
            "One-time length-of-stay rate setup — nightly, weekly and monthly",
            "Training to property staff for OTA management"
          ]
        },
        {
          name: "AMC",
          price: "₹30,000",
          period: "for 3 months",
          features: [
            "Get listed on OTAs and corporate booking platforms",
            "Channel manager integration and setup",
            "Monthly rates and offer optimization",
            "Monthly report"
          ]
        },
        {
          name: "Standard Revenue Management Plan",
          price: "₹20,000",
          period: "per month",
          features: [
            "Get listed on OTAs and optimize existing listings",
            "Dynamic pricing",
            "Day to day rate management based on availability",
            "Biweekly revenue updates",
            "Monthly report",
            "Weekly review replies across OTAs",
            "Dedicated RM"
          ]
        },
        {
          name: "Gold",
          price: "₹30,000",
          period: "per month",
          features: [
            "Dynamic pricing based on demand and availability",
            "Weekly compset vs 2 competitors",
            "Weekly and monthly revenue reports",
            "Demand forecasting",
            "ORM report",
            "Biweekly and monthly review meet",
            "Dedicated RM"
          ]
        },
        {
          name: "Platinum",
          price: "₹50,000",
          period: "per month",
          features: [
            "Dynamic pricing based on demand and availability",
            "Weekly compset with our AI-powered internal tool",
            "Weekly and monthly revenue reports",
            "Demand forecasting with our internal AI-powered tool",
            "ORM report with deep insights into subcategories, along with competitor set comparison",
            "Automated review replies within an hour",
            "Weekly and monthly review meet",
            "Dedicated RM + RM Head"
          ]
        }
      ],
      faqs: [
        {
          q: "How do the automated review replies work?",
          a: "On the Platinum plan, guest reviews across your OTA and review platforms are answered automatically within an hour, using replies tailored to the review — so no positive or negative review goes unanswered, even outside working hours."
        },
        {
          q: "What is demand forecasting and how does it help my property?",
          a: "Demand forecasting predicts how busy upcoming dates are likely to be, using past booking trends, local events and market signals. This lets us set the right rates ahead of time instead of reacting late, so you capture more revenue on high-demand dates and stay competitive on quieter ones."
        },
        {
          q: "How is AI actually used in the Platinum plan?",
          a: "AI assists our team — it isn't left to run on its own. Our internal AI-powered tool speeds up compset tracking and demand forecasting, and drafts review replies, while our revenue managers review the strategy and stay accountable for your pricing."
        },
        {
          q: "What is an ORM report?",
          a: "ORM stands for Online Reputation Management. The report tracks your guest reviews and ratings across platforms. On Platinum, it goes deeper — breaking down feedback by subcategory (cleanliness, staff, location and more) and comparing you against your competitor set."
        },
        {
          q: "Have you seen success in serviced apartments?",
          a: "Yes, but the strategy and mindset for a serviced apartment is completely different from a hotel, even though it may look the same."
        }
      ]
    },
    {
      slug: "villas",
      name: "Villas & Homestays",
      badge: "Private & Whole-Unit",
      color: "#2E5266",
      colorDark: "#fff",
      colorTint: "#E5EBEE",
      icon: iconVilla(),
      short: "Get your villa or homestay listed on major OTAs, with rates, offers and packages set up to get you booking-ready.",
      intro: "Get your villa or homestay listed on major OTAs, with rates, offers and packages set up to get you booking-ready.",
      offers: [
        { title: "Listing on major OTAs", desc: "We list your property on platforms like Airbnb, Booking.com, Agoda, Google, TripAdvisor and GoMMT." },
        { title: "One-time rates and offer setup", desc: "We set up your property's rates and any offers, once, to get your listing ready to book." },
        { title: "One-time inclusions and package setup", desc: "We set up what's included in your listing — amenities, packages and inclusions — so guests know exactly what they're booking." },
        { title: "Training to property staff for OTA management", desc: "We train your on-site staff to handle bookings, rates and updates across your OTA listings." }
      ],
      addl: [],
      why: [
        { title: "Getting listed right the first time matters more for a villa.", desc: "We list your property on Airbnb, Booking.com, Agoda, Google, TripAdvisor and GoMMT, with rates, offers and inclusions set up properly from day one." },
        { title: "What's included sells the stay as much as the price does.", desc: "One-time inclusions and package setup show guests exactly what they're getting, not just a nightly rate — often the difference between a browse and a booking for a villa or homestay." }
      ],
      suggested: ["Gold", "Platinum"],
      planNote: "Platinum is recommended once you're managing more than one villa or a multi-villa estate.",
      hideSuggested: true,
      pricingPlans: [
        {
          name: "Express Setup",
          price: "₹15,000",
          period: "one-time",
          features: [
            "Get listed on major OTAs — Airbnb, Booking.com, Agoda, GoMMT",
            "Get listed on Meta sites — Google, TripAdvisor",
            "One-time rates and offer setup",
            "One-time inclusions and package setup",
            "Training to property staff for OTA management"
          ]
        },
        {
          name: "AMC",
          price: "₹30,000",
          period: "for 3 months",
          features: [
            "Get listed on major OTAs and Meta sites",
            "Channel manager integration and setup",
            "Monthly rates and offer optimization",
            "Monthly report"
          ]
        }
      ],
      faqs: [
        {
          q: "How long does it take to get my villa or homestay live on OTAs?",
          a: "Most listings go live within 10–15 business days, once we have your property details, photos and required documents — individual OTA verification times can vary."
        },
        {
          q: "What documents are needed to list my property?",
          a: "PAN card, Aadhar card, photos, cancelled cheque."
        },
        {
          q: "Who manages my rates and OTAs after the setup is done?",
          a: "After one-time setup of rates and offers, training will be provided to your staff to manage the OTAs."
        },
        {
          q: "Does this plan cover ongoing OTA management?",
          a: "No, Express Setup is a one-time service covering listing, rates, offers and staff training. Ongoing day-to-day management can be taken up separately if you need it."
        },
        {
          q: "Is there any renewal or lock-in for this plan?",
          a: "No. Express Setup is a one-time payment with no renewal or lock-in — it's a single setup engagement."
        }
      ]
    },
    {
      slug: "budget-hotel",
      name: "Budget Hotel",
      badge: "Independent & Value",
      color: "#8A5A3C",
      colorDark: "#fff",
      colorTint: "#F1E7DE",
      icon: iconBed(),
      short: "Built for small hotels with 10–20 rooms — OTA listing, room rates and basic promotions, handled for you.",
      intro: "Made for small, independent hotels with 10–20 rooms. We list your hotel on the major OTAs, set up your room rates, and apply optimum promotions to get you booked.",
      offers: [
        { title: "Room and rate-plan-type pricing", desc: "We set the right price for each room type and rate plan you offer." },
        { title: "Pricing based on availability and demand", desc: "Prices adjust based on how many rooms are left and how much guests want to book." },
        { title: "Promotion optimization", desc: "We decide when to run discounts and offers, and when to hold your rate steady." },
        { title: "Daily pickup report", desc: "A daily update on how many new bookings came in." },
        { title: "Compset report, monthly", desc: "A monthly report comparing your rates with a few nearby hotels." },
        { title: "Biweekly revenue report message", desc: "A short update sent twice a month, over WhatsApp or email, on how you're doing." },
        { title: "Monthly revenue report", desc: "A monthly summary of your bookings and revenue." }
      ],
      addl: [],
      why: [
        { title: "Small hotels don't need a big team, just the right pricing.", desc: "Room and rate-plan pricing, plus pricing based on live availability and demand, run without you needing to hire a revenue team." },
        { title: "You'll always know how you're doing.", desc: "Daily pickup reports, a monthly compset report, and biweekly plus monthly revenue updates keep you informed without extra effort on your side." }
      ],
      suggested: ["AMC"],
      planNote: "Start with Express Setup to get live on 4 OTAs, then move onto an AMC plan.",
      expressSetup: true,
      pricingPlans: [
        {
          name: "Express Setup",
          price: "₹15,000",
          period: "one-time",
          features: [
            "Get listed on OTAs",
            "Channel manager setup",
            "One-time rates and offer setup",
            "Training for front office staff"
          ]
        },
        {
          name: "AMC",
          price: "₹30,000",
          period: "for 3 months",
          features: [
            "Get listed on OTAs",
            "Channel manager integration and setup",
            "Monthly rates and offer optimization",
            "Monthly report"
          ]
        },
        {
          name: "Standard Revenue Management Plan",
          price: "₹20,000",
          period: "per month",
          features: [
            "Get listed on OTAs and optimize existing listings",
            "Channel manager integration and setup",
            "Day to day rate management based on availability",
            "Biweekly revenue updates",
            "Monthly report",
            "Weekly review replies across OTAs",
            "Dedicated RM"
          ]
        }
      ],
      faqs: [
        {
          q: "How much time will it take to get live on OTAs?",
          a: "International OTAs will approximately be live in 2–3 business days, while domestic OTAs can take up to 2 weeks to go live, depending on documents and the past history of listings."
        },
        {
          q: "What documents are needed to get live on OTAs?",
          a: "GST, PAN card, a cancelled cheque, Aadhar card, latest electricity bill, tourism certificate (for certain states), and lease agreement."
        },
        {
          q: "Do I need to hire my own revenue manager?",
          a: "No. Our team acts as your revenue management function, so you get a trained team working on your pricing without the cost of hiring one in-house."
        },
        {
          q: "Will I lose control over my pricing decisions?",
          a: "No. Rates and offers are set within limits you approve, and you can review or override any pricing decision at any time."
        },
        {
          q: "Is there a lock-in period?",
          a: "Express Setup is a one-time engagement. The AMC and Standard Revenue Management Plan run for the period agreed at signup, and either side can choose not to renew at the end of that term."
        }
      ]
    },
    {
      slug: "group-of-hotels",
      name: "Group of Hotels",
      badge: "Multi-Property Portfolio",
      color: "#3B4A54",
      colorDark: "#fff",
      colorTint: "#E7ECEE",
      icon: iconPortfolio(),
      short: "One revenue strategy across your whole portfolio — flexed per property type, from business hotels to resorts, and reported in one place.",
      intro: "Managing revenue property-by-property doesn't scale past a handful of hotels — and a portfolio is rarely made up of just one property type. Group of Hotels runs the same rigorous pricing and forecasting as our single-property plans, flexing the playbook per property — business-hotel demand forecasting for your transient properties, seasonal and festival pricing for your resorts — while every offering still works, and reports, across your whole portfolio.",
      offers: [
        { title: "Portfolio-wide market demand forecasting", desc: "We forecast market demand across every property in your portfolio, not just one, so pricing decisions stay consistent group-wide." },
        { title: "Portfolio-wide B2B discount optimization", desc: "We manage B2B discounts consistently across your properties, so no single hotel gives away more than needed." },
        { title: "Portfolio-wide conference and exhibition tracking with rate optimization", desc: "We track events near each business-hotel property and push rates higher on the dates that matter, across the whole group." },
        { title: "Portfolio-wide seasonal and festival demand monitoring", desc: "For resort and leisure properties in your portfolio, we track school holidays, festivals and long weekends and price ahead of them, the same way as our standalone Resort & Leisure plan." },
        { title: "Portfolio-wide ADR positioning tracked against competitors", desc: "We compare each property's average rate with its own local competitor set, rolled up into one portfolio view." },
        { title: "Portfolio-wide weekend and last-minute demand management", desc: "We manage slower weekends and last-minute bookings consistently across every property in the group." },
        { title: "Portfolio-wide ancillary revenue optimization", desc: "For resort and leisure properties, we help you earn more from add-ons like meals, spa and activities, rolled into the same portfolio-wide reporting." },
        { title: "Portfolio-wide weekly and monthly revenue reports", desc: "One consistent report format across every property, whatever the property type, so you can compare performance property to property." },
        { title: "Portfolio-wide AI-driven ORM reports", desc: "We track online reviews and reputation across every property using AI-assisted tools, and report the key insights to you." },
        { title: "AI-assisted dynamic pricing, compset and market forecast", desc: "Our AI-assisted tools support dynamic pricing, compset tracking and market forecasting across your entire portfolio." }
      ],
      addl: [],
      why: [
        { title: "One property's playbook doesn't fit your whole portfolio.", desc: "We flex the strategy per property — business-hotel demand forecasting for transient properties, seasonal and festival pricing for resorts — while every offering still works across your whole portfolio." },
        { title: "You shouldn't have to compare five different reports to see how you're doing.", desc: "Portfolio-wide weekly and monthly revenue reports, plus AI-driven ORM reports, roll every property up into one consistent view." }
      ],
      suggested: ["Gold", "Platinum"],
      planNote: "Standard and Gold blend the same structure as our single-property Business Hotel and Resort & Leisure plans, applied per property type across your portfolio. Platinum is our enterprise tier, custom-priced to your portfolio size and property mix.",
      hideSuggested: true,
      pricingPlans: [
        {
          name: "Standard",
          price: "₹30,000",
          period: "per property, per month",
          features: [
            "Get listed on OTAs and optimize existing listings, portfolio-wide",
            "Portfolio-wide dynamic pricing based on demand and availability",
            "Weekly compset vs 2 competitors, per property",
            "Seasonal and festival demand monitoring for resort and leisure properties",
            "Portfolio-wide weekly and monthly revenue reports",
            "Portfolio-wide demand forecasting",
            "Portfolio-wide ORM report",
            "Biweekly and monthly review meet",
            "Weekly review replies across OTAs",
            "Dedicated RM"
          ]
        },
        {
          name: "Gold",
          price: "₹50,000",
          period: "per property, per month",
          features: [
            "Daily rate review based on demand and availability, portfolio-wide",
            "Weekly compset with our AI-powered internal tool, per property",
            "AI-powered seasonal and festival demand monitoring for resort and leisure properties",
            "Portfolio-wide weekly and monthly revenue reports",
            "Portfolio-wide demand forecasting with our internal AI-powered tool",
            "Portfolio-wide ORM report with deep insights into subcategories, along with competitor set comparison",
            "Automated review replies within an hour, across the portfolio",
            "Weekly and monthly review meet",
            "Dedicated RM + RM Head"
          ]
        },
        {
          name: "Platinum",
          price: "Custom",
          period: "enterprise pricing, by portfolio size",
          features: [
            "Daily AI-assisted dynamic pricing, compset and market forecast — portfolio-wide",
            "Daily competitor check vs 4 competitors per property, with internal AI-powered tool",
            "Portfolio-wide weekly and monthly revenue reports",
            "Custom pricing strategy per property, plus all Signature features",
            "Ancillary revenue optimization for resort and leisure properties (meals, spa, activities)",
            "Portfolio benchmarking across every property",
            "6-month demand calendar",
            "Portfolio-wide ORM report with review categorization and compset comparison",
            "Automated review replies powered by AI tool, within an hour",
            "Portfolio-level owner and board reporting",
            "Dedicated Senior RM + Project Head"
          ]
        }
      ],
      faqs: [
        {
          q: "How does pricing work for a hotel group?",
          a: "Standard and Gold are priced per property, per month, using the same structure as our single-property Business Hotel and Resort & Leisure plans, run across your listed properties. Platinum is enterprise-priced based on your portfolio size and complexity — reach out and we'll scope it with you."
        },
        {
          q: "What if my portfolio has both business hotels and resorts?",
          a: "That's exactly what Group of Hotels is built for. We apply the right playbook per property — business-hotel demand forecasting for your transient properties, seasonal and festival pricing plus ancillary revenue for your resorts — while still reporting and benchmarking everything in one place."
        },
        {
          q: "Can each property have its own strategy?",
          a: "Yes, pricing and packages can be customised per property while still rolling up into one portfolio-wide reporting and benchmarking view."
        },
        {
          q: "How often do you review rates across the portfolio?",
          a: "On Standard, the same cadence as our single-property plans. On Gold and Platinum, rates are reviewed daily based on competitor movement — competitor checks run daily with our AI-powered tool on Platinum, and weekly on Gold."
        },
        {
          q: "Who manages the account?",
          a: "Standard and Gold get a dedicated RM. Platinum adds a dedicated Senior RM plus a Project Head who oversees your account across the group."
        },
        {
          q: "What does portfolio benchmarking actually show me?",
          a: "A side-by-side view of how each property in your portfolio is performing against the others — occupancy, ADR, RevPAR and revenue — so you can see which properties need attention."
        }
      ]
    }
  ]
};

function esc(s){ return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function iconSun(){ return `<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v3M12 18.5v3M4.4 4.4l2.1 2.1M17.5 17.5l2.1 2.1M2.5 12h3M18.5 12h3M4.4 19.6l2.1-2.1M17.5 6.5l2.1-2.1"/>`; }
function iconBuilding(){ return `<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1M10 21v-3h4v3"/>`; }
function iconKey(){ return `<circle cx="8" cy="9" r="3.2"/><path d="M10.3 11.3 20 21M15.3 16.3l2.3-2.3M18.3 19.3l2-2"/>`; }
function iconVilla(){ return `<path d="M3 12 12 4l9 8"/><path d="M6 11v9h12v-9"/><path d="M10 20v-5h4v5"/>`; }
function iconBed(){ return `<path d="M3 18v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"/><path d="M3 18v2M21 18v2M3 13h18"/><circle cx="7.5" cy="9.5" r="1.3"/>`; }
function iconDiamond(){ return `<path d="M6 4h12l4 6-10 10L2 10z"/><path d="M2 10h20M9 4l-2 6 5 10 5-10-2-6"/>`; }
function iconCrown(){ return `<path d="M4 18h16l-1.2-8L15 13l-3-6-3 6-3.8-3z"/><path d="M4 18v2h16v-2"/>`; }
function iconPortfolio(){ return `<rect x="3" y="10" width="5" height="11"/><rect x="9.5" y="5" width="5" height="16"/><rect x="16" y="8" width="5" height="13"/><path d="M3 21h18"/>`; }
function svgIcon(inner, color){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}

function renderCards(list){
  return `<div class="sol-grid">${list.map(c => `
    <a class="sol-card" href="${c.slug}.html" style="--accent:${c.color}; --accent-dark:${c.colorDark};">
      <div class="sol-card-media" style="background:${c.colorTint};">
        ${svgIcon(c.icon, c.color)}
      </div>
      <div class="sol-card-body">
        <h3>${esc(c.name)}</h3>
        <div class="subtitle">${esc(c.short)}</div>
        <span class="explore-link">Explore
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </div>
    </a>
  `).join('')}</div>`;
}

function homeView(){
  return `
  <section class="hero fade-in">
    <div class="wrap hero-grid">
      <div>
        <p class="eyebrow">Revenue management for independent hotels</p>
        <h1>Your rooms are fixed.<br>Your revenue shouldn't be.</h1>
        <p class="lede">RevAlpha is your outsourced hotel revenue department. We help you price smarter, improve OTA performance, forecast demand and make better revenue decisions every day — without needing a full in-house revenue team.</p>
        <div class="hero-ctas">
          <a class="btn btn-primary" href="solutions.html">Explore Plans</a>
        </div>
      </div>
      <div class="ledger">
        <div class="ledger-title">Typical first-quarter movement</div>
        <div class="ledger-row"><span class="k">Room nights</span><span class="v up">+12%</span></div>
        <div class="ledger-row"><span class="k">ADR</span><span class="v up">+8%</span></div>
        <div class="ledger-row"><span class="k">YoY growth</span><span class="v up">+10%</span></div>
        <div class="ledger-row"><span class="k">Reporting cycle</span><span class="v">Weekly / Monthly</span></div>
      </div>
    </div>
  </section>

  <section id="why">
    <div class="wrap">
      <h2 style="font-size:34px;">Why choose us?</h2>

      <div class="why-point">
        <span class="point-num">01</span>
        <h3 style="max-width:16ch; font-size:26px;">You need better decisions.</h3>
        <p style="color:var(--ink-soft); font-size:17px; max-width:64ch; margin-top:16px;">If rates are changed randomly, OTAs run without a clear strategy or you only understand performance after the month is over, RevAlpha gives you a clear system to know what is happening, why it is happening and what to do next.</p>
        <div class="insight-grid">
          <div class="insight-card">
            <span class="glyph">₹</span>
            <h3>Stop selling too cheap</h3>
            <p>We watch demand, pickup, competition and important dates so strong days are protected.</p>
          </div>
          <div class="insight-card">
            <span class="glyph">↗</span>
            <h3>Fill weak dates intelligently</h3>
            <p>Instead of panic discounting, we find the right price, channel, offer and timing.</p>
          </div>
          <div class="insight-card">
            <span class="glyph">◎</span>
            <h3>Know where revenue comes from</h3>
            <p>See OTA contribution, ADR, occupancy, RevPAR, channel mix and future opportunities clearly.</p>
          </div>
        </div>
      </div>

      <div class="why-point">
        <span class="point-num">02</span>
        <h3 style="max-width:18ch; font-size:26px;">Your revenue should never feel unattended.</h3>
        <p style="color:var(--ink-soft); font-size:16px; max-width:60ch; margin-top:16px;">RevAlpha works on a defined rhythm so owners know when and how their hotel is being watched.</p>
        <div class="table-wrap">
          <table class="cadence">
            <thead><tr><th>Activity</th><th>RevAlpha standard</th></tr></thead>
            <tbody>
              <tr><td>Rate review</td><td>Daily on working days / more frequently where the scope requires</td></tr>
              <tr><td>Pickup review</td><td>Daily</td></tr>
              <tr><td>Competitor review</td><td>Daily for priority dates / regular for the wider calendar</td></tr>
              <tr><td>Critical revenue issue</td><td>Priority attention</td></tr>
              <tr><td>Weekly update</td><td>Fixed day for Performance and above</td></tr>
              <tr><td>Monthly review</td><td>Pre-scheduled revenue strategy meeting</td></tr>
              <tr><td>Action items</td><td>Every action gets an owner + deadline</td></tr>
              <tr><td>Revenue opportunities</td><td>Proactive alert before the hotel has to ask</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section style="padding-top:0;">
    <div class="wrap">
      <h2 style="font-size:32px;">Our solutions</h2>
      ${renderCards(DATA.categories)}
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="scope-grid">
        <div class="scope-col included">
          <h3>Included</h3>
          <p class="sub">What RevAlpha owns</p>
          <div class="scope-list">
            ${[
              "Revenue strategy and dynamic pricing recommendations",
              "OTA and distribution actions within agreed access",
              "Forecasting, pickup and pace analysis",
              "AI-driven competitor and market intelligence",
              "Revenue opportunity identification",
              "Performance reporting and strategy reviews",
              "Proactive alerts on important revenue dates"
            ].map(i => `
              <div class="scope-item yes">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
                <span>${esc(i)}</span>
              </div>`).join('')}
          </div>
        </div>
        <div class="scope-col excluded">
          <h3>Not included</h3>
          <p class="sub">What stays outside RevAlpha</p>
          <div class="scope-list">
            ${[
              "Guest reservations or front-office operations",
              "Guest complaint handling",
              "Corporate / hotel sales unless separately agreed",
              "Social media, SEO, website or paid ads",
              "OTA commission accounting / reconciliation",
              "PMS, channel manager or RMS subscription fees",
              "Guaranteed occupancy, ADR or revenue growth"
            ].map(i => `
              <div class="scope-item no">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                <span>${esc(i)}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section style="padding-top:0;">
    <div class="wrap">
      <h2 style="font-size:30px;">Clear answers before you sign</h2>
      <div class="faq-list" style="margin-top:24px;">
        ${[
          { q: "Will RevAlpha guarantee my revenue?", a: "No. Revenue depends on demand, product quality, reputation, operations, inventory and market conditions. We provide professional revenue strategy, execution and monitoring — not unrealistic guarantees." },
          { q: "Do you manage OTAs?", a: "Yes, within the agreed scope. But RevAlpha is not just OTA management. OTAs are one part of your wider pricing and distribution strategy." },
          { q: "Do I need an in-house Revenue Manager too?", a: "For many independent hotels, no — our plans are designed to work like an outsourced revenue department. Larger hotels may use RevAlpha alongside an internal team." },
          { q: "Can you work with my PMS or channel manager?", a: "Usually yes, subject to access and your technology setup. Third-party software fees remain separate unless specifically included." },
          { q: "Do you also provide marketing?", a: "RevAlpha stays focused on revenue. Social media, SEO, websites and paid campaigns can be supported through Hospitality Minds when required." },
          { q: "How quickly can we start?", a: "After commercial confirmation, we begin with access collection, baseline analysis, competitor validation and a structured onboarding plan." }
        ].map(f => `
          <details class="faq-item">
            <summary>${esc(f.q)}</summary>
            <p>${esc(f.a)}</p>
          </details>`).join('')}
      </div>
    </div>
  </section>

  <div class="cta-band" id="contact">
    <div class="wrap" style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:40px; align-items:start;">
      <div>
        <h2>See what your property could be earning.</h2>
        <p>Tell us about your hotel and we'll recommend the right plan — Express Setup, Standard, Gold or Platinum.</p>
      </div>
      <div>${contactFormHTML(true)}</div>
    </div>
  </div>
  `;
}

function solutionsView(){
  return `
  <section class="page-head fade-in">
    <div class="wrap">
      <h1>Solutions by property type</h1>
      <p>Choose your property type to see the full offering, suggested plan tier and additional revenue areas.</p>
    </div>
  </section>
  <section style="padding-top:40px;">
    <div class="wrap">${renderCards(DATA.categories)}</div>
  </section>
  `;
}

function detailView(slug){
  const c = DATA.categories.find(x => x.slug === slug);
  if(!c) return notFoundView();
  const offers = c.offers.map(o => `
    <div class="offer-card">
      <svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
      <div>
        <p class="offer-title">${esc(o.title)}</p>
        <p class="offer-desc">${esc(o.desc)}</p>
      </div>
    </div>`).join('');
  const addl = c.addl.length ? `
    <div class="addl">
      <h3>Additional revenue areas</h3>
      <div class="addl-grid">${c.addl.map(a => `
        <div class="addl-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          <span>${esc(a)}</span>
        </div>`).join('')}</div>
    </div>` : '';
  const whySection = c.why && c.why.length ? `
    <div class="why-section">
      <h2 style="font-size:28px;">Why choose us?</h2>
      ${c.why.map((w, i) => `
        <div class="why-point">
          <span class="point-num">0${i+1}</span>
          <h3 style="font-size:22px; max-width:22ch;">${esc(w.title)}</h3>
          <p style="color:var(--ink-soft); font-size:16px; max-width:64ch; margin-top:14px;">${esc(w.desc)}</p>
        </div>`).join('')}
    </div>` : '';
  const pricing = c.pricingPlans && c.pricingPlans.length ? `
    <div class="pricing-section">
      <h3>Product pricing model</h3>
      <div class="pricing-grid">
        ${c.pricingPlans.map(p => `
          <div class="pricing-card">
            <h4>${esc(p.name)}</h4>
            <div class="pricing-amount">${esc(p.price)} <span class="period">${esc(p.period)}</span></div>
            <div class="pricing-features">
              ${p.features.map(f => `
                <div class="item">
                  <svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
                  <span>${esc(f)}</span>
                </div>`).join('')}
            </div>
          </div>`).join('')}
      </div>
    </div>` : '';

  const faqSection = c.faqs !== undefined ? `
    <div class="faq-section">
      <h2 style="font-size:26px;">Frequently asked questions</h2>
      <div class="faq-list">
        ${c.faqs.length ? c.faqs.map(f => `
          <details class="faq-item">
            <summary>${esc(f.q)}</summary>
            <p>${esc(f.a)}</p>
          </details>`).join('') : `<p style="color:var(--ink-soft); font-size:15px; padding:18px 0;">FAQs for this plan are coming soon.</p>`}
      </div>
    </div>` : `
    <div class="detail-cta">
      <h2 style="font-size:26px;">Request a call for ${esc(c.name.toLowerCase())}</h2>
      <p style="color:var(--ink-soft); margin-top:10px; max-width:56ch;">We'll walk through your current OTA setup and show what a RevAlpha report would look like for your property.</p>
      <div style="margin-top:24px;">${contactFormHTML(false, c.name)}</div>
    </div>`;

  const suggestedBox = (c.hideSuggested || (c.pricingPlans && c.pricingPlans.length)) ? '' : `
        <div>
          <div class="side-box">
            <h4>Suggested plan</h4>
            <div class="tier-row">
              ${c.expressSetup ? `<span class="tier-pill tier-outline">Express Setup</span>` : ''}
              ${TIERS.map(t => {
                const on = c.suggested.includes(t);
                return `<span class="tier-pill ${on ? 'tier-on' : 'tier-outline'}" style="${on ? `background:${c.color}; border-color:${c.color};` : ''}">${t}</span>`;
              }).join('')}
            </div>
            <p style="color:var(--ink-soft); font-size:15px; margin-top:16px;">${esc(c.planNote)}</p>
          </div>
        </div>`;

  return `
  <section class="detail-head fade-in" style="--accent:${c.color}; --accent-dark:${c.colorDark};">
    <div class="wrap">
      <a class="back-link" href="solutions.html">← All solutions</a>
      <div class="tag">${esc(c.badge)}</div>
      <h1>${esc(c.name)}</h1>
      <p style="color:var(--ink-soft); font-size:18px; margin-top:18px; max-width:58ch;">${esc(c.intro)}</p>
    </div>
  </section>
  <section style="padding-top:0;">
    <div class="wrap">
      <div class="detail-grid ${suggestedBox ? '' : 'detail-grid-full'}">
        <div>
          <h3 style="font-size:20px; margin-bottom:6px;">What's included</h3>
          <div class="offer-cards">${offers}</div>
        </div>
        ${suggestedBox}
      </div>
      ${addl}
      ${whySection}
      ${pricing}
      ${faqSection}
    </div>
  </section>
  `;
}

function notFoundView(){
  return `<section class="page-head"><div class="wrap"><h1>Not found</h1><p>That page doesn't exist. <a href="index.html" style="text-decoration:underline;">Return home</a>.</p></div></section>`;
}

function contactFormHTML(compact, presetInterest){
  const interestField = presetInterest
    ? `<input type="hidden" name="interest" value="${esc(presetInterest)}">`
    : '';
  return `
  <form class="form-grid" onsubmit="return handleFormSubmit(event)">
    ${interestField}
    <div><label>Name</label><input required name="name" type="text" placeholder="Your name"></div>
    <div><label>Property name</label><input required name="property" type="text" placeholder="Hotel / resort name"></div>
    <div class="full"><label>Phone or email</label><input required name="contact" type="text" placeholder="WhatsApp number or email"></div>
    ${compact ? '' : '<div class="full"><label>Anything we should know</label><textarea name="notes" rows="3" placeholder="Rooms, OTAs live on, current reporting..."></textarea></div>'}
    <div class="full"><button class="btn btn-primary" type="submit" style="width:100%;">Request a Call</button></div>
  </form>`;
}

function handleFormSubmit(e){
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = 'Request sent';
  btn.disabled = true;
  return false;
}


function renderStandalone(){
  const app = document.getElementById('app');
  const page = document.body.dataset.page || 'home';
  if(page === 'home') app.innerHTML = homeView();
  else if(page === 'solutions') app.innerHTML = solutionsView();
  else if(page.startsWith('detail:')) app.innerHTML = detailView(page.slice(7));
  else app.innerHTML = notFoundView();

  document.querySelectorAll('.navlinks a, .mobile-menu a').forEach(a => {
    a.classList.toggle('active', a.dataset.route === page);
  });
  const mobileMenu = document.getElementById('mobileMenu');
  if(mobileMenu) mobileMenu.classList.remove('open');

  if(location.hash){
    const id = location.hash.slice(1);
    const target = document.getElementById(id);
    if(target) setTimeout(() => target.scrollIntoView({behavior:'smooth', block:'start'}), 20);
  } else {
    window.scrollTo(0,0);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  renderStandalone();
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }
});
