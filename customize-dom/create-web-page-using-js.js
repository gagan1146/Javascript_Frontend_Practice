// create-web-page-using-js.js

// Create a header
const header = document.createElement('h1');
header.textContent = 'Welcome to My Web Page';
header.style.textAlign = 'center';
header.style.marginTop = '30px';
document.body.appendChild(header);

// Create a paragraph
const paragraph = document.createElement('p');
paragraph.textContent = 'This web page was created dynamically using JavaScript!';
paragraph.style.textAlign = 'center';
paragraph.style.fontSize = '18px';
document.body.appendChild(paragraph);

// Create an image
const img = document.createElement('img');
img.src = 'https://via.placeholder.com/300x150';
img.alt = 'Sample Image';
img.style.display = 'block';
img.style.margin = '30px auto';
img.style.borderRadius = '10px';
document.body.appendChild(img);

// Create a button
const button = document.createElement('button');
button.textContent = 'Click Me!';
button.style.display = 'block';
button.style.margin = '20px auto';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
document.body.appendChild(button);

// Add button click event
button.addEventListener('click', () => {
    alert('Button clicked! You created this page with JavaScript.');
});

// Add some basic styling to body
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.backgroundColor = '#f4f4f4';