class Usuario {
    
    static entrar(){
        console.log("Estas en el metodo entrar, cahbon.");
        console.log(document.querySelector("#usuario").value);
        let miUsuario = document.querySelector("#usuario").value;
        let miClave = document.querySelector("#clave").value;
        document.querySelector("#resultadoPnl").innerHTML = miClave 
                + " " + miUsuario;
    }
    
    static init(){
        document.querySelector("#entrarBtn").setAttribute("onclick","Usuario.entrar();");
    }
    
}
Usuario.init();
