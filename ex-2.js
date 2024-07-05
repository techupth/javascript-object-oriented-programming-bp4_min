class Notification { 
    constructor(notificationId, createdTime, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class EmailNotification extends Notification{
    constructor(notificationId, createdTime, content, receiver){
        super(notificationId, createdTime, receiver);
        this.content = content;
    }
 }

class SMSNotification extends Notification {
    constructor(notificationId, createdTime, content, phoneNumber){
        super(notificationId, createdTime, receiver);
        this.content = content;
        this.phoneNumber =phoneNumber;
    }
 }
const Email = new EmailNotification();
Email.send();
const SMS = new SMSNotification();
SMS.send();