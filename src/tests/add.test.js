const add = (a,b) => a + b;

const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
    // if (result !== 7) {
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`);
    // }
});

test('should be hello with name', () => {
   const result = generateGreeting("Black");

   expect(result).toBe("Hello Black!");
})