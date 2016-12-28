import availTagsState, {INIITAL_STATE} from '../src/reducers/availTagsReducer';
import {createTagAction} from '../src/actions/availTagsActions';
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

  it('should initialize to empty array', () => {
    expect(availTagsState()).to.eql([]);
  });

  it('should create a new tag', () => {
    const nextState = availTagsState(createTagAction(Tags[0]), INIITAL_STATE);
    expect(nextState.length).to.equal(1);
    expect(nextState[0].label).to.equal('Redux');
  });

  it('should remove a tag', () => {
    const fullState = Tags.reduce((state, tag) => 
      availTagsState(createTagAction(tag), state)
    );
    const removedState = availTagsState(removeTagAction('VanillaJS'), fullState);
    expect(removedState.length).to.equal(1);
    expect(removedState[0].label).to.equal('Redux');
  });
});