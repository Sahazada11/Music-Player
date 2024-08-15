//initializing variables

let songIndex=0;
let audioElement=new Audio("song/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let progressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif")
let masterSongName=document.getElementById("masterSongName")
let Songs=[
    {songName:"Na-Tum-Jano-Na-Hum",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Aa-bhi-ja-Aa-bhi-ja",filePath:"song/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Hairat ",filePath:"song/4.mp3",coverPath:"cover/3.jpeg"},
    {songName:"Jane-kya-dhundta-hai",filePath:"song/3.mp3",coverPath:"cover/4.jpg"},
    {songName:"Ek-pal-ka-jeena",filePath:"song/5.mp3",coverPath:"cover/5.jpeg"},
    {songName:"Tu-dill-ki-khushi",filePath:"song/6.mp3",coverPath:"cover/6.jpeg"}
    
]

//audio Element.play

//Handle play pause button
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
         audioElement.pause();
         masterPlay.classList.remove('fa-circle-pause');
         masterPlay.classList.add('fa-circle-play');
         gif.style.opacity=0;
    }
})
//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value=progress;
})

progressBar.addEventListener("change",()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`song/${songIndex+1}.mp3`;
        masterSongName.innerText=Songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0
    }
    else{
        songIndex +=1
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=Songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText=Songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
