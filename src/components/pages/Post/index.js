import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../shared/handlers/postApiService';



import './styles.scss';



const Post = (props) => {
    
    useEffect(() => {
        const id = props.match.params.id;
        getPost(id).then(data=> {
            console.log(data)
            props.setPost(data);
        })
    }, []);


    const {id, title, data_update, user: { name }, description} = props.post;



    const date = new Date(data_update);
    const dateUpdate = date.toLocaleDateString()

 
    return (

        <div className='postPage'>
            <h1 className="postPage_title">{ title }{id}</h1>
            <p className="postPage_title">{dateUpdate}</p>
            <p className="postPage_description">Author: {name}</p>
            <p className="postPage_description">{description}</p>
        </div >
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setPost: post => dispatch({ type: 'SET_POST', post})
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.data, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);