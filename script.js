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

// GREETING
if (input.includes("hello") || input.includes("hi")) {
return `Hello, I am the assistant for ${PROFILE.name}. I can help you understand how he drives growth, revenue, and customer acquisition. What would you like to know?`;
}

// WHO ARE YOU
if (input.includes("who") && input.includes("you")) {
return `${PROFILE.name} is an SEO Growth Specialist and Growth Marketer based in ${PROFILE.location}. He has ${PROFILE.experience} of experience helping businesses scale visibility, generate leads, and drive revenue.`;
}

// WHAT DO YOU DO
if (input.includes("what") && input.includes("do")) {
return `${PROFILE.name} specializes in ${PROFILE.roles.join(", ")}. His focus is on building systems that attract, convert, and retain customers, not just running campaigns.`;
}

// SKILLS
if (input.includes("skill")) {
return `Frontend: ${PROFILE.skills.frontend.join(", ")}.\n\nDesign: ${PROFILE.skills.design.join(", ")}.\n\nTools: ${PROFILE.skills.tools.join(", ")}.\n\nGrowth & Marketing: ${PROFILE.skills.marketing.join(", ")}.\n\nOther: ${PROFILE.skills.other.join(", ")}.`;
}

// PROJECTS
if (input.includes("project") || input.includes("work")) {
return PROFILE.projects
.map(p => `${p.name}:\n${p.description}\nRole: ${p.role}\nTech: ${p.tech}`)
.join("\n\n");
}

// EXPERIENCE
if (input.includes("experience")) {
return PROFILE.workExperience
.map(job => `${job.role} at ${job.company} (${job.period})`)
.join("\n");
}

// CERTIFICATIONS
if (input.includes("cert") || input.includes("certificate")) {
return PROFILE.certifications.join("\n");
}

// ACHIEVEMENTS
if (input.includes("achievement") || input.includes("result")) {
return PROFILE.achievements.join("\n");
}

// PERSONALITY / TRAITS
if (input.includes("personality") || input.includes("trait")) {
return PROFILE.personality.join(", ");
}

// AVAILABILITY (HIGH CONVERSION)
if (
input.includes("hire") ||
input.includes("available") ||
input.includes("job") ||
input.includes("freelance") ||
input.includes("consult")
) {
return `${PROFILE.availability.freelance}\n${PROFILE.availability.fulltime}\n\nPerez typically works on high-impact projects focused on growth and revenue. If you’d like to discuss a role or project, you can reach him via ${PROFILE.contact.email}`;
}

// CONTACT
if (
input.includes("contact") ||
input.includes("email") ||
input.includes("phone") ||
input.includes("linkedin")
) {
return `Email: ${PROFILE.contact.email}\nPhone: ${PROFILE.contact.phone}\nLinkedIn/Portfolio: ${PROFILE.contact.linkedin}`;
}

// LOCATION
if (input.includes("location") || input.includes("where")) {
return `${PROFILE.name} is based in ${PROFILE.location}.`;
}

// WEBSITES
if (input.includes("website") || input.includes("portfolio")) {
return `You can view his work here:\n${PROFILE.websites.join("\n")}`;
}

// DEFAULT RESPONSE (SMART REDIRECT)
return "I can help you with growth strategy, SEO, projects, experience, or how to work with Perez. What would you like to explore?";
}


// ENTER KEY SUPPORT
document.addEventListener("DOMContentLoaded", function () {
const chatBox = document.getElementById("chat-box");
if (chatBox) {
let welcome = document.createElement("div");
welcome.className = "message bot";
welcome.textContent = "Hi, I can tell you how Perez drives growth, leads, and revenue. Ask me anything.";
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


// PROFILE DATA
const PROFILE = {
name: "Perez Oladele",
location: "Gowon Estate, Lagos, Nigeria",
experience: "6+ years",

roles: [
"SEO Growth Specialist",
"Growth Marketer",
"Digital Marketing Strategist",
"Business Development Specialist"
],

personality: [
"Strategic",
"Results-driven",
"Analytical",
"Business-focused",
"Clear communicator"
],

skills: {
frontend: ["HTML", "CSS", "JavaScript"],
design: ["Canva", "CapCut", "Adobe InDesign", "PowerPoint"],
tools: ["Google Analytics (GA4)", "Google Search Console", "Meta Ads Manager", "LinkedIn Campaign Manager"],
marketing: ["SEO", "Conversion Rate Optimization", "Lead Generation", "Funnel Design", "Paid Ads Strategy"],
other: ["Copywriting", "Branding", "Business Development", "Sales Strategy"]
},

availability: {
freelance: "Available for high-value freelance and consulting projects.",
fulltime: "Open to senior-level roles in growth marketing, digital strategy, and business development."
},

contact: {
email: "perezoladele@gmail.com",
phone: "07032530732",
linkedin: "https://perez-oladele.github.io/"
},

achievements: [
"Closed deals worth over ₦80M annually with 25%+ profit margins",
"Consistently exceeded sales and revenue targets",
"Led teams to outperform growth and acquisition benchmarks"
],

certifications: [
"Cybersecurity Certification – Career Insights",
"SEO Certification – Udemy"
],

workExperience: [
{
role: "Digital Marketing Manager",
company: "Future Concerns Group",
period: "Current"
},
{
role: "Business Development Manager / Sales Lead",
company: "Multiple Firms",
period: "Previous Roles"
}
],

projects: [
{
name: "Future Concerns Group Digital Growth",
description: "Scaled the online presence of a multi-subsidiary oil and gas servicing company.",
role: "Digital Marketing Manager",
tech: "SEO, LinkedIn Marketing, Content Strategy, Analytics"
},
{
name: "PPE & Safety Equipment Sales Optimization",
description: "Improved visibility and inbound lead generation for industrial safety products.",
role: "Growth Strategist",
tech: "SEO, Funnels, Copywriting"
},
{
name: "Channel Sales Expansion",
description: "Closed over ₦80M in annual deals with strong profit margins.",
role: "Sales Lead / Business Development",
tech: "CRM, Sales Strategy, Negotiation"
},
{
name: "Personal Portfolio Website",
description: "A portfolio showcasing services, projects, and growth expertise.",
role: "Designer & Developer",
tech: "HTML, CSS, JavaScript"
}
],

websites: [
"https://perez-oladele.github.io/"
]
};
