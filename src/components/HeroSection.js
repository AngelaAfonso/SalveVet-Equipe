import styles from './HeroSection.module.css'
import Header from './Header'
import heroSection from '../img/heroSection.svg'

function HeroSection() {
    return (
        <div className={styles.heroSection}>

            <div className={styles.containerHeader}>
                <Header />
            </div>

            <section >
                <div>
                    <h1>Conectando Tutores e<br/>
                        Médicos Veterinários</h1>

                    <p>Seja Bem Vindo a SalveVet.<br /><br />Aqui simplificamos e 
                        agilizamos os cuidados <br /> veterinários ao conectando 
                        tutores de pets com <br /> veterinários qualificados de
                        forma rápida e <br /> segura </p>
                </div>
                <div>
                    <img src={heroSection} />
                </div>
            </section>

        </div>
    )
}

export default HeroSection;