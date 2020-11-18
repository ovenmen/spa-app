import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';

import { State } from '../../__data__/types';
import { changeCurrentPage } from '../../__data__/actions/page';

export const Navigation: FC = () => {
    const currentPageName = useSelector((state: State) => state.page.currentPage);
    const dispatch = useDispatch();

    const handleClick = useCallback(({ target }) => {
        const currentPage = target.innerText;
        dispatch(changeCurrentPage(currentPage));
    }, [dispatch]);
    
    return (
        <Menu secondary>
            <Menu.Item
                as={Link}
                to="/"
                active={currentPageName === 'Главная'}
                onClick={handleClick}
            >
                Главная
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/about"
                active={currentPageName === 'О сервисе'}
                onClick={handleClick}
            >
                О сервисе
            </Menu.Item>
            <Menu.Item>
                <Input icon='search' placeholder='Search mail...' />
            </Menu.Item>
        </Menu>
    );
};