using System;

namespace LearnCsharp
{
    public class ClassConstructor
    {
        // ? THIS keyword
        public string alias;
        public string surname;
        public string name;
        public int phone;

        public ClassConstructor(string alias, string surname)
        {
            // * Use this to qualify the members of the class instead of the constructor parameters.
            this.alias = alias;
            this.surname = surname;
        }

        // ? Overloading Constructors
        // *    Just like other methods, constructors can be overloaded.
        public ClassConstructor(string alias)
        {
            this.alias = alias;
            this.surname = "Unknown";
        }

        // *    To avoid code duplication we can:
        // *      ^ Use default values:
        public ClassConstructor(string alias, string surname = "Doe", string name = "John")
        {
            this.alias = alias;
            this.surname = surname;
            this.name = name;
        }

        // *      ^ Use : this(), which refers to another constructor in the same class.
        public ClassConstructor(string alias, int phone) : this(alias, "Doe", "John")
        {
            this.phone = phone;
        }
        // *      Remember that this.alias refers to the current instance of a class.
        // *      When we use this() like a method, it refers to another constructor in the current class.

        // covariance 
        // contravariance
    }
}

