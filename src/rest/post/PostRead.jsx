import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const PostRead = () => {
    // 쿼리스트링
    // const [serchParams] = useSearchParams();
    // console.log(serchParams.get("id"))    

    // url 파라미터
    const { id } = useParams();


    // console.log(id);
    
    // Post 게시글 1개 조회하기

    const [post, setPost] = useState({})
    const {postTitle, postContent} = post;
    

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:10000/posts/api/post/${id}`);
            const posts = await response.json()
            return posts;
        }
        getPost().then(setPost).catch(console.error);
    }, [])

    return (
        <div>
            <ul>
                <li>{postTitle}</li>
                <li>{postContent}</li>
            </ul>
            <Link to={"/"}>
                목록으로
            </Link>
            <Link to={`/update/${id}`}>
                수정하기
            </Link>
            <Link to={`/delete/${id}`}>
                삭제하기
            </Link>
        </div>
    );
};

export default PostRead;