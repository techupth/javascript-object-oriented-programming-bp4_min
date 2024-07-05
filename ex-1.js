class EmailNotification { 
    constructor(notificationId, createdTime, content, receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}

class SMSNotification { 
    constructor(notificationId, createdTime, content, phoneNumber){
        this.notificationId= notificationId;
        this.createdTime =createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send(){
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }

}
const email = new EmailNotification()
const sms = new SMSNotification()
email.send()
sms.send()