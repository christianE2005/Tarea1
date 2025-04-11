window.onload = () => {
    const name = sessionStorage.getItem("name");
  
    if (!name) {
      window.location.href = "../index.html";
    } else {
      const nameElement = document.getElementById("Name");
      if (nameElement) {
        nameElement.textContent = `Bienvenido, ${name}`;
      }
    }
  
    const logoutBtn = document.getElementById("Logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.clear();
        window.location.href = "../index.html";
      });
    }
  };
  