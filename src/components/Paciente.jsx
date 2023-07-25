

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const handleEliminar = () => {

        const respuesta = confirm("Seguro desea eliminarlo?")

        if (respuesta) {
            eliminarPaciente(paciente.id);
        }
    }

    return (
        <div className="bg-white px-5 py-10 mx-5 shadow-md rounded-xl my-10 ">

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}
                <span className="font-normal normal-case">{paciente.nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
                <span className="font-normal normal-case">{paciente.propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">EMAIL: {" "}
                <span className="font-normal normal-case">{paciente.email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {" "}
                <span className="font-normal normal-case">{paciente.fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {" "}
                <span className="font-normal normal-case">{paciente.sintomas}</span>
            </p>


            <div className="flex justify-between">
                <button className="bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold text-white py-3 px-8 uppercase"
                    onClick={() => setPaciente(paciente)}>
                    EDITAR</button>

                <button className="bg-red-600 hover:bg-red-700 rounded-lg font-bold text-white py-3 px-8 uppercase"
                    onClick={handleEliminar}>
                    Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente