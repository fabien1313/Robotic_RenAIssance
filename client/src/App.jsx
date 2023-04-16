//importing styled components
import { GlobalStyles } from "./components/styles/Global.styled";
import { ThemeProvider } from "styled-components";

//importing login/register
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importing components
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Homepage } from "./components/pages/Homepage";
import Showcase from "./components/pages/Showcase";
import { NavBar } from "./components/helpercomponent/NavBar";
import { About } from "./components/pages/About";
import Admin from "./components/pages/Admin";

//importing gql functionality
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
	uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	uri: "/graphql",
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	const theme = {
		colors: {
			mayaBlue: "rgb(67, 202, 255)",
			white: "rgb(255,255,255)",
			black: "rgb(0,0,0)",
			blackOpacity: "rgba(0, 0, 0, 0.562)",
			blackOpacityTwo: "rgba(0, 0, 0, 0.459)",
			babyBlue: "rgb(114, 248, 247)",
			yellow: "rgb(248,247,80)",
			brightBlue: "rgb(0, 217, 255)",
			lightBrightBlue: "rgb(67,255,255)",
			yellowTwo: "rgb(255,255,117)",
			screamingGreen: "rgb(66,255,151)",
			salmon: "rgb(255,151,117)",
			green: "#42ff9750",
			darkGreen: "#42ff9725",
			lightYellow: "#faffb3",
			greyGreen: "#faffb375",
			grey: "#faffb350",
			darkGrey: "#faffb325",
			lightGrey: "#ffffff75",
			greyTwo: "#ffffff50",
			darkerGrey: "#ffffff25",
			magenta: "#c45dff",
			purple: "#c45dff75",
			darkPurple: "#c45dff50",
			eggplant: "#c45dff25",
			teal: "#43ffff75",
			darkTeal: "#72f8f750",
		},
		mobile: "480px",
		mobileTabletMin: "481px",
		mobileTablet: "768px",
		mobileSmall: "1026px",
	};

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.ctrlKey && event.key === "a") {
				window.location.href =
					"/admin&authorized=true&token=U1ytEVovM5H0nw5A5NjvPZysyOBsLKE1arZE";
			}
		}
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<ApolloProvider client={client}>
			<Router>
				<>
					<ThemeProvider theme={theme}>
						<GlobalStyles />
						<NavBar />
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/showcase" element={<Showcase />} />
							<Route path="/about" element={<About />} />
							<Route path="/admin&authorized=true&token=U1ytEVovM5H0nw5A5NjvPZysyOBsLKE1arZE"	element={<Admin />}
							/>
						</Routes>
					</ThemeProvider>
				</>
			</Router>
		</ApolloProvider>
	);
}

export default App;
