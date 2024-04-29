//Api call function that pings the api and returns a response
const everyCall = async (input: string) => {
  const APIkey: string = '4lPj6omfit7OH9VuHzAIuN9ecR2g6z17';
  //eslint-disable-next-line
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${APIkey}&s=${input}`,
      { mode: 'cors' }
    );
    const result = await response.json();
    console.log(result);
    const gifUrl = result.data.images.original.url;
    return gifUrl;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default everyCall;
