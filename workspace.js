/* =========================================
   YOUNG ADMtech — DEVELOPER WORKSPACE 2.0
========================================= */

/* =========================================
   WORKSPACE FILES
========================================= */

const files = {
  about: {
    name: "about.js",
    title: "Developer Profile",
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
    title: "Selected Projects",
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
    title: "Technical Skills",
    code: `const skills = {
  frontEnd: [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design"
  ],
  backEnd: ["Node.js (learning)"],
  frameworks: [
    "React ",
    "Vue",
    "Next.js"
  ],
  databases: [
    "SQL ",
    "MongoDB"
  ],
  tools: [
    "Git",
    "GitHub",
    "GitHub Pages"
  ],
  currentlyLearning: [
    "Building APIs",
    "Authentication"
  ]
};`
  },

  contact: {
    name: "contact.js",
    title: "Contact Information",
    code: `const contact = {
  email: "adamiyanda58@gmail.com",
  message: "Let's build your website together."
};`
  }
};

/* =========================================
   PROJECT DATA
========================================= */

const projectList = [
  {
    name: "Open Sky Restaurant",
    status: "Live",
    url: "https://admtech783.github.io/OPEN-SKY-RESTURANT/"
  },
  {
    name: "Honeysfittings",
    status: "Live",
    url: "https://admtech783.github.io/honey/"
  },
  {
    name: "Ahwenepa Gold Beauty Palace",
    status: "Live",
    url: "https://admtech783.github.io/Ahwenepa-Gold/"
  },
  {
    name: "Temmy Lavida Enterprise",
    status: "Live",
    url: "https://admtech783.github.io/Temmy-lavida-ENTERPRISES/"
  },
  {
    name: "YOUNG ADM",
    status: "Live",
    url: "https://admtech783.github.io/YOUNG-ADM-WEARS"
  },
  {
    name: "Y&H Garment Care",
    status: "Live",
    url: "https://admtech783.github.io/Y-H-Garment-Care/"
  },
  {
    name: "Nikky's Hairline",
    status: "Coming soon"
  },
  {
    name: "Aliyah Aesthetic",
    status: "Coming soon"
  },
  {
    name: "Open Sky Guest House",
    status: "Coming soon"
  },
  {
    name: "The Rahimy Effect",
    status: "Coming soon"
  }
];

/* =========================================
   SKILLS DATA
========================================= */

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    title: "Backend",
    items: ["Node.js (learning)"]
  },
  {
    title: "Frameworks",
    items: ["React (learning)", "Vue (learning)", "Next.js (learning)"]
  },
  {
    title: "Databases",
    items: ["SQL (learning)", "MongoDB (learning)"]
  },
  {
    title: "Development Tools",
    items: ["Git", "GitHub", "GitHub Pages"]
  },
  {
    title: "Currently Learning",
    items: ["Building APIs", "Authentication"]
  }
];

/* =========================================
   CONTACT DATA
========================================= */

const developerContact = {
  email: "adamiyanda58@gmail.com",
  message: "Let's build your website together."
};

/* =========================================
   EDITOR ELEMENTS
========================================= */

const fileButtons = document.querySelectorAll(".file");

const tabName = document.getElementById("tabName");
const breadcrumbFile = document.getElementById("breadcrumbFile");
const editorTitle = document.getElementById("editorTitle");
const lineNumbers = document.getElementById("lineNumbers");
const codeView = document.getElementById("codeView");

const codeElement = codeView
  ? codeView.querySelector("code") || codeView
  : null;

/* =========================================
   FILE EXPLORER
========================================= */

function openFile(fileKey, selectedButton) {
  const selected = files[fileKey];

  if (!selected || !codeElement) return;

  codeElement.textContent = selected.code;

  if (tabName) {
    tabName.textContent = selected.name;
  }

  if (breadcrumbFile) {
    breadcrumbFile.textContent = selected.name;
  }

  if (editorTitle) {
    editorTitle.textContent = selected.title;
  }

  if (lineNumbers) {
    const totalLines = selected.code.split("\n").length;

    lineNumbers.textContent = Array.from(
      { length: totalLines },
      (_, index) => index + 1
    ).join("\n");
  }

  fileButtons.forEach((button) => {
    const isActive = button === selectedButton;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

fileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openFile(button.dataset.file, button);
  });
});

const initialButton =
  document.querySelector(".file.active") || fileButtons[0];

if (initialButton) {
  openFile(initialButton.dataset.file, initialButton);
}

/* =========================================
   TERMINAL ELEMENTS
========================================= */

const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");
const terminalStatus = document.getElementById("terminalStatus");

/* =========================================
   TERMINAL DISPLAY HELPERS
========================================= */

