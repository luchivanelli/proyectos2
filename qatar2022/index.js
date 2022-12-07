const verTablas = document.querySelectorAll(".span-tabla")
const section = document.querySelector('.tablas')
const salir = document.querySelector('.salir')
const nombreTabla = document.querySelector('.tabla-nombre')
const tabla = document.querySelector('.tabla')

// let bandera1, bandera2, bandera3, bandera4, bandera5, bandera6, bandera7, bandera8 = false

const fillTable = (array)=> {
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        const td = document.createElement('td')
        td.innerHTML = array[i]
        td.classList.add('td', 'td-js')
        array2[i] = td
    }
    return array2
}

salir.addEventListener('click', ()=> {
    section.style.display = 'none'

    let trJs = document.querySelectorAll('.tr')
    for (let index = 0; index < trJs.length; index++) {
        trJs[index].remove()
    }
    nombreTabla.textContent = 'Posiciones fase de grupos: '
})

for (let index = 0; index < verTablas.length; index++) {
    verTablas[index].addEventListener('click', ()=> {
        section.style.display= 'flex'
        
        switch (index) {
            case 0: {
                nombreTabla.textContent += 'Grupo A'

                const tr = document.createElement('tr')
                tr.classList.add('tr')
                const arr = fillTable(['Paises Bajos', 3,2,1,0,5,1,4,7])
                arr.forEach(td => {
                tr.appendChild(td)
                });
                tabla.appendChild(tr)
                
                const tr2 = document.createElement('tr')
                tr2.classList.add('tr')
                const arr2 = fillTable(['Senegal', 3,2,0,1,5,4,1,6])
                arr2.forEach(td => {
                    tr2.appendChild(td)
                });
                tabla.appendChild(tr2)
                    
                const tr3 = document.createElement('tr')
                tr3.classList.add('tr')
                const arr3 = fillTable(['Ecuador', 3,1,1,1,4,3,1,4])
                arr3.forEach(td => {
                    tr3.appendChild(td)
                });
                tabla.appendChild(tr3)
                    
                const tr4 = document.createElement('tr')
                tr4.classList.add('tr')
                const arr4 = fillTable(['Qatar', 3,0,0,3,1,7,-6,0])
                arr4.forEach(td => {
                    tr4.appendChild(td)
                });
                tabla.appendChild(tr4)
                    
                bandera1 = true
                break;
            }

            case 1: {
                nombreTabla.textContent += 'Grupo B'

                const tr = document.createElement('tr')
                tr.classList.add('tr')
                const arr = fillTable(['Inglaterra', 3,2,1,0,9,2,7,7])
                arr.forEach(td => {
                    tr.appendChild(td)
                });
                tabla.appendChild(tr)
                    
                const tr2 = document.createElement('tr')
                tr2.classList.add('tr')
                const arr2 = fillTable(['EEUU', 3,1,2,0,2,1,1,5])
                arr2.forEach(td => {
                    tr2.appendChild(td)
                });
                tabla.appendChild(tr2)
                    
                const tr3 = document.createElement('tr')
                tr3.classList.add('tr')
                const arr3 = fillTable(['Irán', 3,1,0,2,4,7,-3,3])
                arr3.forEach(td => {
                    tr3.appendChild(td)
                });
                tabla.appendChild(tr3)
                    
                const tr4 = document.createElement('tr')
                tr4.classList.add('tr')
                const arr4 = fillTable(['Gales', 3,0,1,2,1,6,-5,1])
                arr4.forEach(td => {
                   tr4.appendChild(td)
                });
                tabla.appendChild(tr4)
                    
                bandera2 = true
                break;
            }
    
            case 2: {
                nombreTabla.textContent += 'Grupo C'
    
                const tr = document.createElement('tr')
                tr.classList.add('tr')
                const arr = fillTable(['Argentina', 3,2,0,1,5,2,3,6])
                arr.forEach(td => {
                    tr.appendChild(td)
                });
                tabla.appendChild(tr)
                    
                const tr2 = document.createElement('tr')
                tr2.classList.add('tr')
                const arr2 = fillTable(['Polonia', 3,1,1,1,2,2,0,4])
                arr2.forEach(td => {
                    tr2.appendChild(td)
                });
                tabla.appendChild(tr2)
                    
                const tr3 = document.createElement('tr')
                tr3.classList.add('tr')
                const arr3 = fillTable(['México', 3,1,1,1,2,3,-1,4])
                arr3.forEach(td => {
                    tr3.appendChild(td)
                });
                tabla.appendChild(tr3)
                    
                const tr4 = document.createElement('tr')
                tr4.classList.add('tr')
                const arr4 = fillTable(['Arabia Saudita', 3,1,0,2,3,5,-2,3])
                arr4.forEach(td => {
                    tr4.appendChild(td)
                });
                tabla.appendChild(tr4)
                
                bandera3 = true
                break;
            }
            case 3: {
                nombreTabla.textContent += 'Grupo D'
    
                const tr = document.createElement('tr')
                tr.classList.add('tr')
                const arr = fillTable(['Francia', 3,2,0,1,6,3,3,6])
                arr.forEach(td => {
                    tr.appendChild(td)
                });
                tabla.appendChild(tr)
                    
                const tr2 = document.createElement('tr')
                tr2.classList.add('tr')
                const arr2 = fillTable(['Australia', 3,2,0,1,3,4,-1,6])
                arr2.forEach(td => {
                    tr2.appendChild(td)
                });
                tabla.appendChild(tr2)
                    
                const tr3 = document.createElement('tr')
                tr3.classList.add('tr')
                const arr3 = fillTable(['Túnez', 3,1,1,1,1,1,0,4])
                arr3.forEach(td => {
                    tr3.appendChild(td)
                });
                tabla.appendChild(tr3)
                    
                const tr4 = document.createElement('tr')
                tr4.classList.add('tr')
                const arr4 = fillTable(['Dinamarca', 3,0,1,2,1,3,-2,1])
                arr4.forEach(td => {
                    tr4.appendChild(td)
                });
                tabla.appendChild(tr4)
                    
                bandera4 = true
                break;        
            }
            case 4: {
                nombreTabla.textContent += 'Grupo E'
    
                const tr = document.createElement('tr')
                tr.classList.add('tr')
                const arr = fillTable(['Japón', 3,2,0,1,4,3,1,6])
                arr.forEach(td => {
                    tr.appendChild(td)
                });
                tabla.appendChild(tr)
                    
                const tr2 = document.createElement('tr')
                tr2.classList.add('tr')
                const arr2 = fillTable(['España', 3,1,1,1,9,3,6,4])
                arr2.forEach(td => {
                    tr2.appendChild(td)
                });
                tabla.appendChild(tr2)
                    
                const tr3 = document.createElement('tr')
                tr3.classList.add('tr')
                const arr3 = fillTable(['Alemania', 3,1,1,1,6,5,1,4])
                arr3.forEach(td => {
                    tr3.appendChild(td)
                });
                tabla.appendChild(tr3)
                    
                const tr4 = document.createElement('tr')
                tr4.classList.add('tr')
                const arr4 = fillTable(['Costa Rica', 3,1,0,2,3,11,-8,3])
                arr4.forEach(td => {
                    tr4.appendChild(td)
                });
                tabla.appendChild(tr4)
                    
                bandera5 = true
                break;        
            }
            case 5: {
                nombreTabla.textContent += 'Grupo F'
    
                const tr = document.createElement('tr')
                tr.classList.add('tr')
                const arr = fillTable(['Marruecos', 3,2,1,0,4,1,3,7])
                arr.forEach(td => {
                    tr.appendChild(td)
                });
                tabla.appendChild(tr)
                    
                const tr2 = document.createElement('tr')
                tr2.classList.add('tr')
                const arr2 = fillTable(['Croacia', 3,1,2,0,4,1,3,5])
                arr2.forEach(td => {
                    tr2.appendChild(td)
                });
                tabla.appendChild(tr2)
                    
                const tr3 = document.createElement('tr')
                tr3.classList.add('tr')
                const arr3 = fillTable(['Bélgica', 3,1,1,1,1,2,-1,4])
                arr3.forEach(td => {
                    tr3.appendChild(td)
                });
                tabla.appendChild(tr3)
                    
                const tr4 = document.createElement('tr')
                tr4.classList.add('tr')
                const arr4 = fillTable(['Canadá', 3,0,0,3,2,7,-5,0])
                arr4.forEach(td => {
                    tr4.appendChild(td)
                });
                tabla.appendChild(tr4)
                    
                bandera6 = true
                break;        
            }
            case 6: {
                nombreTabla.textContent += 'Grupo G'
    
                const tr = document.createElement('tr')
                tr.classList.add('tr')
                const arr = fillTable(['Brasil', 3,2,0,1,3,1,2,6])
                arr.forEach(td => {
                    tr.appendChild(td)
                });
                tabla.appendChild(tr)
                    
                const tr2 = document.createElement('tr')
                tr2.classList.add('tr')
                const arr2 = fillTable(['Suiza', 3,2,0,1,4,3,1,6])
                arr2.forEach(td => {
                    tr2.appendChild(td)
                });
                tabla.appendChild(tr2)
                    
                const tr3 = document.createElement('tr')
                tr3.classList.add('tr')
                const arr3 = fillTable(['Camerún', 3,1,1,1,4,4,0,4])
                arr3.forEach(td => {
                    tr3.appendChild(td)
                });
                tabla.appendChild(tr3)
                    
                const tr4 = document.createElement('tr')
                tr4.classList.add('tr')
                const arr4 = fillTable(['Serbia', 3,0,1,2,5,8,-3,1])
                arr4.forEach(td => {
                    tr4.appendChild(td)
                });
                tabla.appendChild(tr4)
                    
                bandera7 = true
                break;        
            }
            case 7: {
                nombreTabla.textContent += 'Grupo H'
    
                const tr = document.createElement('tr')
                tr.classList.add('tr')
                const arr = fillTable(['Portugal', 3,2,0,1,6,4,2,6])
                arr.forEach(td => {
                    tr.appendChild(td)
                });
                tabla.appendChild(tr)
                    
                const tr2 = document.createElement('tr')
                tr2.classList.add('tr')
                const arr2 = fillTable(['Corea del Sur', 3,1,1,1,4,4,0,4])
                arr2.forEach(td => {
                    tr2.appendChild(td)
                });
                tabla.appendChild(tr2)
                    
                const tr3 = document.createElement('tr')
                tr3.classList.add('tr')
                const arr3 = fillTable(['Uruguay', 3,1,1,1,2,2,0,4])
                arr3.forEach(td => {
                    tr3.appendChild(td)
                });
                tabla.appendChild(tr3)
                    
                const tr4 = document.createElement('tr')
                tr4.classList.add('tr')
                const arr4 = fillTable(['Ghana', 3,1,0,2,5,7,-2,3])
                arr4.forEach(td => {
                    tr4.appendChild(td)
                });
                tabla.appendChild(tr4)
                    
                bandera8 = true
                break;
                    
            }
            default:
                break;
        }
    })
}
