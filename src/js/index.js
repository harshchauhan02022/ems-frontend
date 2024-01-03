// Get employees
function getEmpoyees() {
 $.ajax({
  type: "GET",
  url: "http://localhost:9000/definition/get",
  success: function (result) {
   const { data } = result;

   let s_no = 1;
   $(".employees").html("");
   data.forEach(element => {
    const { id, name, salary, age, address, email } = element
    const row = `<tr><td> ${s_no++}</td><td>${name}</td><td>${email}</td><td>${salary}</td><td>${age}</td><td>${address}</td><td>19/12/2023</td><td>18/12/2023</td><td><button href="#editEmployeeModal" data-toggle="modal" onClick="editEmployee('${id}', '${name}', '${salary}', '${age}', '${address}' , '${email}')">Edit</button>
   <button href="#deleteEmployeeModal" data-toggle="modal">Delete</button></td></tr >`;
    $(".employees").append(row);
   });
  }
 })
}
getEmpoyees()

// Add new employee
function addEmpoyee() {
 const formData = {
  name: $("#name").val(),
  email: $("#email").val(),
  salary: $("#salary").val(),
  age: $("#age").val(),
  address: $("#address").val(),
 };

 $.ajax({
  type: "post",
  url: "http://localhost:9000/definition/add",
  contentType: "application/json",
  data: JSON.stringify(formData),
  success: function (data) {
   // document.getElementById("employess").innerHTML = ""
   $("#addEmployeeModal").modal('hide');
   getEmpoyees()
   alert(data.message);
  }
 })
}

const editEmployee = (id, name, salary, age, address, email) => {
 $("#employeeId").val(id)
 $("#editName").val(name)
 $("#editSalary").val(salary)
 $("#editAge").val(age)
 $("#editEmail").val(email)
 $("#editAddress").val(address)
}

function saveEmpoyee() {
 const employeeId = $("#employeeId").val()

 const formData = {
  name: $("#editName").val(),
  salary: $("#editSalary").val(),
  age: $("#editAge").val(),
  address: $("#editAddress").val(),
 };

 $.ajax({
  type: "put",
  url: `http://localhost:9000/definition/update/${employeeId}`,
  contentType: "application/json",
  data: JSON.stringify(formData),
  success: function (data) {
   $("#editEmployeeModal").modal('hide');
   window.location.reload();
  }
 });
}


// Delete employee
function deleteEmployee(employeeId) {
 $.ajax({
   type: "DELETE",
   url: `http://localhost:9000/definition/delete/${employeeId}`,
   success: function (data) {
     alert(data.message);
     getEmpoyees(); 
   },
   error: function (error) {
     console.error("Error deleted employee:", error);
     alert("Error");   }
 });
}


