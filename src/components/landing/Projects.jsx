import React from 'react';
import ProjectItem from './items/ProjectItem';

const Projects = () => {

    const projects = [
        {
            title: "PetCare",
            subtitle: "Reserva una cita para tu pequeño compañero",
            description: "Este proyecto fue realizado siguiendo la guía de un curso que conseguí en Udemy. Está desarrollado en React y tiene la funcionalidad de registrar las citas de los clientes de una veterinaria. Actualmente no tiene implementada la parte del backend; pero en un futuro estaré terminando su desarrollo.",
            image: "/img/projects/veterinaria.png"
        },
        {
            title: "Space Ship",
            subtitle: "Juego de naves",
            description: "Proyecto realizado por uno de mis alumnos bajo mi supervisión. Está desarrollado en C++ y utiliza el paradigma de las programación orientada a objetos. Considero que la creación de videojuegos es una de las actividades que más refuerza todo lo aprendido en cualquier curso de programación ya que para el desarrollo del mismo requiere un alto nivel de lógica y conocimiento intermedio de la sintaxis del lenguaje.",
            image: "/img/projects/space-ship.png"
        }
    ]; 

    /*
    
        {
            title: "Mi Presupuesto",
            subtitle: "Organiza de la mejor manera tu presupuesto del mes",
            description: "De igual",
            image: "/img/projects/presupuesto.png"
        },
        {
            title: "Sphere Shooter",
            subtitle: "Juego de disparos",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio commodi aut quod, excepturi odit veritatis blanditiis! Quae, voluptatum quis? Explicabo officia error nihil? Incidunt, itaque? At suscipit sint tempore perferendis, ullam libero odio deleniti dolore aliquam eum cupiditate dolorem odit? Libero ab asperiores provident! Ut tempore recusandae commodi tenetur fugit.",
            image: "/img/projects/presupuesto.png"
        }
     */

    return (  
        <section id="projects">
            <div className="projects container">
                <div className="projets-header">
                    <h1 className="section-title"> Algunos <span>Proyectos</span> </h1>
                </div>
                <div className="all-projects">
                    {projects.map( ( project, index ) => <ProjectItem key={index} project={ project } /> )}
                </div>
            </div>
        </section>
    );
}
 
export default Projects;

