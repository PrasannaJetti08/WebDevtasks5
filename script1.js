document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const postContainer = document.getElementById("post-container");
  const searchInput = document.getElementById("search");

  // Toggle dark/light mode
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Load posts
  const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  function showPosts(filteredPosts = posts) {
    postContainer.innerHTML = "";
    filteredPosts.forEach(post => {
      postContainer.innerHTML += `
        <article>
          <h2><a href="${post.link}" target="_blank">${post.title}</a></h2>
          <p><em>${post.date}</em></p>
          <p>${post.content.substring(0, 100)}...</p>
        </article>
      `;
    });
  }

  searchInput?.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = posts.filter(p => p.title.toLowerCase().includes(query));
    showPosts(filtered);
  });

  showPosts();
});
