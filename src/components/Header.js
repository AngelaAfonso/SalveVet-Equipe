import styles from './Header.module.css'
import logo from '../img/logo.svg'
import Nav from 'react-bootstrap/Nav'



function Header() {
    return (
        <div className={styles.header}>

            <ul>
                <li><img heigth={50} src={logo}/></li>
                <li><Nav.Link href='#Home'>Home</Nav.Link> </li>
                <li><Nav.Link href='#SobreNos'>Sobre Nós</Nav.Link></li>
                <li><Nav.Link href='#Servicos'>Serviços</Nav.Link></li>
                <li><Nav.Link href='#ComoFunciona'>Como Funciona</Nav.Link></li>
                <li><Nav.Link href='#Blog'>Blog</Nav.Link></li>
                <li><button>ENTRAR</button></li>
            </ul>
  


        </div>
    )
}

export default Header;