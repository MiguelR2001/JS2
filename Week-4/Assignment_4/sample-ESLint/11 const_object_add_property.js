const x = {
    genie: "Jindo dog" 
};

console.log(x); // Output: { genie: "Jindo dog" }

x.genie = "Husky dog";
console.log(x); // Output: { genie: "Husky dog" }

x.BC = "human"; // This line will throw an error because x is a constant
console.log(x);

delete x.BC; // This line will not execute due to the error above
console.log(x);
