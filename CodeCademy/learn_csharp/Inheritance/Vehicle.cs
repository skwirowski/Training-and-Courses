using System;

namespace LearnCsharp
{
    public class Vehicle
    {
        public Vehicle() { }

        public Vehicle(double speed, double weight)
        {
            Speed = speed;
            LicensePlate = "MPINHJ5E";
            Weight = weight;
        }

        public string LicensePlate { get; protected set; }
        public double Speed { get; protected set; }
        // ? A protected member can be accessed by the current class and any class that inherits from it.
        public int Wheels { get; protected set; }
        // ? Since the Weight property defined in Vehicle is not accessed in Car, it doesn't need to be protected.
        // ? We can change setter to private.
        public double Weight { get; private set; }
        public void Honk()
        {
            Console.WriteLine("Honk!");
        }

        public void ShowSpeed()
        {
            Console.WriteLine($"Speedmeter shows: { Speed } km/h");
        }
        public void Accelerate()
        {
            Speed += 10;
            ShowSpeed();
        }

        public void SlowDown()
        {
            Speed -= 10;
            ShowSpeed();
        }
    }
}

