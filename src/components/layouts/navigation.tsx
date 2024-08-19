import { Link } from './link'

export const Navigation = () => {
	return (
		<div className='flex space-x-2 justify-between '>
			<Link to='/'>Home</Link>
			<Link to='/markets'>Market</Link>
			<Link to='/search'>Search</Link>
			<Link to='/activities'>Activity</Link>
			<Link to='/more'>More</Link>
		</div>
	)
}


