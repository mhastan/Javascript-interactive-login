window.addEventListener("load", (e) => {
    let index = new IndexController();
    index.init();
});

class IndexController {

    init() {
        let correctUsername = "a";
        let correctPassword = "v";
        let inlogPogingen = 0;
        

        // Begin hier met je code te schrijven.
        const myForm = document.getElementById('loginForm');

        myForm.addEventListener("submit", (e) =>  { // Runt zodra er op submit is geklikt
            e.preventDefault(); // Zorgt ervoor dat die niet redirect. 

            let name = document.getElementById("name").value; // Haalt value van name op
            let password = document.getElementById("password").value; // Haalt value van password op

            encodeURIComponent(name) && encodeURIComponent(password); // prevent for XSS in case of security
            
            console.log("form has been submitted with credentials: " + name + ":" + password);            

            if( name == correctUsername && password == correctPassword ) { 
                myForm.remove();
                document.getElementById("logged-in").innerHTML = "Yo u logged in"; 
                 console.log("Yo u logged in!")

                } else {
                let wrongPass = document.getElementById("error-text");
                wrongPass.innerHTML = "Verkeerde gebruikersnaam of wachtwoord";
                inlogPogingen++;
                 console.log("Dit is poging: " + inlogPogingen);
             }

             if(inlogPogingen > 3 ) {
                let hackerMeme = document.getElementById("error-text");
                myForm.remove();
                hackerMeme.innerHTML="<img src=\"https://i.kym-cdn.com/entries/icons/original/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg\" width=\"300px\" height=\"150px\"> <br> Why cant u type the gad damn password right in 3 times, u retarded or sum?!?!?";
            
                setTimeout(function() {
                    window.location.href = "/";
                  }, 8000);
        
        


                
            }


        });


    }
}