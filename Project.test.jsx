import { render, screen } from '@testing-library/react';
import Projects from '../Projects';
import '@testing-library/jest-dom';

describe('Projects Component', () => {
  const mockProjects = [
    {
      id: 1,
      title: 'Shopping Website Frontend',
      description: 'A responsive e-commerce website with a modern UI.',
      tags: ['HTML', 'CSS', 'Bootstrap'],
      image: 'project1.jpg',
      githubUrl: 'https://github.com/keyurdevlekar/shopping_website'
    }
  ];

  test('renders project cards correctly', () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Shopping Website Frontend')).toBeInTheDocument();
    expect(screen.getByText(/responsive e-commerce website/i)).toBeInTheDocument();
  });

  test('displays GitHub link when provided', () => {
    render(<Projects projects={mockProjects} />);
    // Use getAllByText since there might be multiple projects
    expect(screen.getAllByText('View on GitHub')[0]).toBeInTheDocument();
  });
});