import Auth from './components/Auth';
import NavBarAdmin from './components/NavBarAdmin';
import NavBarStudent from './components/NavBarStudent'

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center">
        <Auth/>
      </div>
    </div>
  );
}

export default App
