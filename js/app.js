  /*Datos */
const datos = [
    {
      "title": "work",
      "color": "Lightred",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "play",
      "color": "Softblue",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "study",
      "color": "Lightred2",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "exercise",
      "color": "Limegreen",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "social",
      "color": "Violet",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "self-care",
      "color": "Softorange",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

  //Globales
  const work = document.querySelector('#work')
  const caja = document.querySelector('#caja')
  const daily = document.querySelector('#daily')
  const botones = document.querySelectorAll('.grid-botones button')
  let newP2;
  let newSpan;

 document.addEventListener('DOMContentLoaded', () => {
      iniciarApp()
 })

 function iniciarApp(){
  limpiarHTML()
  datos.forEach(item => {
   
    //Scripting de los cards
      const article = document.createElement('ARTICLE')
      const newDiv = document.createElement('DIV')
      newDiv.classList.add('work')
      const newImg = document.createElement('IMG')
      newImg.src = `images/icon-${item.title}.svg`
      newImg.alt = `Icono de ${item.title}`
      newImg.classList.add('image')
      newDiv.appendChild(newImg)
      article.appendChild(newDiv)
      newDiv.style.backgroundColor = `var(--${item.color})`
      const newDiv2 = document.createElement('DIV')
      newDiv2.classList.add('work-text')
      const newP = document.createElement('P')
      newP.style.textTransform = 'capitalize'
      newP.classList.add('work-flex')
      newP.textContent = `${item.title}`
      newP.style.color = 'white'
      const newImg2 = document.createElement('IMG')
      newImg2.src = 'images/icon-ellipsis.svg'
      newImg2.classList.add('tres-puntos')
      newImg2.alt = 'icono de tres puntos'
      newImg2.style.cursor = 'pointer'
      newP.appendChild(newImg2)
      newP2 = document.createElement('P')
      newP2.classList.add('work-flex')
      newP2.textContent = `${item.timeframes.weekly.current}`
      newP2.style.fontSize = '3rem'
      newP2.style.fontWeight= '300'
      newP2.style.color = 'var(--blanco)'
      newSpan = document.createElement('SPAN')
      newSpan.style.fontSize = '1.8rem'
      newSpan.style.color = 'var(--PaleBlue)'
      newSpan.textContent = `Last week - ${item.timeframes.weekly.previous}hrs`
      
      newP2.appendChild(newSpan)
      newDiv2.appendChild(newP)
      newDiv2.appendChild(newP2)
      article.appendChild(newDiv2)
      caja.appendChild(article)
  });
 }
  

  // Foreach para saber a que le dimos click
  botones.forEach(function(boton){
    boton.addEventListener('click',(e) => {
        const resultado = e.currentTarget.dataset.id;
        if(resultado === 'daily'){
            botones.forEach(function(btn){
                btn.classList.remove('activo');
                e.target.classList.add('activo');
                mostrarDaily()

            });
        }
        if(resultado === 'monthly'){
          botones.forEach(function(btn){
              btn.classList.remove('activo');
              e.target.classList.add('activo');
              mostrarMonthly()

          });
        }
        if(resultado === 'weekly'){
          botones.forEach(function(btn){
              btn.classList.remove('activo');
              e.target.classList.add('activo');
              iniciarApp()

          });
        }
    });
  });

  function mostrarDaily(){
    limpiarHTML()
    datos.forEach(item => {
      //Scripting de los cards
      const article = document.createElement('ARTICLE')
      const newDiv = document.createElement('DIV')
      newDiv.classList.add('work')
      const newImg = document.createElement('IMG')
      newImg.classList.add('image')
      newImg.src = `images/icon-${item.title}.svg`
      newImg.alt = `Icono de ${item.title}`
      newDiv.appendChild(newImg)
      article.appendChild(newDiv)
      newDiv.style.backgroundColor = `var(--${item.color})`
      const newDiv2 = document.createElement('DIV')
      newDiv2.classList.add('work-text')
      const newP = document.createElement('P')
      newP.style.textTransform = 'capitalize'
      newP.classList.add('work-flex')
      newP.textContent = `${item.title}`
      newP.style.color = 'white'
      const newImg2 = document.createElement('IMG')
      newImg2.src = 'images/icon-ellipsis.svg'
      newImg2.classList.add('tres-puntos')
      newImg2.alt = 'icono de tres puntos'
      newImg2.style.cursor = 'pointer'
      newP.appendChild(newImg2)
      newP2 = document.createElement('P')
      newP2.classList.add('work-flex')
      newP2.textContent = `${item.timeframes.daily.current}`
      newP2.style.fontSize = '3rem'
      newP2.style.fontWeight= '300'
      newP2.style.color = 'var(--blanco)'
      newSpan = document.createElement('SPAN')
      newSpan.style.fontSize = '1.8rem'
      newSpan.style.color = 'var(--PaleBlue)'
      newSpan.textContent = `Last week - ${item.timeframes.daily.previous}hrs`
      newP2.appendChild(newSpan)
      newDiv2.appendChild(newP)
      newDiv2.appendChild(newP2)
      article.appendChild(newDiv2)
      caja.appendChild(article)
    });
  }
  function mostrarMonthly(){
    limpiarHTML()
    datos.forEach(item => {
      //Scripting de los cards
      const article = document.createElement('ARTICLE')
      const newDiv = document.createElement('DIV')
      newDiv.classList.add('work')
      const newImg = document.createElement('IMG')
      newImg.classList.add('image')
      newImg.src = `images/icon-${item.title}.svg`
      newImg.alt = `Icono de ${item.title}`
      newDiv.appendChild(newImg)
      article.appendChild(newDiv)
      newDiv.style.backgroundColor = `var(--${item.color})`
      const newDiv2 = document.createElement('DIV')
      newDiv2.classList.add('work-text')
      const newP = document.createElement('P')
      newP.style.textTransform = 'capitalize'
      newP.classList.add('work-flex')
      newP.textContent = `${item.title}`
      newP.style.color = 'white'
      const newImg2 = document.createElement('IMG')
      newImg2.src = 'images/icon-ellipsis.svg'
      newImg2.classList.add('tres-puntos')
      newImg2.alt = 'icono de tres puntos'
      newImg2.style.cursor = 'pointer'
      newP.appendChild(newImg2)
      newP2 = document.createElement('P')
      newP2.classList.add('work-flex')
      newP2.textContent = `${item.timeframes.monthly.current}`
      newP2.style.fontSize = '3rem'
      newP2.style.fontWeight= '300'
      newP2.style.color = 'var(--blanco)'
      newSpan = document.createElement('SPAN')
      newSpan.style.fontSize = '1.8rem'
      newSpan.style.color = 'var(--PaleBlue)'
      newSpan.textContent = `Last week - ${item.timeframes.monthly.previous}hrs`
      newP2.appendChild(newSpan)
      newDiv2.appendChild(newP)
      newDiv2.appendChild(newP2)
      article.appendChild(newDiv2)
      caja.appendChild(article)
    });
  }

  function limpiarHTML(){
    while(caja.firstChild){
      caja.removeChild(caja.firstChild)
    }
  }
   


