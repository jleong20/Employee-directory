import React, {Component} from "react";
import EmployeeList from "./components/empList";
import EmployeeJSON from "./empList.json";

class App extends Component{
  render(){
    return(
      <div class="container">
        <h1>Employee Directory</h1>
        <input type="text" placeholder="Search.."></input>
        <div>
          <div class="card-header">Employee Directory</div>
          <ul class="list-group list-group-flush">
            {EmployeeJSON.map(Employee =>(
            <EmployeeList id={EmployeeJSON.id} name={EmployeeJSON.name} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
