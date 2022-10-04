let listaparticipantes = [];

const objParticipantes = {
    id: '',
    nombre: '',
    motocicleta: '',
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreImput = document.querySelector('#nombre');
const motocicletaImput = document.querySelector('#motocicleta');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if (nombreImput.value === '' || motocicletaImput.value === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if (editando) {
        editarParticipantes;

        editando = false;
    } else {
        objParticipantes.id = date.now();
        objParticipantes.nombre = nombreImput.value;
        objParticipantes.motocicleta = motocicleta.value;

        agregarParticipantes();

    }
}
function agregarParticipantes() {
    listaparticipantes.push({ ...objParticipantes });

    mostrarParticipantes();
}

function mostrarParticipantes() {

    limpiarHTML();

    const divParticipantes = document.querySelector('.div-participantes');

    listaparticipantes.forEach(participantes => {
        const { id, nombre, motocicleta } = participantes;

        const parrafo = document.createParticipantes('p');
        parrafo.textContent = '${id} - ${nombre} - ${motocicleta} - ';
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarParticipante(participante);

        editarBoton.textContent = 'Editar';
        editarBoton.clssList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        
        eliminarBoton.onclick = () => eliminarParticipante(participante);

        eliminarBoton.textContent = 'eliminar';
        eliminarBoton.clssList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');
        divParticipantes.appendChild(parrafo);
        divParticipantes.appendChild(hr);


    });
    }
    function cargarParticipante(participante){
        const {id, nombre, motocicleta,;
        nombreImput.value = nombre;
        puestoImput.value =motocicleta;

        objParticipante.id = id;
        formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

        editando = true
        }
    }
    function limpiarHTML() {
        const divParticipantes = document.querySelector('div-participantes');
        while(divParticipantes.firstChild) {
            divParticipantes.removeChild(divParticipantes.firstChild);
        }

    }



