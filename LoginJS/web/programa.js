class Usuario {
    
    static registroClave(){        
        let claveRegistrada = "123";
        return claveRegistrada;
    }
    
    static registroNombre(){
        let usuarioRegistrado = "poaneleNati";
        return usuarioRegistrado;
    }
    
    static registroMuchosUsuarios(){
        let listado = [];
        listado.push("Pepe");
        listado.push("Gio");
        listado.push("Marcos");
        listado.push("Nati");
        listado.push("Sergio");
        console.log(listado);
        
        for ( let i = 0; i < 6; i++) {
            console.log("Nombre: " + listado[i]);
        }
    }
    
    static entrar(){
        console.log("Estas en el metodo entrar, cahbon.");
        console.log(document.querySelector("#usuario").value);
        let miUsuario = document.querySelector("#usuario").value;
        let miClave = document.querySelector("#clave").value;
        document.querySelector("#resultadoPnl").innerHTML = miClave 
                + " " + miUsuario;
        
        //CONSEGUIMOS USUARIO Y CLAVES REGISTRADAS
        console.log(Usuario.registroNombre());
        console.log(Usuario.registroClave());
        
        //COMPARAR USAURIO Y CLAVE DE FORMULARIO Y REGISTRADAS
        if (miUsuario == Usuario.registroNombre() && miClave == Usuario.registroClave()) {
            console.log("Si, adentro!!!");
        } else {
            console.log("No, nada que ver!  a la calle!");
        }
    }
    
    static init(){
        document.querySelector("#entrarBtn").setAttribute("onclick","Usuario.entrar();");
        Usuario.registroMuchosUsuarios();
    }
    
}
Usuario.init();
