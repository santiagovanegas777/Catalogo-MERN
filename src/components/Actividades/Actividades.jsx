import {useEffect, useState} from 'react';
  // import '../../styles/Actividades/Actividades.css';
import ListActividades from './ListActividades';

const Actividades = () => {
  const [activities, setActivities] = useState([]);

  const getDataAPI = async ()=>{
      const response = await fetch('https://api-unas.vercel.app/estilos/');
      const res = await response.json();
      setActivities(res);
  }
  useEffect(() => {
    getDataAPI();
  },[]);

  return (
    <div className='section-actividades'>
      <ListActividades activities = {activities} />
    </div>
  )
}

export default Actividades