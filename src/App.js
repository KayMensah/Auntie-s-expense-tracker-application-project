// import logo from './logo.svg';
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ExpenseNote from "./components/ExpenseNote";
import { ExpenseList } from "./components/ExpenseList";

function App() {
  return (
    <div>
      <HeaderComponent />
      <ExpenseNote />
      <ExpenseList />
    </div>
  );
}

export default App;