function createTerminalEntry(command) {
  const entry = document.createElement("div");
  entry.className = "terminal-entry";

  const commandLine = document.createElement("p");
  commandLine.className = "terminal-command";

  const prompt = document.createElement("span");
  prompt.className = "terminal-prompt";
  prompt.textContent = "admtech@portfolio:~$";

  const commandText = document.createElement("span");
  commandText.textContent = ` ${command}`;

  commandLine.append(prompt, commandText);

  const result = document.createElement("div");
  result.className = "terminal-result";

  entry.append(commandLine, result);
  terminalOutput.appendChild(entry);

  return result;
}

function addParagraph(container, text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  container.appendChild(paragraph);
  return paragraph;
}

function addHeading(container, text) {
  const heading = document.createElement("strong");
  heading.textContent = text;
  container.appendChild(heading);
}

function addList(container, items) {
  const list = document.createElement("ul");

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  container.appendChild(list);
}

function addProjectLink(container, project) {
  const wrapper = document.createElement("p");

  const name = document.createElement("strong");
  name.textContent = project.name;

  const status = document.createElement("span");
  status.textContent = ` — ${project.status}`;

  wrapper.append(name, status);

  if (project.url) {
    const link = document.createElement("a");
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = " | Visit website ↗";
    wrapper.appendChild(link);
  }

  container.appendChild(wrapper);
}

/* =========================================
   TERMINAL COMMANDS
========================================= */

function showHelp(output) {
  addHeading(output, "AVAILABLE COMMANDS");

  addList(output, [
    "help     — Show available commands",
    "about    — View developer information",
    "projects — Explore projects and live links",
    "skills   — View technical skills",
    "contact  — Display contact information",
    "clear    — Clear terminal history"
  ]);

  addParagraph(
    output,
    'Tip: Type a command and press Enter. Commands are not case-sensitive.'
  );
}

function showAbout(output) {
  addHeading(output, "DEVELOPER PROFILE");

  addParagraph(output, "Name: Young Admtech");
  addParagraph(output, "Role: Web Designer & Developer");
  addParagraph(output, "Location: Nigeria");
  addParagraph(output, "Brand: YOUNG ADMtech");
  addParagraph(output, "Focus: Websites for local businesses");

  addParagraph(
    output,
    "I build websites for businesses and continue developing my technical skills through practical projects."
  );
}

function showProjects(output) {
  addHeading(output, "PROJECT DIRECTORY");

  projectList.forEach((project) => {
    addProjectLink(output, project);
  });

  addParagraph(
    output,
    "Select a live project link to open its website. Projects marked Coming soon are not currently listed as live."
  );
}

function showSkills(output) {
  addHeading(output, "TECHNICAL SKILLS");

  skillGroups.forEach((group) => {
    const section = document.createElement("div");
    section.className = "skill-output-group";

    addHeading(section, group.title);
    addList(section, group.items);

    output.appendChild(section);
  });

  addParagraph(
    output,
    "Technologies marked learning are areas currently being studied, not claimed professional experience."
  );
}

function showContact(output) {
  addHeading(output, "CONTACT INFORMATION");

  addParagraph(output, "Email: " + developerContact.email);
  addParagraph(output, developerContact.message);

  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${developerContact.email}`;
  emailLink.textContent = "Send an email ↗";

  output.appendChild(emailLink);
}

/* =========================================
   COMMAND PROCESSOR
========================================= */

function runCommand(rawCommand) {
  const command = rawCommand.trim().toLowerCase();

  if (!command) return;

  if (command === "clear") {
    terminalOutput.replaceChildren();

    if (terminalStatus) {
      terminalStatus.textContent = "Terminal Cleared";
    }

    return;
  }

  const output = createTerminalEntry(rawCommand.trim());

  switch (command) {
    case "help":
      showHelp(output);
      break;

    case "about":
      showAbout(output);
      break;

    case "projects":
      showProjects(output);
      break;

    case "skills":
      showSkills(output);
      break;

    case "contact":
      showContact(output);
      break;

    default:
      output.classList.add("terminal-error");

      addParagraph(
        output,
        `Command not found: ${rawCommand.trim()}`
      );

      addParagraph(
        output,
        "Type 'help' to see the available commands."
      );
  }

  if (terminalStatus) {
    terminalStatus.textContent = "Command Executed";
  }

  if (terminalOutput) {
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
}

/* =========================================
   TERMINAL FORM EVENT
========================================= */

if (terminalForm && terminalInput && terminalOutput) {
  terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const command = terminalInput.value;

    if (!command.trim()) return;

    runCommand(command);

    terminalInput.value = "";
    terminalInput.focus();
  });
}

/* =========================================
   TERMINAL STARTUP
========================================= */

if (terminalStatus) {
  terminalStatus.textContent = "Terminal Ready";
}