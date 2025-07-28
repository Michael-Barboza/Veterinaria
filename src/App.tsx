import { ToastContainer } from "react-toastify";
import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

const App = () => {
  return (
    <>
      <div 
        className="container bg-cover bg-center bg-fixed bg-[url('public/img/fondo-01.jpg')]"
      >
        {/* El contenido estará por encima de la imagen de fondo */}
        <h1 className="font-bold text-3xl pt-6 text-center md:w-2/3 md:mx-auto text-white z-10 relative">
          Registro de Pacientes
          <span className="text-fuchsia-900">Veterinaria</span>
        </h1>

        <div className="mt-5 md:flex z-10 relative">
          <PatientForm />
          <PatientsList />
        </div>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default App;