const files = {
  about: {
    name: "about.js",
    code: `const developer = {
  name: "Young Admtech",
  role: "Web Designer & Developer",
  location: "Nigeria",
  focus: "Websites for local businesses",
  brand: "YOUNG ADMtech"
};`
  },

  projects: {
    name: "projects.js",
    code: `const projects = [
  { name: "Open Sky Restaurant", status: "live" },
  { name: "Honeysfittings", status: "live" },
  { name: "Ahwenepa Gold Beauty Palace", status: "live" },
  { name: "Temmy Lavida Enterprise", status: "live" },
  { name: "YOUNG ADM", status: "live" },
  { name: "Y&H Garment Care", status: "live" },
  { name: "Nikky's Hairline", status: "coming soon" },
  { name: "Aliyah Aesthetic", status: "coming soon" },
  { name: "Open Sky Guest House", status: "coming soon" },
  { name: "The Rahimy Effect", status: "coming soon" }
];`
  },

skills: {
    name: "skills.js",
    code: `const skills = {
  frontEnd: ["HTML", "CSS", "JavaScript", "Responsive Design", "React"],
  backEnd: ["Node.js"],
  tools: ["Git and GitHub", "GitHub Pages", "Vercel / Netlify", "Domains, HTTPS and Security"],
  softSkills: [
    "Debugging and Problem Solving",
    "Reading Documentation",
    "Planning a Project from Start to Finish"
  ],
    "Vue",
    "Next.js",
    "Building APIs",
    "Authentication",
    "SQL / MongoDB"
  ]
};`
  },


  contact: {
    name: "contact.js",
    code: `const contact = {
  email: "adamiyanda58@gmail.com",
  message: "Let's build your website together."
};`
  }
};

const fileButtons = document.querySelectorAll(".file");
const tabName = document.getElementById("tabName");
const codeView = document.getElementById("codeView");

fileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the file that matches the button
    const selected = files[button.dataset.file];

    // Change the tab name and the code
    tabName.textContent = selected.name;
    codeView.textContent = selected.code;

    // Move the gold colour to the clicked button
    fileButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
  });
});