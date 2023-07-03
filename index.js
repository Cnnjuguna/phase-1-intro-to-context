// Your code here

someProfile = ["Gray", "Worm", "Security", 1]
function createEmployeeRecord(someProfile) {
    return {
        firstName: someProfile[0],
        familyName: someProfile[1],
        title: someProfile[2],
        payPerHour: someProfile[3],
        timeInEvents:[],
        timeOutEvents:[],
    }
}

//? createEmployeeRecord(firstName = someProfile[0]);

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]

// todo: Use .map to create two objects in a new array
function createEmployeeRecords(twoRows){
    return twoRows.map(createEmployeeRecord);

}

// todo: adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
function createTimeInEvent(employeeRecord, dateTime){
    let [date, hour] = dateTime.split(' ');

    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date,
        
    });

    return employeeRecord;

    
}


function createTimeOutEvent(employeeRecord, dateTime){
    let [date, hour] = dateTime.split(' ');

    employeeRecord.timeOutEvents.push({ type: "TimeOut", hour: parseInt(hour, 10), date: date,});

    return employeeRecord;
}


function hoursWorkedOnDate(employeeRecord, date){
// find out if the events in the argument for date are in the timeInEvents and timeOutEvents.
    let timeInEvent = employeeRecord.timeInEvents.find((item) => item.date === date);
    let timeOutEvent = employeeRecord.timeOutEvents.find((item) => item.date === date);

// if the event is in the timeInEvents and timeOutEvents, the test is true
    if (timeInEvent && timeOutEvent) {
        const timeIn =  parseInt(timeInEvent.hour, 10);
        const timeOut = parseInt(timeOutEvent.hour, 10);
// Divide by a hundred to get hours
        const hoursWorked = (timeOut - timeIn) / 100;

        return hoursWorked; 
    }
    
    return false;
   
}



function wagesEarnedOnDate(employeeRecord, date1, date2) {
    let hoursWorked1 = hoursWorkedOnDate(employeeRecord, date1);
    let hoursWorked2 = hoursWorkedOnDate(employeeRecord, date2);

    const wage1 = hoursWorked1 * employeeRecord.payPerHour;
    let wage2 = hoursWorked2 * employeeRecord.payPerHour;

    const allWagesFor = wage1 + wage2;

    return allWagesFor
}



function allWagesFor(employeeRecord, date1, date2){

   let allWages = wagesEarnedOnDate(employeeRecord, date1, date2);

    return allWages

}





