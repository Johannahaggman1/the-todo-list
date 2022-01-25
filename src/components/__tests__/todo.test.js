import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Todo from '../Todo';

describe('Todo', () => {
    test('Render todo', () => {
        const todo = { id: 1, title: 'delectus aut autem', completed: false}
        render(<Todo todo={todo}/>);
        const todoElement = screen.getByTestId('todoid');
        expect(todoElement).toBeInTheDocument(todoElement);
    }); 
});