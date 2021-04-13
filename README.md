# Real-Time Web @cmda-minor-web · 2020/21

## Live link
Work in progress

## To Do list
- [x] socket.io werkend krijgen
- [x] spike maken (controlleren of antwoord goed of fout is)
- [ ] Rooms toevoegen
- [ ] Live link fixen
- [ ] CSS toevoegen
- [ ] Data Life Cycle

## Week 1 

### Dinsdag
Dinsdag zijn we begonnen in groepsverband, hierbij hebben we met 7 man in VSCODE een chat app gemaakt. Hierbij maakte we kennis met Socket.io. Dit ging direct best goed omdat Vincent er al ervaring mee had en ons erdoorheen leidde. 

### Vrijdag
Vrijdag ben ik begonnen aan de individuele opdracht. Ik wilde eerst een trivia app maken waarbij je met meerdere mensen trivia vragen kreeg en iedereen die moest beantwoorden. Hierbij werden dan punten uitgedeeld. Dit vond ik uiteindelijk toch niet leuk genoeg dus heb ik mijn concept omgedraaid. Eigenlijk wilde ik met een muziek API een snippet aan de gebruiker laten horen waardoor hij of zij het nummer moest raden. Hier was alleen geen API voor dus heb ik verder nagedacht naar wat mij leuk leek. Hierbij kwam ik op een oudere API die ik al gebruikt had, The Movie DataBase. Mijn plan is nu om via TMDB foto's van acteurs op te halen / posters van films en shows. Hierbij wil ik die met CSS geblurred maken en key animations over de tijd minder laten blurren. Nu is het de bedoeling dat de spelers in een bepaalde tijd de acteurs/ shows of films raden. Vandaag heb ik alles gekoppeld metde API en maandag ga ik verder met de Socket.

## Week 2

### Maandag
Vandaag moesten we beginnen aan '(Proof of) Concept'. Aangezien ik al wat concepten heb verzonnen had ik hier al een voorsprong in. Ondanks dat heb ik ze toch even netjes uitgewerkt en bepaalde keuze's toegelicht. Verders heb ik vandaag weer mijn concept, hopelijk voor de laatste keer, omgedraaid. Ik heb een F1 API gevonden. Omdat ik fan ben van F1 heb ik gekozen om hier mee te werken. Ik wil een 1 vs 1 quiz maken, waarbij je bepaalde feiten over een seizoen, baan of courreur ziet en aan de hand van dit moet raden welke seizoen, baan of courreur het is. 
Het is mij vandaag gelukt om de sockets aan de praat te krijgen met een verbinding en waarbij gekeken wordt of het gegeven antwoord goed is. Alleen lukte het mij niet om de app te deployen op heroku, hiervoor ga ik morgen verder kijken.





## (Proof of) Concept
Ik heb 4 concepten gehad, waarbij ik gegaan ben voor de Formula 1 API. Hieronder zijn de concepten te lezen

### Pub Quiz
Ik had als eerst het idee om een pub quiz te maken. Hierbij wilde ik werken met de volgende API: https://opentdb.com/api_config.php. Ik had dit al werkend gekregen in mijn code en gekeken naar de data. Hierbij kwam ik erachter dat de vragen vrij lastig waren en erg breedt. Het zijn niet echt dingen die je algemeen weet maar toevallig kon weten of moet gokken. Dit vond ik niet leuk en daardoor heb ik gekozen verder te denken.
![Pub quiz schets](https://github.com/kilroy763/real-time-web-2021/blob/main/ReadmeImages/concept1.jpg?raw=true)  

### Music Guesser 
Tijdens het denken voor een nieuw concept kwam ik op met Music Guesser. Je hebt op Youtube video's die dit simuleren. Hierbij moet je aan de hand van het horen van een nummer voor 10 seconden het nummer raden. Ik wilde dit online maken zodat er een puntentelling bij hangt. Ik kon alleen geen API vinden die hier aan voldeedt. Je hebt wel de embed van spotify die exact doet wat ik nodig heb, namenlijk een nummer laten horen voor 30 seconden. Alleen hier was geen soort gelijke API voor. Hierom heb ik na een middag zoeken het opgegeven. 
![Music Guesser schets](https://github.com/kilroy763/real-time-web-2021/blob/main/ReadmeImages/concept2.jpg?raw=true)  

### Celeb Image Guesser 
Aan het eind van de dag ging ik kijken naar de API die ik in de vorige vakken al gebruikt hebt. Namenlijk "TMDB", ik ging nadenken hoe ik dit kan combineren met socket.io. Hierbij kwam ik op het idee om via TMDB afbeeldingen te pakken van celebrities van bekende films. Die te blurren met CSS en de gebruikers de celebrities laten raden. Ook wilde ik dit met film posters doen en serie posters. Ik heb dit toch niet gekozen omdat de API geen "populaire films" sectie heeft en ik dan een random ID moet kiezen, hierbij kunnen ook onbekende films tussen zitten met onbekende acteurs.
![Celeb Image Guesser schets](https://github.com/kilroy763/real-time-web-2021/blob/main/ReadmeImages/Concept3.jpg?raw=true)  

### Formula 1 Quiz. 
Tot slot had ik het concept voor een F1 quiz. Ik heb een API gevonden die informatie bevat van alle seizoenen. Hierom wil ik een app maken waarbij je rooms kan maken met een optie tot 1 vs 1 kennis test. Je krijgt dan random feiten te zien over bepaalde seizoenen en moet dan raden welk seizoen het bijvoorbeeld is. 
![F1 quiz schets](https://github.com/kilroy763/real-time-web-2021/blob/main/ReadmeImages/concept4.jpg?raw=true)  

### Gekozen API
De gekozen API is de Formula 1 API van Ergast (https://ergast.com/mrd/). Dit is een API dat jaarlijks update, hierin staat allerlij formule 1 gegevens. Je kan de races, courreurs, tracks en teams terugvinden.

### Data Modelling
![Data Modelling](https://github.com/kilroy763/real-time-web-2021/blob/main/ReadmeImages/datamodelling.jpg?raw=true)
<!-- ...but how does one use this project? What are its features 🤔 -->
