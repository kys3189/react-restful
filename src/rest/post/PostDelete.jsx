import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostDelete = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const withdrow = async () => {
        if(window.confirm("정말로 삭제하시겠습니까?")) {
            await fetch(`http://localhost:10000/posts/api/post/${id}`, {
                method : "DELETE"
            })
            navigate(`/post`);
        }
    }


    return (
        <div>
            <button onClick={withdrow}>게시물 삭제</button>
        </div>
    );
};

export default PostDelete;