document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------
     FORM VALIDATION
  --------------------------- */
  const form = document.querySelector("form");
  const messageBox = document.querySelector(".form-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // stop form from submitting right away

      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        messageBox.textContent = "⚠️ Please fill in all fields.";
        messageBox.style.color = "red";
        return;
      }

        // Name length check
      if (name.length < 3) {
        messageBox.textContent = "⚠️ Name must be at least 3 letters long.";
        messageBox.style.color = "red";
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        messageBox.textContent = "⚠️ Please enter a valid email.";
        messageBox.style.color = "red";
        return;
      }

      // Success
      messageBox.textContent = "✅ Message sent successfully!";
      messageBox.style.color = "green";
      form.reset();

      // Auto-hide message after 5 seconds
      setTimeout(() => {
        messageBox.textContent = "";
      }, 5000);
    });
  }

  /* ---------------------------
     MOBILE NAV TOGGLE
  --------------------------- */
  const nav = document.querySelector("nav ul");
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "☰";
  toggleBtn.classList.add("nav-toggle");

  document.querySelector("header").prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show-nav");
  });

  /* ---------------------------
     SMOOTH SCROLL NAVIGATION
  --------------------------- */
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // adjust for sticky header
          behavior: "smooth"
        });
      }
    });
  });

  /* ---------------------------
     GALLERY LIGHTBOX (optional)
  --------------------------- */
  const galleryImages = document.querySelectorAll(".gallery-item img");

  if (galleryImages.length > 0) {
    // Create lightbox container
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const img = document.createElement("img");
    lightbox.appendChild(img);

    galleryImages.forEach(image => {
      image.style.cursor = "pointer"; // indicate it's clickable
      image.addEventListener("click", () => {
        lightbox.classList.add("active");
        img.src = image.src;
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }
});

