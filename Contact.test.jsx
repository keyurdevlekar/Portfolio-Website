import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

// Mock window.alert
beforeAll(() => {
  window.alert = jest.fn();
});

describe('Contact Component', () => {
  test('form submission works correctly', () => {
    render(<Contact />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByText(/send message/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello!' } });

    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('Thank you for your message!');
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });

  test('shows validation errors', () => {
    render(<Contact />);
    fireEvent.click(screen.getByText(/send message/i));
    
    // Check for required field errors
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });
});