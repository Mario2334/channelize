import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    rem, Box, Image, TextInput,
} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";
import {AuthComponent} from "channelize/components/Auth";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.lg,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },
    containerStyle: {
        backgroundColor: "rgb(82, 77, 180)",
        borderRadius:theme.radius.xl,
        marginLeft: `${rem(20)}`
    },
    linkLabel: {
        marginRight: rem(5),
    },
    searchStyle: {
        borderRadius:theme.radius.xl
    }
}));

interface HeaderActionProps {
    links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function HeaderAction({ links }: HeaderActionProps) {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                {/*<IconChevronDown size={rem(12)} stroke={1.5} />*/}
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 10 }} mb={120}>
            <Container className={classes.inner} fluid>
                <Group>
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                    {/*<MantineLogo size={28} />*/}
                    {/*{"rgb(82, 77, 180)"}*/}
                    <Center className={classes.containerStyle}>
                        <Image mx="auto" radius="md" width={150} height={50} src="./channelize.svg"></Image>
                    </Center>
                </Group>
                <Group spacing={6} className={classes.links}>
                    {items}
                </Group>
                <Group>
                    <AuthComponent></AuthComponent>
                </Group>
            </Container>
        </Header>
    );
}
