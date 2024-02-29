const weather = async () => {
    const plainData = await fetch("http://ip-api.com/json");
    return plainData.json();
};

const getWeather = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "http://ip-api.com/json"
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
