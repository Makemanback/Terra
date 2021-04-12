import {
  nextButton,
  submitButton,
  startLeadersNodes, 
  breakthroughLeadersNodes,
  incomeRatingStart,
  firstSection,
  secondSection,
  thirdSection,
  incomeRatingBreakthrough,
  fourthSection, 
  invalidBlock, 
  inputs,
  courseRepeationsNodes,
  incomeNodes,
  leadershipNodes,
  businessTypeNodes
  } from './dom-elements.js';

const startLeaders = Array.from(startLeadersNodes);
const breakthroughLeaders = Array.from(breakthroughLeadersNodes);
const inputsArray = Array.from(inputs);
const courseRepeationsArray = Array.from(courseRepeationsNodes);
const incomeArray = Array.from(incomeNodes);
const leadershipArray = Array.from(leadershipNodes);
const businessTypeArray = Array.from(businessTypeNodes);

const changeItemVisibility = (section, visibility) => section.style.display = visibility;

const checkRadioButton = (buttonsList) => !!buttonsList.find(({checked}) => checked === true);
const checkInputsValidity = (inputs) => inputs.some(({validity}) => !validity.valid);

const Visibility = {
  NONE: `none`,
  BLOCK: `block`,
  VISUALLY_HIDDEN: 'visually-hidden'
};


const getNextPage = () => {

  if (checkInputsValidity(inputsArray) ||
      !checkRadioButton(courseRepeationsArray) ||
      !checkRadioButton(incomeArray) ||
      !checkRadioButton(leadershipArray) ||
      !checkRadioButton(businessTypeArray)) {
    return (
      nextButton.appendChild(invalidBlock),
      invalidBlock.classList.remove(Visibility.VISUALLY_HIDDEN)
    )
  }

  if (incomeRatingStart.checked) {
    changeItemVisibility(firstSection, Visibility.NONE);
    changeItemVisibility(secondSection, Visibility.BLOCK);
    invalidBlock.classList.add(Visibility.VISUALLY_HIDDEN);
  }

  if (incomeRatingBreakthrough.checked) {
    changeItemVisibility(firstSection, Visibility.NONE);
    changeItemVisibility(thirdSection, Visibility.BLOCK);
    invalidBlock.classList.add(Visibility.VISUALLY_HIDDEN);
  }

  if (checkRadioButton(startLeaders)) {
    changeItemVisibility(secondSection, Visibility.NONE);
    changeItemVisibility(fourthSection, Visibility.BLOCK);
    changeItemVisibility(nextButton, Visibility.NONE);
    changeItemVisibility(submitButton, Visibility.BLOCK);
    invalidBlock.classList.add(Visibility.VISUALLY_HIDDEN);
  }

  if (checkRadioButton(breakthroughLeaders)) {
    changeItemVisibility(thirdSection, Visibility.NONE);
    changeItemVisibility(fourthSection, Visibility.BLOCK);
    changeItemVisibility(nextButton, Visibility.NONE);
    changeItemVisibility(submitButton, Visibility.BLOCK);
    invalidBlock.classList.add(Visibility.VISUALLY_HIDDEN);
  }
}

nextButton.addEventListener(`click`, getNextPage);

