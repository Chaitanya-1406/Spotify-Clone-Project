console.log("Welcome to Spotify");
// Initialize the variables 
let songIndex = 0;
let audioElement = new Audio('songs/bella ciao.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
// let gifi = document.getElementsByClassName('songInfo');
let songItems =  Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Salam-e-ishq", filePath: "song/bella ciao.mp3" , coverPath: "Needed documents/covers/1.jpg"},
    {songName: "salaam-e-junoon", filePath: "song/1.mp3" , coverPath: "Needed documents/covers/2.jpg"},
    {songName: "mitshi", filePath: "song/2.mp3" , coverPath: "Needed documents/covers/3.jpg"},
    {songName: "random", filePath: "song/3.mp3" , coverPath: "Needed documents/covers/4.jpg"},
    {songName: "mama", filePath: "song/4.mp3" , coverPath: "Needed documents/covers/5.jpg"},
    {songName: "dad", filePath: "song/5.mp3" , coverPath: "Needed documents/covers/6.jpg"},
    {songName: "girl", filePath: "song/6.mp3" , coverPath: "Needed documents/covers/7.jpg"},
    {songName: "boy", filePath: "song/7.mp3" , coverPath: "Needed documents/covers/8.jpg"},
    {songName: "bullshit", filePath: "song/8.mp3" , coverPath: "Needed documents/covers/9.jpg"},
    {songName: "ganesh", filePath: "song/9.mp3" , coverPath: "Needed documents/covers/10.jpg"},
    {songName: "narad", filePath: "song/10.mp3" , coverPath: "Needed documents/covers/1.jpg"},
]


songItems.forEach((element) => {
    console.log(element,i);
element.getElementByTagName("img")[0].src = songs[i].filePath;
    
});

// audioElement.play()
// handle play pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // songInfo.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // songInfo.style.opacity = 0;

    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElemet.currentTime/audioElement.duration)*100);
    // console.log(progeress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =  myProgressBar.value*audioElement.duration/100
})


myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
})