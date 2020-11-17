import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => (
    <section>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </section>
);