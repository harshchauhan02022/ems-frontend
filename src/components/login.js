function login() {
 console.log("..........>>>>")
 const data = {
  email: $("#email").val(),
  password: $("#password").val()
 }

 $.ajax({
  type: "POST",
  url: "http://localhost:8000/user/login",
  contentType: "application/json",
  data: JSON.stringify(data),
  success: function(data){
   if (data.status == "success") {
    Swal.fire({
     icon: "success",
     title: "Success",
     text: data.message,
    });
   }else
   {
    Swal.fire({
     icon: "error",
     title: "Error",
     text: data.message
    })
   }
   console.log(data);
  }
 })
}
