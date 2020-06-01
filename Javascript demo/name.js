class Person
{
    static dataset()
    {
        var data=
        {
            user1:{name:"Ajay",age:25,username:"user1",password:"ajay"},
            user2:{name:"Akshay",age:24,username:"user2",password:"akshay"},
            user3:{name:"Cibin",age:23,username:"user3",password:"cibin"},
            user4:{name:"Arjun",age:21,username:"user4",password:"arjun"}
        }

        return data;
    }

    static authenticateUser()
    {
        var userid=document.querySelector("#Username").value;
        var pwd=document.querySelector("#exampleInputPassword").value;

        var database=Person.dataset();

        console.log(database);
//        if(userid in database)
//        {
//            var user_password=database[userid]["password"];
//            if(pwd==user_password)
//            {
//                alert("Login successful");
//            }
//            else
//            {
//                alert("Incorrect Password");
//            }
//        }
//        else
//        {
//            alert("Invalid username");
//        }
    }
}