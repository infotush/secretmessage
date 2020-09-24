const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message").classList.add("hide");
  document.querySelector("#secret").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#message").classList.add("hide");
  document.querySelector("#link").classList.remove("hide");

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  const inputLink = document.querySelector("#input-link");
  inputLink.value = `${window.location}#${encrypted}`;
  inputLink.select();
});
