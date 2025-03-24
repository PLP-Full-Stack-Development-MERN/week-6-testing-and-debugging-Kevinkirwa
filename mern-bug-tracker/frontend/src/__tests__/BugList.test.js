import React from 'react';
import { render, screen } from '@testing-library/react';
import BugList from '../components/BugList';
import axios from 'axios';

jest.mock('axios');

test('renders empty bug list message', async () => {
  axios.get.mockResolvedValueOnce({ data: [] });
  render(<BugList />);
  
  expect(await screen.findByText(/No bugs reported/i)).toBeInTheDocument();
});
