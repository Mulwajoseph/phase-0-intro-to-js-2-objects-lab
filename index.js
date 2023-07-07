const employee = { //declares our employee object and assighn an object to it
    name : "Joseph Mulwa",
    streetAddress :" Nairobi"
}


function updateEmployeeWithKeyAndValue(obj, key, value){ //updates new object with the new key value
    const newobj = {...obj}; //creates new object that copies all existing data of employees hence no direct modification from oriinal object

    newobj[key] = value;// adds new key value pairs to the new object

    return newobj; //returns updated employee object
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const newemployee = {...employee}

    delete newemployee[key];
    return newemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key] 
    return employee;
}



