import React, { useState } from 'react';
import style from "./BlogSection.css";
import photo1 from '../img/carrossel-photo1.svg';
import calendar from '../img/calendar.svg';
import photo2 from '../img/carrossel-photo2.svg';
import photo3 from '../img/carrossel-photo3.svg';
import leftarrow from '../img/left-arrow.svg';
import rightarrow from '../img/right-arrow.svg';

const BlogSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            img: photo1,
            title: "Os benefícios de Vacinação em Animais de Estimação",
            date: "17/06/2024"
        },
        {
            img: photo2,
            title: "Dicas para uma Alimentação Saudável para Cães e Gatos",
            date: "17/06/2024"
        },
        {
            img: photo3,
            title: "Prevenção e Tratamento de Parasitas em Animais Domésticos",
            date: "17/06/2024"
        },
        {
            img: photo1,
            title: "Como Treinar seu Cachorro",
            date: "20/06/2024"
        },
        {
            img: photo2,
            title: "Cuidados com Gatos Idosos",
            date: "22/06/2024"
        },
        {
            img: photo3,
            title: "Importância do Exercício para Animais",
            date: "25/06/2024"
        }
    ];

    const itemsPerPage = 3; // Número de containers por vez

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
            <h1>Confira os conteúdos do nosso Blog</h1>
            <div className="carrossel-section">
                <img src={leftarrow} alt="Anterior" onClick={handlePrevClick} className="arrow"/>
                <div className="carrossel-wrapper">
                    {items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
                        <div className="carrossel-container" key={index}>
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                            <div className="date">
                                <img src={calendar} alt="Calendário"/>
                                <p>{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <img src={rightarrow} alt="Próximo" onClick={handleNextClick} className="arrow"/>
            </div>
        </div>
    );
};

export default BlogSection;