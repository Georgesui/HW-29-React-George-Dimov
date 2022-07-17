import WorkersRenderTable from './table'
import './App.css'
import workers from './employees/index'

function App() {

  return (
	<WorkersRenderTable workers={workers}/>
  )
}

export default App;
