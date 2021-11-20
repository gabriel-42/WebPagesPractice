let index = 0
function changeColor() {
  let colors = [
    'red',
    'pink',
    'blue',
    'green',
    'yellow',
    'grey',
    'purple',
    'brown',
    'organge',
    'black',
    'white'
  ]

  document.getElementsByTagName('body')[0].style.background = colors[index++]
  if (index > colors.length - 1) index = 0
}
