console.log('JS');

let clicksOnGenerate = 0;
$(document).ready(readyNow);

function readyNow(){
    console.log('JQ');
    
    addClickHandlers();
}

function addClickHandlers(){
    $('#generate').on('click', generateClick);
    $('main').on('click', ' div #delete', deleteClick)
    $('main').on('click', ' div #swap', swapClick)
}

function generateClick(){
    clicksOnGenerate ++;
    $('main').append(`
        <div class="red">
            <p>
                ${clicksOnGenerate}
            </p>
            <button id="swap">Swap Color</button>
            <button id="delete">Delete</button>
            
        </div>
    `)

}

function deleteClick(){
    $(this).closest('div').remove();    
}

function swapClick(){
    $(this).closest('div').toggleClass('yellow red');
    
}