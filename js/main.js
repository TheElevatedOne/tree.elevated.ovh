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

let allLinks = "";

links.forEach((ele) => {
    let link = ele.link;
    let name = ele.name;
    let image = ele.image;
    let type = ele.type;

    allLinks += addLink(name, link, image, type);
});

linkContainer.innerHTML = allLinks;
