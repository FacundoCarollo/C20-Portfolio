function AlertaExitoEs() {
    const nombre = document.getElementById("name")
    const pais = document.getElementById("pais")
    const email = document.getElementById("email")
    const telefono = document.getElementById("exampleFormControlInput1")
    const form = document.getElementById("form")
    const parrafo1 = document.getElementById("warnings1")
    const parrafo2 = document.getElementById("warnings2")
    const parrafo3 = document.getElementById("warnings3")
    const parrafo4 = document.getElementById("warnings4")
    const parrafo5 = document.getElementById("warnings5")
    const comentario = document.getElementById("exampleFormControlTextarea1")
    var errores = new Array();
    errores[0] = `El nombre no es valido `;
    errores[1] = `Ingrese su nombre`;
    errores[2] = `El email no es valido `;
    errores[3] = ` Ingrese su email `;
    errores[4] = `Ingrese un numero de telefono`;
    errores[5] = `Ingrese un numero de telefono valido`;
    errores[6] = `Ingrese su consulta `;
    errores[7] = `Ingrese un País `;
    
    form.addEventListener("submit", e=>{
        
        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        let regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        let regexPais = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        let regextelefono = /^\d{7,14}$/
        parrafo1.innerHTML = ""
        parrafo2.innerHTML = ""
        parrafo3.innerHTML = ""
        parrafo4.innerHTML = ""
        parrafo5.innerHTML = ""
       
      
        if(!regexName.test(nombre.value) && nombre.value != ""){
            warnings1 = errores[0]
         
            entrar = true
        }
        if(nombre.value == "" || !regexName.test(nombre.value)){
            warnings1 = errores[1]
       
            entrar = true
   
        }
       

        if(!regexPais.test(pais.value) && pais.value != ""){
            warnings5 = errores[7]
           
            entrar = true
        }
        if(pais.value == "" || !regexPais.test(pais.value)){
            warnings5 = errores[7]
         
            entrar = true
   
        }

       
        
        if(!regexEmail.test(email.value) && email.value != ""){
            warnings2 = errores[2]
     
            entrar = true
        }
        if(email.value == ""){
            warnings2 = errores[3]
         
            entrar = true
        }
        
        if(telefono.value == "" || telefono.value < 12){
            warnings3 = errores[4]
        
            entrar = true
        }
        
        if(comentario.value == ""){
            warnings4 = errores[6]
           
            entrar = true
        }
        
        if(entrar){
            e.preventDefault()
            if((!regexName.test(nombre.value) && nombre.value != "")){
                parrafo1.innerHTML = warnings1
            }
            if(nombre.value == ""){
                parrafo1.innerHTML = warnings1
               
            }

            if((!regexPais.test(pais.value) && pais.value != "")){
                parrafo5.innerHTML = warnings5
            }
            if(pais.value == ""){
                parrafo5.innerHTML = warnings5
               
            }

            if(!regexEmail.test(email.value) && email.value != ""){
                parrafo2.innerHTML = warnings2
               
            }
            if(email.value == ""){
                parrafo2.innerHTML = warnings2
                
            }
            if(telefono.value == "" || telefono.value < 12){
                parrafo3.innerHTML = warnings3
            }

            if(!regextelefono.test(telefono.value) && telefono.value != ""){
                parrafo3.innerHTML = warnings3
            }
            if(comentario.value == ""){
                parrafo4.innerHTML = warnings4
            }
        }else{
             alert("Su consulta ha sido recibida")
        }
    })
    }
/*
    function AlertaExitoEn() {
        const nombre = document.getElementById("name")
        const email = document.getElementById("email")
        const telefono = document.getElementById("exampleFormControlInput1")
        const form = document.getElementById("form")
        const parrafo1 = document.getElementById("warnings1")
        const parrafo2 = document.getElementById("warnings2")
        const parrafo3 = document.getElementById("warnings3")
        const parrafo4 = document.getElementById("warnings4")
        const comentario = document.getElementById("exampleFormControlTextarea1")
        var errores = new Array();
        errores[0] = `Enter a valid name <br>`;
        errores[1] = ` Enter your name <br>`;
        errores[2] = `The email is not valid <br>`;
        errores[3] = `Enter your email <br>`;
        errores[4] = `Enter a phone number <br>`;
        errores[5] =  `Enter a valid phone number <br>`;
        errores[6] = `Enter your consultation`;
        
        form.addEventListener("submit", e=>{
          
            let entrar = false
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            let regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
            let regextelefono = /^\d{7,14}$/
            parrafo1.innerHTML = ""
            parrafo2.innerHTML = ""
            parrafo3.innerHTML = ""
            parrafo4.innerHTML = ""
          
            if(!regexName.test(nombre.value) && nombre.value != ""){
                warnings1 = errores[0]
                entrar = true
              
            }
            if(nombre.value == ""){
                warnings1 = errores[1]
                entrar = true
             
            }
            if(!regexEmail.test(email.value) && email.value != ""){
                warnings2 = errores[2]
                entrar = true
            }
            if(email.value == ""){
                warnings2 = errores[3]
                entrar = true
            }
            if(telefono.value == "" || telefono.value < 12){
                warnings3 = errores[4]
                entrar = true
            }
            if(!regextelefono.test(telefono.value) && telefono.value != ""){
                warnings3 = errores[5]
                entrar = true
            }
            if(comentario.value == ""){
                warnings4 = errores[6]
                entrar = true
            }
            if(entrar){
                e.preventDefault()
                if((!regexName.test(nombre.value) && nombre.value != "")){
                    parrafo1.innerHTML = warnings1
                     
                }
                if(nombre.value == ""){
                    parrafo1.innerHTML = warnings1
                    
                   
                }

                if(!regexEmail.test(email.value) && email.value != ""){
                    parrafo2.innerHTML = warnings2
                   
                }
                if(email.value == ""){
                    parrafo2.innerHTML = warnings2
                    
                }
                if(telefono.value == "" || telefono.value < 12){
                    parrafo3.innerHTML = warnings3
                }

                if(!regextelefono.test(telefono.value) && telefono.value != ""){
                    parrafo3.innerHTML = warnings3
                }
                if(comentario.value == ""){
                    parrafo4.innerHTML = warnings4
                }
            }else{
        
                 alert("Su consulta ha sido recibida")
            }
        })
    }
    

*/




   

    
    
    
    
    
    
    
    

    

















   
   
   
  