import React, { useEffect, useState } from "react";
import axios from "axios";
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
      .get(`https://api.github.com/users/${params.login}`)
      .then((res) => {
        console.log(res.data);
        // setMembersDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Title>Members Details Page</Title>
      {membersDetails ? (
        membersDetails.map((user) => {
          return <MediaCard 
          key={user.id}
          name={user.name}
          login={user.login}
          public_repos={user.public_repos}
          followers={user.followers}
          created_at={user.created_at}

          >
          </MediaCard>;
        })
      ) : (
        <div>carregando...</div>
      )}
    </div>
  );
};

export default MembersDetailsPage;
