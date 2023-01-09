import { myTruck } from "./index.js";

describe("myTruck", () => {
    it("should be an instance of Car", () => {
        expect(myTruck).toBeInstanceOf(Car);
    });

    }  
);