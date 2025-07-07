console.log("Welcome to spotify ")
//initialize the variable
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItems'));

let songs=[
    {songName : "music a ",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName : "music b ",filePath:"songs/2.mp3",coverPath:"covers/1.jpg"},
    {songName : "music c ",filePath:"songs/3.mp3",coverPath:"covers/1.jpg"},
    {songName : "music d ",filePath:"songs/4.mp3",coverPath:"covers/1.jpg"},
    {songName : "music e ",filePath:"songs/5.mp3",coverPath:"covers/1.jpg"},
    {songName : "music f ",filePath:"songs/5.mp3",coverPath:"covers/1.jpg"},
    {songName : "music g ",filePath:"songs/5.mp3",coverPath:"covers/1.jpg"},
    {songName : "music h ",filePath:"songs/5.mp3",coverPath:"covers/1.jpg"},
    {songName : "music i ",filePath:"songs/5.mp3",coverPath:"covers/1.jpg"},
    {songName : "music j ",filePath:"songs/5.mp3",coverPath:"covers/1.jpg"},

]
songItems.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innertext=songs[i].songName;
})


//handle play/pause click
masterPlay,addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){ // if already paused make it play 
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle'); // changing from pause to play button 
        masterPlay.classList.add('fa-pause-circle'); // making sign of play button 
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle'); // changing from pause to play button 
        masterPlay.classList.add('fa-play-circle'); // making sign of play button
        gif.style.opacity=0;

    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar 
    progress=parseInt(audioElement.currentTime/audioElement.duration)*100; // finding amount of music which has been played
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{ // if we change progress bar music should go to that time stamp
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})