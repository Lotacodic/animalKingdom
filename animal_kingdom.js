// A function to replicate console.log to reduce its length
function print(message) {
    console.log(message);
};

// This is the base class where all other classes will depend on
class Animals {
    //Abstraction
    constructor(nameOfAnimal, classes) {
        if (this.constructor === Animals) {
            throw new error("This class cannot be instantiated");
        }
        this.nameOfAnimal = nameOfAnimal;
        this.classes = classes;
    }
    //Stores nameofAnimal
    setNameOfAnimal(nameOfAnimal) {
        this.nameOfAnimal = nameOfAnimal;
    }
    //stores classes
    setClasses(classes) {
        this.classes = classes;
    }
    //methods store feature of Animals
    withBackbone() {
        return (this.withBackbone = true);
    }
    withoutBackbone() {
        return (this.withoutBackbone = true);
    }

    //Encapsulating the temperature of Animals
    #coldBlooded() {
        return (this.coldBlooded = true);
    }
    coldBlooded() {
        this.#coldBlooded();
    }
    #warmBlooded() {
        return (this.warmBlooded = true);
    }
    warmBlooded() {
        this.#warmBlooded();
    }
    
    features() {
        throw new error("This method cannot be implemented")
    }
};

//let's try to instantiate the base class
//const animal = new Animals()


//Inheritance
class Mammal extends Animals {
    constructor(nameOfAnimal, classes) {
        super()
        this.warmBlooded();
        this.withBackbone();
    }
    listFeatures(){
        print(this);
    }
}

print("++++++++++++++++++++++++CLASSES OF ANIMAL KINGDOM++++++++++++++++++++++++++++++")
const mammal = new Mammal();
mammal.setNameOfAnimal("Humans")
mammal.setClasses("Mammal")
mammal.listFeatures()
print("\n")


//Inheritance
class Amphibia extends Animals {
    constructor(nameOfAnimal, classes) {
        super()
        this.coldBlooded();
        this.withBackbone();
    }
    listFeatures(){
        print(this);
    }
}

const amphibia = new Amphibia();
amphibia.setNameOfAnimal("Salamander")
amphibia.setClasses("Amphibia")
amphibia.listFeatures()
print("\n")


//Inheritance
class Aves extends Animals {
    constructor(nameOfAnimal, classes) {
        super()
        this.warmBlooded();
        this.withBackbone();
    }
    listFeatures(){
        print(this);
    }
}

const aves = new Aves();
aves.setNameOfAnimal("Duck")
aves.setClasses("Aves")
aves.listFeatures()
print("\n")


//Inheritance
class Arthropoda extends Animals {
    constructor(nameOfAnimal, classes) {
        super()
        this.coldBlooded();
        this.withoutBackbone();
    }
    listFeatures(){
        print(this);
    }
}

const arthropoda = new Arthropoda();
arthropoda.setNameOfAnimal("Spider")
arthropoda.setClasses("Anthropoda")
arthropoda.listFeatures()
print("\n")


//Inheritance
class Reptiles extends Animals {
    constructor(nameOfAnimal, classes) {
        super()
        this.coldBlooded();
        this.withBackbone();
    }
    listFeatures(){
        print(this);
    }
}

const reptiles = new Reptiles();
reptiles.setNameOfAnimal("Snake")
reptiles.setClasses("Reptiles")
reptiles.listFeatures()
print("\n")


//Inheritance
class Fish extends Animals {
    constructor(nameOfAnimal, classes) {
        super()
        this.coldBlooded();
        this.withBackbone();
    }
    listFeatures(){
        print(this);
    }
}

const fish = new Fish();
fish.setNameOfAnimal("Catfish")
fish.setClasses("Fish")
fish.listFeatures()