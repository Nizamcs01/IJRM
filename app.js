/* Edit the sampleArticles array below with your real published article metadata.
   Each article needs a unique id and a matching file in the articles/ folder.
   Never invent or publish a DOI: use only registered DOI values. */
const sampleArticles = [
  {
    id: "sample-article-1",
    title: "The Impact of ESG Technologies on Sustainable Business Performance",
    authors: "Dr. Neha Goyal, Tanishka Dabas",
    affiliations: "Department of Research, Example University; Institute of Scholarship",
    section: "Research Article",
    volume: "1", issue: "1", year: "2026", pages: "1–12",
    published: "14 October 2026",
    doi: "",
    abstract: "This is sample text for demonstrating the journal website. Replace it with the approved abstract describing the study objective, methodology, main findings and contribution before publishing.",
    keywords: ["Research methods", "Interdisciplinary studies", "Analysis"],
    pdf: "",
    citation: "Researcher, A., & Scholar, B. (2026). Sample research article: Methods and applications in interdisciplinary studies. Journal of Interdisciplinary Research, 1(1), 1–12."
  },
  {
    id: "sample-article-2",
    title: "Sample Article Two: Evidence, Analysis, and Future Directions",
    authors: "C. Author",
    affiliations: "School of Applied Studies, Example Institute",
    section: "Research Article",
    volume: "1", issue: "1", year: "2026", pages: "13–25",
    published: "14 October 2026",
    doi: "",
    abstract: "This second sample demonstrates how multiple papers can be listed and filtered. Replace this placeholder with the correct abstract, author details, publication information and keywords.",
    keywords: ["Evidence", "Analysis", "Future directions"],
    pdf: "",
    citation: "Author, C. (2026). Sample article two: Evidence, analysis, and future directions. Journal of Interdisciplinary Research, 1(1), 13–25."
  },
  {
    id: "sample-article-3",
    title: "A Review of Emerging Approaches in Data-Driven Research",
    authors: "D. Scholar, E. Researcher",
    affiliations: "Centre for Data Science, Example University",
    section: "Review Article",
    volume: "1", issue: "1", year: "2026", pages: "26–39",
    published: "14 October 2026",
    doi: "",
    abstract: "Placeholder review abstract. Add the actual paper summary here, ensuring it accurately reflects the published article and is approved for public display.",
    keywords: ["Data-driven research", "Review", "Emerging approaches"],
    pdf: "",
    citation: "Scholar, D., & Researcher, E. (2026). A review of emerging approaches in data-driven research. Journal of Interdisciplinary Research, 1(1), 26–39."
  }
];

const articleList = document.getElementById("articleList");
const searchInput = document.getElementById("articleSearch");
const categoryFilter = document.getElementById("categoryFilter");
const emptyState = document.getElementById("emptyState");

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}
function articleUrl(article) {
  return `articles/${encodeURIComponent(article.id)}.html`;
}
function renderArticles() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const filtered = sampleArticles.filter(article => {
    const text = [article.title, article.authors, article.abstract, ...(article.keywords || [])].join(" ").toLowerCase();
    return text.includes(query) && (category === "all" || article.section === category);
  });
  articleList.innerHTML = filtered.map(article => `
    <article class="article-card">
      <div class="article-topline"><span class="article-type">${escapeHtml(article.section)}</span><span class="article-pages">Pages ${escapeHtml(article.pages)}</span></div>
      <h3><a href="${articleUrl(article)}">${escapeHtml(article.title)}</a></h3>
      <p class="article-authors">${escapeHtml(article.authors)}</p>
      <p class="article-abstract">${escapeHtml(article.abstract)}</p>
      <div class="article-bottom">
        <span class="article-doi">${article.doi ? `DOI: ${escapeHtml(article.doi)}` : "DOI: Not added"}</span>
        <a class="view-article" href="${articleUrl(article)}">View article details <span aria-hidden="true">→</span></a>
      </div>
    </article>`).join("");
  emptyState.hidden = filtered.length !== 0;
}
function setupFilters() {
  [...new Set(sampleArticles.map(a => a.section))].sort().forEach(section => {
    const option = document.createElement("option");
    option.value = section; option.textContent = section;
    categoryFilter.appendChild(option);
  });
}
searchInput.addEventListener("input", renderArticles);
categoryFilter.addEventListener("change", renderArticles);
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
setupFilters();
renderArticles();
