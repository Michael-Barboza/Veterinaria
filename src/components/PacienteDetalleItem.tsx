

type PacienteDetalleItemProps = {
  label: string;
  data: string;
  
}

const PacienteDetalleItem = ({label,data}: PacienteDetalleItemProps) => {
  return (
    <p className="text-sm text-gray-400">
      {label}: {""}
      <span className="text-fuchsia-500 font-semibold"> {data}</span>
    </p>
  );
};

export default PacienteDetalleItem;
