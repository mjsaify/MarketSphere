/* eslint-disable react/prop-types */
import {
    Pagination as PaginationWrapper,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";


const Pagination = ({ totalPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPage) return;
        setCurrentPage(page);
        onPageChange(page); // notify component to fetch next page data
    };

    const renderPageLinks = () => {
        const pages = [];
        const range = 1; // Number of pages to show around the current page

        // Always include the first page
        pages.push(
            <PaginationItem key={1}>
                <PaginationLink
                    className="cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(1);
                    }}
                    isActive={currentPage === 1}
                >
                    1
                </PaginationLink>
            </PaginationItem>
        );

        // Add dots if there's a gap between the first page and the range
        if (currentPage - range > 2) {
            pages.push(
                <PaginationItem key="dots-before">
                    <PaginationEllipsis />
                </PaginationItem>
            );
        }

        // Add the dynamic range of pages around the current page
        for (let i = Math.max(2, currentPage - range); i <= Math.min(totalPage - 1, currentPage + range); i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(i);
                        }}
                        isActive={i === currentPage}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        // Add dots if there's a gap between the range and the last page
        if (currentPage + range < totalPage - 1) {
            pages.push(
                <PaginationItem key="dots-after">
                    <PaginationEllipsis />
                </PaginationItem>
            );
        }

        // Always include the last page
        if (totalPage > 1) {
            pages.push(
                <PaginationItem key={totalPage}>
                    <PaginationLink
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(totalPage);
                        }}
                        isActive={currentPage === totalPage}
                    >
                        {totalPage}
                    </PaginationLink>
                </PaginationItem>
            );
        };
        return pages;
    };


    return (
        <PaginationWrapper>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage - 1);
                        }}
                    />
                </PaginationItem>
                {renderPageLinks()}
                <PaginationItem>
                    <PaginationNext
                        className="cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage + 1);
                        }}

                    />
                </PaginationItem>
            </PaginationContent>
        </PaginationWrapper>
    );
};
export default Pagination