import React, { useState } from 'react';
import GetRandomUser, { User } from './Api.service';
import { Container, DataList, UserContainer } from './Api.styles';

const Api: React.FC = () => {
  const [data, setData] = React.useState([] as Array<User>);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const users = await GetRandomUser();
      setData(users);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Fetching users...</p>;
  if (data.length === 0) return <p>No data found...</p>;

  return (
    <Container>
      <DataList>
        {data.map((user) => (
          <UserContainer key={`${user.picture.thumbnail}`} isFemale={user.gender === 'female'}>
            <img src={user.picture.thumbnail} alt="thumbnailPicture" />
            <p>{`${user.name.title} ${user.name.last} ${user.name.first}`}</p>
            <p>{user.gender}</p>
          </UserContainer>
        ))}
      </DataList>
    </Container>
  );
};

export default Api;
