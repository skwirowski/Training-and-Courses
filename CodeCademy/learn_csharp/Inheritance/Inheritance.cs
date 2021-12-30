using System;

namespace LearnCsharp
{
    public class Inheritance : Vehicle, IAutomobile
    {
        // ? In inheritance, one class inherits the members of another class.
        // ? The class that inherits is called a subclass or derived class.
        // ? The other class is called a superclass or base class.

        // ? A subclass inherits, or “extends”, a superclass using colon syntax (:).
        // ? A class can extend a superclass and implement an interface with the same syntax.
        // ? Separate them with commas and make sure the superclass comes before any interfaces.
        public Inheritance(double speed)
        {
            LicensePlate = "Y13MXMH1";
            Speed = speed;
            Wheels = 4;
        }
    }
}

