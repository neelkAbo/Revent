import React, { Component } from 'react';
import {Menu, Container, Button} from 'semantic-ui-react';

 class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
       <Container>
            <Menu.Item header>
              <img src="asset/logo.png" alt="logo" />
              Re-vents
            </Menu.Item>
            <Menu.Item name="Events" />
            <Menu.Item>
                <Button floated="right" positive inverted content="Create Event"/>
            </Menu.Item>
            <Menu.Item position="right">
                <Button basic inverted content="Login"/>
                <Button basic inverted content="SignOut" style={{ marginLeft: '.5em'}}/>
            </Menu.Item>
       </Container>
        
      </Menu>
    )
  }
}
export default NavBar;
