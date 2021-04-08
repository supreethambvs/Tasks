var messages=[
    {
        sender: "Ravi",
        message: "Hello.. how are you?",
        time: "10:45"
    },
    {
        sender: "Karthik",
        message: "Hello.. hows life?",
        time: "10:46"
    },
    {
        sender: "Srikanth",
        message: "Hello.. how are you and family?",
        time: "10:47"
    },
    {
        sender: "Pranathi",
        message: "Hello.. how are you and dad?",
        time: "10:48"
    }
];
var index=0;
    while(index < messages.length){
        var currentMessage=messages[index];
        console.log(currentMessage.sender+":     Message: "+currentMessage.message+"     Time:    "+currentMessage.time);
        index++;

    }