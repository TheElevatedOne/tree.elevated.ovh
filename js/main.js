import { links } from "./links.js";

const linkContainer = document.getElementById("links");

function addLink(name, link, image, type, value, satur) {
    return `
  <a href="${link}" class="link" target="blank" style="background: linear-gradient(90deg,rgba(241, 241, 241, 0.1) 30%,rgba(113, 113, 113, 0.3) 100%),hsl(0, ${value}%, ${satur}%); color: white">
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

var counter = 0;

links.forEach((ele) => {
    let link = ele.link;
    let name = ele.name;
    let image = ele.image;
    let type = ele.type;
    let value = _.range(0, 100, Math.round(80/links.length)).reverse();
    let satur = _.range(0, 62, Math.round(50/links.length)).reverse();

    if (name == "hr") {
      allLinks += addHr(link);
    } else {
      allLinks += addLink(name, link, image, type, value[counter], satur[counter]);
    }
    counter++;
});

linkContainer.innerHTML = allLinks;