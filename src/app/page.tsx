"use client";

import {
  MainPage,
  Header,
  RulesButton,
  Game,
  RulesModal,
  Content,
} from "./components";

const Home = () => {
  return (
    <MainPage>
      <Content>
        <Header />
        <Game />
        <RulesButton />
        <RulesModal />
      </Content>
    </MainPage>
  );
};

export default Home;
