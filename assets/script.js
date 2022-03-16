console.log('its linked');

// select the headers in the about me section //
const littleHeader = document.getElementById('little-header');
const historyHeader = document.getElementById('history-header');
const hobbiesHeader = document.getElementById('hobbies-header');

// select paragraphs in the about me section //
const littleP = document.getElementById('little-p');
const historyP = document.getElementById('history-p');
const hobbiesP = document.getElementById('hobbies-p');


const showLittle = function () {
    littleP.classList.remove('hide');
    littleHeader.remove();
};

const showHistory = function () {
    historyP.classList.remove('hide');
    historyHeader.remove();
};

const showHobbies = function () {
    hobbiesP.classList.remove('hide');
    hobbiesHeader.remove();
};

littleHeader.addEventListener('click', showLittle);
historyHeader.addEventListener('click', showHistory);
hobbiesHeader.addEventListener('click', showHobbies);
