

const Hadder = () => {
    return (
        <div id="coverimage" className="w-[90%] m-auto lg:w-4/5 h-[600px]  my-10 flex justify-center font-bold items-center">

            <div className="text-white flex justify-center flex-col items-center">
                <div className="text-center p-5">
                <h1 className="text-2xl lg:text-6xl py-3">Discover an exceptional <span className="text-green-500">cooking</span> <br /> class tailored for you!</h1>
                <p className="py-5">Learn and Master Basic Programming, Data Structures, 
                    Algorithm, OOP, Database and solve 500+ coding problems <br />
                     to become an exceptionally well world-class Programmer.</p>
                </div>



                 <div className="w-4/5 py-10 flex justify-center items-center gap-5">
                <button className="btn btn-xl  btn-success hover:text-white" >Explore Now</button>
                 <button className="btn btn-outline text-white ">Our Feedback</button>
                </div>
                       
                
            </div>
            
        </div>
    );
};

export default Hadder;