const token = localStorage.getItem("token");
if (token!=="" && token!==null && token!==undefined) {
 $(".auth").hide();
}else{
$(".logout").hide();
}

function logout() {
 localStorage.removeItem("token");
 window.location.href="index.html";
}