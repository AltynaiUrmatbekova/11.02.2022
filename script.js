let example1 = document.querySelector('#example1');
example1.addEventListener('click', function(event) {
    // alert('Hello world');
    // console.log(event);
    window.location.href = "http://bing.com"
    event.preventDefault();
});
// DOM document object model

// let example2 = document.querySelector('#example2');
document.body.addEventListener('contexmenu', function(event) {
    console.log(event);
})
document.body.addEventListener('dblclick', function(event) {
    alert('Hello');
    // event.preventDefault();
});

let example = document.createElement('section');
example.InnerHTML = 'E';
example.style.height = '20px'
example.style.background = 'black';
example.style.position = 'absolute';
document.body.append(example);

document.body.addEventListener('mousemove', function(event) {
example.style.top = event.clientY + 'px';
example.style.left = event.clientX +'px'

});

document.body.addEventListener('mousedown', function() {
    console.log('mousedown');
})
document.body.addEventListener('mouseup', function() {
    console.log('mouseup');
})

let example2 = document.querySelector('#example2');

example2.addEventListener('keydown', function(event) {
    console.log('keydown', event);
    const preventList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (preventList.includes(event.key)) {
        event.preventDefault();
    }
    
});
example2.addEventListener('keyup', function(event) {
    console.log('keyup', event);
});

let example3 = document.querySelector('#example3');
let example3span = document.querySelector('#example3span');
example3.addEventListener('keydown', function(event) {
    example3span.textContent = example3.value
});
