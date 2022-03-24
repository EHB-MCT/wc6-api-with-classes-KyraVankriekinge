[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7411061&assignment_repo_type=AssignmentRepo)
# WC4 - Chat app

## opdracht
Tijdens dit werkcollege maken we een chat applicatie waarin jullie met elkaar kunnen chatten.
We maken hiervoor gebruik van een API (Koppelingen naar een externe site.).


## Stappen
* Je start met het ophalen van alle beschikbare berichten. Deze berichten haal je op via de API. bekijk de API documentatie om te weten welke URL je moet aanspreken.  
* Zodra je de berichten hebt opgeslagen in de array messages, roep je de renderMessages functie, deze moet alle berichten tonen op de pagina.
* Tijd om zelf berichten te kunnen toevoegen. Maak een eventHandler en zorg ervoor dat je de value van het inputField kan uitlezen.
* Je wil ervoor zorgen dat jouw bericht wordt toegevoegd aan de database: je zal hiervoor een API call moeten uitvoeren. Om data naar een API te sturen gebruik je de POST-method. Bekijk opnieuw de API documentatie om te weten welke data het endpoint verwacht.
* Zodra je een bericht hebt toegevoegd wil je alle berichten opnieuw inladen en renderen. Zorg ervoor dat ook je input veld leeg is.
* Zorg ervoor dat je ook alle nieuwe berichten van medestudenten te zien krijgt: dit doe je door om de zoveel tijd opnieuw de API te gaan aanspreken.
* Als laatste stap: zorg ervoor dat berichten die door jou verstuurd worden een andere stijl krijgen: dit doe je door er de css-klasse 'own' aan toe te voegen.