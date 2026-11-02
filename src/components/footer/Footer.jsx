import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();// t() → Tradução para textos simples (string pura)
  
  // Ano atual automático
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>   
        <div className={styles.main_session_social}>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/elainetavaresweb/" target='_blank' rel="noopener noreferrer"><FaLinkedin className={styles.linkedin}/></a>

            {/* Instagram */}
            <a href="https://www.instagram.com/elainetavares2026/" target='_blank' rel="noopener noreferrer"><FaInstagramSquare className={styles.instagram}/></a>

            {/* GitHub */}
            <a href="https://github.com/Elaine-Tavares" target='_blank' rel="noopener noreferrer"><FaGithub className={styles.github}/></a>

            {/* Whats */}
            <a href="https://wa.me/5521936188416?text=Ol%C3%A1%2C%20vi%20o%20seu%20portf%C3%B3lio%20e%20tenho%20uma%20proposta%20de%20emprego%20para%20voc%C3%AA." target='_blank' rel="noopener noreferrer"><FaWhatsappSquare className={styles.whats}/></a>
        </div> 
        
        <p className={styles.copy}>

          {/* Parágrafo traduzido */}
          {t("footer.developedBy")}<br/> <strong>Elaine Tavares</strong> © {year}
        </p>
      </div>

      {/* Logo que leva ao topo */}
      <a href="#main" className="logo">
        <div className="logo_container_capivara">
          <span>Elaine</span>
          <img src='/logo.png' alt="Capivara na frente de um notebook" />
        </div>
        <span className="tavares">TavaresWeb</span>
      </a>

    </footer>
  );
}
