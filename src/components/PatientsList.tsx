import { usePacientesStore } from "../store/Store";
import PacienteDetalle from "./PacienteDetalle";

const PatientsList = () => {
  const pacientes = usePacientesStore((state) => state.pacientes);

  return (
    <div className="md:w-1/2 lg:w-3/5 mr-8  mt-10">
      <p className="text-white text-center mb-3  ">En espera de ser atendidos</p>
      <div className=" max-h-117  ml-2.5 overflow-y-auto">
        {pacientes.length ? (
          <>
            {pacientes.map(paciente => (
              <PacienteDetalle
                key={paciente.id}
                paciente={paciente}
              />
            ))}
          </>
        ) : (
          <h2 className="text-lg mb-3 text-center text-white mt-10" >No hay pacientes en espera</h2>
        )}
      </div>
    </div>
  );
};

export default PatientsList;
