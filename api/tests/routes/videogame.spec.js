const { expect } = require("chai");
const session = require("supertest-session");
const server = require("../../src/app.js");
const { conn } = require("../../src/db.js");
const { Videogame, Genre } = conn.models;
const agent = session(server);

describe("Test Routes", () => {
  describe("GET /videogames", () => {
    it("responds with 200", () => agent.get("/videogames").expect(200));
    it("responds with and object with videogames", () => {
      agent.get("/videogames").then((res) => {
        expect(res.body).to.be.an("array");
      });
    });
  });
  describe("GET /genres", () => {
    it("responds with 200", () => agent.get("/genres").expect(200));
    it("responds with 200", () => agent.get("/genres").expect(200));
    it("responds with an array", () => {
      agent.get("/genres").then((res) => {
        agent.expect(res.body).to.be.an("array");
        agent.end = res.body.length;

        for (let i = 0; i < agent.end; i++) {
          agent.expect(res.body[i]).to.have.property("id");
          agent.expect(res.body[i]).to.have.property("name");
        }
        agent.end();
      });
    });
    it("responds with an array of genres", () => {
      agent.get("/genres").then((res) => {
        expect(res.body).to.be.an("array").that.is.not.empty;
      });
    });
  });
});



// const supertest = require("supertest");
// var request = require('supertest');
// const app = require('../../src/app.js');

// describe("GET /genres", function() {
//   it("it should has status code 200", function(done) {
//     supertest(app)
//       .get("/genres")
//       .expect(200)
//       .end(function(err, res){
//         if (err) done(err);
//         done();
//       });
//   });
// });

// describe("GET /videogame/:ID", function() {
//   it("it should has status code 200", function(done) {
//     supertest(app)
//       .get("/videogame/4328")
//       .expect(200)
//       .end(function(err, res){
//         if (err) done(err);
//         done();
//       });
//   });
// });

// describe("GET /videogames?name=", function() {
//   it("it should has status code 200", function(done) {
//     supertest(app)
//       .get("/videogames?name=cars")
//       .expect(200)
//       .end(function(err, res){
//         if (err) done(err);
//         done();
//       });
//   });
// });

// describe("GET /wrong page", function() {
//   it("it should has status code 404", function(done) {
//     supertest(app)
//       .get("/genr")
//       .expect(404)
//       .end(function(err, res){
//         if (err) done(err);
//         done();
//       });
//   });
// });

// describe("POST /videogame", function() {
//   it('should respond with status 200', function(done) {
//     request(app)
//       .post('/videogame')
//       .send ({ name: 'emi', })
//       .expect(200)
//       .expect('Content-Type', /json/)
//       .end(function(err, res) {
//         if (err) done(err);

//       });
//       done();
//   });
// });
