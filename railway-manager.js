// ============================================
// RAILWAY MANAGER - Version simple
// ============================================

// Il faut installer prompt-sync avec : npm install prompt-sync
let prompt = require('prompt-sync')();

// ----------- Liste des trajets -----------
let trips = [
    { id: 1, departure: "Safi", destination: "Youssoufia", departureTime: "07:30", arrivalTime: "08:30", price: 25, availableSeats: 50 },
    { id: 2, departure: "Safi", destination: "Marrakech", departureTime: "08:00", arrivalTime: "10:30", price: 90, availableSeats: 50 },
    { id: 3, departure: "Safi", destination: "Casablanca", departureTime: "09:00", arrivalTime: "13:00", price: 140, availableSeats: 50 },
    { id: 4, departure: "Youssoufia", destination: "Marrakech", departureTime: "09:15", arrivalTime: "11:00", price: 65, availableSeats: 50 },
    { id: 5, departure: "Youssoufia", destination: "Casablanca", departureTime: "10:00", arrivalTime: "13:30", price: 110, availableSeats: 50 },
    { id: 6, departure: "Marrakech", destination: "Casablanca", departureTime: "11:30", arrivalTime: "14:30", price: 120, availableSeats: 50 },
    { id: 7, departure: "Marrakech", destination: "Rabat", departureTime: "12:00", arrivalTime: "16:00", price: 150, availableSeats: 50 },
    { id: 8, departure: "Casablanca", destination: "Rabat", departureTime: "14:00", arrivalTime: "15:15", price: 40, availableSeats: 50 },
    { id: 9, departure: "Casablanca", destination: "Kenitra", departureTime: "15:00", arrivalTime: "16:45", price: 55, availableSeats: 50 },
    { id: 10, departure: "Rabat", destination: "Kenitra", departureTime: "16:00", arrivalTime: "16:45", price: 30, availableSeats: 50 },
    { id: 11, departure: "Rabat", destination: "Fes", departureTime: "17:00", arrivalTime: "19:30", price: 95, availableSeats: 50 },
    { id: 12, departure: "Kenitra", destination: "Fes", departureTime: "17:30", arrivalTime: "20:00", price: 85, availableSeats: 50 },
    { id: 13, departure: "Fes", destination: "Meknes", departureTime: "08:30", arrivalTime: "09:20", price: 35, availableSeats: 50 },
    { id: 14, departure: "Fes", destination: "Oujda", departureTime: "10:00", arrivalTime: "13:30", price: 130, availableSeats: 50 },
    { id: 15, departure: "Meknes", destination: "Rabat", departureTime: "11:00", arrivalTime: "13:30", price: 80, availableSeats: 50 },
    { id: 16, departure: "Meknes", destination: "Casablanca", departureTime: "12:00", arrivalTime: "15:00", price: 105, availableSeats: 50 },
    { id: 17, departure: "Casablanca", destination: "El Jadida", departureTime: "16:30", arrivalTime: "18:00", price: 50, availableSeats: 50 },
    { id: 18, departure: "El Jadida", destination: "Safi", departureTime: "18:30", arrivalTime: "20:30", price: 60, availableSeats: 50 },
    { id: 19, departure: "Marrakech", destination: "Agadir", departureTime: "15:00", arrivalTime: "18:30", price: 100, availableSeats: 50 },
    { id: 20, departure: "Agadir", destination: "Safi", departureTime: "19:00", arrivalTime: "22:00", price: 95, availableSeats: 50 }
];

// ----------- Liste des tickets -----------
let tickets = [];
let nextTicketId = 1;

// ----------- Fonction : afficher tous les trajets -----------
function afficherTrajets() {
    console.log("");
    console.log("=== TRAJETS DISPONIBLES ===");
    for (let i = 0; i < trips.length; i++) {
        console.log("");
        console.log("#" + trips[i].id + " " + trips[i].departure + " -> " + trips[i].destination);
        console.log("Depart : " + trips[i].departureTime);
        console.log("Arrivee : " + trips[i].arrivalTime);
        console.log("Prix : " + trips[i].price + " DH");
        console.log("Places disponibles : " + trips[i].availableSeats);
    }
}

