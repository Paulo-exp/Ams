const botao = document.getElementById("Tema");

if (localStorage.getItem("Tema") === "dark" ){
    document.body.classList.add("dark");
}

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("Tema", "dark");
    } else {
        localStorage.setItem("Tema", "light");
    }
});

