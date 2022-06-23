import './App.css';
import IdCard from './components/IdCard';
import IdList from './components/IdList';

function App() {
  return <div className="App">

    <IdList>
      <IdCard firstName = "John" lastName = "Doe" gender = "male" height = {178} birth={new Date("1992-07-14")}  picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <IdCard firstName = 'Delores' lastName = "Obrien" gender ='female'  height = {172}  birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />
    </IdList>

  </div>;
}
export default App;

