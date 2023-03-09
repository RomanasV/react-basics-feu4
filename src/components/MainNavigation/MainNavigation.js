import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import './MainNavigation.css'

const MainNavigation = () => {
  return (
    <Container>
      <ul className='main-navigation'>
        <li>
          <NavLink to='/codeacademy'>CodeAcademy Project</NavLink>
        </li>
        <li>
          <NavLink to='/other-projects/contacts'>Contacts Project</NavLink>
        </li>
        <li>
          <NavLink to='/other-projects/counter'>Counter</NavLink>
        </li>
        <li>
          <NavLink to='/other-projects/cars'>Cars</NavLink>
        </li>
        <li>
          <NavLink to='/other-projects/shopping-list'>Shopping List</NavLink>
        </li>
        <li>
          <NavLink to='/other-projects/todo'>Todo</NavLink>
        </li>
        <li>
          <NavLink to='/other-projects/students'>Students</NavLink>
        </li>
        <li>
          <NavLink to='/other-projects/chuck-norris'>Chuck Norris API</NavLink>
        </li>
        <li>
          <NavLink to='/other-projects/dogs'>Dogs API</NavLink>
        </li>
      </ul>
    </Container>
  )
}

export default MainNavigation