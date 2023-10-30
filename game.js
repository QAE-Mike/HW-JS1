const STEP = 36
 let robotRight = 0

 function render() {
    gameMap.innerHTML = `
 <div class="robot" 
        style="transform:translateX(${robotRight * STEP}px)">
    </div>
`
 }

 render()


