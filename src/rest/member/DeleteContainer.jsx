import { useNavigate } from 'react-router-dom';

// 회원탈퇴
const DeleteContainer = () => {
  // const navigate = useNavigate();
  const id = 9;
  
  const withdraw = async () => {
    if(window.confirm("정말로 탈퇴하시겠어요?")){
      await fetch(`http://localhost:10000/members/api/withdraw/${id}`, {
        method : "DELETE"
      })
      .then((res) => {
        if(!res.ok) throw new Error("회원 탈퇴 중 알 수 없는 오류 발생")
          // 페이지 이동
        // navigate("/")
        window.location.href = "/"
      })
      .catch("알 수 없는 오류")
    }else {
      alert("휴 제가 더 잘해볼게요..😥")
    }
  }

  return (
    <div>
      <button onClick={withdraw}>회원탈퇴</button>
    </div>
  );
};

export default DeleteContainer;