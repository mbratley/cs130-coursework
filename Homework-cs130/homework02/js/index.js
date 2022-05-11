/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <div class="image" 
                onclick="handleThumbnailClick(event)"
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></div>
        </li>`;
    });
};

// step 1
const handleThumbnailClick = ev => {
    console.log(ev);
    const elem = ev.currentTarget;
    console.log(elem);
    const bgImage = elem.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = bgImage;
}
// 1. create a function to handle the event
// 2. attach that function to onclick event

// step 2
//Hint 2: currentIndex as a global variable:
let currentIndex = 0;

// create event handler:
const showImage = (ev) => {
    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
    console.log("currentIndex:", currentIndex);
};
const displayImage = (ev) => {
    const image = images[currentIndex]
    console.log(`url('${image}')`);
    document.querySelector('.featured_image').style.backgroundImage = `url('${image}')` 
    ;
}

const showNext = (ev) => {
    currentIndex += 1;
    if (currentIndex >= images.length) {
        currentIndex= 0
    }
    displayImage();
};


const showPrev = (ev) => {
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex= images.length-1
    }
    displayImage();
};


// attach event handler to all of the image tags 
// (after initScreen() has been invoked).
const imageElements = document.querySelectorAll('.image');
for (const elem of imageElements) {
    elem.onclick = showImage;
}

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;



initScreen();






