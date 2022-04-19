const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    for(var i=0;i<players.length;i++)
    {
        detailedPlayers[i]={
            name:players[i],
            strength:getRandomStrength(),
            image:"images/super-"+(i+1)+".png"
        };
        if(i % 2 != 0)
            detailedPlayers[i].type="hero";
        else
            detailedPlayers[i].type="villain";
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {

    let s = Math.ceil(Math.random() * (100-1) + 1);
    return s;
}

const buildPlayers = (players, type) => {
    let fragment = '';

    for(var i=0;i<players.length;i++)
    {
        if(players[i].type == type)
        {
            fragment+=`
            <div class="player">
                <img src="${players[i].image}" alt="">
                <div class="name">
                    ${players[i].name}
                </div> 
                <div class="strength">
                    ${players[i].strength}
                </div> 
            </div>`;
        } 
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}