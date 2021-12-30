using System;

namespace LearnCsharp
{
    class Program
    {
        // ? Main()
        // * Main() is a method of the Program class.
        // * public — The method can be called outside the Program class.
        // * static — The method is called from the class name: Program.Main().
        // * void — The method means returns nothing.
        // * string[] args — The method has one parameter named args, which is an array of strings.
        // * Each time we run dotnet run, the Main() method is called.
        // * We can include arguments on the command line, like dotnet run arg1 arg2 arg3 that will be converted into an array as the args parameter.
        static void Main(string[] args)
        {
            if (args.Length > 0)
            {
                string mainPhrase = String.Join(" and ", args);
                Console.WriteLine($"My favorite fruits are {mainPhrase}!");

                // ? in the console run: dotnet run mango pineapple lychee
            }

            // ! Uncomment method execution to use it

            // ? The process of creating an instance is called instantiation - we instantiate a class
            Consoles consoles = new Consoles();
            // consoles.GetInput();
            // consoles.GetCreature();

            DataTypes dataTypes = new DataTypes();
            // dataTypes.DogInformation();
            // dataTypes.Conversion();

            Strings strings = new Strings();
            // strings.Concatenation();
            // strings.Interpolation();
            // strings.PartsOfString();
            // strings.ManipulateStrings();

            Methods methods = new Methods();
            // methods.NamedArguments();
            // methods.NamedArguments(d: 4);
            // methods.NamedArguments(d: 4, b: 1, c: 2);
            // methods.NamedArguments(2, 1, d: 4);

            // ? Method overloading
            // ? In method overloading, multiple methods can have the same name, as long as they have different method signatures.
            // ? A method signature is a method’s name and parameter types in order.
            // methods.NamePets("Laika", "Albert");
            // methods.NamePets("Mango", "Puddy", "Bucket");
            // methods.NamePets();

            // methods.OutputParameter("10602");
            // methods.OutputParameter("#1234");
            // methods.OutputParameterShort("01234");
            // string yell = methods.CustomOutputParameter("Are you ready?!", out bool flag);
            // Console.WriteLine(yell);
            // Console.WriteLine(flag);

            // ? Expression Bodied Definition type of definition can only be used when a method contains one expression.
            // ? This helps us remember the name: expression-bodied definitions are method definitions with one expression.
            // string str = methods.ExpressionBodiedDefinition(1530);
            // methods.AnotherExpressionBodiedDefinition(str);

            // methods.MethodAsArguments();
            // methods.LambdaExpression();
            // methods.LambdaExpressionLong();
            // methods.LambdaExpressionShort();

            Arrays arrays = new Arrays();

            Loops loops = new Loops();
            // loops.TypesOfLoops();

            ClassFields classFields = new ClassFields();
            // classFields.name = "Amazon";
            // classFields.trees = 1000000;
            // Console.WriteLine(classFields.name);
            // Console.WriteLine(classFields.trees);

            ClassProperties classProperties = new ClassProperties();
            // classProperties.Height = 15;
            // classProperties.Dimension = -20;
            // Console.WriteLine(classProperties.Height);
            // Console.WriteLine($"We get default value because passed integer does not meet the validation requirements: {classProperties.Dimension}");

            ClassPublicAndPrivate classPublicAndPrivate = new ClassPublicAndPrivate();
            // classPublicAndPrivate.Language = "TypeScript";
            // Console.WriteLine(classPublicAndPrivate.Language);

            ClassMethods classMethods = new ClassMethods(0);
            // Console.WriteLine(classMethods.Area);
            // classMethods.ChangeArea(15);
            // Console.WriteLine(classMethods.Area);

            ClassConstructor classConstructor = new ClassConstructor("JD", 123456789);
            // Console.WriteLine(classConstructor.alias);
            // Console.WriteLine(classConstructor.surname);
            // Console.WriteLine(classConstructor.name);
            // Console.WriteLine(classConstructor.phone);

            // Console.WriteLine(ClassStaticMembers.Definition);

            ClassInterfaceImplementation classInterfaceImplementation = new ClassInterfaceImplementation();
            // classInterfaceImplementation.ShowSpeed();
            // classInterfaceImplementation.Accelerate();
            // classInterfaceImplementation.Accelerate();
            // classInterfaceImplementation.Accelerate();
            // classInterfaceImplementation.SlowDown();

            Inheritance inheritance = new Inheritance(50);
            inheritance.Accelerate();
        }
    }
}
