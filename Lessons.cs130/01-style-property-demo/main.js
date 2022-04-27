
const makeRed = () => {
    // need a hashtag when it's not an element, class selection is period in front
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor = 'red';
    document.querySelector("#btn1").style.backgroundColor = 'red';
};
};
// can use quotes or single quotes, javaScript doesn't care
const makeBlue = () => {
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector("#btn2").style.backgroundColor = "blue";
    console.log('Change background to blue');
};

const makePink = () => {
    document.querySelector("body").style.backgroundColor = "pink";
    console.log('Change background to pink');
};

const makeOrange = () => {
    document.querySelector("body").style.backgroundColor = "orange";
    console.log('Change background to orange');
};

