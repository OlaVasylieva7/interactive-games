// Дані для роботи з вченими
const scientists = [
    {
        name: 'Albert',
        surname: 'Einstein',
        born: 1879,
        dead: 1955,
        id: 1,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/albert-einstein.jpg?raw=true",
        // url: "/img/scientists/albert-einstein.jpg",
        alt: "Albert Einstein",
    },
    {
        name: 'Isaac',
        surname: 'Newton',
        born: 1643,
        dead: 1727,
        id: 2,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/isaac-newton.jpg?raw=true",
        // url: "/img/scientists/isaac-newton.jpg",
        alt: "Isaac Newton",
    },
    {
        name: 'Galileo',
        surname: 'Galilei',
        born: 1564,
        dead: 1642,
        id: 3,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/galileo-galilei.jpg?raw=true",
        // url: "/img/scientists/galileo-galilei.jpg",
        alt: "Galileo Galilei",
    },
    {
        name: 'Marie',
        surname: 'Curie',
        born: 1867,
        dead: 1934,
        id: 4,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/marie-curie.jpg?raw=true",
        // url: "/img/scientists/marie-curie.jpg",
        alt: "Marie Curie",
    },
    {
        name: 'Johannes',
        surname: 'Kepler',
        born: 1571,
        dead: 1630,
        id: 5,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/johannes-kepler.jpg?raw=true",
        // url: "/img/scientists/johannes-kepler.jpg",
        alt: "Johannes Kepler",
    },
    {
        name: 'Nicolaus',
        surname: 'Copernicus',
        born: 1473,
        dead: 1543,
        id: 6,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/nicolau-copernicus.jpg?raw=true",
        // url: "/img/scientists/nicolau-copernicus.jpg",
        alt: "Nicolaus Copernicus",
    },
    {
        name: 'Max',
        surname: 'Planck',
        born: 1858,
        dead: 1947,
        id: 7,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/max-planck.jpg?raw=true",
        // url: "/img/scientists/max-planck.jpg",
        alt: "Max Planck",
    },
    {
        name: 'Katherine',
        surname: 'Blodgett',
        born: 1898,
        dead: 1979,
        id: 8,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/katherine-blodgett.jpg?raw=true",
        // url: "/img/scientists/katherine-blodgett.jpg",
        alt: "Katherine Blodgett",
    },
    {
        name: 'Ada',
        surname: 'Lovelace',
        born: 1815,
        dead: 1852,
        id: 9,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/ada-lovelace.jpg?raw=true",
        // url: "/img/scientists/ada-lovelace.jpg",
        alt: "Ada Lovelace",
    },
    {
        name: 'Sarah E.',
        surname: 'Goode',
        born: 1855,
        dead: 1905,
        id: 10,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/sarah-goode.jpg?raw=true",
        // url: "/img/scientists/sarah-goode.jpg",
        alt: "Sarah E. Goode",
    },
    {
        name: 'Lise',
        surname: 'Meitner',
        born: 1878,
        dead: 1968,
        id: 11,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/lise-meitner.jpg?raw=true",
        // url: "/img/scientists/lise-meitner.jpg",
        alt: "Lise Meitner",
    },
    {
        name: 'Hanna',
        surname: 'Hammarström',
        born: 1829,
        dead: 1909,
        id: 12,
        url: "https://github.com/OlaVasylieva7/interactive-games/blob/main/src/img/scientists/hanna-hammarstr%C3%B6m.jpg?raw=true",
        // url: "/img/scientists/hanna-hammarström.jpg",
        alt: "Hanna Hammarström",
    },
];


const options = document.querySelectorAll(".option");
const scientistsItem = document.querySelectorAll(".scientists__item");
let on = true;
let idx = 0;

options[0].addEventListener("click", scientistsWereBornIn19thCentury);
options[1].addEventListener("click", sortScientistsAlphabetically);
options[2].addEventListener("click", sortScientistsByYears);
options[3].addEventListener("click", findLatestBornScientist);
options[4].addEventListener("click", findBirthYearOfAlbertEinstein);
options[5].addEventListener("click", findScientistsWithFirstSurnameLetterC);
options[6].addEventListener("click", removeScientistsWithFirstNameLetterA);
options[7].addEventListener("click", findLongestAndShortestLivedScientists);
options[8].addEventListener("click", findScientistsWithMatchingFirstAndLastNames);


function clearScientists() {
    scientistsItem.forEach(scientist => scientist.innerHTML = "");
}

function addRotating() {
    scientistsItem.forEach(scientist => scientist.style.transform = "scaleX(-1)");
}

function removeRotating() {
    scientistsItem.forEach(scientist => scientist.style.transform = "scaleX(1)");
}

