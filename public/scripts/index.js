document.getElementById("loginBoton").addEventListener("click", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
 
    if (username === "Christian" && password === "123") {
      sessionStorage.setItem("name", username);
      window.location.href = "./pages/profile.html";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });