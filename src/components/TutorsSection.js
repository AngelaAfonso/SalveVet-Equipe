import style from "./TutorsSection.css";
import img1 from "../img/tutorsimg.svg";
import img2 from "../img/tutorsimg2.svg";

const TutorsSection = () => {
    return (
        <div class="TutorsSection">
            <div class="line"></div>
            <h1>Para Tutores</h1>
            <div class="sections">
                <div class="first-section">
                    <div class="section-text">
                        <p>Entendemos que o seu tempo é precioso e que a saúde do seu pet é prioridade. <br></br><br></br>
                            Nossa plataforma oferece uma solução completa, onde você pode agendar consultas domiciliares ou teleconsultas com veterinários qualificados de forma rápida e prática.
                        </p>
                    </div>
                    <img src={img2} alt="" />
                </div>
                <div class="first-section">
                    <img src={img1} alt="" />
                    <div class="section-text">
                        <p>Entendemos que o seu tempo é precioso e que a saúde do seu pet é prioridade. <br></br><br></br>
                            Nossa plataforma oferece uma solução completa, onde você pode agendar consultas domiciliares ou teleconsultas com veterinários qualificados de forma rápida e prática.
                        </p>
                    </div>
                    <button id="button">Sou Tutor SalveVet</button>
                </div>
            </div>
            <div class="line"></div>
        </div>
    );
}

export default TutorsSection;