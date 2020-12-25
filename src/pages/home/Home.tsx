import React, { FC } from 'react';
import { Container, Header, Loader, Dimmer, Card } from 'semantic-ui-react';
import useSWR from 'swr';

import { Counter } from '../../components/counter';
import fetcher from '../../__data__/fetcher';

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

export const Home: FC = () => {
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

    const posts = data.map((post: Post) => ({
        header: post.title,
        description: post.body
    }));

    return (
        <Container>
            <Header as="h1">Home Page!</Header>
            <Counter />
            {error && <div>failed to load</div>}
            {data ? (
                <Card.Group items={posts} />
            ) : (
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            )}
        </Container>
    );
};