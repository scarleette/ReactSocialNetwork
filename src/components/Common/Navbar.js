import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const NavBar = () => {
    return (
      <div>
        <Navbar brand='Little Pet Society' right>
          {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem*/}
          <NavItem divider />
          <NavItem href={process.env.PUBLIC_URL + '/Perfil'}><Icon>perm_identity</Icon></NavItem>
          <NavItem href={process.env.PUBLIC_URL + '/'}><Icon>help_outline</Icon></NavItem>
          <NavItem href={process.env.PUBLIC_URL + '/VistaMuro'}><Icon>chrome_reader_mode</Icon></NavItem>
          <NavItem href={process.env.PUBLIC_URL + '/'}><Icon>chat</Icon></NavItem>
          <NavItem href={process.env.PUBLIC_URL + '/'}><Icon>close</Icon></NavItem>
        </Navbar>
      </div>
    )
  };

export default NavBar;
