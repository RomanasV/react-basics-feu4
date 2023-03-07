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
  
  const [name, setName] = useState('John');
  const [surname, setSurname] = useState('Doe');
  // const [age, setAge] = useState(30);
  // const [phone, setPhone] = useState('+37045646546');

  // const nameHandler = event => setName(event.target.value);
  // const surnameHandler = event => setSurname(event.target.value);
  // const ageHandler = event => setAge(event.target.value);
  // const phoneHandler = event => setPhone(event.target.value);

  const [formData, setFormData] = useState({
    id: null,
    name: 'John',
    surname: 'Doe',
    age: '50',
    phone: '+3704646546',
    email: 'studentas@info.com',
    itKnowledge: '5',
    group: 'feu 3',
    interests: ['JavaScript', 'PHP', 'C'],
  });

  const nameHandler = event => {
    setFormData(prevState => {
      // const updatedData = {...prevState, name: event.target.value};
      // return updatedData;

      const updatedData = {...prevState};
      updatedData.name = event.target.value;
      return updatedData;
    });
  };

  const surnameHandler = event => {
    setFormData(prevState => {
      const updatedData = {...prevState};
      updatedData.surname = event.target.value;
      return updatedData;
    });
  };

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

    // const interestInputs = [...event.target.interest];
    // const selectedInputs = interestInputs.filter(interest => interest.checked);
    // const studentInterests = selectedInputs.map(interest => interest.value);

    // const studentInterests = [...event.target.interest].filter(interest => interest.checked).map(interest => interest.value);

    // const studentDataObj = {
    //   id: uuid(),
    //   name: name,
    //   surname: surname,
    //   age: event.target.age.value,
    //   phone: event.target.phone.value,
    //   email: event.target.email.value,
    //   itKnowledge: event.target['it-knowledge'].value,
    //   group: event.target.group.value,
    //   interests: studentInterests,
    // }

    setStudentsList(prevState => [{...formData, id: uuid()}, ...prevState]);
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
          


          {/* <div className="form-control">
            <input type="radio" name="group" id="group-2" value="feu 2" onChange={formInputHandler} />
            <label htmlFor="group-2">FEU 2gr.</label>
          </div>

          <div className="form-control">
            <input type="radio" name="group" id="group-3" value="feu 3" onChange={formInputHandler} />
            <label htmlFor="group-3">FEU 3gr.</label>
          </div>

          <div className="form-control">
            <input type="radio" name="group" id="group-4" value="feu 4" onChange={formInputHandler} />
            <label htmlFor="group-4">FEU 4gr.</label>
          </div>

          <div className="form-control">
            <input type="radio" name="group" id="group-5" value="feu 5" onChange={formInputHandler} />
            <label htmlFor="group-5">FEU 5gr.</label>
          </div> */}
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

          {/* <div className="form-control">
            <input 
              type="checkbox" 
              name="interest" 
              id="interest-2" 
              value="PHP"
              checked={formData.interests.includes("PHP")}
            />
            <label htmlFor="interest-2">PHP</label>
          </div>

          <div className="form-control">
            <input 
              type="checkbox" 
              name="interest" 
              id="interest-3" 
              value="C"
              checked={formData.interests.includes("C")}
            />
            <label htmlFor="interest-3">C</label>
          </div>

          <div className="form-control">
            <input type="checkbox" name="interest" id="interest-4" value="Python" />
            <label htmlFor="interest-4">Python</label>
          </div>

          <div className="form-control">
            <input type="checkbox" name="interest" id="interest-5" value="Node.js" />
            <label htmlFor="interest-5">Node.js</label>
          </div> */}
        </fieldset>

        <input type="submit" id="form-submit" value="Create Student" />
      </form>

      {studentsList && studentsList.length > 0 && studentsList.map(student => <StudentItem onRemoveStudent={removeStudentHandler} key={student.id} {...student} />)}

    </Container>
  )
}

export default StudentsPage