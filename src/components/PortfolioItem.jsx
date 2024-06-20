import React from "react";

function PortfolioItem({title, imgURL, stack, link}){
    return(
        <div>
            {console.log('hello2')}
            <img 
                src={imgURL} 
                alt="" 
                className="w-full h-36 md:h48 object-cover cursor-pointer"
            />
            <div className="w-full p-4"></div>
                <h3>{title}</h3>
                <p>
                    {stack.map(item =>{
                        <span>
                            {item}
                        </span>
                    })}
                </p>
        </div>
    )
}

export default PortfolioItem;