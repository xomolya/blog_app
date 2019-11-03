import React, { useEffect } from 'react';
import { getPosts }from './service';
import './styles.scss';

const Posts = (props) => {
 
    useEffect(() => {
        getPosts();
    }, []);

    return (

        <div className='Posts'>
            <h1>Posts</h1>
        </div>
    )
}



export default Posts;