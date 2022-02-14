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
example.style.width = '20px';
example.style.height = '20px'
example.style.background = 'black';
example.style.position = 'absolute';
document.body.append(example);

document.body.addEventListener('mousemove', function(event) {
example.style.top = event.clientY + 'px';
example.style.left = event.clientX +'px'

});

