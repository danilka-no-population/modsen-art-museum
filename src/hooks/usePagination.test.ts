import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from '#hooks/usePagination';

describe('usePagination Hook', () => {
  it('initializes with the correct values', () => {
    const { result } = renderHook(() => usePagination(1, 5, 3));

    expect(result.current.start).toBe(1);
    expect(result.current.end).toBe(5);
    expect(result.current.current).toBe(1);
    expect(result.current.hasPrev).toBe(false);
    expect(result.current.hasNext).toBe(true);
    expect(result.current.display).toEqual([1, 2, 3]);
  });

  it('sets the current page correctly', () => {
    const { result } = renderHook(() => usePagination(1, 5, 3));

    act(() => {
      result.current.set(3);
    });

    expect(result.current.current).toBe(3);
    expect(result.current.display).toEqual([2, 3, 4]);
  });

  it('moves to the next page correctly', () => {
    const { result } = renderHook(() => usePagination(1, 5, 3));

    act(() => {
      result.current.next();
    });

    expect(result.current.current).toBe(2);
    expect(result.current.display).toEqual([1, 2, 3]);
  });

  it('moves to the previous page correctly', () => {
    const { result } = renderHook(() => usePagination(1, 5, 3));

    act(() => {
      result.current.set(3);
    });

    act(() => {
      result.current.prev();
    });

    expect(result.current.current).toBe(2);
    expect(result.current.display).toEqual([1, 2, 3]);
  });

  it('moves to the start page correctly', () => {
    const { result } = renderHook(() => usePagination(1, 5, 3));

    act(() => {
      result.current.set(3);
    });

    act(() => {
      result.current.toStart();
    });

    expect(result.current.current).toBe(1);
    expect(result.current.display).toEqual([1, 2, 3]);
  });

  it('moves to the end page correctly', () => {
    const { result } = renderHook(() => usePagination(1, 5, 3));

    act(() => {
      result.current.toEnd();
    });

    expect(result.current.current).toBe(5);
    expect(result.current.display).toEqual([3, 4, 5]);
  });
});
