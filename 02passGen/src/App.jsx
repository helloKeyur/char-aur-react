import './App.css'
import PassGen from './components/passGen/PassGen'

function App() {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4 offset-4'>
            <PassGen />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
