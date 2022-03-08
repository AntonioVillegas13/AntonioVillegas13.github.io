function ir2(){
    let usuario = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(usuario)
    if(usuario== "GRUPO4" && email=="grupo4@hotmail.com" && password=="grupo4"){
        alert("Datos Correctos");
        window.location="Aplicaciones.html";
    }
        else{
            alert("Porfavor ingrese los  nombre de usuario y contraseña correctos."); 

        }

    }

    function ir3(){
        let usuario = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        alert("Datos Registrados")

    
        }
    
        
    







