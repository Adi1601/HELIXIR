import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#E6AF2E' : '#fff')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '0101606' : '#000')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transistion: all 0.2s ease-in-out;

    &:hover {
        transistion: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff': '#E6AF2E')};
    }
`;