document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    this.reset();
});

// MAKE FUNCTION GLOBAL (THIS IS THE FIX)
window.sendMessage = function () {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (!input || !chatBox) {
    console.log("Chatbot elements not found");
    return;
  }

  let text = input.value.trim().toLowerCase();
  if (text === "") return;

  addMessage(text, "user");

  let response = getResponse(text);

  setTimeout(() => {
    addMessage(response, "bot");
  }, 300);

  input.value = "";
};

// ADD MESSAGE
function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");

  let msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.textContent = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
// RESPONSE LOGIC
function getResponse(input) {
  input = input.toLowerCase();

  // GREETING (UPGRADED UX)
  if (input.includes("hello") || input.includes("hi")) {
    return `Hello, I’m the digital assistant for ${PROFILE.name}, a results-driven Growth Strategist. 

You can ask about:
• Revenue growth strategies
• SEO & lead generation
• Case studies and results
• Hiring or consulting opportunities

How can I assist you today?`;
  }

  // WHO ARE YOU (EXECUTIVE POSITIONING)
  if (input.includes("who") && input.includes("you")) {
    return `${PROFILE.name} is a Growth Marketing and SEO Specialist based in ${PROFILE.location} with over ${PROFILE.experience} of experience.

He focuses on driving measurable business outcomes including revenue growth, customer acquisition, and scalable digital systems across industries like Tech, Oil & Gas, and Financial Services.`;
  }

  // WHAT DO YOU DO (VALUE-FOCUSED)
  if (input.includes("what") && input.includes("do")) {
    return `${PROFILE.name} designs and executes growth strategies that directly impact revenue.

His work spans SEO, paid acquisition, funnel optimization, and conversion rate improvement, all aligned to one goal: turning traffic into qualified leads and paying customers.`;
  }

  // RESULTS / IMPACT (NEW HIGH-VALUE TRIGGER)
  if (
    input.includes("result") ||
    input.includes("impact") ||
    input.includes("revenue") ||
    input.includes("performance")
  ) {
    return `Here are some highlights of ${PROFILE.name}'s impact:

• Closed over ₦80M annually with 25%+ profit margins in channel sales  
• Scaled digital visibility and inbound acquisition for an oil & gas servicing group  
• Improved lead generation pipelines using SEO and conversion-focused funnels  

His approach is always data-driven and tied to measurable business outcomes.`;
  }

  // SKILLS (CONSULTANT-STYLE STRUCTURE)
  if (input.includes("skill")) {
    return `Core Capabilities:

Growth & Marketing:
${PROFILE.skills.marketing.join(", ")}

Analytics & Tools:
${PROFILE.skills.analytics.join(", ")}

Development & Design:
${PROFILE.skills.dev.join(", ")}

Business & Strategy:
${PROFILE.skills.business.join(", ")}`;
  }

  // PROJECTS (CASE STUDY FORMAT)
  if (input.includes("project") || input.includes("case")) {
    return PROFILE.projects
      .map(p => `• ${p.name}\n${p.description}\nRole: ${p.role}\n`)
      .join("\n");
  }

  // EXPERIENCE
  if (input.includes("experience")) {
    return `${PROFILE.name} has built experience across digital marketing, sales, and business development.

Key roles include:
${PROFILE.workExperience.map(job => `• ${job}`).join("\n")}

He consistently exceeds targets and drives measurable growth across every role.`;
  }

  // CERTIFICATIONS
  if (input.includes("cert")) {
    return PROFILE.certifications.join("\n");
  }

  // DIFFERENTIATION (NEW)
  if (
    input.includes("why") ||
    input.includes("different") ||
    input.includes("choose")
  ) {
    return `${PROFILE.name} stands out because he doesn't just execute marketing tactics, he focuses on revenue outcomes.

He combines:
• SEO + paid acquisition strategy  
• Sales and conversion psychology  
• Business development experience  

This allows him to bridge the gap between marketing activity and actual revenue growth.`;
  }

  // HIRING / AVAILABILITY (FILTERED & PREMIUM)
  if (
    input.includes("hire") ||
    input.includes("available") ||
    input.includes("job") ||
    input.includes("freelance")
  ) {
    return `${PROFILE.name} is currently open to:

• Senior-level roles in Growth Marketing or Digital Strategy  
• High-value consulting and freelance engagements  

He prioritizes opportunities focused on measurable growth, scalability, and long-term value.

To discuss a role or project, reach out via ${PROFILE.contact.email}`;
  }

  // CONTACT (CLEAN + PRIORITIZED)
  if (
    input.includes("contact") ||
    input.includes("email") ||
    input.includes("phone") ||
    input.includes("linkedin")
  ) {
    return `You can connect with ${PROFILE.name} here:

Portfolio: ${PROFILE.contact.portfolio}
Email: ${PROFILE.contact.email}
Phone: ${PROFILE.contact.phone}`;
  }

  // LOCATION
  if (input.includes("location") || input.includes("where")) {
    return `${PROFILE.name} is based in ${PROFILE.location} and works with clients globally.`;
  }

  // PORTFOLIO
  if (input.includes("portfolio") || input.includes("website")) {
    return `You can explore his work and case studies here:
${PROFILE.contact.portfolio}`;
  }

  // DEFAULT RESPONSE (SMART + GUIDED)
  return `I can help you understand how ${PROFILE.name} drives growth and revenue.

Try asking about:
• Results and case studies  
• SEO or lead generation strategy  
• Hiring or collaboration  

What would you like to explore?`;
}


