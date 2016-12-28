import tagListState, {INIITAL_STATE} from '../src/reducers/tagListReducer';
import {addTagAction, removeTagAction} from '../src/actions/tagListActions';
import {expect} from 'chai';

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
  it('should add a tag', () => {
    const nextState = tagListState(tagState, addTagAction(Tags[0]));
    expect(nextState.length).to.equal(1);
    expect(nextState[0].label).to.equal('Redux');
  });
  it('should remove a tag', () => {
    const nextState = Tags.reduce(
      (state, tag) => tagListState(state, addTagAction(tag)), tagState);
    expect(nextState.map(tag => tag.label)).to.eql(['Redux', 'VanillaJS']);
    const removedState = tagListState(nextState, removeTagAction('VanillaJS'));
    expect(removedState.length).to.equal(1);
    expect(removedState[0].label).to.equal('Redux');
  });
});