using System;

namespace LearnCsharp
{
    public class Consoles
    {
        public void GetInput()
        {
            Console.WriteLine("How old are you?");
            string input = Console.ReadLine();
            Console.WriteLine($"You are {input} years old!");
        }

        public void GetCreature()
        {
            Console.WriteLine(" .-.");
            Console.WriteLine("(o o)");
            Console.WriteLine("| O |");
            Console.WriteLine("|   |");
            Console.WriteLine("'~~~'");
            Console.WriteLine("Spooky ghost");
        }
    }
}