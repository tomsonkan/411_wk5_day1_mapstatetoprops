import {connect} from 'react-redux';
import Home from '../components/Home';
// import React from 'react'


const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}


export default connect(mapStateToProps)(Home);