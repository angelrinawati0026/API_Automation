const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariabel/baseUrl");

const url = baseUrl; //define global variable


async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Computer",
      data: {
        Generation: "2024th",
        Price: "10000",
        Capacity: "125 GB",
      },
    });
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Computer");
  expect(response.body.data.Generation).to.equal("2024th");
  expect(response.body.data.Price).to.equal("10000");
  expect(response.body.data.Capacity).to.equal("125 GB");
  expect(response.body.createdAt).to.not.be.null;

  //save id after post
  const id = response.body.id;
  console.log("id after post: ",id);
  return id;
}

//update
async function putMethod(id) {
    const response = await request(url)
      .put(`/objects/${id}`)
      .send({
        name: "Computer A",
        data: {
          Generation: "2024th",
          Price: "10000",
          Capacity: "100 GB",
          Color : "red"
        },
      });
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Computer A");
    expect(response.body.data.Capacity).to.equal("100 GB");
    expect(response.body.data.Color).to.equal("red");
  
  }
  async function getMethod(id) {
    const response = await request(url).get(`/objects/${id}`);
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
  }
  
  //update partially
async function patchMethod(id) {
  const response = await request(url)
    .patch(`/objects/${id}`)
    .send({
      name: "Computer AXF"
    });
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Computer AXF");

}
async function getMethod(id) {
  const response = await request(url).get(`/objects/${id}`);
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  console.log(response.body);
}


module.exports = {postMethod,putMethod,getMethod,patchMethod};
