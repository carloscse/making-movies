
import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import AddGenreForm from "../../src/components/AddGenreForm";
  
// afterEach function runs after each test suite is executed
// afterEach(() => {
//     cleanup(); // Resets the DOM after each test suite
// })

describe("Add Genre Form Component" , () => {
    render(<AddGenreForm />); 
    const inputAddGenre = screen.getByTestId("inputAddGenre"); 
    const buttonAddGenre = screen.getByTestId("buttonAddGenre"); 
      
    // Test 1
    test("Input Rendering", () => {
        expect(inputAddGenre).toBeInTheDocument(); 
    })
  
    // Test 2 
    test("Button Rendering", () => {
        expect(buttonAddGenre).toHaveTextContent("Add"); 
    })
})