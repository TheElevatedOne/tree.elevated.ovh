import { links } from "./links.js";

const linkContainer = document.getElementById("links");

function addLink(name, link, image, type) {
    return `
  <a href="${link}" class="link" target="blank">
    <img src="${image}"/>
    <span>${name}  </span>
    <img class="linkIcon" src="${type}" alt=""/>
  </a>
  `;
}

function addHr(link) {
  return `
  <hr class="divider">
  <span class="divider">${link}</span>
  <hr class="divider">
  `
}

let allLinks = "";

links.forEach((ele) => {
    let link = ele.link;
    let name = ele.name;
    let image = ele.image;
    let type = ele.type;

    if (name == "hr") {
      allLinks += addHr(link);
    } else {
      allLinks += addLink(name, link, image, type);
    }
});

linkContainer.innerHTML = allLinks;