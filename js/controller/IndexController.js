window.addEventListener("load", (e) => {
    let index = new IndexController();
    index.init();
});

class IndexController {

    init() {
        let correctUsername = "example@gmail.com"; // username in de variable correctUsername
        let correctPassword = "testtest"; // password in de variable correctPassword
        let inlogPogingen = 0; // Aantal login pogingen waarmee we starten
        

        // Begin hier met je code te schrijven.
        const myForm = document.getElementById('loginForm');

        myForm.addEventListener("submit", (e) =>  { // Runt zodra er op submit is geklikt
            e.preventDefault(); // Zorgt ervoor dat die niet redirect. 

            let name = document.getElementById("name").value; // Haalt value van name op
            let password = document.getElementById("password").value; // Haalt value van password op

            encodeURIComponent(name) && encodeURIComponent(password); // prevent for XSS in case of security
            
            console.log("form has been submitted with credentials: " + name + ":" + password);            

            if( name == correctUsername && password == correctPassword ) { // kijkt of de input gelijk staat aan wat het moet zijn
                myForm.remove(); // haalt de id loginForm weg 
                document.getElementById("logged-in").innerHTML = "Yo u logged in"; // Stopt de ID logged-in de tekst "Yo u logged in"
                 console.log("Yo u logged in!") // Zorgt ervoor dat in de console yo u logged in staat.

                } else { // Als het niet correct is runt hij de volgende code

                let wrongPass = document.getElementById("error-text"); // haalt de id error-text op
                wrongPass.innerHTML = "Verkeerde gebruikersnaam of wachtwoord"; // stopt in error-text de tekst
                inlogPogingen++; // doet +1 bij inlogpogingen als het niet succesvol is
                 console.log("Dit is poging: " + inlogPogingen); // Zorgt ervoor dat in de console opgesomt word hoeveel inlog pogingen er zijn gedaan


                 for(let i = 0; i < 2; i++) { // runt de volgende code 2x omdat we 2 inputs hebben die rood moeten worden als het niet klopt
                     var elements = document.getElementsByClassName("text")[i].id; // Haalt de input op
                     document.getElementById(elements).style.borderColor = "red"; // Veranderd de border color naar rood
                 }
             }

             if(inlogPogingen > 3 ) { // Als er meer dan 3 login pogingen zijn runt hij de volgende code
                let hackerMeme = document.getElementById("error-text"); // Haalt error-text op
                myForm.remove(); // Removed de form
                hackerMeme.innerHTML="<img src=\"https://i.kym-cdn.com/entries/icons/original/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg\" width=\"300px\" height=\"150px\"> <br> Why cant u type the gad damn password right in 3 times, u retarded or sum?!?!?"; // laat een plaatje met tekst zien 
            
                setTimeout(function() { // de timeout functie die doorverwijst naar / 
                    window.location.href = "/"; // locatie doorverwijzing
                  }, 8000); // aantal ms
    
                
            }


        });


    }
}