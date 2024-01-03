import './App.css';
import HeaderMeal from './components/layout/HeaderMeals';
import Register from './components/layout/Create/Register';
import SideBar from './components/sideBars/SideBar';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen grid grid-cols-1 xl:grid-cols-5 relative overflow-hidden">
      <div className="waves absolute inset-0"></div>
      <SideBar />
      <div className="xl:col-span-4">
        <HeaderMeal />
        {/*<Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoutes />}>

          <Route path="/orders/" element={<Orders />} />
          <Route path="/reviews/" element={<Reviews />} />

        </Route>
      </Routes>*/}
      </div>
      <Register />
    </main>
  );
}

export default App;
