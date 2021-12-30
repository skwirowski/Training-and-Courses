using System;

namespace LearnCsharp
{
    public class ClassInterfaceImplementation : IAutomobile
    {
        // ? The interface says what a class MUST have. It does not say what a class MUST NOT have.
        public string LicensePlate { get; }
        public double Speed { get; private set; }
        public int Wheels { get; }
        public void ShowSpeed()
        {
            Console.WriteLine($"Speedmeter shows: { Speed } km/h");
        }
        public void Accelerate()
        {
            Speed += 10;
            ShowSpeed();
        }

        // ? In fact, interfaces cannot specify two types of members that are commonly found in classes:
        // *    - Constructors
        // *    - Fields

        public void SlowDown()
        {
            Speed -= 10;
            ShowSpeed();
        }
    }
}

