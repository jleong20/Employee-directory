import React from "react";
//replace props with provider
function EmployeeList(props){
    return(
        <li class="list-group-item">
            <ul class="nav column">
                <li class="nav-item col-sm-4">Name: {props.name}</li>
                <li class="nav-item col-sm-4">Email: {props.email}</li>
                <li class="nav-item col-sm-4">Phone: {props.phone}</li>
              </ul>
        </li>
    );
}

export default EmployeeList;