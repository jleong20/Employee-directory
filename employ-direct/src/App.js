import React, {Component} from "react";
import EmployeeList from "./components/empList";
import EmployeeJSON from "./empList.json";

class App extends Component{
  render(){
    const styles={
      card:{
        background: "#BEBEBE",
      }
    }
    return(
      <div class="container">
        <h1>Employee Directory</h1>
        <input type="text" placeholder="Search.."></input>
    
        <div class="card" style={styles.card}>
          <div class="card-header">
            <ul class="nav column">
              <li class="nav-item col-sm-4">Name</li>
              <li class="nav-item col-sm-4">Email</li>
              <li class="nav-item col-sm-4">Phone</li>
            </ul>
          </div>
          <ul class="list-group list-group-flush">
            {EmployeeJSON.map(Employee =>(
            <EmployeeList id={Employee.id} name={Employee.name} email={Employee.email} phone={Employee.phone}/>
            ))}
          </ul>
          
        </div> 
      </div>
    )
  }
}

export default App;
