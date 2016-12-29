import React, {Component} from 'react';

import Button from '../Button/Button';
import ColorPickerContainer from '../../containers/ColorPickerContainer';
import SelectedColor from '../SelectedColor/SelectedColor';
import {dispatch} from '../../store/store';
import {createTagAction} from '../../actions/tagListActions';

class CreateTag extends Component {
  constructor() {
    super();
    this.state = {
      color: '#0FADE9',
      value: ''
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeColor(color) {
    this.setState({color});
  }

  onChangeValue(event) {
    this.setState({value: event.target.value});
  }

  onSubmit() {
    // TODO: add some error checking here
    console.log(this.state.value, this.state.color);
    dispatch(createTagAction({label: this.state.value, color: this.state.color}));
    this.setState({
      value: '',
      color: '#0FADE9'
    })
  }

  render() {
    return (
      <div className='createTag'>
        <input value={this.state.value} onChange={this.onChangeValue}/>
        <ColorPickerContainer selected={this.state.color} onChangeColor={this.onChangeColor}/>
        <SelectedColor color={this.state.color}/>
        <Button label='Add Tag' onClick={this.onSubmit} />
     </div>
    );
  }
}

export default CreateTag;