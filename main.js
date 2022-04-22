const btn = document.getElementById('button-short');
btn.onclick = shortUrl;
const input = document.getElementById('input-long');
const link = document.getElementById('link-short');

async function shortUrl() {
  const apiUrl = 'https://api.shrtco.de/v2/shorten?url='
  const userUrl = input.value;
  const url = apiUrl + userUrl;

  const response = await fetch(url);
  const data = await response.json();
  const short = data.result.full_short_link;

  link.href = short;
  link.text = short;
}