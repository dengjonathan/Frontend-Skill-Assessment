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
  it('should initialize to empty array', () => {
    expect(tagListState()).to.eql([]);
  });
  it('should add a tag', () => {
    const tagState = INIITAL_STATE;
    
    tagListState()
  });
  it('should remove a tag')
});