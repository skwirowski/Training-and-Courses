using System;

namespace LearnCsharp
{
    public class DataTypes
    {
        public void DogInformation()
        {
            string name = "Shadow";
            string breed = "Golden Retriever";
            int age = 5;
            double weight = 65.22;
            bool spayed = true;

            Console.WriteLine(name);
            Console.WriteLine(breed);
            Console.WriteLine(age);
            Console.WriteLine(weight);
            Console.WriteLine(spayed);
        }

        public void Conversion()
        {
            // ? We can convert data types from one to another that we’re not losing any data.
            // ? Implicit conversion: happens automatically if no data will be lost in the conversion.
            // ? That’s why it’s possible to convert an int (which can hold less data) to a double (which can hold more), but not the other way around.
            int myInt = 3;
            double myDouble = myInt;
            Console.WriteLine(myDouble);

            // ? Explicit conversion: requires a cast operator to convert a data type into another one.
            double myNewDouble = 3.2;
            // ? Round myNewDouble to the nearest whole number
            int myNewInt = (int)myNewDouble;
            Console.WriteLine(myNewInt);

            // ? It’s also possible to convert data types using built-in methods
            string myString = "123456789";
            int myNewestInt = Convert.ToInt32(myString);
            Console.WriteLine(myNewestInt);

            bool myBoolean = true;
            string myNewString = myBoolean.ToString();
            Console.WriteLine(myNewString);

            string myNewestString = "Hello there";
            char[] arrayOfChars = myNewestString.ToCharArray();
            foreach (char c in arrayOfChars)
            {
                Console.WriteLine(c);
            }
        }
    }
}