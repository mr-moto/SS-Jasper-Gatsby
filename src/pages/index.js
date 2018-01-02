import React, { Component } from 'react';
import {connect} from 'react-redux';

class work extends Component {
  state = { 

    }
  render() {
    console.log(this.props.test)
    return (
      <div>this is work</div>
    );
  }
}


const mapStateToProps = state => {
	return {
		test: state.test
	}
}

export default connect(mapStateToProps)(work);

