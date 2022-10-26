import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { forEach } from 'lodash';

export default function Home(props) {

    const [p1, setCount] = React.useState(1);
    const [p2, setCount2] = React.useState(1);
    const [hasil, setHasil] = React.useState(0);
    const [hasil1, setHasil1] = React.useState(0);
    const [hasil2, setHasil2] = React.useState(0);
    const [turn, setTurn] = React.useState(1);

    const [isiRed, setIsiRed] = React.useState(props.copyData);


    const inputP1 = document.getElementById('p1');
    const inputP2 = document.getElementById('p2');

    const numbernya = document.getElementsByClassName('col-costum');

    function changeTurn() {
        setTurn(turn + 1);
    }

    function changeBoard(turn, p1, p2){
        // console.log(turn);
        if (turn % 2 == 1) {
            for (let i = 0; i < numbernya.length; i++) {
                if (numbernya[i].classList[0] == hasil) {
                    if(numbernya[i].classList[numbernya[i].classList.length - 1] == 'white' && p2 > p1){
                        numbernya[i].classList.add('captured');
                        numbernya[i].classList.remove('white');
                        numbernya[i].classList.add('red');
                        // numbernya[i].classList.remove('captured');
                    }
                    
                    if (numbernya[i].classList[numbernya[i].classList.length - 1] != 'white'){
                        numbernya[i].classList.add('red');
                    }
                }
            }
        } else {
            for (let i = 0; i < numbernya.length; i++) {
                if (numbernya[i].classList[0] == hasil) {
                    if(numbernya[i].classList[numbernya[i].classList.length - 1] == 'red' && p1 > p2){
                        numbernya[i].classList.add('captured');
                        numbernya[i].classList.remove('red');
                        numbernya[i].classList.add('white');
                        // numbernya[i].classList.remove('captured');
                    }
                    
                    if (numbernya[i].classList[numbernya[i].classList.length - 1] != 'red'){
                        numbernya[i].classList.add('white');
                    }
                }
            }
        }
    }

    const [numel, setNumel] = React.useState(changeBoard(turn, p1, p2));

    function h1(e) {
        setCount(e.target.valueAsNumber);
        setHasil1(e.target.valueAsNumber * p2);
        setHasil(e.target.valueAsNumber * p2);
        if (turn % 2 == 1) {
            // changeBoard(turn, e.target.valueAsNumber, p2);
            changeTurn();
            setNumel(changeBoard(turn, e.target.valueAsNumber, p2));
            e.target.disabled = true;
            inputP2.disabled = false;
        }
    }

    function h2(e) {
        setCount2(e.target.valueAsNumber);
        setHasil2(e.target.valueAsNumber * p1);
        setHasil(e.target.valueAsNumber * p1);
        if (turn % 2 == 0) {
            // changeBoard(turn, p1, e.target.valueAsNumber);
            changeTurn();
            setNumel(changeBoard(turn, p1, e.target.valueAsNumber));
            e.target.disabled = true;
            inputP1.disabled = false;
        }
    }

    const row = [];

    // console.log(props.numbers);
    var ind = 1;
    for (let i = 0; i < props.numbers.length; i++) {
        for (let j = 0; j < props.numbers.length; j++) {
            if(i == 4 && j == 4){
                row.push(
                    <div key={ind} className={props.numbers[i][j] + " wr col-costum border border-dark text-center p-2"}>{props.numbers[i][j]}</div>
                )
            }else{
                row.push(
                    <div key={ind} className={props.numbers[i][j] + " col-costum border border-dark text-center p-2"}>{props.numbers[i][j]}</div>
                )
            }
            ind++;
        }
    }

    const elements = document.getElementsByClassName('col-costum');
    
    // let isiRed = props.numbers;
    var index = 0;
    for (let i = 0; i < isiRed.length; i++) {
        for (let j = 0; j < isiRed.length; j++) {
            if(elements[index] !== undefined){
                // console.log(elements[index]);
                if(elements[index].className.includes('red')){
                    // console.log('masuk');
                    isiRed[i][j] = 'X';
                    
                }
                if(elements[index].className.includes('white')){
                    // console.log('masuk');
                    isiRed[i][j] = 'O';
                }
            }
            index++;
        }
    }
    
    
        // horizontal
        for (let i = 0; i < isiRed.length; i++) {
            const [a, b, c, d, e, f, g, h, s] = isiRed[i];
            let lins = [a, b, c, d, e, f, g, h, s];
    
            if (lins[i] === lins[i+1] && lins[i+1] === lins[i+2] && lins[i+2] === lins[i+3] && lins[i+3] === lins[i+4] && lins[i] !== undefined) {
                if(lins[0] === 'X'){
                    console.log('X menang');
                    const conf = confirm('Player 2 menang');
                    // refrash page
                    if(conf){
                        window.location.reload();
                    }
                    break;
                }else if(lins[0] === 'O'){
                    console.log('O menang');
                    const conf = confirm('Player 1 menang');
                    // refrash page
                    if(conf){
                        window.location.reload();
                    }
                    break;
                }
            }
        }

        // vertical
        for (let i = 0; i < isiRed.length; i++) {
            const [a, b, c, d, e, f, g, h, s] = isiRed[i];
            let lins = [a, b, c, d, e, f, g, h, s];

            if (lins[i] === lins[i+9] && lins[i+9] === lins[i+18] && lins[i+18] === lins[i+27] && lins[i+27] === lins[i+36] && lins[i] !== undefined) {
                if(lins[0] === 'X'){
                    console.log('X menang');
                    const conf = confirm('Player 2 menang');
                    // refrash page
                    if(conf){
                        window.location.reload();
                    }
                    break;
                }else if(lins[0] === 'O'){
                    console.log('O menang');
                    const conf = confirm('Player 1 menang');
                    // refrash page
                    if(conf){
                        window.location.reload();
                    }
                    break;
                }
            }
        }

        // // diagonal
        // for (let i = 0; i < isiRed.length; i++) {
        //     const [a, b, c, d, e, f, g, h, s] = isiRed[i];
        //     let lins = [a, b, c, d, e, f, g, h, s];

        //     if (lins[i] === lins[i+10] && lins[i+10] === lins[i+20] && lins[i+20] === lins[i+30]) {
        //         if(lins[0] === 'X'){
        //             const conf = confirm('Player 2 menang');
        //             // refrash page
        //             if(conf){
        //                 window.location.reload();
        //             }
        //             break;
        //         }else if(lins[0] === 'O'){
        //             console.log('O menang');
        //             const conf = confirm('Player 1 menang');
        //             // refrash page
        //             if(conf){
        //                 window.location.reload();
        //             }
        //             break;
        //         }
        //     }
        // }

        // for (let i = 0; i < isiRed.length; i++) {
        //     const [a, b, c, d, e, f, g, h, s] = isiRed[i];
        //     let lins = [a, b, c, d, e, f, g, h, s];

        //     if (lins[i] === lins[i+8] && lins[i+8] === lins[i+16] && lins[i+16] === lins[i+24]) {
        //         if(lins[0] === 'X'){
        //             const conf = confirm('Player 2 menang');
        //             // refrash page
        //             if(conf){
        //                 window.location.reload();
        //             }
        //             break;
        //         }else if(lins[0] === 'O'){
        //             console.log('O menang');
        //             const conf = confirm('Player 1 menang');
        //             // refrash page
        //             if(conf){
        //                 window.location.reload();
        //             }
        //             break;
        //         }
        //     }
        // }


    


    // for (let i = 0; i < isiRed.length; i++) {
    //     for (let j = 0; j < isiRed.length; j++) {
            
    //     }
    // }

    // console.log(isiRed);

    // var isiRed = [];

    // forEach(numbernya, function (value, key) {
    //     // find class name red for each element
    //     if (value.className.includes('red')) {
    //         console.log(key);
    //         isiRed[key] = value.innerHTML;
    //     }
    // });

    // for (let i = 0; i < props.numbers.length; i++) {
    //     for (let j = 0; j < props.numbers.length; j++) {
    //         if (isiRed == props.numbers[i][j]) {
    //             console.log(i, j);
    //         }
    //     }
    // }


    // console.log(row);

    return (
        <div className='container'>
            <Head title="Main Menu" />

            <div className="row">
                <div className="col-12">
                    <div className="container row justify-content-center align-items-center h-header">
                        <h1 className='col-12 judul text-center'>Rumah Perkalian</h1>
                        <h2 className='col-12 turn text-center mb-3'>Turn {turn}</h2>
                    </div>
                </div>
                <div className="col-12 row">
                    {row}
                </div>
                <div className="col-3 mt-3">
                    <input id='p1' name='player1' className='form-control white' onChange={h1} defaultValue={1} min={1} max={9} type="number" />
                </div>
                <div className="col-1 mt-3 white text-center d-flex align-items-center justify-content-center">
                    Player 1
                </div>
                <div className="col-1 mt-3 text-center">
                    <div className="container white b">
                        {p1}
                    </div>
                </div>
                <div className="col-2 mt-3 text-center">
                    <div className="container blue vs">
                        VS
                    </div>
                </div>
                <div className="col-1 mt-3 text-center">
                    <div className="container red b">
                        {p2}
                    </div>
                </div>
                <div className="col-1 mt-3 red text-center d-flex align-items-center justify-content-center">
                    Player 2
                </div>
                <div className="col-3 mt-3">
                    <input id='p2' name='player2' className='form-control red' onChange={h2} defaultValue={1} min={1} max={9} type="number" disabled />
                </div>
                <div className="text-center col-12 hasil">
                    Hasil : {hasil}
                </div>
            </div>
        </div>
    );
}

// Path: resources\js\Pages\Dashboard.jsx