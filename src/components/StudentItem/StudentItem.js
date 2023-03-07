import React, { useState } from 'react'

const StudentItem = (props) => {
  const [showPrivateInfo, setShowPrivateInfo] = useState(false);
  let { name, surname, age, phone, email, itKnowledge, group, interests, id, onRemoveStudent } = props;

  console.log(id)
  if (!name && !surname) {
    return;
  }

  const personalInfoHandler = () => setShowPrivateInfo(prevState => !prevState);

  return (
    <div className='student-item'>
      <h2>{name} {surname}</h2>

      {age && <p><strong>Age: </strong> {age}</p>}
      {phone && <p><strong>Phone: </strong> {showPrivateInfo ? phone : '****'}</p>}
      {email && <p><strong>Email: </strong> {showPrivateInfo ? email : '****'}</p>}
      {itKnowledge && <p><strong>IT Knowledge: </strong> {itKnowledge}</p>}
      {group && <p><strong>Group: </strong> {group.toUpperCase()}</p>}
      
      {interests && interests.length > 0 ? (
        <>
          <h3>Interests:</h3>
          <ul>
            {interests.map((interest, index) => <li key={index}>{interest}</li>)}
          </ul>
        </>
      ) : (
        <h3>No interests...</h3>
      )}

      <button onClick={personalInfoHandler}>{showPrivateInfo ? 'Hide Private Info' : 'Show Private Info'}</button>
      <button onClick={() => onRemoveStudent(id)}>Remove Student</button>
      <button>Edit Student</button>
    </div>
  )
}

export default StudentItem