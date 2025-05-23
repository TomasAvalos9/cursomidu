import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
{
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
},
{
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
},
{
    userName: 'kenjiys',
    name: 'Tomás Avalos',
    isFollowing: true
},
{
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
}
]

export function App () {
return (
    <section className='App'>
    {
        users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
        >
            {name}
        </TwitterFollowCard>
        ))
    }
    </section>
)
}