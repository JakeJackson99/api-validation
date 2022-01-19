import request from "supertest";
import "regenerator-runtime/runtime";

import app from "./app";

describe("GET /role", () => {
  test("'200' status code", async () => {
    const res = await request(app).get("/api/account/role");
    expect(res.statusCode).toBe(200);
  });
});

describe("PUT /profile", () => {
  test("'200' status code when sending no data", async () => {
    const res = await request(app).put("/api/account/profile");
    expect(res.statusCode).toBe(200);
  });

  test("'200' status code when sending valid data", async () => {
    const res = await request(app)
      .put("/api/account/profile")
      .send({ name: "john" });
    expect(res.statusCode).toBe(200);
  });

  test("'400' status code when sending invalid data", async () => {
    const res = await request(app)
      .put("/api/account/profile")
      .send({ name: 1 });
    expect(res.statusCode).toBe(400);
  });

  test("'400' status code when sending extraneous data", async () => {
    const res = await request(app)
      .put("/api/account/profile")
      .send({ name: "John", city: "London" });
    expect(res.statusCode).toBe(400);
  });
});

describe("DELETE /member", () => {
  test("'200' status code", async () => {
    const res = await request(app)
      .delete("/api/account/member")
      .send({ account_id: 1 });
    expect(res.statusCode).toBe(200);
  });

  test("'400' status code when sending invalid data", async () => {
    const res = await request(app)
      .put("/api/account/profile")
      .send({ account_id: "1" });
    expect(res.statusCode).toBe(400);
  });

  test("'400' status code when sending extraneous data", async () => {
    const res = await request(app)
      .delete("/api/account/member")
      .send({ account_id: 1, name: "John" });
    expect(res.statusCode).toBe(400);
  });

  test("'400' status code when sending no data", async () => {
    const res = await request(app).delete("/api/account/member");
    expect(res.statusCode).toBe(400);
  });
});

describe("GET /search", () => {
  test("'200' status code when sending no data", async () => {
    const res = await request(app).get("/api/account/search");
    expect(res.statusCode).toBe(200);
  });

  test("'200' status code when sending valid data", async () => {
    const res = await request(app)
      .get("/api/account/search")
      .query({ sort_by: "quality" });
    expect(res.statusCode).toBe(200);
  });

  test("'200' status code when sending valid array data", async () => {
    const res = await request(app)
      .get("/api/account/search")
      .query({ location: ["London", "Barcelona"] });
    expect(res.statusCode).toBe(200);
  });

  test("'400' status code when sending extraneous data", async () => {
    const res = await request(app)
      .get("/api/account/search")
      .query({ sort_by: "quality", name: "John" });
    expect(res.statusCode).toBe(400);
  });

  test("'400' status code when sending invalid data", async () => {
    const res = await request(app)
      .get("/api/account/search")
      .query({ sort_by: 1 });
    expect(res.statusCode).toBe(400);
  });

  test("'400' status code when sending invalid array data", async () => {
    const res = await request(app)
      .get("/api/account/search")
      .query({ location: [1, 2] });
    expect(res.statusCode).toBe(400);
  });
});
