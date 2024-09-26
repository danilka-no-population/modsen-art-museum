import { render, screen } from '@testing-library/react';
import { OtherWorks } from '#components/OtherWorks';
import { usePaintingsSearch } from '#hooks/usePaintingsSearch';

jest.mock('#hooks/usePaintingsSearch', () => ({
  usePaintingsSearch: jest.fn(),
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

describe('OtherWorks Component', () => {
  const mockPaintings = [
    { title: 'Painting 1' },
    { title: 'Painting 2' },
    { title: 'Painting 3' },
  ];

  beforeEach(() => {
    (usePaintingsSearch as jest.Mock).mockReturnValue([mockPaintings]);
  });

  it('renders the OtherWorks component with the correct subtitle and painting list', () => {
    render(<OtherWorks />);

    expect(screen.getByTestId('subtitle')).toBeInTheDocument();
    expect(screen.getByText('Here some more')).toBeInTheDocument();
    expect(screen.getByText('Other works for you')).toBeInTheDocument();

    expect(screen.getByTestId('painting-list')).toBeInTheDocument();
    mockPaintings.forEach((painting) => {
      expect(screen.getByText(painting.title)).toBeInTheDocument();
    });
  });
});
