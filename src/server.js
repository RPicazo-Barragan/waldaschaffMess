const URL_BASE = "";
const URL_LOCAL = " http://localhost:8080/";

const getOperators = async()=>{
  const response = await fetch(`${URL_LOCAL}operators`)
  return await response.json();
}

const getOperator = async (id) =>{
  const response = await fetch(`${URL_LOCAL}operators/${id}`)
  return await response.json();
}

const createOperator = async(request) =>{
  const response = await fetch(`${URL_LOCAL}operators`,{
    method: "POST",
    body: JSON.stringify(request),
    headers:{
      "Content-Type": "application/json",
    },
  });
  const posts = await response.json();
  return posts;
} 

const addPhoto = async (id, data) => {
  const response = await fetch(`${URL_LOCAL}operators/${id}/upload`, {
    method: "PATCH",
    body: data,
    /*    headers: {
      "Content-Type": "multipart/form-data",
    }, */
  });
  const posts = await response.json();
  return posts;
};

export{
  addPhoto,
  getOperator,
  createOperator,
  getOperators
}