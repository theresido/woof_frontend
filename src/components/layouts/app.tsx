import { useIntegration } from '@telegram-apps/react-router-integration'
import {
	bindViewportCSSVars,
	initNavigator,
	useLaunchParams,
	useViewport,
} from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { type FC, useEffect, useMemo } from 'react'
import { Navigate, Route, RouteProps, Router, Routes } from 'react-router-dom'

import { routes } from '@/routes'
import { JSX } from 'react/jsx-runtime'
import { HomeLayout } from './homeLayout'

export const App: FC = () => {
	const lp = useLaunchParams()

	const viewport = useViewport()

	if (!viewport?.isExpanded) {
		viewport?.expand() // will expand the Mini App, if it's not
	}

	useEffect(() => {
		return viewport && bindViewportCSSVars(viewport)
	}, [viewport])

	// Create a new application navigator and attach it to the browser history, so it could modify
	// it and listen to its changes.
	const navigator = useMemo(() => initNavigator('app-navigation-state'), [])
	const [location, reactNavigator] = useIntegration(navigator)

	// Don't forget to attach the navigator to allow it to control the BackButton state as well
	// as browser history.
	useEffect(() => {
		navigator.attach()
		return () => navigator.detach()
	}, [navigator])

	return (
		<AppRoot platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}>
			<Router location={location} navigator={reactNavigator}>
				<Routes>
					<Route path='/' element={<HomeLayout />}>
						{routes.map((route: JSX.IntrinsicAttributes & RouteProps) => (
							<Route key={route.path} {...route} />
						))}
						<Route path='*' element={<Navigate to='/' />} />
					</Route>
				</Routes>
			</Router>
		</AppRoot>
	)
}
