export function generatePagination(
    startPage: number,
    endPage: number,
    currentPage: number,
    pagesDisplay: number,
) {
    if (
        pagesDisplay <= 0 ||
        startPage > endPage ||
        currentPage < startPage ||
        currentPage > endPage
    ) {
        throw new Error('Some parameter is incorrect');
    }
    const pages = [];
    const halfPageCount = Math.floor(pagesDisplay / 2);
    let start = Math.max(startPage, currentPage - halfPageCount);
    let end = Math.min(endPage, currentPage + halfPageCount);
    if (end - start + 1 < pagesDisplay) {
        if (start === startPage) {
            end = Math.min(endPage, start + pagesDisplay - 1);
        } else if (end === endPage) {
            start = Math.max(startPage, end - pagesDisplay + 1);
        }
    }
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }
    return pages;
}
