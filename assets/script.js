console.log('its linked');

// select the headers in the about me section //
const littleHeader = document.getElementById('little-header');
const historyHeader = document.getElementById('history-header');
const hobbiesHeader = document.getElementById('hobbies-header');

// select paragraphs in the about me section //
const littleP = document.getElementById('little-p');
const historyP = document.getElementById('history-p');
const hobbiesP = document.getElementById('hobbies-p');

const littleReadLess = document.getElementById('little-read-less');
const historyReadLess = document.getElementById('history-read-less');
const hobbiesReadLess = document.getElementById('hobbies-read-less');

// select containers for each work example //
const weatherDashboard = document.getElementById('weather-db');
const movie = document.getElementById('movie');
const workdayScheduler = document.getElementById('workday-scheduler');

// select elements for click event, to show work //
const weatherBtn = document.getElementById('weather-show');
const movieBtn = document.getElementById('movie-show');
const workdayBtn = document.getElementById('workday-show');

// functions for showing the rest the paragraph and showing "read less" //
const showLittle = function () {
    littleP.classList.remove('hide');
    littleHeader.classList.add('hide');
    littleReadLess.classList.remove('hide');
};

const showHistory = function () {
    historyP.classList.remove('hide');
    historyHeader.classList.add('hide');
    historyReadLess.classList.remove('hide');
};

const showHobbies = function () {
    hobbiesP.classList.remove('hide');
    hobbiesHeader.classList.add('hide');
    hobbiesReadLess.classList.remove('hide');
};



// functions for hiding the rest of the paragraph and bringing back "read more" //
const hideReadLess1 = function () {
    littleP.classList.add('hide');
    littleReadLess.classList.add('hide');
    littleHeader.classList.remove('hide');
}

const hideReadLess2 = function () {
    historyP.classList.add('hide');
    historyReadLess.classList.add('hide');
    historyHeader.classList.remove('hide');
}

const hideReadLess3 = function () {
    hobbiesP.classList.add('hide');
    hobbiesReadLess.classList.add('hide');
    hobbiesHeader.classList.remove('hide');
}

// functions for hiding and showing work containers //
const hideWork = function () {
    // weatherDashboard.classList.add('hide');
    movie.classList.add('hide');
    workdayScheduler.classList.add('hide');
}

const showDashboard = function () {
    weatherDashboard.classList.remove('hide');
    movie.classList.add('hide');
    workdayScheduler.classList.add('hide');
};

const showMovie = function () {
    weatherDashboard.classList.add('hide');
    movie.classList.remove('hide');
    workdayScheduler.classList.add('hide');
};

const showWorkday = function () {
    weatherDashboard.classList.add('hide');
    movie.classList.add('hide');
    workdayScheduler.classList.remove('hide');
};

// runs functions, shows the rest of paragraphs when "read more" is clicked //
littleHeader.addEventListener('click', showLittle);
historyHeader.addEventListener('click', showHistory);
hobbiesHeader.addEventListener('click', showHobbies);

// runs functions, hide the rest of paragraphs when "read less" is clicked //
littleReadLess.addEventListener('click', hideReadLess1);
historyReadLess.addEventListener('click', hideReadLess2);
hobbiesReadLess.addEventListener('click', hideReadLess3);

weatherBtn.addEventListener('click', showDashboard);
movieBtn.addEventListener('click', showMovie);
workdayBtn.addEventListener('click', showWorkday);

hideWork();
