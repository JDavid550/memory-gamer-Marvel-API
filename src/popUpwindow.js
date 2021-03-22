const popUpwindow = ()=>{
    let main = document.querySelector('main')
    let movements = document.querySelector('.countNumber')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    main.innerHTML += `<div class="modal">  
    <div class="modal-container">
        <header class="modal-header">
            <h1>CONGRATS, YOU'RE A HERO!</h1>
            <label for="modal-closeButton"><h1>X</h1></label>
        </header>
        <h2>YOUR RESULTS:</h2>
        <div class="results">
            <h3>MOVEMENTS: ${movements.innerHTML}</h3>
            <h3>TIME: ${minutes.innerHTML}m ${seconds.innerHTML}s</h3>
            <div class="play-again-button">
                <a href="">PLAY AGAIN</a>
            </div>
        </div>
        
        </div>
    </div>`
}

export default popUpwindow