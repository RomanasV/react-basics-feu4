import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Container from '../../components/Container/Container';
import StudentItem from '../../components/StudentItem/StudentItem';

const StudentsPage = () => {
  const [studentsList, setStudentsList] = useState([
    {
      id: uuid(),
      name: 'Vardas 10',
      surname: 'Pavardė 1',
      age: 25,
      phone: '+3704564879',
      email: 'vardas1@gmail.com',
      itKnowledge: 7,
      group: 'feu 3',
      interests: ['JavaScript', 'PHP'],
    },
    {
      id: uuid(),
      name: 'Vardas 2',
      surname: 'Pavardė 2',
      age: 32,
      phone: '+37045645455',
      email: 'vardas3@gmail.com',
      itKnowledge: 10,
      group: 'feu 1',
      interests: ['JavaScript'],
    },
    {
      id: uuid(),
      name: 'Vardas 3',
      surname: 'Pavardė 3',
      age: 20,
      phone: '+3704564879',
      email: 'vardas3@gmail.com',
      itKnowledge: 2,
      group: 'feu 4',
      interests: ['PHP'],
    },
    {
      id: uuid(),
      name: 'Vardas 5',
      surname: 'Pavardė 5',
      age: 40,
      phone: '+3704564879',
      email: 'vardas5@gmail.com',
      itKnowledge: 4,
      group: 'feu 3',
      interests: [],
    },
    {
      id: uuid(),
      name: 'Vardas 5',
      surname: 'Pavardė 5',
      age: 25,
      phone: '+3704564879',
      email: 'vardas5@gmail.com',
      itKnowledge: 7,
      group: 'feu 3',
      interests: ['JavaScript', 'PHP'],
    },
  ]);

  const createStudentHandler = (event) => {
    event.preventDefault();
    console.log(event.target.age.value);
    console.log(event.target.name.value);

    let studentDataObj = {
      name: event.target.name.value,
      surname: event.target.surname.value,
      age: event.target.age.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      itKnowledge: event.target['it-knowledge'].value,
      group: event.target.group.value,
      // interests: studentInterests,
    }

    console.log(studentDataObj);
  }

  // const removeStudentHandler = id => {
  //   setStudentsList(prevState => {
  //     const updatedStudentList = prevState.filter(student => student.id !== id);
  //     return updatedStudentList;
  //   });
  // }

  const removeStudentHandler = id => setStudentsList(prevState => prevState.filter(student => student.id !== id));
  
  return (
    <Container>
      <form id="student-form" noValidate onSubmit={createStudentHandler}>
        <div className="form-control">
          <label htmlFor="student-name">Name:</label>
          <input type="text" name="name" id="student-name" defaultValue="John" required />
        </div>

        <div className="form-control">
          <label htmlFor="student-surname">Surname:</label>
          <input type="text" name="surname" id="student-surname" defaultValue="Doe" required />
        </div>

        <div className="form-control">
          <label htmlFor="student-age">Age:</label>
          <input type="number" name="age" id="student-age" defaultValue="25" min="0" max="120" required />
        </div>
        
        <div className="form-control">
          <label htmlFor="student-phone">Phone:</label>
          <input type="tel" name="phone" id="student-phone" defaultValue="+37045466465" required />
        </div>
        
        <div className="form-control">
          <label htmlFor="student-email">Email:</label>
          <input type="email" name="email" id="student-email" defaultValue="info@student.lt" required />
        </div>
        
        <div className="form-control">
          <label htmlFor="student-it-knowledge">IT knowledge:</label>
          <input type="range" name="it-knowledge" id="student-it-knowledge" min="1" max="10" />
          <output id="it-knowledge-output">5</output>
        </div>

        <fieldset>
          <legend>Group:</legend>
          
          <div className="form-control">
            <input type="radio" name="group" id="group-1" value="feu 1" />
            <label htmlFor="group-1">FEU 1gr.</label>
          </div>

          <div className="form-control">
            <input type="radio" name="group" id="group-2" value="feu 2" />
            <label htmlFor="group-2">FEU 2gr.</label>
          </div>

          <div className="form-control">
            <input type="radio" name="group" id="group-3" value="feu 3" />
            <label htmlFor="group-3">FEU 3gr.</label>
          </div>

          <div className="form-control">
            <input type="radio" name="group" id="group-4" value="feu 4" />
            <label htmlFor="group-4">FEU 4gr.</label>
          </div>

          <div className="form-control">
            <input type="radio" name="group" id="group-5" value="feu 5" />
            <label htmlFor="group-5">FEU 5gr.</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Interests:</legend>
          
          <div className="form-control">
            <input type="checkbox" name="interest" id="interest-1" value="JavaScript" />
            <label htmlFor="interest-1">JavaScript</label>
          </div>

          <div className="form-control">
            <input type="checkbox" name="interest" id="interest-2" value="PHP" />
            <label htmlFor="interest-2">PHP</label>
          </div>

          <div className="form-control">
            <input type="checkbox" name="interest" id="interest-3" value="C" />
            <label htmlFor="interest-3">C</label>
          </div>

          <div className="form-control">
            <input type="checkbox" name="interest" id="interest-4" value="Python" />
            <label htmlFor="interest-4">Python</label>
          </div>

          <div className="form-control">
            <input type="checkbox" name="interest" id="interest-5" value="Node.js" />
            <label htmlFor="interest-5">Node.js</label>
          </div>
        </fieldset>

        <input type="submit" id="form-submit" value="Create Student" />
      </form>

      {studentsList && studentsList.length > 0 && studentsList.map(student => <StudentItem onRemoveStudent={removeStudentHandler} key={student.id} {...student} />)}

    </Container>
  )
}

export default StudentsPage