import axios from 'axios';

const ENDPOINT = 'https://randomuser.me/api?results=5';

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
}

interface Data {
  info: any;
  results: User[];
}

// EXTRA: ik zou naam in het meervoud zetten (je haalt meerdere users op)
const GetRandomUser = async () => {
  const result = await axios.get<Data>(ENDPOINT);
  if (result.status !== 200) {
    console.error('Error occured while fetching users >>>> ', result.statusText);
    return [];
  }

  return result.data.results;
};

export default GetRandomUser;
