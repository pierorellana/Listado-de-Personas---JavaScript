const personas = [
    new Persona('Pierre', 'Orellana'),
    new Persona('Alexander', 'Delgado')
];

function mostrarPersonas() {
    let texto = '';
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregar() {
    const forma = document.forms['forms'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if (nombre.value != '' && apellido.value !== '') {
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    } else {
        alert('No hay datos que agregar');
    }
}