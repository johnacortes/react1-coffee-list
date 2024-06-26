import axios from "axios";

const SearchApi = async () => {
  const response = await axios.get(
    `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
  );

  return response.data;
};

export default SearchApi;
