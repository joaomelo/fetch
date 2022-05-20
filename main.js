const btn = document.getElementById("button-short");
btn.onclick = shortUrl;

async function shortUrl() {
  const input = document.getElementById("input-long");
  const userUrl = input.value;

  const apiUrl = "https://api.shrtco.de/v2/shorten?url=";
  const url = apiUrl + userUrl;

  const response = await fetch(url);

  console.log(response);
}
