import { tsx, create, invalidator } from '@dojo/framework/core/vdom';
import icache from '@dojo/framework/core/middleware/icache';

import * as css from './styles/Home.m.css';
import SizeWare from './SizeWare';
import Border from './Border';

const factory = create({ icache, invalidator });

export default factory(function Home({ middleware: { icache, invalidator } }) {
	const size = icache.getOrSet("size", () => ({ left: 0, top: 0, height: 0, width: 0 }));
	const showDiv = icache.getOrSet("showDiv", ()=> false);
	return <div><h1 classes={[css.root]}>
		Measure input dom size
	</h1>
		<button onclick={() => {
			invalidator();
		}}>Measure</button>
		<button onclick={()=>{
			icache.set("showDiv", !showDiv)
		}}>Add Dom before</button>

		{
			showDiv && <div >add div before input, border position should change</div>
		}

		<div styles={{ position: "relative" }}>
			<SizeWare onMeasure={(size) => {
				icache.set("size", size);
			}} />
			<Border size={size} />
		</div>
	</div>
});
