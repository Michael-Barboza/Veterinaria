import {useForm} from 'react-hook-form';
import Error from './Error';
import type {DraftPaciente} from '../types';
import {usePacientesStore} from "../store/Store";
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const PatientForm = () => {
    const{addPaciente, activeId, pacientes, updatePaciente} = usePacientesStore()

    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<DraftPaciente>();

    useEffect(() => {
        if(activeId) {
            const activePaciente = pacientes.filter(paciente => paciente.id === activeId)[0];
            setValue('name', activePaciente.name);
            setValue('caretaker', activePaciente.caretaker);
            setValue('email', activePaciente.email);
            setValue('date', activePaciente.date); 
            setValue('symptoms', activePaciente.symptoms);

        }
    },[activeId]);

    const registerPaciente = (data : DraftPaciente)=>{
        if(activeId) {
            updatePaciente(data);
             toast.success('Paciente editado correctamente')

        } else {
        addPaciente(data);
       
        }
        reset(); // Resetea el formulario después de agregar el paciente
    }
   return (
    <div className="md:w-1/2 lg:w-3/5 mx-10  ">

        <p className="text-lg mb-1.5 text-center text-white ">Añade Pacientes </p>

        <form 
            className="bg-white opacity-85 shadow-md rounded-lg py-5 px-3 mb-5"
            noValidate
            onSubmit={handleSubmit(registerPaciente)}
        >
              <div className="mb-3">
                  <label htmlFor="name" className="text-sm uppercase font-bold">
                      Paciente 
                  </label>
                  <input  
                      id="name"
                      className="w-full p-1  border border-gray-100"  
                      type="text" 
                      placeholder="Nombre del Paciente" 
                      {...register('name', { required: 'El nombre del paciente es obligatorio',
                        maxLength: { value: 20, message: 'El nombre no puede exceder los 20 caracteres' }
                       })}
                  />
                  
                        {errors.name && <Error>{errors.name?.message}</Error>}
                  
              </div>

              <div className="mb-3">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                    Propietario 
                </label>
                <input  
                    id="caretaker"
                    className="w-full p-1  border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Propietario" 
               {...register('caretaker', { required: 'El nombre del propietario es obligatorio',
                        maxLength: { value: 20, message: 'El nombre no puede exceder los 20 caracteres' }
                       })}
                  />
                  
                        {errors.caretaker && <Error>{errors.caretaker?.message}</Error>}
              </div>

            <div className="mb-3">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Email 
              </label>
              <input  
                  id="email"
                  className="w-full p-1  border border-gray-100"  
                  type="email" 
                  placeholder="Email de Registro" 
                    {...register('email', { required: 'El email es obligatorio',
                            pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Email no válido'
                            }
                         })}
                  />
                             {errors.email && <Error>{errors.email?.message}</Error>}
                  
                     
            </div>

            <div className="mb-3">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Fecha de Ingreso 
                </label>
                <input  
                    id="date"
                    className="w-full p-1  border border-gray-100"  
                    type="date" 
                    {...register('date', { required: 'La fecha es obligatoria' })}
                />
                {errors.date && <Error>{errors.date?.message}</Error>}
            </div>
            
            <div className="mb-3">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                Síntomas 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-1  border border-gray-100"  
                    placeholder="Síntomas del paciente" 
                    {...register('symptoms', { required: 'Los síntomas son obligatorios',
                        maxLength: { value: 200, message: 'Los síntomas no pueden exceder los 200 caracteres' }
                       })}
                ></textarea>
                {errors.symptoms && <Error>{errors.symptoms?.message}</Error>}
            </div>

            <input
                type="submit"
                className="bg-fuchsia-900 w-full rounded-4xl p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value='Guardar Paciente'
            />
        </form> 
    </div>
  )
}

export default PatientForm