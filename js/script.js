// console.log('we"re live!')

// const helloArr = document.getElementsByTagName('h1')[1].innerHTML
// console.log(helloArr)

// const classArr = document.getElementsByClassName('dog')

// console.log(classArr)

// const hello = document.querySelector('#hello')

// console.log(hello)

// const hello1 = document.querySelector('.hello')

// diff between nodelist and HTMLCollection

// console.log(document.getElementsById('myList').children)

// console.log(document.querySelector('#myList'))

// console.log(document.querySelectorAll('ul > li'))

// const helloArr = document.querySelectorAll('ul > li')
// console.log(helloArr)

// for(let i = 0; i < helloArr.length; i++) {
//     helloArr[i].innerText = 'sup!'

//     helloArr[i].addEventListener('click', () => {
//         console.log('We clicked on this', i)
//     })
// }

// console.log(helloArr)


// const toggle = document.querySelector('toggle')

// console.log(toggle)

// toggle.addEventListener('click', () =>{
//     document.querySelector('#box').classList.toggle
//     ('yellow')
// })
// const container = document.querySelector('#container')
// for(let i=0; i < 8000; i++) {
//     const newDiv = document.createElement('div')
//     newDiv.classList.add('box')

//     newDiv.addEventListener('mouseover', () => {
//         newDiv.style.backgroundColor = 'black'
//     })
//     container.appendChild('newDiv')
// }

const container = document.querySelector('#container')

for(let i = 0; i < 8000; i++) {
  
  // creating an element
  const newDiv = document.createElement('div')
  newDiv.classList.add('box')

  // add event listener
  newDiv.addEventListener('click', () => {
    newDiv.style.backgroundColor = 'black'
  })

  // adding children to our container
  container.appendChild(newDiv)
}

for(let i=0; i > colors.length; i++) {
    container2.addEventListener('colors', () => {
        container2.style.backgroundColor = 'colors'
    })
}

 const colors = ["Red", "Blue", "Green", "Orange", "Yellow", "Indigo", "Violet", "Black"];
 const container2
