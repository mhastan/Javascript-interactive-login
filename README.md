# Opdracht DOM Manipulatie 

### HTML/JS: Making webpages interactive 

Deze opdracht gaat over de volgende onderwerpen: 

* JS and the DOM 
* DOM access methods 
* DOM modification 
* DOM events 
* DOM animation 

Om deze onderdelen te leren ga naar de volgende url: https://www.khanacademy.org/computing/computer-programming/html-css-js 
 
## Opdracht beschrijving 

Bij een client–server applicatie zoals een webshop kan de gebruiker vanaf zijn eigen computer, de client, informatie uitwisselen met een server in de cloud. Om dit mogelijk te maken, bestaat er binnen HTML het form-element. Bestudeer bij Khanacademy en eventueel bij W3schools hoe het HTML-element form werkt. 

In de volgende opdracht ga je een login formulier maken. Op de webpagina is een section met daarin een formulier en twee invoervelden. Hierin kan de gebruiker zijn loginnaam en wachtwoord invullen. Zodra hij op login drukt voert het element form een controle uit. Het controleert of de waardes die zijn ingevuld overeenkomen met de waardes die in de controller reeds aanwezig zijn. Als de ingevoerde - en aanwezige waardes gelijk zijn, haalt het programma het formulier weg uit de section en laat de tekst `Login succes` zien. Maar als de worden niet gelijk zijn, worden alle randen van de input velden van het formulier rood gekleurd en wordt de tekst  `login mislukt` onder het formulier afgebeeld. Deze tekst staat in een `<p>` tag. 

#### Hints 

**Om op afstand goed te kunnen ondersteunen is het belangrijk om elke stap te committen.** 

**Maak voor elke stap die je hebt gemaakt een goede commit message met daarinvermeld wat je in die stap hebt gedaan.** 

### Opdracht 1 

Zorg dat je het form-element opslaat in een variabele met de naam formEl. Hint: `let formEl = ...;` en maak een commit met als commit message: `Opdracht 1: form-element in javascript.` 

--- 
 
### Opdracht 2 

- a. Maak een functie waarin je de submit event kan ontvangen. `let onSubmit = ...;`.  
- b. Zorg dat je in die functie de data ophaalt uit de form invoervelden (bekijk hiervoor de html). 
- c. Maak een commit  met als commit message: `Opdracht 2: Data van invoervelden opgehaald` 

#### Hints 
1. Functies binnen javascript kun je op meerdere manieren maken. Bestudeer de theorie in khanacademy. Drie voorbeelden van functies zijn: 

``` javascript 

//VB1: Function aanmaken en opslaan in een variabele 
let simpleFunction = function() { 
    ... 
} 

//VB2: Function aanmaken zonder variabele 
let arrowFunction = () => { 
    ... 
} 

//VB3:  Functie binnen een class 
class TestClass { 

    classFunction() { 
        ... 
    } 
} 

``` 

2. Hoe je data uit een invoerveld haalt, kun je bijvoorbeeld lezen bij W3Schools. Of je kunt op google zoeken. Een goede zoekterm kan zijn: `javascript input value` want je wilt een waarde uit een `input` element halen, met de programmeertaal `javascript`. Waarde vertaald in het Engels is `value`. 

--- 

### Opdracht 3 

- a. Zorg dat je een EventListener koppelt aan het form-element van het type `"submit"` en koppel de functie van opdracht 2 `formEl.addEventListener( ___ , ___ )` aan de submit knop.  
- b. Maak een commit met als commit message: `Opdracht 3: Eventlistener toegevoegd` 
 
Een andere oplossing kan zijn dat je een `"click"` eventListener toevoegt aan de button. Beide hebben hetzelfde effect, het voert namelijk de default functie uit van een form-element wat een POST of GET http request. 

#### Theorie 

##### Event-based programming language 

Javascript is een 'Event-based programming language'. Elke actie van een gebruiker op de webpagina is binnen javascript een `event`. Zo heb je een `"click"` event van je muis of keyboard events (WASD) van je toetsenbord en nog veel meer events. 

Elk element binnen javascript kan een EventTarget zijn. De meest bekende  EventTargets zijn de Element-, Document- en Window-objecten. EventTarget heeft een lijst met listeners. Dit zijn functies die worden uitgevoerd wanneer je de bijbehorende event activeert. Zo kan je een functie koppelen aan een `"click"` event. Deze functie wordt uitgevoerd als je op dat object klikt. De programmeur kan met de code in de functie bepalen wat JavaScript dan gaat doen.  

Bestudeer de bijbehorende theorie in W3Schhol en khanacademy. 

Een formulier is gemaakt om informatie te versturen. Met `"submit"` kan de gebruiker dit activeren, er is dan geen `"click"` event meer nodig. Een `"submit"` event is van het form-element en niet van de knop - `<button>Login</button>`. Dit is belangrijk om te weten. De gebruiker klikt op een knop, toch is de form-element degene een `"submit"` event afvuurt. 

--- 
 
### Opdracht 4. 
- a. Pas opdracht 2 en 3 aan zodat die functie een event ontvangt door tussen de haakjes het woord event te plaatsen. Aan Roy of Pascal:  Hier het volledige en correcte commando weergeven aub 
- b. Voer de `preventDefault()` uit op het event object.  

Zodra binnen een formulier op submit wordt geklikt, meestal is dit de login button, wordt de website refreshed; de url in de browser verandert.  Je ziet dan het volgende achter de url komen:  

