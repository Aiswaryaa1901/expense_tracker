import Features from './Features.jsx';
import Savings from './assets/Savings.png';
import Expenses from './assets/Expenses.png';
import Budget from './assets/Budget.png';
import Finance from './assets/Finance.png';
import Bills from './assets/Bill.png';
import Investments from './assets/Investment.png';
import AI from './assets/AI.png';
import Transaction from './assets/Transaction.png';

function Featurelist(){
    
    const features = [
        {
            name :"Savings",
            message : "Track savings goals and progress",
            img : Savings,
            show : true
        },
        {
            name :"Expenses",
            message :"Categorize and track spending",
            img : Expenses,
            show :true
        },
        {
            name : "Budget",
            message :"Set monthly budgets",
            img : Budget,
            show : true
        },
        {
            name:"Finance",
            message:"Visualize spending trends and savings growth",
            img : Finance,
            show :true
        },
        {
            name :"Bills",
            message :"Track your Bills",
            img :Bills,
            show :true
        },
        {
            name : "Investments",
            message : "Track stocks, mutual funds, SIPs, crypto, etc.",
            img : Investments,
            show : true
        },
        {
            name : "Transaction History" ,
            message : "View all past transactions with filters",
            img :Transaction,
            show :true
        },
        {
            name : "AI Assistant",
            message :"Chatbot that suggests budgets and saving tips",
            img :AI,
            show :true
        }

    ];
    
    const featurelist = features.map((feature, index)=> <Features key = {index} name = {feature.name}
    message = {feature.message}
    img = {feature.img}
    show = {feature.show}/> )

    return(
        <>
       {featurelist}
       </>
    );
}
export default Featurelist