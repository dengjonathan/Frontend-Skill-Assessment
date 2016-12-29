import {connect} from 'react-redux';

import ColorPicker from '../components/ColorPicker/ColorPicker';

const mapStateToProps = state => ({
  colors: state.colors
});

export default connect(mapStateToProps)(ColorPicker);
