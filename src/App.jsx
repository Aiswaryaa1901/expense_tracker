import './App.css'
import Footer from './footer.jsx';
import Navbar from './navbar.jsx'
import Features from './Features.jsx';
import Savings from './assets/Savings.png';
import Expenses from './assets/Expenses.png';
import Budget from './assets/Budget.png';
import Finance from './assets/Finance.png';
import Bills from './assets/Bill.png';
import Investments from './assets/Investment.png';
import AI from './assets/AI.png';
import Transaction from './assets/Transaction.png';


function App() {
  return(
  <>
  <Navbar /> 
  <Features name = "Savings" message = "Track savings goals and progress" img = {Savings} show = {true}/>
  <Features name = "Expenses" message = "Categorize and track spending" img = {Expenses} show = {true}/>
  <Features name = "Budget" message = "Set monthly budgets" img = {Budget} show = {true}/>
  <Features name = "Finance" message = "Visualize spending trends and savings growth" img = {Finance} show = {true}/>
  <Features name = "Bills" message = "Track your Bills" img = {Bills} show = {true}/>
  <Features name = "Investments" message = "Track stocks, mutual funds, SIPs, crypto, etc." img = {Investments} show = {true}/>
  <Features name = "Transaction History" message = "View all past transactions with filters" img = {Transaction} show = {true}/>
  <Features name = "AI Assistant" message = "Chatbot that suggests budgets and saving tips" img = {AI} show = {true}/>
  </>
  );  
}

export default App
