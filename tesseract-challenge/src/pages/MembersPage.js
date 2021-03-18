import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, MEMBERS } from "../constants/parameters";
import SimpleList from "../components/SimpleList";
import { Search } from "../components/styles";

const MembersPage = () => {
  const [membersList, setMembersList] = useState([]);
  const [inputLogin, setInputLogin] = useState("");

  useEffect(() => {
    getMembersInformation();
  }, []);

  const getMembersInformation = () => {
    axios
      .get("https://api.github.com/orgs/grupotesseract/public_members")
      .then((res) => {
        setMembersList(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleInputLogin = (e) => {
    setInputLogin(e.target.value);
  };

  const filterMembers = () => {
    return membersList.filter((user) => {
      const login = user.login.toLowerCase();
      return login.indexOf(inputLogin.toLowerCase()) > -1;
    });
  };

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <Search
          onChange={handleInputLogin}
          value={inputLogin}
          placeholder="Buscar membro por login..."
        />
      </div>

      <h2 align="center">Membros:</h2>
      {filterMembers().map((user) => {
        return (
          <div align="center">
          <SimpleList
            key={user.id}
            avatar_url={user.avatar_url}
            login={user.login}
          ></SimpleList>
          </div>
        );
      })}
    </div>
  );
};

export default MembersPage;