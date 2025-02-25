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






//GIORNO 2

Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.


Milestone 2
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.



Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:


Bonus
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. 
Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare
Buon Lavoro
*/


let container = document.getElementById('container');
let overlay = document.getElementById("overlay");


// Effettua una richiesta fetch per ottenere i dati delle immagini da un'API
fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {

        data.forEach(element => {
            //destruct
            const { date, id, title, url } = element;
             // Aggiunge in maniera dinamica, una card HTML nel container per ogni immagine
            container.innerHTML += `
                <div class="col-lg-4 col-md-6 col-s-12 cards">
                    <div class="card p-3 mt-3 mb-3">
                        <img id="red_pin" src="./img/pin.svg" alt="pin">
                        <img class="card-image" src="${url}" alt="${title}">
                        <div class="card-body">
                            <h5 class="card_text">${title}</h5>
                            <p class="card_text">${date}</p>
                        </div>
                    </div>
                </div>   
            `;
        });

        
        const cardImages = document.querySelectorAll('.card-image');

        cardImages.forEach(image => {
            image.addEventListener('click', function() {
                 // Ottengo il percorso dell'immagine cliccata
                const imgSrc = image.src;  
                console.log("Immagine cliccata", imgSrc);

                // Inserisco l'immagine cliccata nell'overlay e un pulsante per chiuderlo
                overlay.innerHTML = `
                    <button id="btn" class="mb-3" type="submit">Chiudi</button>
                    <img id="img" src="${imgSrc}" alt="foto">
                `;

                  // Rimuovo la classe d-none per rendere visibile l'overlay
                overlay.classList.remove('d-none');

                // Aggiungo un event listener al bottone per chiudere l'overlay
                let bottone = document.getElementById('btn'); 
                bottone.addEventListener('click', function() {
                    
                 
                overlay.classList.add('d-none');
                });
            });
        });

    })
    .catch(error => {
        console.error(error);
    });






