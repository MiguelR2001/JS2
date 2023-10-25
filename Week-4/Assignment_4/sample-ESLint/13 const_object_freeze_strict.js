const x = {
    genie: "Jindo dog"
};

console.log(x); // Output: { genie: "Jindo dog" }

// Modifying properties of the object
x.genie = "Husky dog";
console.log(x); // Output: { genie: "Husky dog" }

// Adding a new property to the object
x.BC = "human";
console.log(x); // Output: { genie: "Husky dog", BC: "human" }

// Deleting a property from the object
delete x.BC;
console.log(x); // Output: { genie: "Husky dog" }
