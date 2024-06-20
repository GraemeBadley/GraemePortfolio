import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio";

function Portfolio(){
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {console.log(portfolio)}
                {portfolio.map(project =>(
                    <PortfolioItem
                        title = {project.title}
                        imgURL = {project.img}
                        stack = {project.stack}
                        link = {project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;