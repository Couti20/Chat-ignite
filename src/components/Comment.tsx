import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import "./Comment.modulo.css";

interface CommentProps {

  content:string;
  onDeleteComment:(comment:string)=> void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);

  }

  function handleLikeComment() {

    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className='comment'>
     <Avatar hasBorder={false}
     src="https://avatars.githubusercontent.com/u/111618271?v=4" 
     alt=""
    
      />

      <div className="commentBox">
        <div className="commentContent">
          <header>
            <div className="authorAndTime">
              <strong>Michael Coutinho </strong>
              <time
                title="02 de Dez 2022 12:22h"
                dateTime="02/12/2022 12:13:28"
              >
                Cerca de 1h atrás
              </time>

            </div>
            <button onClick={handleDeleteComment} title="Deletar commentário">
              <Trash size={24} />
            </button>
          </header>
          <p> {content} </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Legal<span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  );
}
