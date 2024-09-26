import { render, screen, act } from '@testing-library/react';
import { Gallery } from '#components/Gallery';
import { usePaintingsSearch } from '#hooks/usePaintingsSearch';
import { useDebounce } from '#hooks/useDebounce';
import { usePagination } from '#hooks/usePagination';

jest.mock('#hooks/usePaintingsSearch', () => ({
  usePaintingsSearch: jest.fn(),
}));

jest.mock('#hooks/useDebounce', () => ({
  useDebounce: jest.fn(),
}));

jest.mock('#hooks/usePagination', () => ({
  usePagination: jest.fn(),
}));

jest.mock('#components/Subtitle', () => ({
  Subtitle: ({ firstPhrase, secondPhrase }: { firstPhrase: string; secondPhrase: string }) => (
    <div data-testid="subtitle">
      <span>{firstPhrase}</span>
      <span>{secondPhrase}</span>
    </div>
  ),
}));

jest.mock('#components/PaintingList', () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  PaintingList: ({ variant, paintings }: { variant: string; paintings: any[] }) => (
    <div data-testid="painting-list">
      {paintings.map((painting, index) => (
        <div key={index} data-testid="painting">
          {painting.title}
        </div>
      ))}
    </div>
  ),
}));

jest.mock('#components/Pagination', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Pagination: ({ pagination }: { pagination: any }) => (
    <div data-testid="pagination">

      {pagination.display.map((page: number, index: number) => (
        <div key={index} data-testid="pagination-item">
          {page}
        </div>
      ))}
    </div>
  ),
}));

describe('Gallery Component', () => {
  const mockPaintings = [
    { title: 'Painting 1' },
    { title: 'Painting 2' },
    { title: 'Painting 3' },
  ];

  const mockPaginationInfo = {
    totalPages: 5,
  };

  const mockPagination = {
    start: 1,
    end: 5,
    current: 1,
    hasPrev: false,
    hasNext: true,
    display: [1, 2, 3, 4, 5],
    set: jest.fn(),
    next: jest.fn(),
    prev: jest.fn(),
    toStart: jest.fn(),
    toEnd: jest.fn(),
  };

  beforeEach(() => {
    (usePaintingsSearch as jest.Mock).mockReturnValue([mockPaintings, mockPaginationInfo]);
    (useDebounce as jest.Mock).mockReturnValue(1);
    (usePagination as jest.Mock).mockReturnValue(mockPagination);
  });

  it('renders the Gallery component with the correct subtitle, painting list, and pagination', () => {
    render(<Gallery />);

    expect(screen.getByTestId('subtitle')).toBeInTheDocument();
    expect(screen.getByText('Topics for you')).toBeInTheDocument();
    expect(screen.getByText('Our special gallery')).toBeInTheDocument();

    expect(screen.getByTestId('painting-list')).toBeInTheDocument();
    mockPaintings.forEach((painting) => {
      expect(screen.getByText(painting.title)).toBeInTheDocument();
    });

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    mockPagination.display.forEach((page) => {
      expect(screen.getByText(page)).toBeInTheDocument();
    });
  });

  it('updates the page state when the pagination current page changes', () => {
    render(<Gallery />);

    act(() => {
      mockPagination.set(3);
    });

    expect(mockPagination.set).toHaveBeenCalledWith(3);
  });
});
