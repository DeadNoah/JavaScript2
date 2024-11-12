/* Noah Sanchez NOV 12 2024
Adapted From https://javascripts.com/
Sort Without Articles */

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Almost', 'Sleeping With Sirens', 'The Starting Line', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

function displayBands(bandsArray) {
  document.querySelector('#bands').innerHTML =
    bandsArray
      .map(band => `<li>${band}</li>`)
      .join('');
}

const sortedBands = [...bands].sort((a, b) => strip(a) > strip(b) ? 1 : -1);
displayBands(sortedBands);

function randomizeList() {
  const randomizedBands = [...bands].sort(() => Math.random() - 0.5);
  displayBands(randomizedBands);
}

function sortList() {
  displayBands(sortedBands);
}
