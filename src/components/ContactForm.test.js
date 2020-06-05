import React from "react";
import { render, fireEvent, screen, act, getByLabelText, getByTestId } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('test to render', () => {
    render(<ContactForm />);
})

test("renders form without errors", () => {
    render(<ContactForm />);
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last Name/i)
    const email = screen.getByLabelText(/email/i)

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()

    fireEvent.change(firstName, { target: { value: 'Batman' } })
    fireEvent.change(lastName, { target: { value: 'Superman' } })
    fireEvent.change(email, { target: { value: 'batcave@gmail.com' } })

    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(firstName.value).toContain('Batman')
});

test('Changing input values', () => {
    render(<ContactForm />)

    const firstName = screen.getByLabelText(/first name/i)

    fireEvent.change(firstName, { target: { value: 'Batman' } });

    expect(firstName).toBeInTheDocument('Batman');
    
    fireEvent.click(screen.getByTestId(/submit/i));

})