import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, USERS } from "../constants/parameters";
import MediaCard from "../components/MediaCard";
import { Title } from "./styles";
import { useParams } from "react-router";

const MembersDetailsPage = () => {
  const [membersDetails, setMembersDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    showMembersDetail();
  }, []);

  const showMembersDetail = () => {
    axios
      .get(`${BASE_URL}/${USERS}/${params.login}`)
      .then((res) => {
        console.log(res.data);
        setMembersDetails([res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Title>Detalhes dos Membros: </Title>
      {membersDetails ? (
        membersDetails.map((user) => {
          return (
            <div style={{display: "flex", justifyContent: "center"}}>
            <MediaCard
              key={user.id}
              name={user.name}
              login={user.login}
              avatar_url={user.avatar_url}
              public_repos={user.public_repos}
              followers={user.followers}
              created_at={user.created_at}
              bio={user.bio}
              location={user.location}
              html_url={user.html_url}
              twitter_username={user.twitter_username}
            ></MediaCard>
            </div>
          );
        })
      ) : (
        <div>carregando...</div>
      )}
    </div>
  );
};

export default MembersDetailsPage;
