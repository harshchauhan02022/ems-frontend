const { error } = require("console");

// Register
function register() {
  const formData = {
    name: $("#name").val(),
    email: $("#email").val(),
    password: $("#password").val(),
  };

  $.ajax({
    type: "POST",
    url: "http://localhost:8000/user/register",
    contentType: "application/json",
    data: JSON.stringify(formData),
    success: function (data) {
      if (data.success==="error") {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: data.message,
        });
       
      }else{
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: data.message,
        });
      }
      console.log(data);
    }
  });
}
