
//Seungcheol

const map = L.map('map', {
    padding: '150px',
});


// Get the tile layer from OpenStreetMaps 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
 
  // Specify the maximum zoom of the map 
  maxZoom: 19, 
 
}).addTo(map); 
 
// Set the view of the map 
// with the latitude, longitude and the zoom value 
map.setView([43.6688, -79.394], 16); 

// map.locate({setView: true, maxZoom: 16}); 

// Show a market at the position of the 
let Marker = L.marker([43.6688, -79.394]).addTo(map); 
 
// Bind popup to the marker with a popup 
Marker.bindPopup("Jazz Festival").openPopup(); 

const mapshower = (event) => {
    const clickedElementId = event.target.id;
  
    // Clear existing markers
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            layer.remove();
        }
    });
    if (clickedElementId === "avenue"){
        map.setView([43.66713374696787, -79.39362145656563], 16); 
        let Marker = L.marker([43.66713374696787, -79.39362145656563]).addTo(map); 
        Marker.bindPopup("AVENUE").openPopup(); 
    }
    else if (clickedElementId === "village"){
        map.setView([43.670173851838165, -79.39166889379766], 16); 
        let Marker = L.marker([43.670173851838165, -79.39166889379766]).addTo(map); 
        Marker.bindPopup("VILLAGE").openPopup(); 
    }
    else if (clickedElementId === "main_stage") {
        map.setView([43.66775396274393, -79.39250807851374], 16); 
        let Marker = L.marker([43.66775396274393, -79.39250807851374]).addTo(map); 
        Marker.bindPopup("MAIN STAGE").openPopup(); 
    }

    else {
        map.setView([43.6688, -79.394], 16); 
        let Marker = L.marker([43.6688, -79.394]).addTo(map); 
        Marker.bindPopup("Jazz Festival").openPopup(); 
    }
}
document.getElementById("location").addEventListener("click",mapshower);
document.getElementById("avenue").addEventListener("click",mapshower);
document.getElementById("village").addEventListener("click",mapshower);
document.getElementById("main_stage").addEventListener("click",mapshower);

//Tarun
function updatePrice() {
    var ticketTypeDropdown = document.getElementById('ticketType');
    var selectedOption = ticketTypeDropdown.options[ticketTypeDropdown.selectedIndex];
    var pricePerTicket = parseFloat(selectedOption.getAttribute('data-price'));
    document.getElementById('pricePerTicket').innerText = pricePerTicket.toFixed(2);
}

function processPayment() {

    const ticketType = document.getElementById('ticketType').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const creditCard = document.getElementById('creditCard').value;


    if (ticketType && quantity >= 1 && creditCard.length === 16) {
        console.log('Processing payment...');

        const pricePerTicket = parseFloat(document.getElementById('pricePerTicket').innerText);
        const subtotal = pricePerTicket * quantity;
        const tax = subtotal * 0.13;
        const finalPrice = subtotal + tax;


        document.getElementById('numTickets').innerText = quantity;
        document.getElementById('subtotal').innerText = subtotal.toFixed(2);
        document.getElementById('tax').innerText = tax.toFixed(2);
        document.getElementById('finalPrice').innerText = finalPrice.toFixed(2);


        document.getElementById('orderSummary').style.display = 'block';

        console.log('Payment successful.');
    } else {
   
        alert('You must select a minimum of 1 ticket and enter a 16-digit credit card number.');
        console.log('Payment failed. Required information not entered.');
    }
}