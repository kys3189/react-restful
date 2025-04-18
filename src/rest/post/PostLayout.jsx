import React from 'react';
import { Outlet } from 'react-router-dom';

const PostLayout = () => {

    // 로그인 여부를 처리하는 공간 보통 헤더겠쬬?

    return (
        <div>
            레이아웃
            <Outlet />  
        </div>
    );
};

export default PostLayout;