`/?name=&password=`.  

Dit zijn input waardes waarbij voor het =-teken name staat met achter het =-teken de bijbehorende waarde. Deze combinatie wordt name-value pair genoemd. Dit is de manier waarop de webbrowser informatie naar de server verstuurt, dat heet een request. Deze standaard request actie van het formulier willen wij met de volgende code overnemen. 

``` javascript 

// bijvoorbeeld: 
element.addEventListener('submit', (event) => { 
    event.preventDefault(); 
    ... 
}); 
```

Waarbij submit het element is waaraan de actie is gekoppeld.  

AddEventListener heeft twee parameters. De eerste parameter bevat het element waarmee de gebruiker een actie kan starten. In dit geval ‘submit’. De tweede parameter is het woord event. Als je dit woord weglaat zal de browser zijn standaard actie uitvoeren: het voert een request naar de server uit. 

Wij willen zelf een stukje  code schrijven waarin we ons eigen plan kunnen laten uitvoeren door JavaScript. Daarom laten wij het woord event staan. Dan worden de functies die vermeld staan tussen de volgende tekens {  }  uitgevoerd zodra het systeem die actie van de gebruiker binnen krijgt, bijvoorbeeld de gebruiker klikt op login.  

Zodra je nu op de login knop druk hoor je niet meer in de url de `/?name=&password=` te krijgen. Zorg er wel voor dat je de url eerst leeghaalt. 

--- 

 

### Opdracht 5 

Je wilt nu inloggen en daarom klik je op de knop inloggen. Dan moet het programma de data van de invoervelden vergelijken met de data die in de variabelen `correctUsername` en `correctPassword` staat. Hiervoor zijn twee testen nodig. 

* a. Maak de test voor de username en het password, gebruik de `&&` operator om 2 vergelijkingen te kunnen maken in één if-statement. Aan Roy of Pascal: Op welke plek? Wat is de naam van de functie/methode? 

 

 

``` javascript 

if( ___ && ___ ) { 
   ... 
}  
``` 

--- 

### Opdracht 6 
Er zijn twee mogelijkheden. De invoerdata is correct of de invoerdata is niet correct.  

- a. Als de username en password gelijk zijn, kun je het form-element weghalen en vervangen het met de tekst `Login success!`.  Je kan hiervoor gebruik maken van de innerHTML variable van een element om zijn HTML aan te passen. `element.innerHTML = "Nieuwe inner HTML!"`. 

Bestudeer hiervoor de bijbehorende theorie op Kanacademie en W3schools. 

--- 

 

### Opdracht 7 

- a. Als de username en password niet gelijk zijn, geef je alle input-elementen een rode border. Maak hiervoor gebruik van javascript selector, een for-loop en de style attribute van een element.  
- b. Maak een commit met als commit message: `Opdracht 7: Rode border toegevoegd bij verkeerde inloggegevens`  

#### Hints 

Je kan op meerdere manieren meerdere elementen ophalen. Voorbeeld: 

``` javascript 
let elements = document.getElementsByTagName("div"); // Geeft een lijst met element met de tag <div> 
let elements = document.querySelectorAll("p"); // Geeft een lijst met elementen met de tag <p> 
let elements = document.querySelectorAll("section p"); // Geeft een lijst met elementen met de tag <p> die in een <section> element staan 
let elements = document.getElementsByClassname("someClass"); // Geeft een lijst met elementen met een class="someClass" attribute 

``` 

``` javascript 
// For loops voorbeelden 
//VB1: 
for (let i = 0; i < array.length; i++) { 
    let element = array[i]; 
   ... 
} 

//VB2:  
for(let index in array){ 
    let element = array[index]; 
    ... 
} 

//VB3: 
for (let element of array) { 
    ... 
} 

``` 

--- 
 
### Opdracht 8 

- a. Zorg ervoor dat je in de` <p>` element een error tekst laat zien zoals `Login mislukt!` 
- b. Maak een commit met als commit message: `Opdracht 1 t/m 8: klaar`  
 
--- 

### Samenvatting 
Zodra je de bovenste 8 opdrachten succesvol hebt gedaan heb je als het goed is een dynamische login pagina gemaakt. Je hebt hier gebruik gemaakt van een aantal core technieken van Javascript. 

* Elementen uit de DOM halen en deze in variabele zetten. 
* EventListeners toepassen 
* Vergelijkingen 
* For-loops 
* Style in javascript 
* Methods/Functions 
* preventDefault 

--- 

## Uitbreidingen 
Mocht je deze opdracht nogsteeds te makkelijk vinden staan hieronder nog een aantal uitdagingen die je als vervolg zou kunnen doen. 

* Zorg ervoor dat je bij 3 keer verkeerde invoer van de inlog gegevens je het form-element weghaald zodat de gebruiker niet meer kan inloggen. En de tekst laat zien `U heeft geen pogingen meer om in te loggen` 

* Zorg ervoor dat na een paar seconden de border style van de input elementen verdwijnt. Onderzoek hierbij de javascript functie setTimeout en setInterval. Kies de juiste oplossing hiervoor. 

* Zorg ervoor dat na een paar seconden de error tekst verdwijnt.  

* Maak van dit alles een component 

* Maak van de loginpagina een component. Gebruik hiervoor de powerpoint over components in lesmateriaal. 
#   J a v a s c r i p t - i n t e r a c t i v e - l o g i n  
 