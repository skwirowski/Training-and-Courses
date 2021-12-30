using System;

namespace LearnCsharp
{
    public class ClassPublicAndPrivate
    {
        // ? Public vs. Private access modifiers:
        // *      ^ public — a public member can be accessed by any class.
        // *      ^ private — a private member can only be accessed by code in the same class.
        // *      ^ C# encourages encapsulation by defaulting class members to private and classes to public.

        // * By directly accessing the public language field the code will skip the validation.
        // * To prevent that we can set the language field to private.
        private string language;
        public string Language
        {
            get { return language; }
            set
            {
                if (value == "JavaScript" || value == "Java" || value == "Python")
                {
                    language = value;
                }
                else
                {
                    language = "Some other language";
                }
            }

        }

        // ? Get-Only properties
        // *      If we want programs to get the value of the property, but we don’t want programs to set the value of the property we can:
        // *        ^ NOT include a set method (we get an error for setting Width anywhere):
        public string Width { get; }
        // *        ^ Make set property private (we only get an error for setting Perimeter outside of the current class):
        public int perimeter;
        public int Perimeter
        {
            get { return perimeter; }
            private set { perimeter = value; }
        }
    }
}

