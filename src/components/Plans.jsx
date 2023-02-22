import React from "react";
import Cards from "./Cards";
import Single from "../assets/images/single.png"
import Double from "../assets/images/double.png"
import Triple from "../assets/images/triple.png"
export default function Plans() {
    return (
        <div className="md:p-[100px] p-[30px] ">
            <div className="md:grid grid-cols-3 max-w-[1240px] mx-auto gap-6 mys:grid-cols-2">
                <Cards
                    img={Single} 
                    heading={"Web Development"}
                    price={"$149"} 
                    content={`lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor`}
                />
              
                <Cards
                    img={Triple} 
                    heading={"App Developement"}
                    price={"$169"} 
                    content={`lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor`}
                />
                
                
                <Cards 
                    img={Double} 
                    heading={"Digital Marketing"}
                    price={"$199"} 
                    content={`lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor lorem ipsum Dolor`}
                />
            </div>
        </div>
    );
}
