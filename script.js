// Switch between login & signup
const signupLink = document.getElementById("signupLink");
const loginLink = document.getElementById("loginLink");
const signupBox = document.getElementById("signupBox");
const loginForm = document.getElementById("loginForm");

if (signupLink) {
  signupLink.addEventListener("click", () => {
    document.querySelector(".auth-container").classList.add("hidden");
    signupBox.classList.remove("hidden");
  });
}
if (loginLink) {
  loginLink.addEventListener("click", () => {
    signupBox.classList.add("hidden");
    document.querySelector(".auth-container").classList.remove("hidden");
  });
}

// Handle login
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "home.html";
  });
}

// Handle signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Signup successful! Please login.");
    signupBox.classList.add("hidden");
    document.querySelector(".auth-container").classList.remove("hidden");
  });
}

// Like button effect
const likeBtn = document.querySelector(".like-btn");
if (likeBtn) {
  likeBtn.addEventListener("click", () => {
    likeBtn.textContent = "❤️ Liked!";
    likeBtn.style.background = "red";
  });
}
