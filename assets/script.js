const lightBtn = document.querySelector('#light');
const darkBtn = document.querySelector('#dark');

const homeSection = document.querySelector('#home');
const btnContainer = document.querySelector('.btn-container');
const nameText = document.querySelector('.nameText');
const jobText = document.querySelector('.jobText');
const projectSection = document.querySelector('#projects');
const projectCard = document.getElementsByClassName('projectCard');
const aboutMe = document.querySelector('#aboutMe');
const footer = document.querySelector('#footer');

const lightBtnClick = () => {
  if (homeSection.classList.contains('dark-mode-bg')) {
    homeSection.classList.remove('dark-mode-bg');
  }

  if (btnContainer.classList.contains('dark-mode-bg')) {
    btnContainer.classList.remove('dark-mode-bg');
  }

  if (nameText.classList.contains('dark-mode-text')) {
    nameText.classList.remove('dark-mode-text');
  }

  if (jobText.classList.contains('dark-mode-text')) {
    jobText.classList.remove('dark-mode-text');
  }

  if (projectSection.classList.contains('dark-mode-bg-dark' || 'dark-mode-text')) {
    projectSection.classList.remove('dark-mode-bg-dark', 'dark-mode-text');
  }

  for (let i = 0; i < projectCard.length; i++) {
    let card = projectCard[i];
    if (card.classList.contains('dark-mode-bg')) {
      card.classList.remove('dark-mode-bg');
    }
  }

  if (aboutMe.classList.contains('dark-mode-bg' || 'dark-mode-text')) {
    aboutMe.classList.remove('dark-mode-bg', 'dark-mode-text');
  }

  if (footer.classList.contains('dark-mode-bg')) {
    footer.classList.remove('dark-mode-bg');
  }
};

const darkBtnClick = () => {
  if (!homeSection.classList.contains('dark-mode-bg')) {
    homeSection.classList.add('dark-mode-bg');
  }

  if (!btnContainer.classList.contains('dark-mode-bg')) {
    btnContainer.classList.add('dark-mode-bg');
  }

  if (!nameText.classList.contains('dark-mode-text')) {
    nameText.classList.add('dark-mode-text');
  }

  if (!jobText.classList.contains('dark-mode-text')) {
    jobText.classList.add('dark-mode-text');
  }

  if (!projectSection.classList.contains('dark-mode-bg-dark' || 'dark-mode-text')) {
    projectSection.classList.add('dark-mode-bg-dark', 'dark-mode-text');
  }

  for (let i = 0; i < projectCard.length; i++) {
    let card = projectCard[i];
    if (!card.classList.contains('dark-mode-bg')) {
      card.classList.add('dark-mode-bg');
    }
  }

  if (!aboutMe.classList.contains('dark-mode-bg' || 'dark-mode-text')) {
    aboutMe.classList.add('dark-mode-bg', 'dark-mode-text');
  }

  if (!footer.classList.contains('dark-mode-bg')) {
    footer.classList.add('dark-mode-bg');
  }
};

lightBtn.addEventListener('click', lightBtnClick);
darkBtn.addEventListener('click', darkBtnClick);
