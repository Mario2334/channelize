import {createStyles, SimpleGrid, Paper, Text, Container, Button, Title, rem} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(440),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    title: {
        fontFamily: `Greycliff CF ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

interface ArticleCardImageProps {
    image: string;
    title: string;
    category: string;
}

let mockdata = [{
    "image": "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    "title": "Best forests to visit in North America",
    "category": "nature"
},{
    "image": "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    "title": "Best forests to visit in North America",
    "category": "nature"
},{
    "image": "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    "title": "Best forests to visit in North America",
    "category": "nature"
}]


export function ProductList() {
    const { classes } = useStyles();

    const cards = mockdata.map((article) => (
        <Paper
            key={article.title}
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${article.image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {article.category}
                </Text>
                <Title order={3} className={classes.title}>
                    {article.title}
                </Title>
            </div>
            <Button variant="white" color="dark">
                Read article
            </Button>
        </Paper>
    ));

    return (
        <Container py="xl">
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    );
}
