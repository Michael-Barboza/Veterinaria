import { create } from "zustand"
import {devtools, persist} from "zustand/middleware";
import type { DraftPaciente, Paciente } from "../types";
import { v4 as uuidv4 } from 'uuid';

type PacienteState = {
  pacientes: Paciente[];
  activeId: Paciente['id'] ;
  addPaciente: (data: DraftPaciente) => void;
  removePaciente: (id: Paciente['id']) => void;
  getPacienteById: (id: Paciente['id']) => void;
  updatePaciente: (data: DraftPaciente) => void;

}

const createPaciente = (paciente: DraftPaciente): Paciente => {
  return {...paciente, id: uuidv4() }
}

export const usePacientesStore = create<PacienteState>()(devtools(persist((set)=>({
  pacientes: [],
  activeId: '',
  addPaciente: (data) => {
    const newPaciente = createPaciente(data);
    set((state)=>({
      pacientes:[...state.pacientes, newPaciente]
    }))
  },
  removePaciente: (id) => set((state) => ({
    pacientes: state.pacientes.filter(paciente => paciente.id !== id)
  })),
  getPacienteById: (id) => set(() => ({
    activeId:id
  })),
  updatePaciente: (data)=> {
    set((state)=>({
      pacientes : state.pacientes.map(paciente => paciente.id === state.activeId ? {id:state.activeId, ...data}: paciente),
      activeId: ''
    }))
  }
})
, {
  name: "pacientes-storage"
})))
