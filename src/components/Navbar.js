import React from 'react'
import {Modal, Row, Col, Button, Carousel} from 'react-materialize'

const Navbar = () => {
  return (
    <div className='App'>
      <nav>
        <div className="App-header">
          <Row>
            <Col l={8} xs={12}>
              <h1>Paper <span className="title">Trader</span></h1>
            </Col>
            <Col l={4} xs={12}>
            <p>
              <span>
                <Modal
                  header='Log in'
                  trigger={<a>log in </a>}>
                  <p>Login stuff</p>
                </Modal>
              </span>
              or
              <span>
                <Modal
                  header='Sign up'
                  trigger={<a> sign up</a>}>
                  <p>sign up stuff</p>
                </Modal>
              </span>
            </p>
          </Col>
        </Row>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
