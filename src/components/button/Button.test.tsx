import React from 'react';
import { render } from "@testing-library/react";
import Button from './Button';

describe("Button", () => {
    describe("when property variant is filled", () => {
        test("it should render with a class named 'filled'", () => {
            const component = render(<Button variant="filled" label="button" />);
            const button = component.getByRole("button");

            expect(button.className).toContain("filled")
        })

        test("it shouldn't render with a class named 'outline'", () => {
            const component = render(<Button variant="filled" label="button" />);
            const button = component.getByRole("button");

            expect(button.className).not.toContain("outline")
        })

        test("it shouldn't render with a class named 'text'", () => {
            const component = render(<Button variant="filled" label="button" />);
            const button = component.getByRole("button");

            expect(button.className).not.toContain("text")
        })
    })

    describe("when property variant is outline", () => {
        test("it should render with a class named 'outline'", () => {
            const component = render(<Button variant="outline" label="button" />);
            const button = component.getByRole("button");

            expect(button.className).toContain("outline")
        })

        test("it shouldn't render with a class named 'filled'", () => {
            const component = render(<Button variant="outline" label="button" />);
            const button = component.getByRole("button");

            expect(button.className).not.toContain("filled")
        })

        test("it shouldn't render with a class named 'text'", () => {
            const component = render(<Button variant="outline" label="button" />);
            const button = component.getByRole("button");

            expect(button.className).not.toContain("text")
        })
    })

    describe("when property variant is text", () => {
        test("it should render with a class named 'text'", () => {
            const component = render(<Button variant="text" label="button" />);
            const button = component.getByRole("button");

            expect(button.className).toContain("text")
        })

        test("it shouldn't render with a class named 'filled'", () => {
            const component = render(<Button variant="text" label="button" />);
            const button = component.getByRole("button");

            expect(button.className).not.toContain("filled")
        })

        test("it shouldn't render with a class named 'outline'", () => {
            const component = render(<Button variant="text" label="button" />);
            const button = component.getByRole("button");

            expect(button.className).not.toContain("outline")
        })
    })

    describe("when property size is sm", () => {
        test("it should render with a class named 'sm'", () => {
            const component = render(<Button size="sm" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).toContain("sm")
        })
     
        test("it shouldn't render with a class named 'md'", () => {
            const component = render(<Button size="sm" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("md")
        })

        test("it shouldn't render with a class named 'lg'", () => {
            const component = render(<Button size="sm" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("lg")
        })
    })

    describe("when property size is md", () => {
        test("it should render with a class named 'md'", () => {
            const component = render(<Button size="md" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).toContain("md")
        })
     
        test("it shouldn't render with a class named 'sm'", () => {
            const component = render(<Button size="md" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("sm")
        })

        test("it shouldn't render with a class named 'lg'", () => {
            const component = render(<Button size="md" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("lg")
        })
    })

    describe("when property size is lg", () => {
        test("it should render with a class named 'lg'", () => {
            const component = render(<Button size="lg" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).toContain("lg")
        })
     
        test("it shouldn't render with a class named 'sm'", () => {
            const component = render(<Button size="lg" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("sm")
        })

        test("it shouldn't render with a class named 'md'", () => {
            const component = render(<Button size="lg" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("md")
        })
    })

    describe("when property color is primary", () => {
        test("it should render with a class named 'primary'", () => {
            const component = render(<Button color="primary" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).toContain("primary")
        })
     
        test("it shouldn't render with a class named 'secondary'", () => {
            const component = render(<Button color="primary" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("secondary")
        })

        test("it shouldn't render with a class named 'default'", () => {
            const component = render(<Button color="primary" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("default")
        })

        test("it shouldn't render with a class named 'danger'", () => {
            const component = render(<Button color="primary" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("danger")
        })
    })

    describe("when property color is secondary", () => {
        test("it should render with a class named 'secondary'", () => {
            const component = render(<Button color="secondary" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).toContain("secondary")
        })
     
        test("it shouldn't render with a class named 'primary'", () => {
            const component = render(<Button color="secondary" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("primary")
        })

        test("it shouldn't render with a class named 'default'", () => {
            const component = render(<Button color="secondary" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("default")
        })

        test("it shouldn't render with a class named 'danger'", () => {
            const component = render(<Button color="secondary" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("danger")
        })
    })

    describe("when property color is danger", () => {
        test("it should render with a class named 'danger'", () => {
            const component = render(<Button color="danger" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).toContain("danger")
        })
     
        test("it shouldn't render with a class named 'primary'", () => {
            const component = render(<Button color="danger" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("primary")
        })

        test("it shouldn't render with a class named 'secondary'", () => {
            const component = render(<Button color="danger" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("secondary")
        })

        test("it shouldn't render with a class named 'default'", () => {
            const component = render(<Button color="danger" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("default")
        })
    })

    describe("when property color is default", () => {
        test("it should render with a class named 'default'", () => {
            const component = render(<Button color="default" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).toContain("default")
        })
     
        test("it shouldn't render with a class named 'primary'", () => {
            const component = render(<Button color="default" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("primary")
        })

        test("it shouldn't render with a class named 'secondary'", () => {
            const component = render(<Button color="default" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("secondary")
        })

        test("it shouldn't render with a class named 'danger'", () => {
            const component = render(<Button color="default" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("danger")
        })
    })

    describe("when property disableShadow is true", () => {
        test("it shouldn't render with a class named 'shadow'", () => {
            const component = render(<Button disableShadow label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).not.toContain("shadow")
        })
    })

    describe("when property disableShadow is false", () => {
        test("it should render with a class named 'shadow'", () => {
            const component = render(<Button size="md" label="button" />);
            const button = component.getByRole("button");
    
            expect(button.className).toContain("shadow")
        })
    })
})