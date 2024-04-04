import LikeButton from './like-button';

function Header(props) {
	console.log(props.title);
	return <h1>{props.title}</h1>
}
export default function HomePage() {
	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

	return (
		<div>
			<Header title="Develop. Preview. Ship." />
			<ul>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<LikeButton />
		</div>
	);
}

