import React, { Component } from 'react';
import {connect} from 'react-redux';

class work extends Component {
  state = { 

    }
  render() {
    console.log(this.props.nav)
    return (
      <div>this is work</div>
    );
  }
}


const mapStateToProps = state => {
	return {
		nav: state.nav
	}
}

export default connect(mapStateToProps)(work);

