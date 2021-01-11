import React from 'react';

import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import ComponentC from './Hooks/context API/ComponentC';
import DataFetching from './Hooks/useEffect/DataFetching';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'ismail'}>
				<ChannelContext.Provider value={'code'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
			{/* Redux Components
			<ItemContainer cake />
			<ItemContainer />
			<CakeContainer />
			<HooksCakeContainer />
			<IceCreamContainer />
			<NewCakeContainer />
			<UserContainer /> */}
		</div>
	);
}

export default App;
