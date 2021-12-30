using System;

namespace LearnCsharp
{
    public class Loops
    {
        public void TypesOfLoops()
        {
            // ? Loops
            // * while loops are good when you know your stopping condition, but not when you know how many times you want a program to loop or if you have a specific collection to loop through.
            int emails = 20;
            while (emails > 0)
            {
                emails -= 1;
                Console.WriteLine($"{emails} remaining.");
            }
            Console.WriteLine("INBOX ZERO ACHIEVED!");

            // * do...while loops are only necessary if you definitely want something to run once, but then stop if a condition is met.
            bool buttonClick = true;
            do
            {
                Console.WriteLine("BLARRRRRRRRR");
            } while (!buttonClick);

            Console.WriteLine("Time for a five minute break.");

            // * for loops are best if you want something to run a specific number of times, rather than given a certain condition.
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(i);
            }

            // * foreach loops are the best way to loop over an array, or any other collection.
            string[] melody = { "a", "b", "c", "c", "b" };
            foreach (string note in melody)
            {
                Console.WriteLine(note);
            }

            // ? Jump statements
            // * BREAK
            //      At any point within a loop block, you can end it by using the break keyword.
            // * CONTINUE
            //      the continue keyword is used to bypass portions of code.
            //      It will ignore whatever comes after it in the loop and then will go back to the top and start the loop again.
            // * RETURN
            //      The return keyword is another way to exit a loop, specifically loops that are used within a method.
            //      When a return is used within such a loop, it breaks out of the loop and returns control to the point in the program where the method was called.
            //      You should only use return if you need to exit a method, because it will break out of all loops.
        }
    }
}