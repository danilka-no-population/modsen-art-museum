import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '#components/Pagination';
import { usePagination } from '#hooks/usePagination';

jest.mock('#hooks/usePagination', () => ({
  usePagination: jest.fn(),
}));

describe('Pagination Component', () => {
  const mockPagination = {
    start: 1,
    end: 5,
    current: 3,
    hasPrev: true,
    hasNext: true,
    display: [1, 2, 3, 4, 5],
    set: jest.fn(),
    next: jest.fn(),
    prev: jest.fn(),
    toStart: jest.fn(),
    toEnd: jest.fn(),
  };

  beforeEach(() => {
    (usePagination as jest.Mock).mockReturnValue(mockPagination);
  });

  it('renders the pagination with the correct buttons', () => {
    render(<Pagination pagination={mockPagination} />);
    expect(screen.getByText('<')).toBeInTheDocument();
    mockPagination.display.forEach((page) => {
      expect(screen.getByText(page)).toBeInTheDocument();
    });
    expect(screen.getByText('>')).toBeInTheDocument();
  });

  it('calls the set function when a page button is clicked', () => {
    render(<Pagination pagination={mockPagination} />);

    const pageButton = screen.getByText('4');
    fireEvent.click(pageButton);

    expect(mockPagination.set).toHaveBeenCalledWith(4);
  });

  it('calls the prev function when the previous button is clicked', () => {
    render(<Pagination pagination={mockPagination} />);

    const prevButton = screen.getByText('<');
    fireEvent.click(prevButton);

    expect(mockPagination.prev).toHaveBeenCalled();
  });

  it('calls the next function when the next button is clicked', () => {
    render(<Pagination pagination={mockPagination} />);

    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    expect(mockPagination.next).toHaveBeenCalled();
  });
});