// UX ENHANCEMENT (STRONG FIRST IMPRESSION)
document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.getElementById("chat-box");

  if (chatBox) {
    let welcome = document.createElement("div");
    welcome.className = "message bot";
    welcome.textContent = "Hi, I represent Perez Oladele, a Growth Strategist focused on revenue and scalable digital growth. Ask me how he can help your business grow.";
    chatBox.appendChild(welcome);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const active = document.activeElement;
      if (active && active.id === "user-input") {
        e.preventDefault();
        window.sendMessage();
      }
    }
  });
});


// PROFILE OBJECT (FULLY OPTIMIZED)
const PROFILE = {
  name: "Perez Oladele",
  location: "Gowon Estate, Lagos, Nigeria",
  experience: "6+ years",

  skills: {
    marketing: [
      "SEO (On-page, Technical, Off-page)",
      "Conversion Rate Optimization",
      "Funnel Design & Lead Generation",
      "Paid Ads Strategy (Meta & LinkedIn)"
    ],
    analytics: [
      "Google Analytics (GA4)",
      "Google Search Console",
      "Meta Ads Manager",
      "LinkedIn Campaign Manager"
    ],
    dev: [
      "HTML",
      "CSS",
      "JavaScript",
      "Canva",
      "CapCut",
      "Adobe InDesign"
    ],
    business: [
      "Copywriting",
      "Brand Positioning",
      "Business Development",
      "Sales Strategy & Closing"
    ]
  },

  projects: [
    {
      name: "Future Concerns Group Digital Growth",
      description: "Scaled digital presence and improved inbound acquisition across multiple subsidiaries using SEO and LinkedIn-driven strategies.",
      role: "Digital Marketing Manager"
    },
    {
      name: "PPE & Safety Equipment Sales Optimization",
      description: "Increased visibility and lead generation through SEO and conversion-focused sales funnels for industrial products.",
      role: "Growth Strategist"
    },
    {
      name: "Channel Sales Expansion",
      description: "Closed deals worth over ₦80M annually with strong profit margins through strategic sales execution and negotiation.",
      role: "Sales Lead / Business Development"
    },
    {
      name: "Personal Portfolio Website",
      description: "Designed and developed a professional portfolio showcasing services, strategy, and case studies.",
      role: "Designer & Developer"
    }
  ],

  workExperience: [
    "Digital Marketing Manager – Future Concerns Group",
    "Business Development Manager / Sales Lead – Multiple Firms"
  ],

  certifications: [
    "Cybersecurity Certification – Career Insights",
    "SEO Certification – Udemy"
  ],

  contact: {
    email: "perezoladele@gmail.com",
    phone: "07032530732",
    portfolio: "https://perez-oladele.github.io/"
  }
};
