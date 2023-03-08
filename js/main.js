/*
https://randomuser.me/api/ entrega informacion de una persona ficticia aleatoria
*/
window.addEventListener('load', function() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      data = data.results[0]

      let nombreCompleto = data.name.title + ' ' + data.name.first + ' ' + data.name.last

      document.title = 'CV ' + nombreCompleto

      document.getElementById('foto').src = data.picture.large
      document.getElementById('nombreCompleto').innerHTML = nombreCompleto
      document.getElementById('profesion').innerHTML = data.gender === 'male' ? 'Desarrollador Frontend' : 'Desarrolladora Frontend'
      document.getElementById('edad').innerHTML = data.dob.age + ' años'

      document.getElementById('direccion').innerHTML = data.location.street.name + ', ' + data.location.country
      document.getElementById('correo').innerHTML = data.email
      document.getElementById('telefono').innerHTML = data.phone

      let color = window.localStorage.getItem('borderColor')

      if (color) setBorderColor(color)
    })
});

document.getElementById('foto').addEventListener('click', function(){
  let color = random_rgba()
  setBorderColor(color)
  window.localStorage.setItem('borderColor', color);
})

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function setBorderColor(color) {
  document.getElementById('imgPerfil').style.border = '1px solid ' + color
}