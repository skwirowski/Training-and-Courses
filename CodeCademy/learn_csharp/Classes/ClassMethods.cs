using System;

namespace LearnCsharp
{
    public class ClassMethods
    {
        // ? - Methods - the “actions” that an object can perform.

        public int Area { get; set; }
        public int ChangeArea(int change)
        {
            Area = Area + change;
            return Area;
        }

        // *      CONSTRUCTOR - a special type of method that’s run every time an object is created to set those values at once.
        // *      It looks like a method, but there is no return type listed and the method name is the name of its enclosing class:
        public int Size;
        public ClassMethods(int area)
        {
            Area = area;
        }
        // *      If no constructor is defined in a class, one is automatically created for us. It takes no parameters, so it’s called a parameterless constructor.
    }
}

