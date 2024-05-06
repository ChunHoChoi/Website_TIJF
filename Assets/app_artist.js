const Artistdetails = [
    {   
        imglink: "Assets/Images/Anomalie.png",
        name: "Anomalie",
        time: "Performing Live on Feb 9 at 9PM",
        location: "Performing at The Great Hall, 1087 Queen St W, Toronto, ON M6J 1H3",
        description: "Utilizing a mix of classical music, jazz, hip hop and funk, Anomalie is a world class musician with over 4 million hits on his debut EP, Métropole. Studying classical and jazz piano since childhood, Anomalie was the first person to ever be awarded the Yannick Nézet-Séguin excellence grant in 2012, and shortly after began his musical career. Most recently in 2018, Anomalie announce that he would be debuting his live show with a North-American based tour, featuring a four piece band which would be recreating all of his music live."
    },
    {
        imglink: "Assets/Images/Colin.png",
        name: "Colin Stetson",
        time: "Performing Live on May 16 at 9PM",
        location: "Performing at The Axis Club, 722 College St, Toronto, ON M6G 1C4",
        description: "An accomplished songwriter and soloist, Colin Stetson is a world class saxophonist, multireedist, and composer. Since 2013, Stetson has contributed to the score of several movies and television series. He began playing alto saxophone when he was age 9, and credits his style and emotive performances on his past experiences as a wrestler, and is equally fluent with the clarinet, flute, french horn and cornet as well."
    },
    {
        imglink: "Assets/Images/LSD.png",
        name: "Lake Street Dive",
        time: "Performing Live on June 28, at 8 PM",
        location: "Performing at History, 1663 Queen St E, Toronto, ON M4L 1G5",
        description: "Originally formed as a free country band, Lake Street Dive currently consists of Rachael Price, Bridget Kearney, Mike Calabrese, Akie Bermiss and James Cornelison. Lake Street Dive is a multi-genre band and frequently holds tours across the United States. The band professes to love the classical beatles discography, and have been seen publicly stating their inspiration by traditional sources of classic pop and swing era jazz. If you're an enjoyer of these styles, you'll enjoy what Lake Shore Dive offers."
    }
]

document.addEventListener("DOMContentLoaded", () => {

    const artistcontainer = document.getElementById("Artistlist");

    Artistdetails.forEach(Artistdetails => {
        const ArtistItem = document.createElement("div");
        const ArtistImgdiv = document.createElement("div");
        const ArtistText = document.createElement("div");
        const ArtistImg = document.createElement("img");
        const ArtistName = document.createElement("h1");
        const ArtistTime = document.createElement("p");
        const ArtistLocation = document.createElement("p");
        const ArtistDescription = document.createElement("p");
        const ArtistTicket = document.createElement("Button");

        ArtistImg.src = Artistdetails.imglink;
        ArtistName.innerText = Artistdetails.name;
        ArtistTime.innerText = Artistdetails.time;
        ArtistLocation.innerText = Artistdetails.location;
        ArtistDescription.innerText = Artistdetails.description;
        ArtistTicket.innerText = "Book your Ticket Now!"

        ArtistImgdiv.appendChild(ArtistImg);
        ArtistItem.appendChild(ArtistImgdiv);
        ArtistText.appendChild(ArtistName);
        ArtistText.appendChild(ArtistTime);
        ArtistText.appendChild(ArtistLocation);
        ArtistText.appendChild(ArtistDescription);
        ArtistText.appendChild(ArtistTicket);
        ArtistTicket.className = "ArtistButton"
        ArtistTicket.addEventListener("click",movetoticket)
        ArtistItem.appendChild(ArtistText);
        ArtistItem.className = "Artistwrapper";

        artistcontainer.appendChild(ArtistItem);
    });

});
    const movetoticket = () => {
        window.location.href="buytickets.html";
    }