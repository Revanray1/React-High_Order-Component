// import './App.css';
import SearchUseres from './HOCClass/Userlist'
import SearchTodos from './HOCClass/Todo'
import Person1 from './HOCFunctional/Person1'
import Person2 from './HOCFunctional/Person2'
import Todo from './HOCClassExampls/Todo'
import Userlist from './HOCClassExampls/Userlist'


function App() {
  return (
    <div className="App">
      <h1>High oder component</h1>

      <div className='section' style={{ display: 'flex', justifyContent: 'space-around' }}>


        <div><SearchUseres /></div>
        <div><SearchTodos /></div>

        {/* 
        <div><Person1/></div>
        <div><Person2/></div> */}


        {/* <div><Userlist   /></div>
        <div><Todo /></div> */}





      </div>
    </div>
  );
}

export default App;
