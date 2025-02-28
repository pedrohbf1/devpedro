import styled, { keyframes } from "styled-components";
import FotoPerfil from "../../assets/FotoPerfil.jpeg";

const SobreMim = () => {
  return (
    <MainEstilizado id="sobre-mim">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/foto-linkedin.jpeg?alt=media&token=e0a289b0-9c37-4e7e-bb21-3978162c4076"
        alt=""
      />
      <div>
        <h2>
          Desenvolvedor <br />
          Full stack
        </h2>
        <p>
          Sou um Desenvolvedor Full stack apaixonado por transformar conceitos
          em realidade, unindo habilidades técnicas e criatividade. Estou
          constantemente em busca de novas oportunidades para aprimorar minhas
          habilidades e enfrentar desafios em projetos inovadores. Meu objetivo
          é a constante aprendizagem e crescimento profissional na área. Possuo
          expertise nas seguintes tecnologias: <strong>JavaScript</strong>,{" "}
          <strong>React.js</strong>, <strong>TypeScript</strong>,{" "}
          <strong>Node.js</strong>, {""}
          <strong>MySQL</strong>, <strong>PostgreSQL</strong>,{" "}
          <strong>Git</strong>, <strong>Docker</strong>, {""}
          <strong>Github</strong>, <strong>TailwindCSS</strong>. Além disso,
          tenho experiência em outras tecnologias como:{" "}
          <strong>Firebase</strong>.
        </p>
      </div>
      <section>
        <a href="https://github.com/pedrohbf1">Github</a>
        <a href="https://www.linkedin.com/in/pedro-henrique-2a861827b/">
          Linkedin
        </a>
      </section>
      <FooterEstilizado />
    </MainEstilizado>
  );
};

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-30%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromtop1 = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInFromtop2 = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInFromBottom = keyframes`
  from {
    transform: translateY(30%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MainEstilizado = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin: 0 auto;
  padding: 40px 20px;
  align-items: center;
  box-sizing: border-box;

  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    animation: ${slideInFromLeft} 1s ease;
    opacity: 1;
    @media (max-width: 366px) {
      width: 250px;
      height: 250px;
    }
    @media (max-width: 258px) {
      width: 150px;
      height: 150px;
    }
  }

  div {
    margin-top: 20px;
    h2 {
      font-size: 40px;
      animation: ${slideInFromtop1} 2s ease;
      text-transform: uppercase;
      @media (max-width: 350px) {
        font-size: 18px;
      }
      &::after {
        display: inline-block;
        content: "";
        width: 8px;
        height: 8px;
        background-color: #4a2cc5;
        border-radius: 50%;
        margin-left: 5px;
      }
    }
    p {
      margin-top: 30px;
      color: #525252;
      line-height: 1.7rem;
      letter-spacing: 0.7px;
      animation: ${slideInFromtop2} 1.5s ease;
      strong {
        color: #000;
        font-family: "UbuntuBold";
      }
    }
  }

  section {
    grid-column: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    animation: ${slideInFromBottom} 2s ease;
    a {
      padding: 6px 16px;
      border: 1px solid #4a2cc5;
      border-radius: 10px;
      transition: 0.3s;
      text-decoration: none;
      color: #141414;
      font-size: 1.75rem;
      letter-spacing: 0.14rem;
      &:hover {
        background-color: #4a2cc5;
        color: white;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
        transform: scale(1.08);
      }
    }
  }

  @media (max-width: 1300px) {
    p {
      transform: translateX(-5%);
      width: 90%;
    }
    section {
      a {
        font-size: 1.3rem;
        letter-spacing: 0.14rem;
      }
    }
  }

  @media (max-width: 830px) {
    display: flex;
    flex-direction: column;
    p {
      transform: translateX(0%);
      width: 90%;
    }
  }
`;

const FooterEstilizado = styled.footer`
  grid-column: span 2;
  justify-self: center;
  width: 70%;
  margin: 0 auto;
  border: 1px solid #4a2cc5;
`;

export default SobreMim;
