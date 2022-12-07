import React from "react";
import Prof from "./Prof";
import "./css/App.css";

const profs = [
    {
        name: "Shawn Wang",
        country: "Singapur",
        position: "Ingeniero de Software",
        company: "Amazon",
        prof: "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.",
        img: "Shawn",
    },
    {
        name: "Sarah Chima",
        country: "Nigeria",
        position: "Ingeniera de Software",
        company: "ChatDesk",
        prof: "freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.",
        img: "Sarah",
    },
    {
        name: "Emma Bostian",
        country: "Suecia",
        position: "Ingeniera de Software",
        company: "Spotify",
        prof: "Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.",
        img: "Emma",
    },
];

function App() {
    return (
        <div className="main-container">
            <header className="title">
                Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
            </header>

            {/*      ///   Esta es una forma de hacerlo pero ocupa mucho espacio mientras podemos hacer lo mismo si renderizamos una lista de objetos con las propiedades de los props, REACT puede renderizar listas y para ello utilizaremos array.map() para crear los componentes tipo Prof y ponerlos dentro de la lista que se renderizará. ///   
            <Prof
                name="Shawn Wang"
                country="Singapur"
                position="Ingeniero de Software"
                company="Amazon"
                prof="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
                img="Shawn"
            />

            <Prof
                name="Sarah Chima"
                country="Nigeria"
                position="Ingeniera de Software"
                company="ChatDesk"
                prof="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
                img="Sarah"
            />

            <Prof
                name="Emma Bostian"
                country="Suecia"
                position="Ingeniera de Software"
                company="Spotify"
                prof="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
                img="Emma"
            /> */}

            {profs.map((proff) => {
                return (
                    <Prof
                        name={proff.name}
                        country={proff.company}
                        position={proff.position}
                        company={proff.company}
                        prof={proff.prof}
                        img={proff.img}
                    />
                );
            })}
        </div>
    );
}

export default App;
