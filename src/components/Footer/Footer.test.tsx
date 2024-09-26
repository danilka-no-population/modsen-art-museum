import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from '#components/Footer';

describe('Footer', () => {
  it('renders the Logotype component', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    expect(screen.getByAltText('Project logotype')).toBeInTheDocument();
  });

  it('renders the Modsen logo with the correct alt text', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    expect(screen.getByAltText('Modsen')).toBeInTheDocument();
  });

  it('renders the Modsen logo with the correct link', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const modsenLink = screen.getByAltText('Modsen').closest('a');
    expect(modsenLink).toHaveAttribute('href', 'https://www.modsen-software.com/');
    expect(modsenLink).toHaveAttribute('target', '_blank');
  });
});
