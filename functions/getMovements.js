const URL_API = "https://training-k4dg.onrender.com/movements";

const getMovements = async () => {
    try {
      const { data } = await axios.get(URL_API);
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

export default getMovements