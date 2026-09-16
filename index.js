$('h1').addClass('heading margin')

$('h1').on('mouseover', function () {
  console.log(this)
  $(this).css('color', 'green')
  $(this).css('border', 'red 2px solid')
  $(this).removeClass('margin')
  $(this).text('You hovered over me!')
})

$('button').addClass('button')

$('button').click(function () {
  $(this).css('color', 'blue')
  $('h1').css('color', 'red')
  $(this).css('background-color', 'yellow')
  $(this).css('font-family', 'comic sans ms')
  $(this).text('You clicked me!')
})

$('button').html('Click Me!')

$('img').addClass('align')

$('a').attr('href', 'https://www.yahoo.com')

$('img').click(function () {
  console.log($('img').attr('src', 'images.jpg'))
})

$('#inputField').keypress(function (event) {
  console.log(event.key)
  $('h1').text(event.key)
  if (event.key === 'Enter') {
    console.log('You pressed the enter key!')
  }
})
