import mongoose from "mongoose"; 

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

const personSchema = new mongoose.Schema({
    first: String,
    last: String,
});

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
});

const Person = mongoose.model('Person', personSchema);


const newPerson = new Person({ first: 'John', last: 'Doe' });
await newPerson.save();


const foundPerson = await Person.findOne({ fullName: 'John Doe' });
console.log(foundPerson);

