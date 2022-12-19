# Model-Of-Animal-Kingdom
This project models simple animal kingdom classification in JavaScript using the core properties of Object Oriented Programming. Namely;
- Inheritance
- Abstraction
- Polymorphism
- Encapsulation

## Usage
- `clone` this project with this command below or any preferred method, cd into the `animal-kingdom-model` folder
```
git clone https://github.com/lotacodic/animalKingdom.git
```
- `node js` is needed to run this project on terminal 
- recommended IDE is Vs Code, I recommend Maximum Panel Size for a better view of the output
- run this command `node animal_kingdom.js` on terminal 

## Sample
  - This is the expected output when `node animal_kingdom.js` is run in terminal

  <img src="/image\Screenshot (219).png">

# How it Works, Tests for OOP
- Inheritance 
  - Creating the 6 classes of animal kingdom using the `extends` keyword is enough proof that inheritance is confirmed
 
 - Abstraction 
    - Made `class Animals` as `base class`
    - Lines 10 restrict the instantiation of the base class
  
  Test for abstraction 
  1. uncomment line 52 
  2. run the command `node animal_kingdom.js` again
  3. It throws an error
  4. abstraction confirmed 

  
  - Polymorphism
    - All 6 extended classes `modified` the features() methods inherited from the base class, thus, polymorphism is confirmed 
  
  - Encapsulation 
    - For encapsulation check line 33 and 39