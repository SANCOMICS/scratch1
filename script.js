const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



const el = document.getElementById('descc');


const hiddenEl = document.getElementById('hidden');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
    hiddenEl.style.display = 'block';
});

// ✅ (optionally) Hide element on mouse out

el.addEventListener('mouseout', function handleMouseOut() {
  hiddenEl.style.display = 'none';
});


const an = document.getElementById('descc1');


const hiddenAn = document.getElementById('hidder');

// ✅ Show hidden DIV on hover
an.addEventListener('mouseover', function handleMouseOver() {
    hiddenAn.style.display = 'block';
});

// ✅ (optionally) Hide element on mouse out

an.addEventListener('mouseout', function handleMouseOut() {
  hiddenAn.style.display = 'none';
});


const un = document.getElementById('descc2');


const hiddenUn = document.getElementById('hidd');

// ✅ Show hidden DIV on hover
un.addEventListener('mouseover', function handleMouseOver() {
    hiddenUn.style.display = 'block';
});

// ✅ (optionally) Hide element on mouse out

un.addEventListener('mouseout', function handleMouseOut() {
  hiddenUn.style.display = 'none';
});


const ho = document.getElementById('descc3');


const hiddenHo = document.getElementById('hid');

// ✅ Show hidden DIV on hover
ho.addEventListener('mouseover', function handleMouseOver() {
    hiddenHo.style.display = 'block';
});

// ✅ (optionally) Hide element on mouse out

ho.addEventListener('mouseout', function handleMouseOut() {
  hiddenHo.style.display = 'none';
});