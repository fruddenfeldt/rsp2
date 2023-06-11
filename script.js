const playerPaper = document.getElementById('playerPaper')

playerPaper.addEventListener('click', (e) => 
{
    console.log("paper!");
    playerPaper.classList.add('paperAnimation')
    setTimeout(() => {
        playerPaper.classList.remove('paperAnimation')
    }, 1000)
}    
)

const playerRock = document.getElementById('playerRock')
playerRock.addEventListener('click', (e) => 
{
    console.log("rock!");
    playerRock.classList.add('rockAnimation')
    setTimeout(() => {
        playerRock.classList.remove('rockAnimation')
    }, 1000)
}    
)

const playerScissors = document.getElementById('playerScissors')
playerScissors.addEventListener('click', (e) => {
    console.log("scissors");
    playerScissors.classList.add('scissorAnimation')
    setTimeout(() => {
        playerScissors.classList.remove('scissorAnimation')
    }, 1000)
})