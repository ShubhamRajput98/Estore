import React from "react";

const GetApiCall = async (URL) => {
  var data = "";

  var header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  await fetch(URL, {
    method: "GET",
    headers: header,
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      data = responseJSON;
      return responseJSON;
    })
    .catch((err) => {
      console.log("err ", err);
    });
  return data;
};

export default GetApiCall;
