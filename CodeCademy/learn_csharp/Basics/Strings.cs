using System;

namespace LearnCsharp
{
    public class Strings
    {
        public void Concatenation()
        {
            string yourFaveMusician = "Christian Berishaj";
            string myFaveMusician = "Steven Wilson";

            Console.WriteLine("Your favorite musician is " + yourFaveMusician + " and mine is " + myFaveMusician + ".");
        }

        public void Interpolation()
        {
            string yourFaveMusician = "Childish Gambino";
            string myFaveMusician = "Steffen Linck";

            Console.WriteLine($"Your favorite musician is {yourFaveMusician} and mine is {myFaveMusician}.");
        }

        public void PartsOfString()
        {
            string name = "Matthew Wolfgang Garstka";

            int firstNameLetterPosition = name.IndexOf("Matthew");
            char firstLetter = name[firstNameLetterPosition];

            int secondNameLetterPosition = name.IndexOf("Wolfgang");
            char secondLetter = name[secondNameLetterPosition];

            int lastNamePosition = name.IndexOf("Garstka");
            string lastName = name.Substring(lastNamePosition);

            Console.WriteLine($"{firstLetter}. {secondLetter}. {lastName}");
        }

        public void ManipulateStrings()
        {
            // Script line
            string script = "Close on a portrait of the HANDSOME PRINCE -- as the BEAST'S giant paw slashes it.";

            // Get camera directions
            int charPosition = script.IndexOf("Close");
            int length = "Close on".Length;
            string cameraDirections = script.Substring(charPosition, length);

            // Get scene description
            charPosition = script.IndexOf("a portrait");
            string sceneDescription = script.Substring(charPosition);

            // Make camera directions uppercase
            cameraDirections = cameraDirections.ToUpper();

            // Make scene description lowercase
            sceneDescription = sceneDescription.ToLower();

            // Print results
            Console.WriteLine($"{cameraDirections} {sceneDescription}");
        }
    }
}