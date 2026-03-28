 document.addEventListener("DOMContentLoaded", (e)=>{
     document.querySelector("#sendBtn").addEventListener("click", (e)=>{

        let username = document.querySelector("#floatingInput").value.trim()
        let password = document.querySelector("#floatingPassword").value.trim()

        Users.forEach(u=>{
            if(username == u.username && password == u.password){
                console.log("kirding");
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                window.location.href = "index.html"
            }
        })
     })
 })
