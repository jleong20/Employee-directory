import React from "react";

EmployeeList = (props) => {
    return(
        <li class="list-group-item">
            Name: {props.name}
        </li>
    );
}

export default EmployeeList;