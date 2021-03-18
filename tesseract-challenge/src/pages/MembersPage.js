import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, MEMBERS_URL } from "../constants/parameters";
import SimpleList from "../components/SimpleList";
import { Title, Search } from "./styles";

const MembersPage = () => {
  const [membersList, setMembersList] = useState([]);
  const [inputLogin, setInputLogin] = useState("");

  useEffect(() => {
    getMembersInformation();
  }, []);

  const getMembersInformation = () => {
    axios
      .get(`${BASE_URL}/${MEMBERS_URL}`)
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

      <Title align="center">Atuais Membros Tesseract:</Title>
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
