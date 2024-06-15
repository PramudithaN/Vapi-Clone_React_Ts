// Mortgage.tsx
import React, { useEffect, useState } from "react";
import {
	Layout,
	Row,
	Col,
	Select,
	Card,
	Spin,
	Dropdown,
	Space,
	MenuProps,
	Collapse,
} from "antd";
import {
	DownOutlined,
	ExclamationCircleOutlined,
	UserOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Option } = Select;
const { Panel } = Collapse;

const agentData: {
	[key: string]: {
		title: string;
		callsMade: number;
		callsAnswered: number;
		madeToPoint: number;
		didNotMakePoint: number;
		recordings: { id: number; date: string; time: string }[];
	};
} = {
	"John Doe 1": {
		title: "Agent",
		callsMade: 456,
		callsAnswered: 325,
		madeToPoint: 120,
		didNotMakePoint: 98,
		recordings: [
			{ id: 1, date: "05/07/2024", time: "11:37am" },
			{ id: 2, date: "05/07/2024", time: "11:37am" },
		],
	},
	// Define other agents' data similarly
};

const Mortgage: React.FC = () => {
	const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	const renderAgentDetails = () => {
		if (!selectedAgent || !agentData[selectedAgent]) {
			return (
				<div
					className="agent-not-selected"
					style={{
						minHeight: "800px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#3c3733",
						borderRadius: "8px",
					}}
				>
					<div style={{ textAlign: "center", color: "#fff" }}>
						<ExclamationCircleOutlined
							style={{ fontSize: "48px", marginBottom: "16px" }}
						/>
						<p style={{ fontSize: "24px" }}>Agent not selected</p>
					</div>
				</div>
			);
		}

		const agent = agentData[selectedAgent];

		return (
			<Spin spinning={loading}>
				<div
					style={{
						backgroundColor: "#3c3733",
						borderRadius: "8px",
						padding: "16px",
						color: "#fff",
						minHeight: "800px",
					}}
				>
					<h2>{selectedAgent}</h2>
					<Row gutter={16}>
						<Col span={6}>
							<Card className="stat-card-agent" style={{ border: "none" }}>
								{agent.callsMade}
								{agent.title}
							</Card>
							<p>No of calls made</p>
						</Col>
						<Col span={6}>
							<Card className="stat-card-agent" style={{ border: "none" }}>
								{agent.callsAnswered}
							</Card>
							<p>No of calls answered</p>
						</Col>
						<Col span={6}>
							<Card className="stat-card-agent" style={{ border: "none" }}>
								{agent.madeToPoint}
							</Card>
							<p>Made to the point</p>
						</Col>
						<Col span={6}>
							<Card className="stat-card-agent" style={{ border: "none" }}>
								{agent.didNotMakePoint}
							</Card>
							<p>Did not make it past the initial statement</p>
						</Col>
					</Row>
					{agent.recordings.map((recording) => (
						<div key={recording.id}>
							<p>
								Recording-{recording.id}: {recording.date} - {recording.time}
							</p>
						</div>
					))}
				</div>
			</Spin>
		);
	};

	return (
		<Layout className="layout">
			<Content
				style={{
					padding: 24,
					minHeight: 280,
					background: "#0e0d0c",
					border: "none",
				}}
			>
				<Row gutter={4}>
					<Col span={6}>
						<Collapse defaultActiveKey={["1"]} ghost>
							<Panel
								header={
									<div className="panel-header">
										<h2>DSCR</h2>
										<DownOutlined />
									</div>
								}
								key="1"
							>
								<div
									className="agent-card"
									style={{
										marginBottom: "8px",
										color: selectedAgent === "John Doe 1" ? "#ff7e16" : "#fff",
										backgroundColor: "#0e0d0c",
										border: "none",
										padding: "0",
									}}
									onClick={() => setSelectedAgent("John Doe 1")}
								>
									<UserOutlined style={{ marginRight: "8px" }} />
									John Doe 1
								</div>
								<div
									className="agent-card"
									style={{
										marginBottom: "8px",
										color: selectedAgent === "John Doe 2" ? "#ff7e16" : "#fff",
										backgroundColor: "#0e0d0c",
										border: "none",
									}}
									onClick={() => setSelectedAgent("John Doe 2")}
								>
									<UserOutlined style={{ marginRight: "8px" }} />
									John Doe 2
								</div>
								<div
									className="agent-card"
									style={{
										marginBottom: "8px",
										color: selectedAgent === "John Doe 3" ? "#ff7e16" : "#fff",
										backgroundColor: "#0e0d0c",
										border: "none",
									}}
									onClick={() => setSelectedAgent("John Doe 3")}
								>
									<UserOutlined style={{ marginRight: "8px" }} />
									John Doe 3
								</div>
							</Panel>
							<Panel
								header={
									<div className="panel-header">
										<h2>Refinance</h2>
										<DownOutlined />
									</div>
								}
								key="2"
							>
								<div
									className="agent-card"
									style={{
										marginBottom: "8px",
										color:
											selectedAgent === "test-John Doe 1" ? "#ff7e16" : "#fff",
										backgroundColor: "#0e0d0c",
										border: "none",
										padding: "0",
									}}
									onClick={() => setSelectedAgent("test-John Doe 1")}
								>
									<UserOutlined style={{ marginRight: "8px" }} />
									John Doe 1
								</div>
							</Panel>
							<Panel
								header={
									<div className="panel-header">
										<h2>Processor</h2>
										<DownOutlined />
									</div>
								}
								key="3"
							>
								<div
									className="agent-card"
									style={{
										marginBottom: "8px",
										color:
											selectedAgent === "test-John Doe 2" ? "#ff7e16" : "#fff",
										backgroundColor: "#0e0d0c",
										border: "none",
										padding: "0",
									}}
									onClick={() => setSelectedAgent("test-John Doe 2")}
								>
									<UserOutlined style={{ marginRight: "8px" }} />
									John Doe 1
								</div>
							</Panel>
						</Collapse>
					</Col>
					<Col span={18}>{renderAgentDetails()}</Col>
				</Row>
			</Content>
		</Layout>
	);
};

export default Mortgage;
