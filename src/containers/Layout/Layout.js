import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import TopBar from '../../components/TopBar/TopBar'
import styles from './Layout.module.css'

class Layout extends Component {
  render () {
    return (
      <Aux>
        <div>
          <TopBar />
        </div>
        <main className={styles.Layout}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
