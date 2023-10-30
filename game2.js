const STEP = 72
let robotLeft = 0

function render() {
    gameMap.innerHTML = `
<div class="robot" 
        style="transform:translateX(${robotLeft / STEP}px)">
    </div>
`
}

render()