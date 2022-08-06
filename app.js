document.querySelector('.btn').addEventListener('click', function () {
    document.querySelector('.first').classList.add('none');
    document.querySelector('.second').classList.remove('none');
})

let countcur = 0;
let count = 0;


document.addEventListener('click', function (e) {
    if (e.target.classList.contains('select')) {



        if (e.target.classList.contains('y')) {
            count -= 1;

            if (e.target.classList.contains('cur')) {
                e.target.classList.remove('y')
                countcur -= 1;
            } else {
                e.target.classList.remove('y')
            }



        } else {
            count += 1;
            if (e.target.classList.contains('cur')) {
                e.target.classList.add('y')
                countcur += 1
            } else {
                e.target.classList.add('y')
            }



        }

        disabled()
    }
})



let btn2 = document.querySelector('.btn2');

function disabled() {
    if (count == 5) {
        btn2.disabled = false;
    } else {
        btn2.disabled = true;
    }
}


btn2.addEventListener('click', function () {
    if (countcur != 5) {
        document.querySelector('.popap').classList.remove('none');
        document.querySelector('.second').classList.add('none');
    } else {
        document.querySelector('.second').classList.add('none');
        document.querySelector('.won').classList.remove('none');
    }
})


let arr = document.querySelectorAll('.select');


document.addEventListener('click', function (e) {

    if (e.target.classList.contains("rep")) {
        count = 0
        countcur = 0

        let arr = document.querySelectorAll('.select');

        arr.forEach(function(e){
            if (e.classList.contains('y')){
                e.classList.remove('y')
            }
        })

        document.querySelector('.popap').classList.add('none');

        document.querySelector('.first').classList.remove('none');
    }

})