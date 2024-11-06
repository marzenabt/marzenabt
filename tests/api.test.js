import {expect} from "chai"
import pkg from 'pactum';
const {spec} = pkg;
import "dotenv/config";
import { baseUrl, userID } from "../helpers/data.js";

describe("Api testes", () => {
    it("get request", async () => {
        const response = await spec()
        .get("https://demoqa.com/BookStore/v1/Books")
        .inspect()
        const responseB = JSON.stringify(response.body);
        expect(response.statusCode).to.eql(200);
        // expect(responseB).to.include("Learning JavaScript Desing Patterns");
        // expect(responseB).to.include("Eloquent JavaScript, Second Edition");
})

    it.skip("Create a user", async ()=> {
        const response = await spec()
        .post("https://demoqa.com/Account/V1/User")
        .withBody({
                userName: "marzenabt",
                password: "Testymarzena1!",
            })
            .inspect();
            expect(response.statusCode).to.eql(201)
            //"2c97fa0f-ef06-414c-b9a8-385e4f3f358d"
   
})
})