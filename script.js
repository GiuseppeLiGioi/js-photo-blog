/*
Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica:
 utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.



Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
*/


let container = document.getElementById('container');


    fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then (data=>{
        //console.log(data)
        data.forEach(element => {
            container.innerHTML += 

        `
        <div class="col-4">
           <div class="card p-3 mt-3 mb-3">
                <img id="red_pin" src="./img/pin.svg" alt="pin">
                <img src=${element.url} alt=${element.title}>
                <div class="card-body">
                    <h5 class="card_text">${element.title}</h5>
                    <p class="card_text">${element.date}</p>
                </div>
            </div>
         </div>   
        `
        
    });

})
  
    



    .catch(error=>{
    console.error(error);
    })


