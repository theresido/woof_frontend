import { Outlet } from 'react-router-dom'
import { Navigation } from './navigation'

export const HomeLayout = () => {
	return (
		<div className='flex flex-col mx-auto w-full p-4 relative'>
			<div>Header</div>
			<main>
				<Outlet />
			</main>
			<div className='fixed bottom-2 left-0 w-full p-4'>
				<Navigation />
			</div>
		</div>
	)
}
