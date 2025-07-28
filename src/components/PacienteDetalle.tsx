import type { Paciente } from '../types';
import { CiEdit, CiTrash  } from "react-icons/ci";
import PacienteDetalleItem from './PacienteDetalleItem';
import { usePacientesStore } from '../store/Store';
import { toast } from 'react-toastify';

type PacienteDetalleProps = {  
  paciente: Paciente;
}

const PacienteDetalle = ({ paciente }: PacienteDetalleProps) => {

  const removePaciente  = usePacientesStore((state) => state.removePaciente);
  const getPacienteById = usePacientesStore((state) => state.getPacienteById);
  const handleClick = () => {
    removePaciente(paciente.id);
    toast.success('Paciente eliminado correctamente',{
      type: 'error'
    });
  };
  
  return (
    <div className="bg-gray-800  flex   justify-between opacity-90 px-2  m-2.5 rounded-lg shadow-lg">
     <div className='py-2'>
        <p className=" text-center  text-white">Detalles del Paciente</p>
     
        <PacienteDetalleItem label="ID" data={paciente.id}/>
        <PacienteDetalleItem label="Nombre" data={paciente.name}/>
        <PacienteDetalleItem label="Propietario" data={paciente.caretaker}/>
        <PacienteDetalleItem label="Email" data={paciente.email}/>
        <PacienteDetalleItem label="Fecha de Ingreso" data={paciente.date.toString()}/>
        <PacienteDetalleItem label="Síntomas" data={paciente.symptoms}/>
        </div>
     <div className='flex flex-col gap-3 mt-7 ' >
      <button className="   bg-fuchsia-900 hover:bg-indigo-700 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center"
        onClick={() => getPacienteById(paciente.id)}
      >
        <CiEdit />
      </button>
     <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center"
        onClick={handleClick}
       
        >
        <CiTrash/> 
      </button>
     </div>
     
    </div>
  );
}

export default PacienteDetalle;
