import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import { FormEvent, useState, ChangeEvent, InvalidEvent} from 'react';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";


import  "./Post.modulo.css";

interface Author{
  name:string;
  role:string;
  avatarUrl:string
}

interface Content {
  type: string;
  content: string;

}

interface PostProps{
  author:Author;
  publishedAt:Date;
  content: Content[];
}
export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?'

  ]
  );


  const [newCommentText, setNewCommentText] = useState('')



  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm 'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {

    locale: ptBr,
    addSuffix: true,

  })

  function handleCreateNewComment(event:FormEvent) {
    event.preventDefault()

    //vai acrescentando ++1 
    setComments([...comments, newCommentText]);
    setNewCommentText('');

  }

  function handleNewCommentChange(event: ChangeEvent <HTMLTextAreaElement>) {
     
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);

  }

  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {

    event.target.setCustomValidity('')

  }

  function deleteComment(commentToDelete:string) {
    const commentWithoutDeletedOne = comments.filter(comment => {

      return comment !== commentToDelete
    })

    setComments(commentWithoutDeletedOne);
  }

  const isNewCommentEmpy = newCommentText.length ===0;


  //imutabilidade=> as variaveis não sofrem mutaçao 
  return (
    <article className="post">
      <header>
        <div className="author">
          <Avatar
            src={author.avatarUrl}

          />
          <div className="autorInfo">
            <strong> {author.name} </strong>
            <span> {author.role} </span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>

          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className="content">
        {content.map(line => {
          if (line.type =='paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type =='link') {
            return <p key={line.content}> <a href="#">{line.content}</a> </p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className="commentForm">
        <strong> Deixe seu feedback </strong>

        <textarea name="comment"
          placeholder="Deixe um comentario..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpy}>
            Publicar
          </button>
        </footer>
      </form>

      <div className="commentList">
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />)

        })}
      </div>
    </article>
  );
}

