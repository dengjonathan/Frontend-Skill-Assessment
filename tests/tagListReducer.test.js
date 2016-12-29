import {expect} from 'chai';

import tagListState, {INIITAL_STATE} from '../src/reducers/tagListReducer';
import {
  createTagAction,
  destroyTagAction,
  displayTagAction, 
  hideTagAction} from '../src/actions/tagListActions';

describe('list of selected tags', () => {
  const Tags = [
    {
      label: 'Redux',
      color: '#5621A2'
    },
    {
      label: 'VanillaJS',
      color: '#FFCF2E'
    }
  ];
  let tagState;

  beforeEach(() => {
    tagState = tagListState();
  });

  it('should initialize to empty array', () => {
    expect(tagState).to.eql([]);
  });

  it('should create a new tag', () => {
    const nextState = tagListState(tagState, createTagAction(Tags[0]));
    
    expect(nextState.length).to.equal(1);
    expect(nextState[0].label).to.equal('Redux');
  });

  it('should destroy a tag', () => {
    const fullState = Tags.reduce(
      (state, tag) => tagListState(state, createTagAction(tag)), tagState);
    const removedState = tagListState(fullState, destroyTagAction('VanillaJS'));

    expect(removedState.length).to.equal(1);
    expect(removedState[0].label).to.equal('Redux');
  });

  it('should display a tag', () => {
    const fullState = Tags.reduce(
      (state, tag) => tagListState(state, createTagAction(tag)), tagState);
    const displayedState = tagListState(fullState, displayTagAction('Redux'));

    expect(displayedState.filter(tag => tag.displayed).length).to.equal(1);
    expect(displayedState[0].displayed).to.equal(true);
  });

  it('should hide a tag', () => {
    const fullState = Tags.reduce(
      (state, tag) => tagListState(state, createTagAction(tag)), tagState);
    const displayedState = tagListState(fullState, displayTagAction('VanillaJS'));

    expect(displayedState.filter(tag => tag.displayed).length).to.equal(1);

    const removedState = tagListState(displayedState, hideTagAction('VanillaJS'));

    expect(removedState.filter(tag => tag.displayed).length).to.equal(0);
  });
});