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
  success: function (data) {
   if (data.status == "success") {
    Swal.fire({
     icon: "success",
     title: "Success",
     text: data.message,
    });

    localStorage.setItem("token", data.token);
    window.location.href = "index.html"
   } else {
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

const token = localStorage.getItem("token");
if (token !== "" && token !== null && token !== undefined) {
 window.location.href = "index.html"
}
