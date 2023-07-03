import WelcomeMessage from "../components/WelcomeMessage";

export default function Home({ username }) {
    return (
        <main>
            <WelcomeMessage username={username} />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                quo. Veniam qui omnis, ipsa nihil maxime sed exercitationem
                aperiam, porro doloribus amet fugiat possimus esse expedita iste
                delectus, quae iusto?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                quo. Veniam qui omnis, ipsa nihil maxime sed exercitationem
                aperiam, porro doloribus amet fugiat possimus esse expedita iste
                delectus, quae iusto?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                quo. Veniam qui omnis, ipsa nihil maxime sed exercitationem
                aperiam, porro doloribus amet fugiat possimus esse expedita iste
                delectus, quae iusto?
            </p>
        </main>
    );
}
