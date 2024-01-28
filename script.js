let boxes = document.querySelectorAll(".box")
let resetBtn= document.querySelector(".reset")
let startBtn= document.querySelector(".start")
let msg = document.querySelector(".msg")
let mssg = document.querySelector("#mssg")

let turnO = true//player X x , player o y
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame=() =>{
    turnO=true
    enableBoxes()
    msg.classList.add("hide")

}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText=""
    }
}


const showWinner = (winner) =>{
    mssg.innerText=`Congo , winner is ${winner}`
    msg.classList.remove("hide")
    disableBoxes() 
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O"
            turnO= false
        }
        else{
            box.innerText = "X"
            turnO= true
        }
        box.disabled=true
    checkWinner()
    })
})

const checkWinner= () => {
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){            
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner",pos1Val)
                showWinner(pos1Val)
            }            
        }
    }
}
startBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)