const CONFIG = {
  businessEmail: "njessemandevamirtham@gmail.com",
  uploadLink: "https://forms.gle/GaKWmYV7HjQxpsnF7",
  paymentLinks: {
    "Starter Batch": "https://your-store.lemonsqueezy.com/buy/replace-starter",
    "Weekly Owner": "https://your-store.lemonsqueezy.com/buy/replace-weekly",
    "Done For You": "https://your-store.lemonsqueezy.com/buy/replace-monthly",
  },
};

const ideaForm = document.querySelector("#idea-form");
const ideaResults = document.querySelector("#idea-results");
const briefForm = document.querySelector("#brief-form");
const planSelect = document.querySelector("#plan");
const uploadLink = document.querySelector("#upload-link");

uploadLink.href = CONFIG.uploadLink;

const templates = [
  {
    title: "The Mistake Hook",
    body: (topic) =>
      `Open with: "Most business owners get ${topic} wrong because they skip this one step." Then teach one clear fix and end with a save-worthy checklist.`,
  },
  {
    title: "The Personal Story",
    body: (topic) =>
      `Start with a short founder story about struggling with ${topic}. Share the lesson, then give the viewer one practical action for this week.`,
  },
  {
    title: "The Contrarian Take",
    body: (topic) =>
      `Lead with: "Unpopular opinion: ${topic} is not about doing more." Explain the belief shift and give one practical business takeaway.`,
  },
];

ideaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const topic = new FormData(ideaForm).get("topic").trim();

  ideaResults.innerHTML = templates
    .map(
      (template) => `
        <article class="idea-card">
          <strong>${template.title}</strong>
          <span>${template.body(topic)}</span>
        </article>
      `,
    )
    .join("");
});

document.querySelectorAll("[data-plan]").forEach((link) => {
  link.addEventListener("click", () => {
    const plan = link.dataset.plan;
    const option = [...planSelect.options].find((item) => item.textContent.includes(plan));
    if (option) {
      planSelect.value = option.value;
    }
  });
});

briefForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(briefForm);
  const plan = data.get("plan");
  const planName = plan.split(" - ")[0];
  const paymentUrl = CONFIG.paymentLinks[planName] || "#";

  const subject = encodeURIComponent(`New ReelTwin request - ${plan}`);
  const body = encodeURIComponent(
    [
      "New business-owner video request",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Business type: ${data.get("niche")}`,
      `Package: ${plan}`,
      "",
      "Topic or script:",
      data.get("video-topic"),
      "",
      `Payment link: ${paymentUrl}`,
      `Upload link: ${CONFIG.uploadLink}`,
      "",
      "Consent confirmed: yes",
    ].join("\n"),
  );

  document.querySelector("#form-note").textContent =
    "Request prepared. Your email app will open so you can send the brief.";

  window.location.href = `mailto:${CONFIG.businessEmail}?subject=${subject}&body=${body}`;
});
