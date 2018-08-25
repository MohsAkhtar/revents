import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class EventListAttendee extends Component {
  render() {
    return (
      <List.Item>
          <Image as='a' size='mini' circular src='https://randomuser.me/api/portraits/women/42.jpg'/> {/*as means we can have image as link*/}
      </List.Item>
    )
  }
}


export default EventListAttendee