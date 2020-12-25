import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

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
        <Menu secondary pointing size="large">
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
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/signin"
                        active={currentPageName === 'Войти'}
                        onClick={handleClick}
                    >
                        Войти
                    </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to="/register"
                        active={currentPageName === 'Зарегистрироваться'}
                        onClick={handleClick}
                    >
                        Зарегистрироваться
                    </Menu.Item>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};