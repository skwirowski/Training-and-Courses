using System;

namespace LearnCsharp
{
    public class Arrays
    {
        public void BuildingArrays()
        {
            // ? Like a variable, we can define and initialize an array at the same time, by specifying the values we want to store in it.
            int[] plantHeights = { 3, 4, 6 };

            // ? We may also define and initialize arrays using a new keyword.
            // ? The new keyword signifies that we are instantiating a new array from the array class.
            int[] weeksTemperatures = new int[] { 15, 17, 16, 19, 20, 18, 21 };

            // ? If we decide to define an array and then initialize it later we must use the new keyword.
            // * Initial declaration
            int[] stepsPerDay;
            // * Initialization
            stepsPerDay = new int[] { 1000, 800, 1500, 1200, 2000, 1700, 2300 };

            // ? We create the array with a known length but no known values, the array stores a default type.
            int[] integersArray = new int[3]; // * equal to [0, 0, 0]
            string[] stringsArray = new string[3]; // * equal [null, null, null]
        }
    }
}