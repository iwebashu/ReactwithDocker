export const paginate = <T>(data: T[], currentPage: number, itemsPerPage: number): T[] => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = currentPage * itemsPerPage;
    return data.slice(start, end);
};