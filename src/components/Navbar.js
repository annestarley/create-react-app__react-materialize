import React from 'react'
import {Modal, Row, Col, Button, Carousel, Input} from 'react-materialize'

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
                  className="modal"
                  header='Log in'
                  trigger={<a>log in </a>}>
                  <Row>
                    <Input s={12} label="Username" />
                    <Input type="password" label="password" s={12} />
                </Row>
                </Modal>
              </span>
              or
              <span>
                <Modal
                  header='Sign up'
                  trigger={<a> sign up</a>}>
                  <Input s={12} label="Username" />
                  <Input type="password" label="password" s={12} />
                  <Input type="password" label="confirm password" s={12} />
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
