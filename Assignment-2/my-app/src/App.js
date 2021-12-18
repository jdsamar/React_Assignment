import './App.css';

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}
  

function App() {
  return (
    <div className="App">

        <img src={employee.profileImg} className="App-logo" alt="logo" />
        <h1 className = "header">{employee.name}</h1>
        <p className = "small">Location</p>
        <p className = "big">{employee.location}</p>
        <p className = "small">BloodGroup</p>
        <p className = "big">{employee.bloodGroup}</p>
        <p className = "small">Age</p>
        <p className = "big">{employee.age}</p>

    </div>
  );
}

export default App;
