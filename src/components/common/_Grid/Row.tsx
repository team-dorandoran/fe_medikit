import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

const Row = ({ children, className }: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }} className={className && className}>
            {children}
        </div>
    );
};

export default Row;