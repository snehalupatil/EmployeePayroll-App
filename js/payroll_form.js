/** UC12 set event listeners */
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            console.log("payroll form executed" +name.value);
            textError.textContent = "";
            return;
        }
        try{
            
            (new EmployeePayrollData()).name = name.value;
            textError.textContent="";
        }catch (e){
            textError.textContent = e;
        }

    });
    
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
    output.textContent = salary.value; 
    });
});

/*UC 12 create Employee Payroll Object*/

const save = () => {
    try{
        let employeePayrollData = createEmployeePayroll();
    }catch(e){
        return;
    }
}


const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }catch(e){
        setTextValue(',text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note=getInputValueById('#notes');
    let date = getInputValueById('#day') +" " +getInputValueById('#month')+" "
                getInputValueById('#year');

    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;            
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}


/*UC13 - Saving employee payroll to local Storage */

function createAndUpdateStorage(employeePayrollData){

    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    } else{
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
}

 