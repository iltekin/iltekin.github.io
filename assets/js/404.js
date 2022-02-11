const targetDiv = document.getElementById("404");
const text = document.createTextNode("Try this URL: ");
targetDiv.appendChild(text);

const url = "https://code.iltekin.com" + window.location.pathname;
const title = document.createTextNode(url);

const a = document.createElement("a");
a.href = url;
a.appendChild(title);

targetDiv.appendChild(a);