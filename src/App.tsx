import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';
import   './App.modulo.css'


import './globo.css';

// author: {avatar_url: "", name: "", role:"" }
//publishedAt: Date
//content: Strings

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Couti20.png',
      name: 'Michael coutinho',
      role: 'Desenvolvedor front-end',
    
    },

    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }

    ],
    publishedAt: new Date('07-12-2022 15:00:32'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Couti20.png',
      name: 'Luisa coutinho',
      role: 'Desenvolvedora citiou',

    },

    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }

    ],
    publishedAt: new Date('02-12-2022 15:00:32'),
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className="wrapper">

        <Sidebar />
        <main>
          {posts.map(post => {

            return (
              <Post
              key={post.id}
              author= {post.author}
              content= {post.content}
              publishedAt= {post.publishedAt}
              />

             
            )

          })}
        </main>
      </div>

    </div>

  )
}


export default App



