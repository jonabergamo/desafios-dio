import { useState } from "react";
import gitLogo from "../assets/github-color.svg";
import Input from "../components/Input";
import Button from "../components/Button";
import { ItemRepo } from "../components/ItemRepo";
import { Container } from "./styles";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExist = repos.find((repo) => repo.id == data.id);
        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
        }
        return;
      }
    } catch (err) {
      alert("Repositório não encontrado!", err);
    }
  };

  function handleRemove(id) {
    let newRepos = [];

    for (let repo of repos) {
      if (id != repo.id) {
        newRepos.push(repo);
      }
    }
    setRepos(newRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input
        value={currentRepo}
        onChange={(e) => {
          setCurrentRepo(e.target.value);
        }}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemove={handleRemove} />
      ))}
    </Container>
  );
}

export default App;
