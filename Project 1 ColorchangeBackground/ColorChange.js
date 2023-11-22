/*
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    //console.log(button);
    button.addEventListener('click', function(e) {
    //console.log(e);
    console.log(e.target);
    // body.addEventListener('keydown',function(a){
    //     console.log(a);
        //console.log(a.target);
    

    // if(e.target.id === 'Grey'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'Yellow'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'Green'){
    //     body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'Orange'){
    //     body.style.backgroundColor = e.target.id;
    // }

  
    switch (e.target.id) {
        case 'Grey':
            body.style.backgroundColor = e.target.id
            break;
        case 'Yellow':
            body.style.backgroundColor = e.target.id
            break;  
        case 'Green':
            body.style.backgroundColor = e.target.id
            break;
        case 'Orange':
            body.style.backgroundColor = e.target.id
            break;  
    }

    // if(a.key === 'G'){
    //     body.style.backgroundColor = 'Grey';
    // }
    // if(a.key === 'y'){
    //     body.style.backgroundColor = 'Yellow';
    // }
    // if(a.key === 'G'){
    //     body.style.backgroundColor = 'Green';
    // }
    // if(a.key === 'O'){
    //     body.style.backgroundColor = 'Orange';
    // }


    });

});

//});

*/

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    button.addEventListener('click', function (e) {
        console.log(e.target);

        if(e.target.id === 'Grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Orange'){
            body.style.backgroundColor = e.target.id;
        }
    });
});
