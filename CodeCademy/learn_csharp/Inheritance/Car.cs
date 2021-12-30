using System;

namespace LearnCsharp
{
    public class Car : Vehicle, IAutomobile
    {
        // ? We can refer to a superclass inside a subclass with the base keyword.
        public Car(double speed, double weight) : base(speed, weight)
        {
            LicensePlate = "Y13MXMH1";
            Speed = speed;
            Wheels = 4;
        }
        // ? The above code shows a Car that inherits from Vehicle.
        // ? The Car constructor calls the Vehicle constructor with one argument, speed.
        // ? This works as long as Vehicle has a constructor with one argument of type double.

        // ? Even if we don’t use base() in Car, it will call a Vehicle constructor.
        // ? Without an explicit call to base(), any subclass constructor will implicitly call the default parameterless constructor for its superclass.
        // ? For example, this code implicitly calls Vehicle():
        // class Car : Vehicle
        // {
        //     // Implicitly calls base(), aka Vehicle()
        //     public Car(double speed)
        //     {
        //     }
        // }
        // ? The above code is equivalent to this:
        // public Car(double speed) : base()
        // {
        // }
    }
}

