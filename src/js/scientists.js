// Дані для роботи з вченими

const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
    url: "/img/scientists/albert-einstein.jpg",
    alt: "Albert Einstein",
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
    url: "/img/scientists/isaac-newton.jpg",
    alt: "Isaac Newton",
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
    url: "/img/scientists/galileo-galilei.jpg",
    alt: "Galileo Galilei",
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
    url: "/img/scientists/marie-curie.jpg",
    alt: "Marie Curie",
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
    url: "/img/scientists/johannes-kepler.jpg",
    alt: "Johannes Kepler",
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
    url: "/img/scientists/nicolau-copernicus.jpg",
    alt: "Nicolaus Copernicus",
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
    url: "/img/scientists/max-planck.jpg",
    alt: "Max Planck",
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
    url: "/img/scientists/katherine-blodgett.jpg",
    alt: "Katherine Blodgett",
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
    url: "/img/scientists/ada-lovelace.jpg",
    alt: "Ada Lovelace",
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
    url: "/img/scientists/sarah-goode.jpg",
    alt: "Sarah E. Goode",
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
    url: "/img/scientists/lise-meitner.jpg",
    alt: "Lise Meitner",
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
    url: "/img/scientists/hanna-hammarström.jpg",
    alt: "Hanna Hammarström",
  },
];


const elements = {
  scientistsList: document.getElementById("scientists-list"),
  scientistsEl: document.querySelectorAll(".scientists__item"),
  optionsList: document.getElementById("options-list"),
  options: document.querySelectorAll(".option"),
}

const { scientistsList, scientistsEl, optionsList, options } = elements;
render(scientists);

function render(scientists) {
  scientistsList.innerHTML = "";
  scientists.forEach((scientist) => {
    // scientistsList.innerHTML += `<li class="scientists__item"><img src="/img/scientists.png" alt="" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientist.name} ${scientist.surname}</h3><p class="scientists__years">${scientist.born} - ${scientist.dead}</p></div></li>`;
    scientistsList.innerHTML += `<li class="scientists__item"><img class="scientists__img" src="${scientist.url}" alt="${scientist.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientist.name} ${scientist.surname}</h3><p class="scientists__years">${scientist.born} - ${scientist.dead}</p></div></li>`;
  });
}



// 1
// function scientistsWereBornIn19thCentury() {
//   const scientists19thCentury = scientists.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900);
//   render(scientists19thCentury);
// }

// // 2
// function sortScientistsAlphabetically() {
//   // const sortedScientistsList = scientists.toSorted((scientist, nextScientist) => {
//   const sortedScientists = scientists.sort((scientist, nextScientist) => {
//     const scientistName = scientist.name.toUpperCase();
//     const nextScientistName = nextScientist.name.toUpperCase();
//     if (scientistName > nextScientistName) {
//       return 1;
//     } else if (scientistName < nextScientistName) {
//       return -1;
//     } else { return 0 };
//   });
//   render(sortedScientists);
// }

// // 3
// function sortScientistsByYears() { }

// // 4
// function findLatestBornScientist() { }

// // 5
// function findBirthYearOfAlbertEinstein() {
//   const yearsOfAlbertEinstein = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein");
//   render([scientists[yearsOfAlbertEinstein]]);

// }

// // 6
// function findScientistsWithFirstSurnameLetterC() { }

// // 7
// function removeScientistsWithFirstNameLetterA() { }

// // 8
// function findLongestAndShortestLivedScientists() { }

// // 9
// function findScientistsWithMatchingFirstAndLastNames() { }
