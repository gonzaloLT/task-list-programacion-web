import './styles/App.css';
import InputContainer from './components/inputContainer';
import Title from './components/title';
import Task from './components/task';

function App() {

  return (
    <>
      <div className='container'>
        <Title title={'Lista de tareas de Gonzalo'}></Title>
        <InputContainer></InputContainer>
        <div className='task'>
            <ul className='lista-items'>
              <Task task={'Tarea 1'}></Task>
              <Task task={'Tarea 2'}></Task>
              <Task task={'Tarea 3'}></Task>
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
