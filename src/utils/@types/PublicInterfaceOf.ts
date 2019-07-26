//This is used for mocking
//Allows interfacing of private members
//More detail here:
//https://www.michaelbromley.co.uk/blog/mocking-classes-with-typescript/

type PublicInterfaceOf<Class> = { [Member in keyof Class]: Class[Member] };
export default PublicInterfaceOf;
