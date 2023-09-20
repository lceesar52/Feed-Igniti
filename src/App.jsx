import { Header } from './Components/Header';
import { Post } from './Components/Post';
import { Sidebar } from './Components/Sidebar';
import styles from './App.module.css';

import './global.css';

// author : {avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts =[
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lceesar52.png',
      name: 'Luís César',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
                    
    ],
    publisheAt: new Date('2023-09-19 20:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Bot Github',
      role: 'Bot do GitHub',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
                    
    ],
    publisheAt: new Date('2023-09-19 20:30:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
           return (
              <Post 
                author={post.author}
                content={post.content}
                publisheAt={post.publisheAt}
              />
              
            )
          })}
        </main>
      </div>
    </div>
  )
}