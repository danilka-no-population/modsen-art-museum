import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '#components/Header';
import { useBurgerMenu } from '#hooks/useBurgerMenu';

interface UniversalWrapperProps {
  children: React.ReactNode;
}

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  children: React.ReactNode;
}

interface LogotypeProps {
  variant: string;
}

jest.mock('#components/UniversalWrapper', () => ({
  UniversalWrapper: ({ children }: UniversalWrapperProps) => <div>{children}</div>,
}));

jest.mock('#components/BurgerMenu', () => ({
  BurgerMenu: ({ isOpen, toggleMenu, children }: BurgerMenuProps) => (
    <button onClick={toggleMenu} data-active={isOpen}>
      {children}
    </button>
  ),
}));

jest.mock('#components/Logotype', () => ({
  Logotype: ({ variant }: LogotypeProps) => <div>Logotype {variant}</div>,
}));

jest.mock('#components/Nav', () => ({
  Nav: () => <nav>Navigation</nav>,
}));

jest.mock('#hooks/useBurgerMenu', () => ({
  useBurgerMenu: jest.fn(),
}));

describe('Header Component', () => {
  it('renders the header with logotype and navigation', () => {
    (useBurgerMenu as jest.Mock).mockReturnValue({
      isOpen: false,
      toggleMenu: jest.fn(),
    });

    render(<Header />);
    expect(screen.getByText(/Logotype white/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Navigation/i)).toHaveLength(2);
  });

  it('toggles the menu when burger menu button is clicked', () => {
    const toggleMenu = jest.fn();
    (useBurgerMenu as jest.Mock).mockReturnValue({
      isOpen: false,
      toggleMenu,
    });

    render(<Header />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(toggleMenu).toHaveBeenCalled();
  });
});
