import Header from "./components/Header"
import Appointments from "./pages/Appointments"


function App() {

  return (
    <>
      <Header title = "Citas medicas para mascotas"/>
      
      <main className="container m-auto flex gap-12 py-5 justify-center">
        <Appointments/>
      </main>
    </>
  )
}

export default App
