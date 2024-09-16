import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cirurgia from '../img/cirurgia.svg';
import cuidados from '../img/cuidados.svg';
import style from "./veterinariansection.scss";
import './veterinariansection.scss';

function VeterinariansSection() {
  return (
    <div>
      <main className='principal'>
        <header>
          <h1>Para Veterinários</h1>
        </header>
        <section className="section">
          <div className="container">
            <div className="row content mb-4">
              <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                <div className="image-cirurgia">
                  <img src={cirurgia} alt="Cirurgia" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <h2>Expanda Sua Base de Clientes com Facilidade:</h2>
                <p>A SalveVet é a plataforma ideal para você, veterinário, que<br/>
                  deseja se conectar com novos clientes e expandir sua base<br/>
                  de atendimento.<br/><br/>
                  Através de nossa plataforma, você pode oferecer consultas<br/>
                  domiciliares e teleconsultas, alcançando tutores de pets<br/>
                  que precisam dos seus serviços de maneira rápida e<br/>
                  prática.</p>
              </div>
            </div>
            <div className="row content">
              <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                <div className="image-cuidados">
                  <img src={cuidados} alt="Cuidados" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <h2>Perfil Profissional e Gestão Centralizada:</h2>
                <p>Apresente-se de forma profissional com um perfil<br/>
                  completo na SalveVet e destaque suas qualificações e<br/>
                  especializações.<br/><br/>
                  Além disso, nossa plataforma permite que você<br/>
                  gerencie suas consultas e documentações de forma<br/>
                  centralizada, facilitando o acompanhamento de<br/>
                  tratamentos e a comunicação com os clientes.<br/>
                  Simplifique a gestão de sua carreira e foque no que<br/>
                  você faz de melhor: cuidar dos animais.</p>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer text-center my-4">
          <a href="#"><button type="button" className='custom-button'>Sou Veterinário SalveVet</button></a>
        </footer>
      </main>
    </div>
  );
}

export default VeterinariansSection