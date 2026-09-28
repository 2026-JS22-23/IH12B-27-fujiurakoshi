function TodoItem({ text }) {
    return <li>{text}</li>;
}

export default function App() {
    const items = ['牛乳を買う', '散歩に行く', 'Reactを学ぶ'];
    return (
        <ul>
            {items.map((t, i) => <TodoItem key={i} text={t} />)}
        </ul>
    );
}