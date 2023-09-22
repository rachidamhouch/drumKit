let drums = document.querySelectorAll(".drum");
let sounds = [];
let src = [];
for (let i = 0; i < drums.length; i++)
{
    drums[i].style.backgroundImage = "url('images/"+i+".png')";
    sounds.push(new Audio());
    src.push(document.createElement("source"));
    src[i].type = "audio/mpeg";
    src[i].src  = "sounds/" + i + ".mp3";
    sounds[i].appendChild(src[i]);
    drums[i].addEventListener("click", function (){
        sounds[i].play();
        this.classList.toggle("pressed");
        setTimeout(function() {
            drums[i].classList.toggle("pressed");;
          }, 100);
    });
}
document.addEventListener("keydown", function (event){
    let i = event.key - 1;
    if (i >= 0 && i < 7)
    {
        snd1.play();
        snd2.play();
        drums[i].classList.toggle("pressed");
        setTimeout(function() {
            drums[i].classList.toggle("pressed");;
          }, 100);
    }
})

