document.getElementById('eye').addEventListener('mousedown', function () {
  document.getElementById('senha').type = 'text';
});

document.getElementById('eye').addEventListener('mouseup', function () {
  document.getElementById('senha').type = 'password';
});

document.getElementById('eye').addEventListener('mousemove', function () {
  document.getElementById('senha').type = 'password';
});