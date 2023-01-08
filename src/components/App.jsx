import React from "react";
import Card from "./Card";
import Cars from "./Cars";

function createntry(carterm) {
    return <Card 
    key={carterm.id} 
    Car_Type={carterm.Car_Type}
    Model_name={carterm.Model_name}
    image={carterm.image}
    />
}
function App(props) {
    return <section className="container">
            {Cars.map(createntry)}
            </section>
}
export default App;