import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const PostUpdate = () => {

    const { id } = useParams();

    const [post, setPosts] = useState({});
    const {register, handleSubmit, getValues, reset, formState: { isSubmitting, isSubmitted, errors }} = useForm({mode:"onChange"})
    const navigate = useNavigate();

    const {postTitle, postContent} = post;

    console.log(postTitle);
    console.log(postContent);
    

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(`http://localhost:10000/posts/api/post/${id}`);
            const post = await response.json()
            reset(post)
            return post;
        }

        getPosts().then(setPosts).catch(console.error());

    }, [])

    const update = async (data) => {
        
        await fetch(`http://localhost:10000/posts/api/post/${id}`, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data),
        });

        navigate(`/`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(update)}>
                <label>
                    <p>제목</p>
                    <input type="text" placeholder='제목'
                        {...register("postTitle", {
                            required : true
                    })}/>
                </label>
                <label>
                    <p>내용</p>
                    <input type="text" placeholder='내용'
                        {...register("postContent", {
                            required : true
                    })}/>
                </label>
                <button disabled={isSubmitting}>변경</button>
            </form> 
        </div>
    );
};

export default PostUpdate;