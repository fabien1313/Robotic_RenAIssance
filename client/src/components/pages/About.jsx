import styled from "styled-components";
import {
	HomepageHeading,
	HomepageSection,
} from "../styles/pages/HomepageStyled";
import "../styles/pages/homepage.css";
import james from "../../images/avatars/james.JPG";
import tracy from "../../images/avatars/tracy.png";
import sofia from "../../images/avatars/sofia.png";
import riley from "../../images/avatars/rileyrobot.png";

const SemiTransparentBox = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 100px;
	background-color: #22222250;
	padding: 30px;
	border-radius: 30px;
	min-width: 275px;
	width: 70%;
	box-shadow: 3px 3px 5px black;
	border: 5px inset rgba(67, 202, 255, 0.963);
`;
const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: row;
	width: 150px;
	height: 150px;
	background-color: #fff;
	margin: 20px;
	border-radius: 10px;
	box-shadow: 3px 3px 5px black

`;

const styles = {
	colorRed: {
		color: 'black'
	},

	imgRow: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},

	textField: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '2rem',
		fontFamily: 'sans-serif',
		border: '2px dotted white',
		backgroundColor: 'whitesmoke',
		padding: '1.5rem 1.5rem',
		maxWidth: '50%',
		textAlign: 'justify',
		borderRadius: '3px',
		// boxShadow: '3px 3px 5px black .5'

}};

export const About = () => {
	return (
		<>	
			<div>
			<div className="container"></div>
			<HomepageSection>
				<HomepageHeading>
					Robotic Ren<span>AI</span>ssance
				</HomepageHeading>
				<SemiTransparentBox>
					<h1 style={styles.colorRed}>About Us</h1>
					<p style={styles.textField}>
			
					The staff robots at Robotic Rennaissance are equipped with advanced AI technology that allows them to
					interact with visitors, answer questions, and provide recommendations on art pieces.
					With their precision and efficiency, our we can ensure that every visitor's
					needs are met and their experience is unforgettable.

					</p>
					<div style={styles.imgRow}>

						<Container><a href="https://jk377y.dev" target="_blank" rel="noreferrer" >
								<img src={james} alt="jamesAvatar" title="James Kelly" style={{ width: "100%", height: "100%" }} /></a>
						</Container>

						<Container />
						<Container>
						<a href="https://github.com/rmob" target="_blank" rel="noreferrer" >
							<img src={riley} alt="rileyAvatar" title="Riley OBryan" style={{ width: "100%", height: "100%" }} /></a>
						</Container>
						<Container>
							<a href="https://github.com/sofiasosa92" target="_blank" rel="noreferrer" >
							<img src={sofia} alt="sofiaAvatar" title="Sofia Sosa " style={{ width: "100%", height: "100%" }} /></a>
						</Container>
						<Container>
							<a href="https://github.com/TMortara" target="_blank" rel="noreferrer" >
							<img src={tracy} alt="tracyAvatar" title="Tracy Mortara" style={{ width: "100%", height: "100%" }} /></a>
						</Container>
					</div>
				</SemiTransparentBox>
			</HomepageSection>
			</div>
		</>
	);
};
