import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLastPosts } from '../../shared/handlers/postApiService';
import Post from'../../shared/Post';


import './styles.scss';



const Home = (props) => {
    console.log('RENDER HOME COMPONENT', props);

    useEffect(() => {
        getLastPosts(3).then(data=> {
            console.log(data)
            props.setLastPosts(data);
        })
    }, []);
 
    return (

        <div className='posts'>
            <h1>Last Posts</h1>
            {props.lastPosts.map(post => <Post key={post.id} post={post} />)}
        </div >
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setLastPosts: posts => dispatch({ type: 'SET_LAST_POSTS', posts})
    }
}

const mapStateToProps = state => {
    return {
        lastPosts: state.home.lastPosts, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);