function togglePassword(){

let pass=document.getElementById("password")

if(pass.type==="password"){

pass.type="text"

}else{

pass.type="password"

}

}

document.getElementById("loginForm")?.addEventListener("submit",function(e){

e.preventDefault()

alert("Đăng nhập thành công")

})