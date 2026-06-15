/* FIRST 72 — tiny shared script
   Handles the mobile menu and the demo (fake) login.
   No real accounts or payments — this is a demo only. */

// Mobile menu toggle
function toggleMenu(){
  var l = document.getElementById('navLinks');
  if(l) l.classList.toggle('open');
}

// Fake login: no real auth — just sends you to the demo dashboard.
function demoLogin(e){
  if(e) e.preventDefault();
  window.location.href = 'dashboard.html';
  return false;
}

// Fake contact submit
function demoContact(e){
  if(e) e.preventDefault();
  var f = document.getElementById('contactForm');
  var ok = document.getElementById('contactDone');
  if(f) f.style.display='none';
  if(ok) ok.style.display='block';
  return false;
}
