import React, { useState } from 'react';
import style from "./VeterinariansCarrossel.css";
import photo1 from '../img/veterinarian1.svg';
import location from '../img/location.svg';
import photo2 from '../img/veterinarian2.svg';
import photo3 from '../img/veterinarian3.svg';
import leftarrow from '../img/left-arrow.svg';
import rightarrow from '../img/right-arrow.svg';
import home from "../img/home.svg";

const VeterinariansCarrossel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            img: photo1,
            title: "Amanda Rodrigues",
            topic1: "Clínica Geral",
            local: "Uberlândia - MG",
            local2: "Domicílio, no local do profissional e online. "
        },
        {
            img: photo2,
            title: "João Mário Quitana",
            local: "Uberlândia - MG",
            local2: "Domicílio, no local do profissional e online. "
        },
        {
            img: photo3,
            title: "Pâmela Oliveira",
            local: "Uberlândia - MG",
            local2: "Domicílio, no local do profissional e online. "
        },
        {
            img: photo1,
            title: "Amanda Rodrigues",
            local: "Uberlândia - MG",
            local2: "Domicílio, no local do profissional e online. "
        },
        {
            img: photo2,
            title: "João Mário Quitana",
            local: "Uberlândia - MG",
            local2: "Domicílio, no local do profissional e online. "
        },
        {
            img: photo3,
            title: "Pâmela Oliveira",
            local: "Uberlândia - MG",
            local2: "Domicílio, no local do profissional e online. "
        }
    ];

    const itemsPerPage = 3;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - itemsPerPage : prevIndex - itemsPerPage
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - itemsPerPage ? 0 : prevIndex + itemsPerPage
        );
    };

    return (
        <div className="BlogSection" id="Blog">
            <h1 id="titulo">Encontre o melhor Veterinário para você!</h1>
            <div className="carrossel-section">
                <img src={leftarrow} alt="Anterior" onClick={handlePrevClick} className="arrow" />
                <div className="carrossel-wrapper">
                    {items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                        <div className="carrossel-container" key={index}>
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                            <div classname="topics">
                                <p>{item.topic1}</p>
                            </div>
                            <div className="local">
                                <img src={location} alt="Localização" />
                                <p>{item.local}</p>
                            </div>
                            <div className="local2">
                                <img src={home} alt="Localização" />
                                <p>{item.local2}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <img src={rightarrow} alt="Próximo" onClick={handleNextClick} className="arrow" />
            </div>
        </div>
    );
};

export default VeterinariansCarrossel;