import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Bookmark } from '#components/Bookmark';

describe('Bookmark', () => {
  it('renders the bookmark icon with the correct alt text', () => {
    render(<Bookmark active={false} onClick={() => {}} />);

    expect(screen.getByAltText('Adding to favorites button')).toBeInTheDocument();
  });

  it('calls the onClick handler when the bookmark icon is clicked', () => {
    const onClickMock = jest.fn();

    render(<Bookmark active={false} onClick={onClickMock} />);

    fireEvent.click(screen.getByAltText('Adding to favorites button'));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders the bookmark icon as active when the active prop is true', () => {
    render(<Bookmark active={true} onClick={() => {}} />);

    const icon = screen.getByAltText('Adding to favorites button').closest('button');
    expect(icon).toHaveAttribute('data-active', 'true');
  });

  it('renders the bookmark icon as inactive when the active prop is false', () => {
    render(<Bookmark active={false} onClick={() => {}} />);

    const icon = screen.getByAltText('Adding to favorites button').closest('button');
    expect(icon).toHaveAttribute('data-active', 'false');
  });
});
