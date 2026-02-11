import Logo from"../../assets/Logo (1).png";
import Whatsapp from"../../assets/whatsapp.png";
import Instagram from"../../assets/instagram.png";
import Linkedin from"../../assets/linkedin.png";

import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <img src={Logo} alt="Logo da Connect" />
        <h2>Connect</h2>
      </div>

      <p>
        © 2026 Vai na Web & Empower. Todos os direitos reservados.
        Projeto destinado exclusivamente a fins educativos.
      </p>

      <nav className={styles.social}>
        <img src={Whatsapp} alt="Whatsapp" />
        <img src={Instagram} alt="Instagram" />
        <img src={Linkedin} alt="LinkedIn" />
      </nav>
    </footer>
  );
}
export default Footer;