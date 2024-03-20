import ProjectCard from "../../Components/ProjectCard/ProjectCard"

export default function Projects(){
    return(
        <div className="flex flex-col justify-center items-center px-5">
            <h2 className="text-5xl font-semibold my-16">Project<span className="text-cyan-600">s</span></h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-10">
                <ProjectCard imageUrl="/imgs/bateau.jpg"/>
                <ProjectCard imageUrl="/imgs/vaisseau.png"/>
            </div>
            
        </div>
    )
}