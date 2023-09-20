import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt }) {
    const pusblishedDateFormatted = format(new Date(), "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const pusblishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, 
    })


    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time title={pusblishedDateFormatted} dateTime="2023-09-18">
                    {pusblishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                    <p>
                        <a href="#">#novoprojeto</a> {' '}
                        <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat</a>{' '}
                    </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu Feedback</strong>
                <textarea 
                    placeholder="Deixe o seu Comentário"
                />

               <footer> 
                    <button type="submit">Publicar</button>
               </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}