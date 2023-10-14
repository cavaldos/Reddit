import React from "react";

interface Props {
  children: React.ReactNode;
}

const CommentLayout = ({ children }: Props) => {
  return (
    <div className="comment-layout">
      <div className="comment-layout__header">
        <div className="comment-layout__header__title">Comments</div>
      </div>
      <div className="comment-layout__content">{children}</div>
    </div>
  );
};
export default CommentLayout;
