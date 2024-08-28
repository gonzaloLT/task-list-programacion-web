import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <h1>Lista de tareas de Gonzalo</h1>
        <div className='input-task'>
          <input type="text" className='input-task-text'/>
          <button className='input-task-button'>ADD</button>
        </div>
        <div className='task'>
            <ul className='lista-items'>
              <li>
                <input type="checkbox" />
                <span>Task 1</span>
                <button><i class="fa-solid fa-trash"></i></button>
              </li>
              <li>
                <input type="checkbox" />
                <span>Task 2</span>
                <button><i class="fa-solid fa-trash"></i></button>
              </li>
              <li>
                <input type="checkbox" />
                <span>Task 3</span>
                <button><i class="fa-solid fa-trash"></i></button>
              </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
