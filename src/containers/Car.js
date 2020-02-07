import {connect} from 'react-redux';
import Car from '../components/Car';
// import React from 'react'


const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}


export default connect(mapStateToProps)(Car);