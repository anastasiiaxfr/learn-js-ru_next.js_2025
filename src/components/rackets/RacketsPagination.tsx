import Pagination from "@/components/custom/Pagination";

type Props = {
    currentPage: number;
    totalPages: number;
};

export default function RacketsPagination({ currentPage, totalPages }: Props) {
    return (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
    );
}
