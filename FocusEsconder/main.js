const input = document.querySelector("input");

let senhaGuardada = "";

input.addEventListener("focus", () =>{
    input.value = senhaGuardada;
});

input.addEventListener("blur", () =>{
    const senha = input.value;
    let senhaOculta ="";
    senhaGuardada = senha;
    senhaOculta = senhaOculta.padStart(senha.length, "*");
    input.value = senhaOculta;
});