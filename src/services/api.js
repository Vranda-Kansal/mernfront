const url = process.env.REACT_APP_URL;
console.log(url);

export const getDoctorList = async (city) => {
  try {
    let list = await fetch(`${url}/doctor/list/${city}`);
    const data = await list.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log("Error while fetching messages", err.message);
  }
};
