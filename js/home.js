window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}    
    <tr>
    <td><img class="profile" alt=""
          src="../assets/profile-images/Ellipse -1.png">
    </td>
    <td>Snehal Uttamrao Patil</td>
    <td>Female</td>
    <td><div class='dept-label'>HR</div> <div class='dept-label'>Engineer</div></td>
    <td>4000000</td>
    <td>1 Jan 2020</td>
    <td>
      <img id="1" onclick="remove(this)" alt="delete"
            src="../assets/icons/delete-black-18dp.svg">
      <img id="1" alt="edit" onclick="update(this)"
            src="../assets/icons/create-black-18dp.svg">
    </td>    
  </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}