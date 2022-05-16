import React from 'react';
import {InferGetServerSidePropsType} from "next";

export const getServerSideProps = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const data: { message: string, image: string } = await response.json()

    return {
        props: {image: data.message}, // will be passed to the page component as props
    }
}

const DogImage = ({image}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <img src={image} alt="dogs" />
        </div>
    );
};

export default DogImage