// ----------- Fonction : chercher un trajet par id -----------
function chercherTrajetParId(id) {
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === id) {
            return trips[i];
        }
    }
    return null;
}

// ----------- Fonction : acheter un ticket -----------
function acheterTicket() {
    let nom = prompt("Nom du passager : ");
    let idTexte = prompt("Identifiant du trajet : ");
    let tripId = parseInt(idTexte);

    let trajet = chercherTrajetParId(tripId);

    if (trajet === null) {
        console.log("");
        console.log("Trajet introuvable.");
        return;
    }

    if (trajet.availableSeats <= 0) {
        console.log("");
        console.log("Train complet.");
        return;
    }

    // Compter combien de tickets existent deja sur ce trajet pour donner un numero de place
    let compteurPlaces = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].tripId === tripId) {
            compteurPlaces = compteurPlaces + 1;
        }
    }
    let numeroPlace = compteurPlaces + 1;

    let nouveauTicket = {
        id: nextTicketId,
        passengerName: nom,
        tripId: trajet.id,
        seatNumber: numeroPlace,
        price: trajet.price
    };

    tickets.push(nouveauTicket);
    nextTicketId = nextTicketId + 1;
    trajet.availableSeats = trajet.availableSeats - 1;

    console.log("");
    console.log("Ticket achete avec succes.");
    console.log("");
    console.log("Ticket #" + nouveauTicket.id);
    console.log("Passager : " + nouveauTicket.passengerName);
    console.log("Trajet : " + trajet.departure + " -> " + trajet.destination);
    console.log("Place : " + nouveauTicket.seatNumber);
    console.log("Prix : " + nouveauTicket.price + " DH");
}

// ----------- Fonction : afficher tous les tickets -----------
function afficherTickets() {
    console.log("");
    console.log("=== TICKETS ===");

    if (tickets.length === 0) {
        console.log("Aucun ticket enregistre.");
        return;
    }

    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        let trajet = chercherTrajetParId(ticket.tripId);
        let texteTrajet = "Trajet inconnu";
        if (trajet !== null) {
            texteTrajet = trajet.departure + " -> " + trajet.destination;
        }
        console.log("");
        console.log("Ticket #" + ticket.id);
        console.log("Passager : " + ticket.passengerName);
        console.log("Trajet : " + texteTrajet);
        console.log("Place : " + ticket.seatNumber);
        console.log("Prix : " + ticket.price + " DH");
    }
}

// ----------- Fonction : annuler un ticket -----------
function annulerTicket() {
    let idTexte = prompt("Identifiant du ticket : ");
    let ticketId = parseInt(idTexte);

    let indexTrouve = -1;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === ticketId) {
            indexTrouve = i;
        }
    }

    if (indexTrouve === -1) {
        console.log("");
        console.log("Ticket introuvable.");
        return;
    }

    let ticket = tickets[indexTrouve];
    let trajet = chercherTrajetParId(ticket.tripId);

    tickets.splice(indexTrouve, 1);

    if (trajet !== null) {
        trajet.availableSeats = trajet.availableSeats + 1;
    }

    console.log("");
    console.log("Ticket annule avec succes.");
}

// ----------- Fonction : rechercher un ticket par nom -----------
function rechercherTicket() {
    let nom = prompt("Nom du passager : ");
    let trouve = false;

    console.log("");
    console.log("=== RESULTATS DE LA RECHERCHE ===");

    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        if (ticket.passengerName.toLowerCase() === nom.toLowerCase()) {
            trouve = true;
            let trajet = chercherTrajetParId(ticket.tripId);
            let texteTrajet = "Trajet inconnu";
            if (trajet !== null) {
                texteTrajet = trajet.departure + " -> " + trajet.destination;
            }
            console.log("");
            console.log("Ticket #" + ticket.id);
            console.log("Passager : " + ticket.passengerName);
            console.log("Trajet : " + texteTrajet);
            console.log("Place : " + ticket.seatNumber);
            console.log("Prix : " + ticket.price + " DH");
        }
    }

    if (trouve === false) {
        console.log("Aucun ticket trouve pour ce passager.");
    }
}

