const input = document.querySelector("input");
const button = document.querySelector("button");

let ocultar = true;
let senhaGuardada = "";
button.addEventListener("click", () =>{
    if(ocultar===true){
        const senha = input.value;
        let senhaOculta ="";
        senhaGuardada = senha;
        senhaOculta = senhaOculta.padStart(senha.length, "*");
        input.value = senhaOculta;
        button.innerText = "Mostrar Senha";
        ocultar=false;
    }else{
        input.value = senhaGuardada;
        button.innerText = "Ocultar Senha";
        ocultar=true;
    }
})