const btn = document.getElementById("button-short");
btn.onclick = shortUrl;

async function shortUrl() {
  const input = document.getElementById("input-long");
  const userUrl = input.value;
  console.log(userUrl);
}
