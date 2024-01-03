import './App.css'
import HeaderMeal from './components/layout/HeaderMeals'
import Register from './components/layout/Create/Register'
import SideBar from './components/sideBars/SideBar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen grid grid-cols-1 xl:grid-cols-5">
      <SideBar/>
      <div className="xl:col-span-4">
        <HeaderMeal/>
      </div>
      <Register/>
    </main>
  )
}

export default App;
