console.log('JS');

let clicksOnGenerate = 0;
$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
    
    addClickHandlers();
}

function addClickHandlers(){
    $('#generate').on('click', generateClick);
}

function generateClick(){
    clicksOnGenerate ++;
    $('main').append(`
        <div class="red">
            <p>
                ${clicksOnGenerate}
            </p>
            <button id="swap">Swap</button>
            <button id="delete">Delete</button>
            
        </div>
    `)

}