function scientistsWereBornIn19thCentury() {
    on = false;
    addRotating();
    setTimeout(clearScientists, 250);
    setTimeout(() => {
        removeRotating();
        setTimeout(() => {
            for (let scientist of scientists) {
                if (scientist.born >= 1801 && scientist.born <= 1900) {
                    scientistsItem[idx].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${scientist.url}" alt="${scientist.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientist.name} ${scientist.surname}</h3><p class="scientists__years">${scientist.born} - ${scientist.dead}</p></div></li>`;
                    idx += 1;
                }
            }
            idx = 0;
        }, 250);
        setTimeout(() => on = true, 1000);
    }, 1000);
}

function sortScientistsAlphabetically() {
    on = false;
    scientists.sort((a, b) => a.name.localeCompare(b.name));
    addRotating();
    setTimeout(clearScientists, 250);
    setTimeout(() => {
        removeRotating();
        setTimeout(() => {
            for (let scientist of scientists) {
                scientistsItem[idx].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${scientist.url}" alt="${scientist.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientist.name} ${scientist.surname}</h3><p class="scientists__years">${scientist.born} - ${scientist.dead}</p></div></li>`;
                idx += 1;
            }
            idx = 0;
        }, 250);
        setTimeout(() => on = true, 1000);
    }, 1000);

}

function sortScientistsByYears() {
    on = false;
    scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
    addRotating();
    setTimeout(clearScientists, 250);
    setTimeout(() => {
        removeRotating();
        setTimeout(() => {
            for (let scientist of scientists) {
                scientistsItem[idx].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${scientist.url}" alt="${scientist.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientist.name} ${scientist.surname}</h3><p class="scientists__years">${scientist.born} - ${scientist.dead}</p></div></li>`;
                idx += 1;
            }
            idx = 0;
        }, 250);
        setTimeout(() => on = true, 1000);
    }, 1000);
}

function findLatestBornScientist() {
    on = false;
    scientists.sort((a, b) => b.born - a.born);
    addRotating();
    setTimeout(clearScientists, 250);
    setTimeout(() => {
        removeRotating();
        setTimeout(() => {
            scientistsItem[0].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${scientists[0].url}" alt="${scientists[0].alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientists[0].name} ${scientists[0].surname}</h3><p class="scientists__years">${scientists[0].born} - ${scientists[0].dead}</p></div></li>`;
        }, 250);
        setTimeout(() => on = true, 1000);
    }, 1000);
}

function findBirthYearOfAlbertEinstein() {
    on = false;
    const einstein = scientists.find((scientist) => scientist.name === "Albert" && scientist.surname === "Einstein");
    addRotating();
    setTimeout(clearScientists, 250);
    setTimeout(() => {
        removeRotating();
        setTimeout(() => {
            scientistsItem[0].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${einstein.url}" alt="${einstein.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${einstein.name} ${einstein.surname}</h3><p class="scientists__years">${einstein.born} - ${einstein.dead}</p></div></li>`;
        }, 250);
        setTimeout(() => on = true, 1000);
    }, 1000);
}

function findScientistsWithFirstSurnameLetterC() {
    on = false;
    const objs = scientists.filter((scientist) => scientist.surname[0] !== "C");
    addRotating();
    setTimeout(clearScientists, 250);
    setTimeout(() => {
        removeRotating();
        setTimeout(() => {
            for (let scientist of objs) {
                scientistsItem[idx].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${scientist.url}" alt="${scientist.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientist.name} ${scientist.surname}</h3><p class="scientists__years">${scientist.born} - ${scientist.dead}</p></div></li>`;
                idx += 1;
            }
            idx = 0;
        }, 250);
        setTimeout(() => on = true, 1000);
    }, 1000);
}

function removeScientistsWithFirstNameLetterA() {
    on = false;
    const objs = scientists.filter((scientist) => scientist.name[0] !== "A");
    addRotating();
    setTimeout(clearScientists, 250);
    setTimeout(() => {
        removeRotating();
        setTimeout(() => {
            for (let scientist of objs) {
                scientistsItem[idx].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${scientist.url}" alt="${scientist.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientist.name} ${scientist.surname}</h3><p class="scientists__years">${scientist.born} - ${scientist.dead}</p></div></li>`;
                idx += 1;
            }
            idx = 0;
        }, 250);
        setTimeout(() => on = true, 1000);
    }, 1000);
}

function findLongestAndShortestLivedScientists(e) {
    on = false;
    scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
    addRotating();
    setTimeout(clearScientists, 250);
    setTimeout(() => {
        removeRotating();
        setTimeout(() => {
            scientistsItem[0].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${scientists[0].url}" alt="${scientists[0].alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientists[0].name} ${scientists[0].surname}</h3><p class="scientists__years">${scientists[0].born} - ${scientists[0].dead}</p></div></li>`;
            scientistsItem[1].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${scientists[scientists.length - 1].url}" alt="${scientists[scientists.length - 1].alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientists[scientists.length - 1].name} ${scientists[scientists.length - 1].surname}</h3><p class="scientists__years">${scientists[scientists.length - 1].born} - ${scientists[scientists.length - 1].dead}</p></div></li>`;
        }, 250);
        setTimeout(() => on = true, 1000);
    }, 1000);
}

function findScientistsWithMatchingFirstAndLastNames(e) {
    on = false;
    const objs = scientists.filter((scientist) => scientist.name[0] === scientist.surname[0]);
    addRotating();
    setTimeout(clearScientists, 250);
    setTimeout(() => {
        removeRotating();
        setTimeout(() => {
            for (let scientist of objs) {
                scientistsItem[idx].innerHTML = `<li class="scientists__item"><img class="scientists__img" src="${scientist.url}" alt="${scientist.alt}" class="scientists__img" /><div class="scientists__box"><h3 class="scientists__fullname">${scientist.name} ${scientist.surname}</h3><p class="scientists__years">${scientist.born} - ${scientist.dead}</p></div></li>`;
                idx += 1;
            }
            idx = 0;
        }, 250);
        setTimeout(() => on = true, 1000);
    }, 1000);
}