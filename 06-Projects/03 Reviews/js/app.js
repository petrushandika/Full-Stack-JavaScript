const reviews = [
  {
    id: 1,
    name: "Stephen Curry",
    job: "Athlete Basketball",
    img: "https://media.licdn.com/dms/image/C5603AQFB4ebeyLpzgw/profile-displayphoto-shrink_200_200/0/1568784020887?e=2147483647&v=beta&t=nwdY52ZE4xQEALFZCiEKULxWp6EeJ2sPtlDgZCBfpRg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio natus dolorem maxime alias saepe! Dignissimos, quasi! Eveniet consequuntur sapiente facilis fuga doloribus, rem error ratione hic iste maiores molestias?",
  },
  {
    id: 2,
    name: "Miley Cyrus",
    job: "Musician",
    img: "https://media.licdn.com/dms/image/C4E03AQEkSNFd6sWY9w/profile-displayphoto-shrink_800_800/0/1624319303281?e=2147483647&v=beta&t=CnP_lyJLwipo3HONULT7qL2TyjELOAP9-cZjcSAgQ8o",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio natus dolorem maxime alias saepe! Dignissimos, quasi! Eveniet consequuntur sapiente facilis fuga doloribus, rem error ratione hic iste maiores molestias?",
  },
  {
    id: 3,
    name: "Ryan Reynolds",
    job: "Artist",
    img: "https://media.licdn.com/dms/image/C5603AQGOBfXsKX8U5Q/profile-displayphoto-shrink_800_800/0/1636498355197?e=2147483647&v=beta&t=WccTCRhi9DDHCkH21sQJllXT-WlcjMDBvExMY42m-nA",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio natus dolorem maxime alias saepe! Dignissimos, quasi! Eveniet consequuntur sapiente facilis fuga doloribus, rem error ratione hic iste maiores molestias?",
  },
  {
    id: 4,
    name: "Barrack Obama",
    job: "The White House",
    img: "https://media.licdn.com/dms/image/C4E03AQF2C6iUecWOnQ/profile-displayphoto-shrink_200_200/0/1517665059099?e=2147483647&v=beta&t=2pyrvpxt-2wday4NmHwBDQwJ8qNcCMrs0mlGCHFCZrc",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio natus dolorem maxime alias saepe! Dignissimos, quasi! Eveniet consequuntur sapiente facilis fuga doloribus, rem error ratione hic iste maiores molestias?",
  },
];

const img = document.getElementById("image");
const imgElement = img.querySelector("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const randomButton = document.querySelector(".random-button");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  imgElement.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextButton.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

previousButton.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomButton.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
