import { render, screen } from "@testing-library/react"
import TodoStatus from "../todo-status"


it("should render singular job text",()=>{

    render(<TodoStatus count={1}/>);

    const statusEl= screen.getByText(/1 job left/i);
    expect(statusEl).toBeInTheDocument();

})

it("should render plural job text",()=>{

    render(<TodoStatus count={2}/>);

    const statusEl= screen.getByText(/2 jobs left/i);
    expect(statusEl).toBeInTheDocument();

})