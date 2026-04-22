document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("reveal-in");

  const header = document.querySelector(".site-header");
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const revealItems = [
    ...document.querySelectorAll(".section-heading"),
    ...document.querySelectorAll(".path-rail li"),
    ...document.querySelectorAll(".route-detail"),
    ...document.querySelectorAll(".lecture-item"),
    ...document.querySelectorAll(".topic-item"),
    ...document.querySelectorAll(".method-columns > div"),
    ...document.querySelectorAll(".cta-section"),
  ];
  const staggerGroups = [
    document.querySelectorAll(".path-rail li"),
    document.querySelectorAll(".lecture-item"),
    document.querySelectorAll(".topic-item"),
    document.querySelectorAll(".method-columns > div"),
    document.querySelectorAll(".route-detail"),
  ];
  const sections = [...document.querySelectorAll("main section[id]")];

  const syncHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  staggerGroups.forEach((group) => {
    [...group].forEach((item, index) => {
      item.style.setProperty("--stagger", String(index));
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const match = navLinks.find((link) => link.getAttribute("href") === `#${id}`);

        if (match && entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("is-active"));
          match.classList.add("is-active");
        }
      });
    },
    {
      threshold: 0.35,
      rootMargin: "-20% 0px -55% 0px",
    }
  );

  sections.forEach((section) => {
    navObserver.observe(section);
  });

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
});
