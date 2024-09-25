import { InputHTMLAttributes } from 'react';
import defaultSearchIcon from '#/assets/icons/search.svg';
import styles from './styles.module.scss';

export type SearchProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({ ...props }: SearchProps) {
    return (
        <div className={styles.searchWrapper}>
            <input className={styles.searchInput} {...props} />
            <img
                className={styles.searchIcon}
                src={defaultSearchIcon}
                alt="Search Icon"
            />
        </div>
    );
}
