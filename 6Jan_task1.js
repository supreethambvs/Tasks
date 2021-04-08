var users=[
{
    name:"Preetham",
    add:"Hyderabad"
},
{
    name:"Pranathi",
    add:"Kakinada"
},
{
    name:"Meghana",
    add:"Chandanagar"
}
]

var isDataLoaded=false;
var allUsers;
var index=0;
do{
    if(isDataLoaded == false){
        allUsers=users;
        isDataLoaded= true;
        console.log("Data loading Finished");
    }
    console.log(allUsers[index]);
    index++;
}while(index<allUsers.length)