import React, { Component } from 'react';
import {Segment, Icon, List, Button, Item} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
 class EventListItem extends Component {
  render() {
      const {event, eventToOpen, deleteEvent} = this.props;
    
    return (
      <Segment.Group>
         <Segment>
           <Item.Group>
             <Item>
               <Item.Image size="tiny" circular src={event.hostPhotoURL}/>
               <Item.Content>
                 <Item.Header as="a">{event.title}</Item.Header>
                 <Item.Description>
                   Hosted by <a>{event.hostedBy}</a>
                 </Item.Description>
                 </Item.Content>
             </Item>
           </Item.Group>
         </Segment>
         <Segment>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}
         </Segment>
         <Segment secondary>
           <List horizontal>
               {event.attendee && event.attendees.map(attendee =>(
                <EventListAttendee key={attendee.id} attendee={attendee}/>
               ))}
                
           </List>
         </Segment>
         <Segment clearing>
           <Button onClick={deleteEvent(event.id)} as="a" content="Delete" color="red" floated="right" />
           <Button onClick={eventToOpen(event)} as="a" content="View" color="teal" floated="right" />
         </Segment>
      </Segment.Group>
    )
  }
}

export default EventListItem;








































































