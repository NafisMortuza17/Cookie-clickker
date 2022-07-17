const cookie=document.querySelector(".item");
const messageDiv=document.querySelector(".clicks");
let numClicks=0;


function updateClick()
{
    numClicks++;
    messageDiv.innerHTML=numClicks;
}


cookie.addEventListener("click", function()
{
    updateClick();
})


