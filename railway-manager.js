let prompt = require("prompt-sync")();

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

// ===== 6 tickets pré-remplis (test) =====
let tickets = [
    { id: 1, passengerName: "Yassine",  tripId: 1, seatNumber: 1, price: 25 },   // Safi -> Youssoufia
    { id: 2, passengerName: "Sanaa",    tripId: 1, seatNumber: 2, price: 25 },   // Safi -> Youssoufia (nfs trip)
    { id: 3, passengerName: "Omar",     tripId: 3, seatNumber: 1, price: 140 },  // Safi -> Casablanca
    { id: 4, passengerName: "Khadija",  tripId: 6, seatNumber: 1, price: 120 },  // Marrakech -> Casablanca
    { id: 5, passengerName: "Ayoub",    tripId: 8, seatNumber: 1, price: 40 },   // Casablanca -> Rabat
    { id: 6, passengerName: "Imane",    tripId: 11, seatNumber: 1, price: 95 }   // Rabat -> Fes
];
let ticketId = 7; // khass ybda mnin wqf les tickets (dernier id + 1)

// n-9assiw availableSeats dial les trips li fihom des tickets deja
for (let i = 0; i < tickets.length; i++) {

    for (let j = 0; j < trips.length; j++) {

        if (trips[j].id === tickets[i].tripId) {

            trips[j].availableSeats--;

            break;
        }
    }
}

// 1. Afficher les trajets
function afficherTrajets() {
    console.log("\n===== TRAJETS =====");
    for (let i = 0; i < trips.length; i++) {
        console.log(
            trips[i].id + ". " +
            trips[i].departure + " -> " +
            trips[i].destination +
            " | " + trips[i].departureTime +
            " | " + trips[i].price + " DH" +
            " | Places: " + trips[i].availableSeats
        );
    }
}
// 2. Chercher un trajet
function chercherTrajet(id) {
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === id) {
            return trips[i];
        }
    }
    return null;
}


// 3. Chercher une place libre
function chercherPlaceLibre(tripId) {
    for (let place = 1; place <= 50; place++) {
        let placeOccupee = false;
        for (let i = 0; i < tickets.length; i++) {
            if (
                tickets[i].tripId === tripId &&
                tickets[i].seatNumber === place
            ) {
                placeOccupee = true;
                break;
            }
        }
        if (placeOccupee === false) {
            return place;
        }
    }
    return null;
}

// 4. Acheter un ticket
function acheterTicket() {
    let nom = prompt("Nom du passager : ");
    let id = Number(prompt("ID du trajet : "));
    let trajet = chercherTrajet(id);

    if (trajet === null) {
        console.log("Trajet introuvable.");
        return;
    }

    if (trajet.availableSeats === 0) {
        console.log("Train complet.");
        return;
    }

    let place = chercherPlaceLibre(id);

    if (place === null) {
        console.log("Aucune place disponible.");
        return;
    }

    let ticket = {
        id: ticketId,
        passengerName: nom,
        tripId: id,
        seatNumber: place,
        price: trajet.price
    };

    tickets.push(ticket);
    trajet.availableSeats--;
    ticketId++;

    console.log("\nTicket acheté !");
    console.log("Ticket ID : " + ticket.id);
    console.log("Passager : " + ticket.passengerName);
    console.log("Trajet : " + trajet.departure + " -> " + trajet.destination);
    console.log("Place : " + ticket.seatNumber);
    console.log("Prix : " + ticket.price + " DH");
}


// 5. Afficher les tickets
function afficherTickets() {
    console.log("\n===== TICKETS =====");
    if (tickets.length === 0) {
        console.log("Aucun ticket.");
    } else {
        for (let i = 0; i < tickets.length; i++) {
            let ticket = tickets[i];
            let trajet = chercherTrajet(ticket.tripId);
            console.log(
                "Ticket #" + ticket.id +
                " | " + ticket.passengerName +
                " | " + trajet.departure +
                " -> " + trajet.destination +
                " | Place: " + ticket.seatNumber +
                " | " + ticket.price + " DH"
            );
        }
    }
}


// 6. Annuler un ticket
function annulerTicket() {
    let id = Number(prompt("ID du ticket : "));
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === id) {
            let trajet = chercherTrajet(tickets[i].tripId);
            tickets.splice(i, 1);
            trajet.availableSeats++;
            console.log("Ticket annulé.");
            return;
        }
    }
    console.log("Ticket introuvable.");
}


// 7. Rechercher un ticket par nom
function rechercherTicket() {
    let nom = prompt("Nom du passager : ");
    let trouve = false;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].passengerName === nom) {
            console.log(
                "Ticket #" + tickets[i].id +
                " | Passager: " + tickets[i].passengerName +
                " | Prix: " + tickets[i].price + " DH" +
                " | Place: " + tickets[i].seatNumber
            );
            trouve = true;
        }
    }
    if (trouve === false) {
        console.log("Aucun ticket trouvé.");
    }
}


// 8. Filtrer par ville
function filtrerTrajets() {
    let ville = prompt("Ville de départ : ");
    let trouve = false;
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].departure.toLowerCase().trim() === ville.toLowerCase().trim()) {
            console.log(
                trips[i].departure +
                " -> " +
                trips[i].destination +
                " | " +
                trips[i].price +
                " DH"
            );
            trouve = true;
        }
    }
    if (trouve === false) {
        console.log("Aucun trajet trouvé.");
    }
}


// 9. Trier par prix
function trierTrajets() {

    let trajetsTries = [...trips];

    for (let i = 0; i <= trajetsTries.length - 1; i++) {

        for (let j = 1; j < trajetsTries.length - i; j++) {

            if (trajetsTries[j - 1].price > trajetsTries[j].price) {

                let temp = trajetsTries[j - 1];

                trajetsTries[j - 1] = trajetsTries[j];

                trajetsTries[j] = temp;
            }
        }
    }

    console.log("\n===== TRAJETS PAR PRIX =====");

    for (let i = 0; i < trajetsTries.length; i++) {

        console.log(
            trajetsTries[i].departure +
            " -> " +
            trajetsTries[i].destination +
            " : " +
            trajetsTries[i].price +
            " DH"
        );
    }
}


// 10. Statistiques
function statistiques() {
    let total = 0;
    for (let i = 0; i < tickets.length; i++) {
        total = total + tickets[i].price;
    }
    console.log("\n===== STATISTIQUES =====");
    console.log("Nombre de tickets : " + tickets.length);
    console.log("Chiffre d'affaires : " + total + " DH");
}


// PROGRAMME PRINCIPAL

let choix = "";

while (choix !== "0") {
    console.log("\n========================");
    console.log("     RAILWAY MANAGER");
    console.log("========================");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier par prix");
    console.log("8. Statistiques");
    console.log("0. Quitter");

    choix = prompt("Votre choix : ");

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
        statistiques();
    } else if (choix === "0") {
        console.log("Merci et à bientôt !");
    } else {
        console.log("Choix invalide.");
    }
}