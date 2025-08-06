document.addEventListener("DOMContentLoaded", () => {
  fetch("projects.json")
    .then((response) => response.json())
    .then((projects) => {
      const container = document.getElementById("project-list");
      container.innerHTML = "";

      projects.forEach((project) => {
        const card = document.createElement("div");
        card.className =
          "group bg-[#1c2733] text-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between";

        card.innerHTML = `
        <div class="aspect-video bg-gray-100 overflow-hidden">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <div class="p-3 flex-1 flex flex-col justify-between">
          <div>
            <h4 class="text-base font-semibold mb-1">${project.title}</h4>
            <p class="text-sm text-justify text-gray-300 mb-3 leading-snug">${project.description}</p>
          </div>
          <div class="text-center mt-auto">
            <a href="${project.link}" target="_blank"
              class="inline-block px-3 py-1.5 rounded-md bg-[#233043] hover:bg-[#1e40af] transition duration-300 text-white font-medium text-xs shadow hover:shadow-md">
              🔗 View Project
            </a>
          </div>
        </div>
      `;

        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Failed to load project data:", err);
    });
});
