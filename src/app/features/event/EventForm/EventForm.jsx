import React,{Component} from 'react';
import { Segment, Form, Button} from 'semantic-ui-react';

class EventForm extends Component {
    render() {
        const {handleCancel} = this.props;
        return ( 
            <Segment>
             <Form>
              <Form.Field>
                <label>Event Title</label>
                <input  placeholder="First Name" />
              </Form.Field>
              <Form.Field>
                <label>Event Date</label>
                <input  type="date" placeholder="event date" />
              </Form.Field>
              <Form.Field>
                <label>City</label>
                <input placeholder="City event is taking place" />
              </Form.Field>
              <Form.Field>
                <label>Venu</label>
                <input placeholder="Enter the venu of the event" />
              </Form.Field>
              <Form.Field>
                <label>Hosted by</label>
                <input placeholder="Enter the name of person hosting" />
              </Form.Field>
              <Button positive type="submit" >Submit</Button>
              <Button onClick={handleCancel} type="button">Cancel</Button>
             </Form>
            </Segment>

        )
    }
}

export default EventForm;