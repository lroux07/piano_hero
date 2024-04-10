let container = document.querySelector('.container');
let mappingBtn = document.querySelector('.mappingBtn');
mappingBtn.classList.remove('active');


container.style.display = 'none';

for(let i = 0; i < 2; i++) {
    let white = document.createElement('div');
    white.classList.add('white');
    container.appendChild(white);
    
    let black = document.createElement('div');
    black.classList.add('black');
    white.appendChild(black);
}
    
let white = document.createElement('div');
white.classList.add('white');
container.appendChild(white);

for(let i = 0; i < 3; i++) {
    let white = document.createElement('div');
    white.classList.add('white');
    container.appendChild(white);

    let black = document.createElement('div');
    black.classList.add('black');
    white.appendChild(black);
}

white = document.createElement('div');
white.classList.add('white');
container.appendChild(white);



for(let i = 0; i < 2; i++) {
    let white = document.createElement('div');
    white.classList.add('white');
    container.appendChild(white);

    let black = document.createElement('div');
    black.classList.add('black');
    white.appendChild(black);
}

white = document.createElement('div');
white.classList.add('white');
container.appendChild(white);

for(let i = 0; i < 3; i++) {
    let white = document.createElement('div');
    white.classList.add('white');
    container.appendChild(white);

    let black = document.createElement('div');
    black.classList.add('black');
    white.appendChild(black);
}

white = document.createElement('div');
white.classList.add('white');
container.appendChild(white);


// CONFIG CLAVIER

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    midiAccess.inputs.forEach((input) => {
        // console.log(input)
        input.onmidimessage = onMIDIMessage;
    });
}

function onMIDIFailure(error) {
    // console.log(error);
}

function onMIDIMessage(event) {
    let str = `MIDI message received at timestamp ${event.timeStamp}[${event.data.length} bytes]: `;
    for (const character of event.data) {
      str += `0x${character.toString(16)} `;
    }
    console.log(str);
}
// CREATE CLAVIER


let isMapping = false;

let notes = [{
    do: 'Do',
    re: 'Re',
    mi: 'Mi',
    fa: 'Fa',
    sol: 'Sol',
    la: 'La',
    si: 'Si'
}];

mappingBtn.addEventListener('click', () => {
    container.style.display = 'flex';
    mappingBtn.disabled = true;

    isMapping = true;

    function mapping() {
        // white.classList.add = 'blue';
        white.style.backgroundColor('blue');
    }
    mapping();
});