// ----------- Fonction : filtrer les trajets par ville de depart -----------
function filtrerTrajets() {
    let ville = prompt("Ville de depart : ");

    console.log("");
    console.log("=== RESULTATS DU FILTRE ===");

    let trouve = false;
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].departure.toLowerCase() === ville.toLowerCase()) {
            trouve = true;
            console.log(trips[i].departure + " -> " + trips[i].destination + " : " + trips[i].price + " DH");
        }
    }

    if (trouve === false) {
        console.log("Aucun trajet trouve pour cette ville.");
    }
}

// ----------- Fonction : trier les trajets par prix croissant -----------
function trierTrajets() {
    // On copie le tableau pour ne pas modifier l'original
    let trajetsTries = [];
    for (let i = 0; i < trips.length; i++) {
        trajetsTries.push(trips[i]);
    }

    // Tri a bulles (bubble sort) - methode simple et basique
    for (let i = 0; i < trajetsTries.length; i++) {
        for (let j = 0; j < trajetsTries.length - 1 - i; j++) {
            if (trajetsTries[j].price > trajetsTries[j + 1].price) {
                let temp = trajetsTries[j];
                trajetsTries[j] = trajetsTries[j + 1];
                trajetsTries[j + 1] = temp;
            }
        }
    }

    console.log("");
    console.log("=== TRAJETS TRIES PAR PRIX CROISSANT ===");
    for (let i = 0; i < trajetsTries.length; i++) {
        console.log(trajetsTries[i].departure + " -> " + trajetsTries[i].destination + " : " + trajetsTries[i].price + " DH");
    }
}

// ----------- Fonction : statistiques (bonus) -----------
function afficherStatistiques() {
    console.log("");
    console.log("=== STATISTIQUES ===");
    console.log("Nombre total de tickets : " + tickets.length);

    let chiffreAffaires = 0;
    for (let i = 0; i < tickets.length; i++) {
        chiffreAffaires = chiffreAffaires + tickets[i].price;
    }
    console.log("Chiffre d'affaires total : " + chiffreAffaires + " DH");

    if (tickets.length === 0) {
        return;
    }

    // Trouver le trajet le plus vendu, sans .reduce() ni objets compliques
    let meilleurTripId = -1;
    let meilleurCompte = 0;

    for (let i = 0; i < trips.length; i++) {
        let compte = 0;
        for (let j = 0; j < tickets.length; j++) {
            if (tickets[j].tripId === trips[i].id) {
                compte = compte + 1;
            }
        }
        if (compte > meilleurCompte) {
            meilleurCompte = compte;
            meilleurTripId = trips[i].id;
        }
    }

    let meilleurTrajet = chercherTrajetParId(meilleurTripId);
    if (meilleurTrajet !== null) {
        console.log("");
        console.log("Trajet le plus vendu :");
        console.log(meilleurTrajet.departure + " -> " + meilleurTrajet.destination);
        console.log(meilleurCompte + " tickets vendus");
    }
}

// ----------- Programme principal -----------
let continuer = true;

while (continuer === true) {
    console.log("");
    console.log("=================================");
    console.log("        RAILWAY MANAGER");
    console.log("=================================");
    console.log("");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("8. Statistiques");
    console.log("0. Quitter");
    console.log("");

    let choix = prompt("Votre choix : ");

    if (choix === "1") {
        afficherTrajets();
    } else if (choix === "2") {
        acheterTicket();
    } else if (choix === "3") {
        afficherTickets();
    } else if (choix === "4") {
        annulerTicket();
    } else if (choix === "5") {
        rechercherTicket();
    } else if (choix === "6") {
        filtrerTrajets();
    } else if (choix === "7") {
        trierTrajets();
    } else if (choix === "8") {
        afficherStatistiques();
    } else if (choix === "0") {
        console.log("");
        console.log("Merci d'avoir utilise Railway Manager. A bientot !");
        continuer = false;
    } else {
        console.log("");
        console.log("Choix invalide, veuillez reessayer.");
    }
}
