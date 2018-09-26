import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const NavBar = () => {
    return (
      <div>
        <Navbar brand='Little Pet Society' right>
          {/* <NavItem onClick={() => console.log('test click')}>Getting started</NavItem*/}
          <NavItem divider />
          <NavItem href='../Perfil/Perfil.js'><Icon>perm_identity</Icon>holi</NavItem>
          <NavItem href=''><Icon>help_outline</Icon></NavItem>
          <NavItem href='../Muro/VistaMuro.js'><Icon>chrome_reader_mode</Icon></NavItem>
          <NavItem href=''><Icon>chat</Icon></NavItem>
          <NavItem href=''><Icon>close</Icon></NavItem>
        </Navbar>
      </div>
    )
  };

export default NavBar;
