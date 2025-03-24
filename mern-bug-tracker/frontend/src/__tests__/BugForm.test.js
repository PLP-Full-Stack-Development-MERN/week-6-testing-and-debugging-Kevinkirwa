import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';
import axios from 'axios';

jest.mock('axios');

test('renders BugForm and submits form', async () => {
  axios.post.mockResolvedValueOnce({ data: { title: 'Test', description: 'Desc' } });
  render(<BugForm />);
  
  const titleInput = screen.getByPlaceholderText(/Bug Title/i);
  const descInput = screen.getByPlaceholderText(/Bug Description/i);
  const submitButton = screen.getByText(/Submit Bug/i);

  fireEvent.change(titleInput, { target: { value: 'Test Bug' } });
  fireEvent.change(descInput, { target: { value: 'Test Description' } });
  fireEvent.click(submitButton);

  expect(await screen.findByText(/Bug reported successfully/i)).toBeInTheDocument();
});
