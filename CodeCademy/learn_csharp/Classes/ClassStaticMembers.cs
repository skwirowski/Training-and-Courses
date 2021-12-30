using System;

namespace LearnCsharp
{
    public class ClassStaticMembers
    {
        // ? Static Fields and Properties
        // *  Let's say that definition property applies to all ClassStaticMembers objects, not just one.
        // *  There should only be one value for the whole class.
        private static string definition;
        public static string Definition { get; set; }

        // ? Static methods
        // *  - Static means “associated with the class, not an instance”. Thus any static member is accessed from the class, not an instance.
        // *  - When creating static method then field also should be static. This is because a static method can only access other static members.
        // *  - Static methods cannot access instance members.
        public static void Define()
        {
            Console.WriteLine(definition);
        }

        // ? static CONSTRUCTOR
        // *  An instance constructor is run before an instance is used.
        // *  A static constructor is run once before a class is used.
        static ClassStaticMembers()
        {
            Definition = "Arrived totally in as between private. Favour of so as on pretty though elinor direct.\n Reasonable estimating be alteration we themselves entreaties me of reasonably.\n Direct wished so be expect polite valley. Whose asked stand it sense no spoil to.\n Prudent you too his conduct feeling limited and. \nSide he lose paid as hope so face upon be. Goodness did suitable learning put.";
        }

        // *  Static constructor is run when either one of these events occurs:
        // *    ^ Before an object is made from the type (ClassStaticMembers csm = new ClassStaticMembers();).
        // *    ^ Before a static member is accessed (ClassStaticMembers.Define();).

        // *  Typically we use static constructors to set values to static fields and properties.
        // *  A static constructor does not accept an access modifier.
    }
}

