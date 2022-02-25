import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js'
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString } from '../../redux/store';

const SearchForm = () => {
    const placeholderString = useSelector(state => state.searchString.searchString);
    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(getSearchString({ searchString }));
        setSearchString('');
    }
    return (
        <form 
        className={styles.searchForm} 
        onSubmit={handelSubmit}>
            <TextInput 
                placeholder={placeholderString}
                value={searchString} 
                onChange={e => setSearchString(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;