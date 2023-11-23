import './menuprincipalTrainer.css'
import TrainerSearchbar from '../../components/TrainerSearchbar/TrainerSearchbar';
import ClientsTable from '../clientsTable/clientsTable';

export default function menuprincipalTrainer() {
  return (
    <div className='menuprincipalTrainer'>
      <div className='d-flex flex-column text-right'>
        <h3>Deportistas activos{' (1)'}</h3>
        <span>
          Bienvenido a tu cuenta de entrenador, aqui puedes ver todos los
          deportistas
        </span>
      </div>
      <TrainerSearchbar />
      <ClientsTable />
      <div className='conteinerUsersDash'></div>
    </div>
  );
}