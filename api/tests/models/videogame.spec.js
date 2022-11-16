import { Videogame, conn } from '../../src/db.js';
import { expect } from 'chai';

describe("Videogame model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        videogames
          .create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        videogames.create({ name: "EMI" });
      });
      it("should return name not found", (done) => {
        videogames
          .findAll()
          .then((r) => expect(r[1].name).to.be.false("NameNotFound"))
          .catch(() => done());
      });
    });
  });
});

describe("Genre model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => genres.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        genres
          .create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        genres.create({ name: "EMI" });
      });
      it("should return name not found", (done) => {
        genres
          .findAll()
          .then((r) => expect(r[1].name).to.be.false("NameNotFound"))
          .catch(() => done());
      });
    });
  });
});
