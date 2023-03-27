import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'channelize/styles/Home.module.css'
import {HeaderAction} from "channelize/components/Header";
import {Skeleton} from "@mantine/core";
import {useSelector} from "react-redux";
import {selectNetworkState} from "channelize/slices/network";
import {selectIsLoading} from "channelize/slices/loader";
import {ProductList} from "channelize/components/ProductList";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    let links = {
        "links": [
            {
                "link": "/about",
                "label": "Features"
            },
            {
                "link": "#1",
                "label": "Learn",
                "links": [
                    {
                        "link": "/docs",
                        "label": "Documentation"
                    },
                    {
                        "link": "/resources",
                        "label": "Resources"
                    },
                    {
                        "link": "/community",
                        "label": "Community"
                    },
                    {
                        "link": "/blog",
                        "label": "Blog"
                    }
                ]
            },
            {
                "link": "/about",
                "label": "About"
            },
            {
                "link": "/pricing",
                "label": "Pricing"
            },
            {
                "link": "#2",
                "label": "Support",
                "links": [
                    {
                        "link": "/faq",
                        "label": "FAQ"
                    },
                    {
                        "link": "/demo",
                        "label": "Book a demo"
                    },
                    {
                        "link": "/forums",
                        "label": "Forums"
                    }
                ]
            }
        ]
    }
    const loading = useSelector(selectIsLoading); // updated
  return (
    <>
        <Skeleton visible={loading.isLoading}>
            <HeaderAction links={links.links}></HeaderAction>
            <ProductList></ProductList>
        </Skeleton>
    </>
  )
}
