let empPayrollList ;
window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList = getEmployeePayrollDataFromLocalStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromLocalStorage = () => {
    return localStorage.getItem("EmployeePayrollList") ?
        JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
};

const createInnerHtml = () => {
    if(empPayrollList.length == 0) return;
    const headerHtml =
        "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
        
        let innerHtml = `${headerHtml}`;
        for(const empPayrollData of empPayrollList){
             innerHtml = `${innerHtml}
             <tr>
                     <td><img class="profile" alt="" src="${empPayrollData._profilePic}" ></td>
                     <td>${empPayrollData._name}</td>
                     <td>${empPayrollData._gender}</td>
                     <td>${getDeptHtml(empPayrollData._department)}</td>
                     <td>${empPayrollData._salary}</td>
                     <td>${stringifyDate(empPayrollData._startDate)}</td>
                     <td>
                         <img id="${empPayrollData.id}" onclick="remove(this)"  src="../assest/icons/delete-black-18dp.svg" alt="delete">
                         <img id="${empPayrollData.id}" onclick="update(this)"  src="../assest/icons/create-black-18dp.svg" alt="edit">
                     </td>
                 </tr>
             `;
        }
        document.querySelector("#table-display").innerHTML = innerHtml;
     }

     const getDeptHtml = (deptList) => {
        let deptHtml = '';
        for(const dept of deptList){
            deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
        }
        return deptHtml;
    }

    const stringifyDate = (date) => {
        const options = {  day: 'numeric', month: 'short', year: 'numeric' };
            const newDate = !date ? "undefined" :
                new Date(Date.parse(date)).toLocaleDateString("en-GB", options);
                return newDate;
    }

    const remove = (node) => {
        let empPayrollData = empPayrollList.find(empData => empData._id == node._id)
        if(!empPayrollData) return;
        const index = empPayrollList.map(empData => empData._id)
                                     .indexOf(empPayrollData._id);
         empPayrollList.splice(index,1);
         localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
         document.querySelector(".emp-count").textContent = empPayrollList.length;
         createInnerHtml();
   }

   const update = (node) => {
       let empPayrollData = empPayrollList.find(empData => empData._id == node.id)
       if (!empPayrollData) return;
       localStorage.setItem('editEmp', JSON.stringify(empPayrollData))
       window.location.replace(site_properties.add_emp_payroll_page);
   }