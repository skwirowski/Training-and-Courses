using System;

namespace LearnCsharp
{
    public class ClassProperties
    {
        // !  - Properties - we need a way to define what values are valid and disallow those that are not. C# provides a tool for that: properties.
        // ? Properties are another type of class member.
        // ? Each property is like a spokesperson for a field: it controls the access (getting and setting) to that field.
        // ? We can use this to validate values before they are set to a field. A property is made up of two methods:
        // *      ^ a get() method, or getter: called when the property is accessed
        // *      ^ a set() method, or setter: called when the property is assigned a value
        public int area;
        // *      The Area property is associated with the area field.
        // *      It’s common to name a property with the title-cased version of its field’s name, e.g. age and Age.
        // *      The set() method below uses the keyword value, which represents the value we assign to the property.
        public int Area
        {
            get { return area; }
            set { area = value; }
        }

        // *      The basic getter and setter pattern has a short-hand called an automatic property.
        // *      In this form, we don’t have to write out the get() and set() methods, and we don’t have to define a height field at all!
        // *      A hidden field is defined in the background for us. All we have to worry about is the Height property.
        public int Height { get; set; }

        // *      Here’s the property with validation in the set() method.
        public int dimension;
        public int Dimension
        {
            get { return dimension; }
            set
            {
                if (value < 0) { dimension = 0; }
                else { dimension = value; }
            }
        }
    }
}

