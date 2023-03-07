import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Container from '../../components/Container/Container';
import StudentItem from '../../components/StudentItem/StudentItem';

const StudentsPage = () => {
  const formGroups = ['feu 1', 'feu 2', 'feu 3', 'feu 4', 'feu 5', 'test 1'];
  const formInterests = ['JavaScript', 'PHP', 'Node.js', 'Python', 'C'];

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
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    surname: '',
    age: '',
    phone: '',
    email: '',
    itKnowledge: '5',
    group: 'feu 3',
    interests: ['JavaScript', 'PHP', 'C'],
  });

  
  // const [name, setName] = useState('John');
  // const [surname, setSurname] = useState('Doe');
  // const [age, setAge] = useState(30);
  // const [phone, setPhone] = useState('+37045646546');

  // const nameHandler = event => setName(event.target.value);
  // const surnameHandler = event => setSurname(event.target.value);
  // const ageHandler = event => setAge(event.target.value);
  // const phoneHandler = event => setPhone(event.target.value);


  // const nameHandler = event => {
  //   setFormData(prevState => {
  //     // const updatedData = {...prevState, name: event.target.value};
  //     // return updatedData;

  //     const updatedData = {...prevState};
  //     updatedData.name = event.target.value;
  //     return updatedData;
  //   });
  // };

  // const surnameHandler = event => {
  //   setFormData(prevState => {
  //     const updatedData = {...prevState};
  //     updatedData.surname = event.target.value;
  //     return updatedData;
  //   });
  // };

  const formInputHandler = event => {
    setFormData(prevState => {
      const updatedData = {...prevState};
      updatedData[event.target.name] = event.target.value;
      return updatedData;
    });
  };

  const interestChangeHandler = event => {
    setFormData(prevState => {
      const value = event.target.value;
      const updatedData = {...prevState};

      if (updatedData.interests.includes(value)) {
        updatedData.interests = updatedData.interests.filter(interest => interest !== value);
      } else {
        updatedData.interests = [...updatedData.interests, value];
      }

      return updatedData;
    });
  }

  const createStudentHandler = (event) => {
    event.preventDefault();
    setStudentsList(prevState => [{...formData, id: uuid()}, ...prevState]);

    setFormData({
      id: null,
      name: '',
      surname: '',
      age: '',
      phone: '',
      email: 'studentas@info.com',
      itKnowledge: '5',
      group: 'feu 3',
      interests: ['JavaScript', 'PHP', 'C'],
    });
  }

  const removeStudentHandler = id => setStudentsList(prevState => prevState.filter(student => student.id !== id));
  
  return (
    <Container>
      <form id="student-form" noValidate onSubmit={createStudentHandler}>
        <div className="form-control">
          <label htmlFor="student-name">Name:</label>
          <input 
            type="text" 
            name="name" 
            id="student-name" 
            value={formData.name} 
            onChange={formInputHandler} 
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="student-surname">Surname:</label>
          <input 
            type="text" 
            name="surname" 
            id="student-surname" 
            value={formData.surname} 
            onChange={formInputHandler} 
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="student-age">Age:</label>
          <input 
            type="number" 
            name="age" 
            id="student-age" 
            value={formData.age} 
            onChange={formInputHandler} 
            min="0" 
            max="120" 
            required 
          />
        </div>
        
        <div className="form-control">
          <label htmlFor="student-phone">Phone:</label>
          <input 
            type="tel" 
            name="phone" 
            id="student-phone" 
            value={formData.phone} 
            onChange={formInputHandler} 
            required 
          />
        </div>
        
        <div className="form-control">
          <label htmlFor="student-email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="student-email" 
            value={formData.email}
            onChange={formInputHandler} 
            required 
          />
        </div>
        
        <div className="form-control">
          <label htmlFor="student-it-knowledge">IT knowledge:</label>
          <input 
            type="range" 
            name="itKnowledge" 
            id="student-it-knowledge" 
            min="1" 
            max="10" 
            value={formData.itKnowledge}
            onChange={formInputHandler}
          />
          <output id="it-knowledge-output">{formData.itKnowledge}</output>
        </div>

        <fieldset>
          <legend>Group:</legend>

          {formGroups.map((group, index) => (
            <div key={index} className="form-control">
              <input 
                type="radio" 
                name="group" 
                id={`group-${index}`}
                value={group}
                onChange={formInputHandler}
              />
              <label htmlFor={`group-${index}`}>{group.toUpperCase()}gr.</label>
            </div>
          ))}
        </fieldset>

        <fieldset>
          <legend>Interests:</legend>
          
          {formInterests.map((interest, index) => (
            <div key={index} className="form-control">
              <input 
                type="checkbox" 
                name="interest" 
                id={`interest-${index}`} 
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={interestChangeHandler}
              />
              <label htmlFor={`interest-${index}`}>{interest}</label>
            </div>
          ))}
        </fieldset>

        <input type="submit" id="form-submit" value="Create Student" />
      </form>

      {studentsList && studentsList.length > 0 && studentsList.map(student => <StudentItem onRemoveStudent={removeStudentHandler} key={student.id} {...student} />)}

    </Container>
  )
}

export default StudentsPage