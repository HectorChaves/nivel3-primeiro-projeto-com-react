import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" type="text" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/66625601?s=460&u=85f80b21a15bf3278fe517eca2be564a971a48e8&v=4"
            alt="Hector Chaves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/66625601?s=460&u=85f80b21a15bf3278fe517eca2be564a971a48e8&v=4"
            alt="Hector Chaves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/66625601?s=460&u=85f80b21a15bf3278fe517eca2be564a971a48e8&v=4"
            alt="Hector Chaves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
