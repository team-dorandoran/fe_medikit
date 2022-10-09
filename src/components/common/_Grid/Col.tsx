import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

const Col = ({ children, className }: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} className={className && className}>
            {children}
        </div>
    );
};

export default Col;