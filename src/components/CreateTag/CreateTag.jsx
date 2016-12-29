import React, {Component} from 'react';

import Button from '../Button/Button';
import ColorPickerContainer from '../../containers/ColorPickerContainer';
import SelectedColor from '../SelectedColor/SelectedColor';
import AvailableTagsContainer from '../../containers/AvailableTagsContainer';
import {dispatch} from '../../store/store';
import {createTagAction} from '../../actions/tagListActions';
import './CreateTag.css';

class CreateTag extends Component {
  constructor() {
    super();
    this.state = {
      color: '#0FADE9',
      value: '',
      colorsDisplayed: false
    }
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showColors = this.showColors.bind(this);
  }

  onChangeColor(color) {
    this.setState({color});
  }

  onChangeValue(event) {
    this.setState({value: event.target.value});
  }

  onSubmit() {
    dispatch(createTagAction({label: this.state.value, color: this.state.color}));
    this.setState({
      value: '',
      color: '#0FADE9'
    })
  }

  showColors() {
    this.setState({colorsDisplayed: !this.state.colorsDisplayed});
  }

  render() {
    return (
      <div className='createTag'>
        <AvailableTagsContainer value={this.state.value} onChangeValue={this.onChangeValue}/>
        <SelectedColor color={this.state.color} onClick={this.showColors}/>
        <Button label='Add Tag' onClick={this.onSubmit} />
        <ColorPickerContainer displayed={this.state.colorsDisplayed} selected={this.state.color} onChangeColor={this.onChangeColor}/>
     </div>
    );
  }
}

export default CreateTag;