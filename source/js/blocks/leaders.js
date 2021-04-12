import {
  firstSection, 
  secondSection, 
  searchField,
  leadersCards} from './dom-elements.js';

firstSection.style.display = 'none';
secondSection.style.display = 'block';

const leaders = Array.from(leadersCards);

const findLeaders = () => {
  return console.log(leaders.map(({children}) => children[2].innerText))

}

searchField.addEventListener('input', findLeaders)