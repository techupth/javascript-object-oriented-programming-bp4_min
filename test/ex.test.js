import fs from "fs/promises";

describe("OOP tests cases", () => {
  test("exercise 1: Method send should be function", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} 
    const smsNotification = new SMSNotification(
      "001",
      new Date(),
      "This is sms noti message",
      "0923232332"
    );
    
    const emailNotification = new EmailNotification(
      "001",
      new Date(),
      "This is email noti message.",
      "knot@gmail.com"
    ); 
    
    return {smsNotification, emailNotification}`;

    const func = new Function(code);
    const { smsNotification, emailNotification } = func();

    expect(typeof smsNotification.send && typeof emailNotification.send).toBe(
      "function"
    );
  });
});
