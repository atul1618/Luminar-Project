//class Student
//{
////    setvalues(name,mark1,mark2,mark3)
////    {
////        this.name=name;
////        this.mark1=mark1;
////        this.mark2=mark2;
////        this.mark3=mark3;
////    }
//        constructor(name,mark1,mark2,mark3)
//        {
//            this.name=name;
//            this.mark1=mark1;
//            this.mark2=mark2;
//            this.mark3=mark3;
//        }
//
//    printvalues()
//    {
//        this.total=this.mark1+this.mark2+this.mark3;
//        if(this.total>=75)
//        {
//            alert(this.name+"Passed");
//        }
//        else
//        {
//            alert(this.name+"Failed");
//        }
//    }
//}
//
//a=new Student("Arun",40,35,45);
////a.setvalues("Arun",40,35,45);
//a.printvalues();
//
//
////b=new Student();
////b.setvalues("Ajay",25,30,20);
////b.printvalues();
//
//
////c=new Student();
////c.setvalues("Cibin",20,15,20);
////c.printvalues();
//
//
//



class Parent
{
    m1()
    {
        console.log("Inside parent");
    }

}

class Child extends Parent
{
    m2()
    {
        console.log("Inside child");
    }
}

c=new Child();
c.m1();
c.m2();

