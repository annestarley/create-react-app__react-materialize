import React from 'react'
import {Icon, Row, Autocomplete, Col} from 'react-materialize'

const Searchbar = () => {
  return (
    <div>
    {/* //   <div class="search-container">
    //     <form action="/action_page.php">
    //       <input type="text" placeholder="Search.." name="search"></input>
    //       <button type="submit"><i class="fa fa-search"></i></button>
    //     </form>
    //   </div> */}
      <Row>
        <Col l={6}>
          <Autocomplete
            title='Company code'
            data={
              {
                'Apple': null,
                'Microsoft': null,
                'Google': 'http://placehold.it/250x250'
              }
            }
          />
          <Icon>search</Icon>
        </Col>
      </Row>
   </div>
  )
}

export default Searchbar
