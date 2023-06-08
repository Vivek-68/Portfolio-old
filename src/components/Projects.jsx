import React from "react";
import ProjectItem from "./ProjectItem";
import astroImg from "../assets/astrovpn.png"
import doitImg from "../assets/doit.png"
import portfoliImg from "../assets/Portfolio.png"
import weatherImg from "../assets/weatherwatch.png"


const Projects = () =>{
    return(
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur voluptates corporis expedita omnis laudantium, saepe eaque rem, hic sequi iste possimus porro maiores officiis aliquid totam explicabo numquam aut?
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img ={astroImg} title = "AstroVPN"  link = "https://github.com/Vivek-68/astrovpn" />
                <ProjectItem img ={doitImg} title = "Do.It." link = "https://github.com/Vivek-68/DO.IT." />
                <ProjectItem img ={portfoliImg} title = "Portfolio App" link = "/" />
                <ProjectItem img ={weatherImg} title = "WeatherWatch" link = "https://github.com/Vivek-68/weatherwatch" />
            </div>
        </div>
    )
}

export default Projects