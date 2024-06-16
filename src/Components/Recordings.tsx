// RecordingPage.tsx
import React from "react";
import { Layout, Card } from "antd";

const { Content } = Layout;

const RecordingPage: React.FC = () => {
	const recordingId = new URLSearchParams(window.location.search).get("id");

	return (
		<Layout className="recordingLayout">
			<Content>
				<div className="recording-details">
					<h2 className="recording-title">Recording {recordingId}</h2>
					<Card className="recording-card">
						<h1 style={{marginTop:'380px'}}>Transcript</h1>
                        <p style={{marginBottom:'60px',marginTop:'50px'}}>Sure! Here’s a different summary presented as a single paragraph:
							During the 35-minute recording on June 8, 2024, the conversation
							commenced with brief introductions and an exchange of
							pleasantries. The agent then provided an overview of the current
							real estate market trends, discussing the rising property values
							and high demand in urban areas. The caller expressed interest in
							investment opportunities, prompting the agent to elaborate on
							various mortgage options, including fixed-rate and adjustable-rate
							mortgages, tailored to the caller's financial situation. The
							discussion shifted to solar energy solutions, highlighting the
							benefits of cost savings and environmental impact, with
							recommendations for reputable solar companies. The importance of
							comprehensive insurance coverage for properties was also
							addressed, covering homeowner’s, flood, and liability insurance.
							Additionally, the rising prices of construction materials,
							particularly steel, were noted, and the agent suggested
							alternative materials and suppliers. Towards the end of the call,
							insights into the automotive industry, especially trends in
							electric vehicles and advancements in technology, were provided as
							the caller showed interest in diversifying investments. The call
							concluded with a summary of key points, a promise to send detailed
							information, and an agreement to schedule a follow-up call to
							discuss investment plans further. The caller expressed
							satisfaction with the information provided and interest in
							pursuing several discussed opportunities.
						</p>
						    <audio controls className="audio-controls">
							<source src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3" type="audio/mpeg" />
							Your browser does not support the audio element.
						</audio>
				
					<div className="summary-section">
						<div className="summary">
							<h1>Summary</h1>
							<p>
								The caller seemed satisfied with the information provided and
								expressed interest in pursuing several investment opportunities
								discussed during the call. A follow-up meeting was scheduled for
								the following week to delve deeper into specific investment
								plans and to review the materials sent by the agent.
							</p>
						</div>
					</div>
                    </Card>
				</div>
			</Content>
		</Layout>
	);
};

export default RecordingPage;
