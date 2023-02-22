var chai = require("chai"),
  chaiHttp = require("chai-http");

var should = require("chai").should();
chai.use(require("chai-shallow-deep-equal"));

chai.use(chaiHttp);

const baseUrl = "https://edataliacodetest.azurewebsites.net";
const url = "/BinaryZeros";

describe("Get max amount of 0s from binary number between 1s", function () {
  it("Max amount of 0s when the binary has multiple groups of 0s", async function () {
    const id = 545;
    const response = await chai.request(baseUrl).get(`${url}/${id}`);

    response.status.should.equal(200);
    response.body.should.equal(4);
  });

  it("Max amount of zeros when the binary has one group of 0s", async function () {
    const id = 9;
    const response = await chai.request(baseUrl).get(`${url}/${id}`);

    response.status.should.equal(200);
    response.body.should.equal(2);
  });

  it("Max amount of zero when the binary only has 1s", async function () {
    const id = 7;
    const response = await chai.request(baseUrl).get(`${url}/${id}`);

    response.status.should.equal(200);
    response.body.should.equal(0);
  });

  it("Max amount of zero when the binary has not group of 0s between 1s", async function () {
    const id = 16;
    const response = await chai.request(baseUrl).get(`${url}/${id}`);

    response.status.should.equal(200);
    response.body.should.equal(0);
  });
  it("Show error when the binary is out of the range", async function () {
    const id = 2147483649;
    const benchmark = {
      title: "One or more validation errors occurred.",
      status: 400,
      errors: {
        number: [`The value '${id}' is not valid.`],
      },
    };
    const response = await chai.request(baseUrl).get(`${url}/${id}`);

    response.status.should.equal(400);
    response.body.should.shallowDeepEqual(benchmark);
  });
});
