import React from "react";
import WorkItem from "./WorkItem"

const data = [
    {
    year: 2020,
    title: 'Content Creator',
    duration : '3 years',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus quibusdam obcaecati doloribus eveniet ea unde libero enim, recusandae pariatur quos exercitationem eius, ipsum iure velit nobis molestiae consequuntur veniam?'
    },
    {
        year: 2018,
        title: 'Google',
        duration : '2 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus quibusdam obcaecati doloribus eveniet ea unde libero enim, recusandae pariatur quos exercitationem eius, ipsum iure velit nobis molestiae consequuntur veniam?'
    },
    {
        year: 2015,
        title: 'Facebook',
        duration : '3 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus quibusdam obcaecati doloribus eveniet ea unde libero enim, recusandae pariatur quos exercitationem eius, ipsum iure velit nobis molestiae consequuntur veniam?'
        },
    {
            year: 2014,
            title: 'Amazon',
            duration : '2 years',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusamus quibusdam obcaecati doloribus eveniet ea unde libero enim, recusandae pariatur quos exercitationem eius, ipsum iure velit nobis molestiae consequuntur veniam?'
     },
];


const Work = () => {
    return(
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
           <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">Work</h1>
           {data.map((item,idx) =>(
            <WorkItem 
            key = {idx}
            year = {item.year}
            title = {item.title}
            duration = {item.duration}
            details = {item.details}
            />

           ))}
        </div>
    );
};
export default Work;