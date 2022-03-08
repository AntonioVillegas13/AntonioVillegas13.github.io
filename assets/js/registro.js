const mapa= new Map();

mapa.set('Antonio','12345');
function ir3(){
   
    let usuario = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    alert("Datos Registrados");
    mapa.set(usuario,password);
    mapa.forEach((valor,clave)=> {
        console.log(`la clave es :${clave} y el valor asociado es ${valor}`);
    })
    }


function ir2(){
   
    let usuario = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(usuario);
    mapa.forEach((valor,clave)=> {
        console.log(valor);
        
        if(usuario==clave  && password==valor){
            alert("Datos Correctos");
            window.location="Aplicaciones.html";
            
        } else{
            alert("Porfavor ingrese los  nombre de usuario y contraseña correctos."); 

        }
    })



   

    }

   
        
    











