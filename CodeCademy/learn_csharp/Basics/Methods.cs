using System;

namespace LearnCsharp
{
    public class Methods
    {
        public void NamedArguments(int a = 0, int b = 0, int c = 0, int d = 0, int e = 0)
        {
            Console.WriteLine($"a = {a}, b = {b}, c = {c}, d = {d}, e = {e}");
        }
        // ? method has five optional parameters
        // ? When you call the method and you only want to specify d you need to refer to the parameter by its name
        // ? NamedArguments(d: 4);
        // ? NamedArguments(d: 4, b: 1, c: 2);

        // ? We can also mix named arguments with positional arguments, but positional arguments MUST come before named arguments:
        // ? NamedArguments(2, 1, d: 4); // a is 2, b is 1, d is 4
        // ? NamedArguments(d: 4, 2, 1); // Error!

        public void NamePets(string firstName, string secondName)
        {
            Console.WriteLine($"Your pets {firstName} and {secondName} will be joining your voyage across space!");
        }

        public void NamePets(string firstName, string secondName, string thirdName)
        {
            Console.WriteLine($"Your pets {firstName}, {secondName} and {thirdName} will be joining your voyage across space!");
        }

        public void NamePets()
        {
            Console.WriteLine("Aw, you have no spacefaring pets :(");
        }

        public bool OutputParameter(string s)
        {
            // ? out parameter allows to pass multiple values (return can only return one value)
            // ? Parameter labeled out must be assigned a value within the method
            int number;
            bool success = Int32.TryParse(s, out number);
            Console.WriteLine($"Success: {success}");
            Console.WriteLine($"Result: {number}");

            return success;
        }

        public bool OutputParameterShort(string s)
        {
            bool success = Int32.TryParse(s, out int number);
            Console.WriteLine($"Success: {success}");
            Console.WriteLine($"Result: {number}");

            return success;
        }

        public string CustomOutputParameter(string phrase, out bool wasYellCalled)
        {
            wasYellCalled = true;

            return phrase.ToUpper();
        }

        public string ExpressionBodiedDefinition(int num) => num.ToString();

        public void AnotherExpressionBodiedDefinition(string str) => Console.WriteLine(str);

        static int[] numbers = { 1, 3, 5, 6, 7, 8, 14, 20, 24 };

        static bool IsEven(int num) => num % 2 == 0;

        public bool MethodAsArguments()
        {
            bool hasEvenNumber = Array.Exists(numbers, IsEven);
            Console.WriteLine($"An array contains at least one even number: {(hasEvenNumber ? "Yes" : "No")}");

            return hasEvenNumber;
        }

        static string[] adjectives = { "rocky", "mountainous", "cosmic", "extraterrestrial" };

        // ? Generally lambda expressions with one expression use the fat arrow, no curly braces, and no semicolon
        public void LambdaExpression()
        {
            string firstLongAdjective = Array.Find(adjectives, (string word) => word.Length > 8);
            Console.WriteLine($"The first long word is: {firstLongAdjective}.");
        }

        // ? Lambda expressions with more than one expression use curly braces and semicolon
        public void LambdaExpressionLong()
        {
            bool hasBigDozen = Array.Exists(numbers, (int num) =>
            {
                bool isDozenMultiple = num % 12 == 0;
                bool greaterThan20 = num > 20;
                return isDozenMultiple && greaterThan20;
            });
            Console.WriteLine($"Is any element a multiple of 12 and greater than 20: {(hasBigDozen ? "Yes" : "No")}");
        }

        // ? We can remove the parameter type if can be inferred
        // ? We can remove the parentheses if there is one parameter
        public void LambdaExpressionShort()
        {
            bool isDivisibleBy3 = Array.Exists(numbers, num => num % 3 == 0);
            Console.WriteLine($"Is any element divisible by 3: {(isDivisibleBy3 ? "Yes" : "No")}");
        }
    }
}