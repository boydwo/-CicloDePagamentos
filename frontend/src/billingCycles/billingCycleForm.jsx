import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class BillingCycleForm extends Component {

  render() {
    return (
      <form role="form">
        <div className="box-body"></div>
        <div className="box-footer">
          <button type='submi' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

export default BillingCycleForm