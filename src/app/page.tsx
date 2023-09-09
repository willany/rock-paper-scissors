"use client";

import { MainPage, Header, RulesButton, Game, RulesModal } from "./components";

const Home = () => {
  console.log("renderizou...");
  return (
    <MainPage>
      <Header />
      <Game />
      <RulesButton />
      <RulesModal />
    </MainPage>
  );
};

export default Home;
