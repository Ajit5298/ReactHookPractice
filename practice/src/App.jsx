import './App.css';
import Count from './Components/MangmentHook';
import Effect from './Components/SideEffect';
import Timer from './Components/SideEffect1';
import Register from './Components/Ragistration';
import Login from './Components/Login';
 

function App() {
  return (
    <div className="App">
    
      {<Count/>}
      {<Effect/>}
      {<Timer/>}
      {< Register/>}
      {< Login/>}
     
    </div>
  );
}

export default App;
