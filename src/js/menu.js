import menuCardTmpl from '../templates/cards.hbs';

import cards from '../data/menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const checkbox = document.querySelector('#theme-switch-toggle');
const menuListEl = document.querySelector('.js-menu');
const bodyEl = document.querySelector('body');
const currentTheme = localStorage.getItem('theme');

if (currentTheme !== null) {
    bodyEl.classList.add(currentTheme);
} else {
    bodyEl.classList.add(Theme.LIGHT)
};

if(currentTheme === Theme.DARK) {
    checkbox.checked = true;
}

const onCreateMenuCards = () => {
    return cards.map(menuCardTmpl)
};

const menuCardsMarkup = onCreateMenuCards().join('');

menuListEl.insertAdjacentHTML('beforeend', menuCardsMarkup);

const onThemeChange = () => {
    if(bodyEl.classList.contains(Theme.LIGHT)) {
        bodyEl.classList.replace(Theme.LIGHT, Theme.DARK); 
        checkbox.checked = true;
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
        checkbox.checked = false;
        localStorage.setItem('theme', Theme.LIGHT);
    }   
};

checkbox.addEventListener('change', onThemeChange);
