import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";
import Caretresult from "./Caretresult";
import Hadder from "./Hadder";
import Navbar from "./Navbar";
import Text from "./Text";
// import Output from "./Output";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [product, setprodect] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    // "Data.json"
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setprodect(data));
  }, []);
  // console.log(product)

  // const [Count,setCount]=useState(0);
 

  const WanttoCookbtn = (p) => {
    const isExist = cart.find((item) => item.recipe_id == p.recipe_id);
    if (!isExist) {
      setcart([...cart, p]);
    } else {
      toast.error("This item is already in the process");
    }
  };

  // const processing = (p) => {
  //   const newcard = cart.filter((item) => item.recipe_id != p);
  //   setcart(newcard);
  //   setcarentprocessing([...carentprocessing,p])
  //   settotaltime(totaltime + parent(p.preparing_time));
  //   settotalcaloris(totalcaloris + print(p.totalcaloris));

  // };
  const [totaltime, settotaltime] = useState(0);
  const [totalcalories, settotalcaloris] = useState(0);
  const[carentprocessing, setcarentprocessing]=useState([0]);


  const processing = (item) => {
    const newCard = cart.filter((cartItem) => cartItem.recipe_id !== item.recipe_id);
    setcart(newCard);
    setcarentprocessing([...carentprocessing, item.recipe_id]);
    settotaltime(totaltime + parseInt(item.preparing_time));
    settotalcaloris(totalcalories + parseInt(item.calories)); 
  };

  // const  increment=()=>{
  //     const  newCount = Count +1;
  //     setCount(newCount)
  // }
  // const  decrement=()=>{
  //     const  newCount = Count -1;
  //     setCount(newCount)
  // }

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hadder></Hadder>
        <Text></Text>

        <div className="md:flex lg:flex  ">
          <div className="md:w-[60%]  lg:w-[60%] m-auto grid lg:grid-cols-2   lg:m-0">
            {product.map((product, idx) => (
              <Cards
                product={product}
                WanttoCookbtn={WanttoCookbtn}
                key={idx}
              ></Cards>
            ))}
          </div>

          <div className="lg:w-[40%] font-bold m-auto md:lg:w-[40%] lg:m-0 md:m-0 ">
            <div className=" ">
              <h2 className="text-center text-2xl py-5">Want to cook: {+1}</h2>
              <hr />
              <div className="flex justify-around">
                {/* <p>No:- </p> */}
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                {/* <p>buttons</p> */}
              </div>
            </div>

            {cart.map((item, index) => (
              <>
                <div className="flex justify-around bg-[#f8f8f8] p-5 m-[10px] rounded-lg shadow-md items-center">
                  <p>{index + 1}</p>
                  <p>{item.recipe_name}</p>
                  <p>{item.preparing_time}</p>
                  <p>{item.calories}</p>

                  <button
                    // onClick={(p) => processing(item.recipe_id,p.totalcaloris,p.preparing_time)}
                    onClick={() => processing(item)}
                    className="btn btn-xl  btn-success hover:text-white"
                  > Preparing
                  </button>
                </div>
              </>
            ))}
            <>
              <div>
                {/* 1 lg:w-[38%] md:m-0 lg:m-0*/}

                {/* 2 */}
                <div className=" ">
                  <h2 className="text-center text-2xl py-5  ">
                  Currently cooking : {2}
                  </h2>
                  <hr />
                  <div className="flex justify-around  ">
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                  </div>
                  {cart.map((item, index) => (
                    <>
                      <div className="flex  justify-around bg-[#f8f8f8] p-5 m-[10px] rounded-lg shadow-md items-center">
                        <p>{index + 1}</p>
                        <p>{item.recipe_name}</p>
                        <p>{item.preparing_time}</p>
                        <p>{item.calories}</p>
                      </div>
                    </>
                  ))}
                  <div className="flex  justify-center gap-10 bg-[#f8f8f8] p-5 m-[10px] rounded-lg shadow-md md:justify-end lg:justify-end capitalize ">

                    <p>total time =  <br /> {totaltime} minutes</p>
                    <p>total calories = <br />  {totalcalories} calories </p>
                  </div>
                </div>
              </div>
            </>

            <Caretresult></Caretresult>
          </div>
        </div>

        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
