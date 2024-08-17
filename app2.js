const textArea = document.querySelector(".encriptar");
const mensaje = document.querySelector(".evaluar");
const tarjetaContenedor = document.getElementById("tarjetaContenedor");
const botonCopiar = document.getElementById("botonCopiar");

textArea.addEventListener('focus', function(){
    if (textArea.value === "Ingrese el texto aquí") {
        textArea.value = "";
        textArea.style.color = "var(--color4)";
    }
});

textArea.addEventListener('blur', function(){
    if (textArea.value === "") {
        textArea.value = "Ingrese el texto aquí";
        textArea.style.color = "var(--color3)"; // Color más tenue para el placeholder
    }
});

function btnEncriptar(){
    if (textArea.value === "Ingrese el texto aquí") return;
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mostrarBotonCopiar();
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    if (textArea.value === "Ingrese el texto aquí") return;
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mostrarBotonCopiar();
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function mostrarBotonCopiar() {
    tarjetaContenedor.style.display = "none";
    botonCopiar.style.display = "block";
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}