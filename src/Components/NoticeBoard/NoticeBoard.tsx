import * as S from "./Style";
// import { Link } from "react-router-dom";

const NoticeBoard = () => {
  return (
    <>
      <S.BackgroundContainer>
        <S.NoticeBoard>
          <p>게시판</p>
          <S.Centent>
            <div>
              <p>No</p>
              <p>제목</p>
              <p>글쓴이</p>
              <p>작성시간</p>
            </div>
          </S.Centent>
          <S.AddNotice>
            <button>게시글 추가</button>
          </S.AddNotice>
        </S.NoticeBoard>
      </S.BackgroundContainer>
    </>
  );
};
export default NoticeBoard;
