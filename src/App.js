import './App.css';
import data from './data/patient_fixed.json';

function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>Patient Information</h1>
      <p>Name of the patient: {`${data.name[0].given} ${data.name[0].family}`}</p>
      <p>Organization Name: {data.managingOrganization.display}</p>
      <p>Gender: {data.gender}</p>
      <p>Number of conditions they have: {data.conditions.length}</p>
      <p>List of conditions: </p>
      <ul style={{textIndent: '5px'}}>
        {data.conditions.map(condition => <li style={{listStyle: 'none'}}>{condition}</li>)}
      </ul>
    </div>
  );
}

export default App;
