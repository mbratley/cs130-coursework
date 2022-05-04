const square = '<rect x="291" y="70" width="40" height="40" stroke="black" stroke-width="3" fill="pink"></rect>'
const triangle = ' <polygon points="100,100 150,100 125,135" stroke="black" stroke-width="3" fill="teal"></polygon>';
document.querySelector('svg').insertAdjacentHTML("beforeend", circle);
document.querySelector('svg').insertAdjacentHTML("beforeend", square);
document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);


/**]
 * Your job: when the user clicks the svg element, 
 * draw the shape the corresponds with the controls 
 * in the left-hand panel.
 */

const el = document.querySelector ('#output');

for (const item of names) {
    el.innerHTML += `<p>Welcome, ${item}!</p>`
}

const addShape = (ev) => {
    console.log(ev.offsetX, ev.offsetY);
    console.log ('Add shape');
    let color= document.querySelector('#color').ariaValueMax;
    let size= document.querySelector('#size').ariaValueMax;
    let shape = document.querySelector('#shape').ariaValueMax;
        if (shape === 'circle') {
            const circle = 
        `<circle cx="${ev.offsetX}" cy="${ev.offsetY}" r="${size}" stroke="black" stroke-width="3" fill="${color}"></circle>`;
        } else if (shape === 'square') {
            const square = `<rect x="${ev.offsetX}" y="${ev.offsetY}" width="40" height="40" stroke="black" stroke-width="3" fill="${color}"></rect>`
        } else if shape === 'triangle'){

        }
    
    document.querySelector('svg').insertAdjacentHTML("beforeend", circle);
}