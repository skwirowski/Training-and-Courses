using System;

namespace LearnCsharp
{
    // ? The interface is a set of properties, methods, and other members.
    // ? They are declared with a signature but their behaviors are not defined.
    // ? A class implements an interface if it defines those properties, methods, and other members.
    interface IAutomobile
    {
        string LicensePlate { get; }
        double Speed { get; }
        int Wheels { get; }
        void ShowSpeed();
        void Accelerate();
    }
}

