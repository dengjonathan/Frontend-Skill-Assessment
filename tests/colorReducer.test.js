import {expect} from 'chai';

import colorState from '../src/reducers/colorReducer';
import {createColorAction} from '../src/actions/colorActions';

describe('color reducer', () => {
  it('can add a color', () => {
    const state = colorState();
    const nextState = colorState(state, createColorAction('#8C8D91'));
    expect(nextState).to.eql(['#8C8D91']);
  })
});