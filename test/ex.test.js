// import fs from "fs/promises";

// describe("OOP tests cases", () => {
//   test("exercise 1: Method send should be function", async () => {
//     const data = await fs.readFile("./ex-1.js");
//     const code = `${data} 
//     const smsNotificationTest = new SMSNotification(
//       "001",
//       new Date(),
//       "This is sms noti message",
//       "0923232332"
//     );
    
//     const emailNotificationTest = new EmailNotification(
//       "001",
//       new Date(),
//       "This is email noti message.",
//       "knot@gmail.com"
//     ); 
    
//     return { smsNotificationTest, emailNotificationTest }`;

//     const func = new Function(code);
//     const { smsNotificationTest, emailNotificationTest } = func();

//     expect(typeof smsNotificationTest.send).toBe("function");
//     expect(typeof emailNotificationTest.send).toBe("function");
//   });

//   test("exercise 2: Method send should be function", async () => {
//     const data = await fs.readFile("./ex-2.js");
//     const code = `${data} 
//     const smsNotificationTest = new SMSNotification(
//       "001",
//       new Date(),
//       "This is sms noti message",
//       "0923232332"
//     );
    
//     const emailNotificationTest = new EmailNotification(
//       "001",
//       new Date(),
//       "This is email noti message.",
//       "knot@gmail.com"
//     ); 
    
//     return { smsNotificationTest, emailNotificationTest }`;

//     const func = new Function(code);
//     const { smsNotificationTest, emailNotificationTest } = func();

//     expect(typeof smsNotificationTest.send).toBe("function");
//     expect(typeof emailNotificationTest.send).toBe("function");
//   });
// });
