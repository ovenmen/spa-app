import React, { FC } from 'react';
import { Container, Header, Loader, Dimmer } from 'semantic-ui-react';
import useSWR from 'swr';

import { Counter } from '../../components/counter';
import fetcher from '../../__data__/fetcher';

type Comment = {
    id: number,
    body: string
}

export const Home: FC = () => {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/comments', fetcher);

    return (
        <Container>
            <Header as="h1">Home Page!</Header>
            <Counter />
            {error && <div>failed to load</div>}
            {data ? data.map((item: Comment) => (
                <p key={item.id}>{item.body}</p>
            )) : (
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            )}
        </Container>
    );
};