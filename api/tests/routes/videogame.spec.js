/* eslint-disable import/no-extraneous-dependencies */ 
/* eslint-disable no-undef */

import { expect } from 'chai';
import session from 'supertest-session';
import app from '../../src/app.js';
import { Videogame, conn } from '../../src/db.js';

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});


// //import { videogames, genres, conn } from "../db";
// const { shouldgetgamegenre, shouldgetgameid, shouldgetgamename, shouldget404, shouldgetgamecreated } = require(" ../routes/videogame.spec.js ");

// describe("GET /genres", () => {
//   it("shouldgetgamegenre", (done) => {  
//     supertest(app)
//       .get("/genres")
//       .expect(200)
//       .end((err, res) => {
//         if (err) return done(err);
//         done();
//       });
//   });
// });

// describe("GET /videogames/:ID", function () {
//   it("shouldgetgameid", function (done) {
//     supertest(app)
//       .get("/videogames/1")
//       .expect(200)
//       .end(function (err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });

// describe("GET /videogames?name=", function () {
//   it("shouldgetgamename", function (done) {
//     supertest(app)
//       .get("/videogames?name=Super%20Mario%20Bros")
//       .expect(200)
//       .end(function (err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });

// describe("GET /wrong page", function () {
//   it("shouldget404", function (done) {
//     supertest(app)
//       .get("/genr")
//       .expect(404)
//       .end(function (err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });

// describe("POST /videogames", function () {
//   it("shouldgetgamecreated", function (done) {
//     request(app)
//       .post("/videogames")
//       .send({
//         name: "EMI",
//       })
//       .expect(200)
//       .expect("Content-Type", /json/)
//       .end(function (err, res) {
//         if (err) return done(err);
//       });
//     done();
//   });
// });


