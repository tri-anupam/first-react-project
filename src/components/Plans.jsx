import React from "react";
import Cards from "./Cards";

export default function Plans() {
    return (
        <div className="md:p-[100px] p-[30px] ">
            <div className="md:grid grid-cols-3 max-w-[1240px] mx-auto gap-6">
                <Cards data={1}/>
                <Cards className="border border-black" data={2}/>
                <Cards  data={3} />
            </div>
        </div>
    );
}
