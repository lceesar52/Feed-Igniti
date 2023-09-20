import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/7490449?v=4" />

            <div className={styles.commentBox}>
               <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Luís César</strong>
                        <time title="11 de setembro às 11:48" dateTime="2023-09-18">Cerca de 1h atrás</time>
                    </div>

                    <button tittle="Deletar Comentário">
                        <Trash size={24} />
                    </button>
                </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div> 
                <footer>
                    <button>
                      <ThumbsUp />
                      Aplaudir <span>20</span>  
                    </button>
                </footer>
            </div>
        </div>
    )
}