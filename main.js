const btn = document.getElementById("button-short");
btn.onclick = shortUrl;

async function shortUrl() {
  const input = document.getElementById("input-long");
  const userUrl = input.value;

  const apiUrl = "https://api.shrtco.de/v2/shorten?url=";
  const url = apiUrl + userUrl;

  const response = await fetch(url);

  const data = await response.json();
  const short = data.result.full_short_link;

  const link = document.getElementById("link-short");
  link.href = short;
  link.text = short;
}
