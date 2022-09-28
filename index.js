let listaparticipantes = [];

const objParticipantes = {
    id: '',
    participantes: '',
    motocicleta: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const participantesImput = document.querySelector('#participantes');
const motocicletaImput = document.querySelector('#motocicleta');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.prevetDefault();

    if (participanteImput.value === '' || motocicletaImput.value === '') {
        return;
    }

    if (editando) {
        //editarParticipantes//
        editando = false;
    } else {
        objParticipantes.id = date.now();
        objParticipantes.nombre = nombreImput.value;
        objParticipantes.motocicleta = motocicleta.value;

        agregarParticipantes()

    }
}
function agregarParticipantes() {
    listaparticipante.push({ ...objParticipantes })

    mostrarParticipantes();
}
function mostrarParticipantes() {
    const divParticipantes = document.querySelector('.div-participante');

    listaparticipantes.forEach(participantes => {
        const { id, nombre, motocicleta } = participantes;

        const parrafo = document.createParticipantes('p');
        parrafo.textContent = '${id} - ${nombre} - ${motocicleta} - ';
        parrafo.dataset.id = id;

        const editarBoton = document.createParticipantes('button');
        //editarBoton.onclick = () => editarParticipantes(participante);//
        editarBoton.textContent = 'Editar';
        editarBoton.clssList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createParticipantes('button');
        //eliminarBoton.onclick = () => eliminarrParticipantes();//
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.clssList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');
        divParticipantes.appendChild(parrafo);
        divParticipantes.appendChild(hr);


        



    })
}


