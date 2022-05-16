import React from 'react';
import posts from "../../post.json"
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";

const BlogPost = ({post}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <h1>{post.title}</h1>
            <p>Post id: {post.content}</p>
        </>
    )
};

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: Object.keys(posts).map(id => ({params: {id}})),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = ({params}) => {
    return {
        props: {
            post: posts[params?.id as keyof typeof posts]
        }
    }
}
export default BlogPost;
