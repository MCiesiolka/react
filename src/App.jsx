import { useEffect, useReducer } from "react";
import './App.css'
import chef from "./images/chef.jpg";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}
const items = [
  "macaroni and cheese",
  "BBQ Chili",
  "Meatloaf",
  "Pizza"
];

const dishObjects = items.map((dish, i) =>({
  id: i,
  title: dish
}));


function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
  <main>
    <div>
      <button onClick={() => onStatus(true)}>
        I want to be open
        </button>
      <h2>
        welcome to this beautiful restaraunt!{""}
        {openStatus ? "Open" : "Closed"}
        </h2>
    </div>
    <img 
    src={chef} 
    hieght={200} 
    alt="A chef" />
  <ul>
    {dishes.map((dish, i) => (
      <li key={dish.id} style={{ listStyleType: "none"}}>{dish}
        {dish.title}
      </li>
  ))}
  </ul>
  </main>
  </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );

  useEffect(() => {
    console.log(
      `the restaurant is ${status ? "open" : "closed"}`)
  }, [status]);

  return (
  <div>
    <h1>
      The restaraunt is currently {" "} 
      {status ? "open" : "closed"}.
    </h1>
    <button onClick={toggle}>
      {status ? "Close" : "Open"} Restaraunt
    </button>
      <Header name="Zephyr" year={2024} />
    <Main 
    dishes={dishObjects} 
    openStatus={status} 
    onStatus={toggle}
    /> 
  </div>
  );
}

export default App
