const musicArray = [
    {
        id:1,
        name:"Tum Dil ki Dhadkan mein",
        artistName:"Abhijeet Bhatacharya",
        img:"https://a10.gaanacdn.com/gn_img/albums/jBr3gLyWR1/Br3gqvyYbR/size_l.webp",
        genre:["Romantic", "All"],
        source:"https://open.spotify.com/track/368WunUYuPt29BAesTxA4V?si=6b7be5b317c4454b"
    },
    {
        id:2,
        name:"Tera Hone laga hoon",
        artistName:"Atif Aslam",
        img:"https://svsmmusicindia.in/wp-content/uploads/2023/06/Tera-Hone-Laga-Hoon-Song-Image-Credit-By-tips-Offecial.jpg",
        genre:["Romantic", "All"],
        source:"https://open.spotify.com/track/0dLbrlAVPPjpPqnYfmJsWk?si=57174394522f409b"
    },
    {
        id:3,
        name:"Aapke Pyaar mein",
        artistName:"Alka Yagnik",
        img:"https://i.ytimg.com/vi/FNpV3DQWUf8/maxresdefault.jpg",
        genre:["Romantic", "All"],
        source:"https://open.spotify.com/track/7rlUYt3JTteF5OqEnx1UYf?si=10cc7db9605e4e9e"
    },
    {
        id:4,
        name:"Aashiqui mein teri",
        artistName:"Himesh Reshamiya",
        img:"https://img.youtube.com/vi/Ow6PyxjH1YU/sddefault.jpg",
        genre:["Rap", "All"],
        source:"https://open.spotify.com/track/1VGt7ZmY4iPfrabXjIMHo4?si=d568bce4e09c4668"
    },
    {
        id:5,
        name:"Dhoom Again",
        artistName:"Vishal Shekhar",
        img:"https://a10.gaanacdn.com/gn_img/albums/z8k3yd1Krx/8k3yma753r/size_m.jpg",
        genre:["Rap", "All"],
        source:"https://open.spotify.com/track/5IUP91X8fKfJnWQgCHT9dN?si=4164abe3aa9041e2"
    }
];

let playListObject = {};

let songsList = document.querySelector("#songs");
let selectedmusics = document.querySelector("#musiclists");
let imgEl = document.querySelector("#artistimage");
let songNameEl = document.querySelector("#songname");
let artistNameEl = document.querySelector("#artistname");
let previousEl = document.querySelector("#previousBtn");
let nextEl = document.querySelector("#nextBtn");
let addplaylistEl = document.querySelector("#addplaylist");

const songsCurrentEl = document.querySelector("#songscurrent");
const createPlaylistEl = document.querySelector("#createplaylist");
const playlistNameEl = document.querySelector("#playlistname");
const allPlayListEl = document.querySelector("#allplaylist");

const changeToggleEl = document.querySelector("#toggleBackground");

previousEl.addEventListener('click', (e) => {
    console.log(e.target);
    let index = 0;
    console.log(index);
    if(index === 0){
        renderCurrentSong(musicArray.length-1);
    }
    else{
        renderCurrentSong(index-1);
    }
});

nextEl.addEventListener('click', () => {
    let index = 0;
    if(index === musicArray.length-1){
        renderCurrentSong(0);
    }
    else{
        renderCurrentSong(index+1);
    }
});

function showSongs(){
    let listValue = songsList.value;
    console.log(listValue);
    selectedmusics.textContent="";
    for(let i in musicArray){
        if(musicArray[i].genre[0].toLowerCase() === listValue.toLowerCase() || musicArray[i].genre[1].toLowerCase() === listValue.toLowerCase()){
            console.log(musicArray[i].artistName);

            const liEl = document.createElement('li');
            const buttonEl = document.createElement('button');
            buttonEl.classList.add("buttonstyle");
            buttonEl.textContent = musicArray[i].name;
            liEl.appendChild(buttonEl);
            selectedmusics.appendChild(liEl);
            buttonEl.addEventListener('click', () => {
                renderCurrentSong(i);
            });
            addplaylistEl.addEventListener('click', () => {
                addtoPlayList(musicArray[i]);
            });
        }
    }
}


function renderCurrentSong(index){
    imgEl.setAttribute('src', musicArray[index].img);
    songNameEl.textContent = musicArray[index].name;
    artistNameEl.textContent = musicArray[index].artistName;
}

function addtoPlayList(songObject){
    
}

createPlaylistEl.addEventListener('click', () => {
    let inputVal = playlistNameEl.value;
    playlistNameEl.value='';
    createPlaylist(inputVal);
});


function createPlaylist(inputVal){
    let liEl = document.createElement("li");
    liEl.textContent = inputVal;
    playListObject[inputVal] = [];
    allPlayListEl.appendChild(liEl);
}

const bodyEl = document.querySelector("body");
const divEl = document.querySelector("div");

changeToggleEl.addEventListener('click', () => {
    toggleTheme();
});

