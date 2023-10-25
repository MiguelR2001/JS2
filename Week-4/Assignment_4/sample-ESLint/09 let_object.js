let x = {
    genie: "dog" 
};

console.log(x); // Output: { genie: "dog" }

// Modifying properties of the object instead of reassigning the entire object
x.BC = "human";
console.log(x); // Output: { genie: "dog", BC: "human" }
