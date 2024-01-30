const usuarios = [
    {
        nombre: "Martín",
        apellido: "Luz",
        edad: 33,
        email: "martin.luz@gmail.com",
    },
    {
        nombre: "Francisco",
        apellido: "Luz",
        email: "fran.luz@gmail.com",
    },
    {
        nombre: "Sofía",
        apellido: "Rovira",
        edad: 31,
    },
];

//Parte 1
usuarios.map(user => {
    const nombreCompleto = `${user.nombre} ${user.apellido}`;
    const myOutputString = 
    `Nombre: ${user.nombre ? nombreCompleto : "Sin especificar"}\n- Email: ${user.email ? user.email : "Sin especificar"}\n- Edad: ${user.edad ? user.edad : "Sin especificar"}`;
    console.log(myOutputString);

});

//Parte 2
