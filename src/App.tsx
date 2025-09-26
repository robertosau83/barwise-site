import { Component, createSignal, onMount, Show } from "solid-js";
import BarwiseLanding from "./components/BarwiseLanding";
import InviteGate from "./components/InviteGate";

const App: Component = () => {
	const [authorized, setAuthorized] = createSignal(false);

	onMount(() => {
		const isAuthorized = localStorage.getItem("bw_invited") === "true";
		setAuthorized(isAuthorized);
	});

	return (
		<Show when={authorized()} fallback={
			<InviteGate onSuccess={() => {
				setAuthorized(true);
				console.log("Autorizzato!", authorized());
			}} expectedCode="1111" />
		}>
			<BarwiseLanding />
		</Show>
	);
};

export default App;
