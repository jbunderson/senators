import React, { Component } from 'react'
import Senator from './Senator.js'
import { getDemocrats, getRepublicans } from '../filters'

export default class extends Component {
  
  renderRepublicans () {
    return getRepublicans()
      .map(senator => <Senator/>)
  }
  
  render() {
    const republicans = this.renderRepublicans()
    
    return (
      <div>
        <h2>Republicans</h2>
        <Senator/>
      </div>
    )
  }
}


