$('h1').addClass('heading margin')

$('h1').click(function () {
  console.log(this)
  $(this).css('color', 'green')
  $(this).css('border', 'red 2px solid')
  $(this).removeClass('margin')
  $(this).text('You clicked me!')
})


$('button').addClass('button')

$('button').click(function () {
  $(this).css('color', 'blue')
  $(this).css('background-color', 'yellow')
  $(this).css('font-family', 'comic sans ms')
  $(this).text('You clicked me!')
})

$('button').html('Click Me!')