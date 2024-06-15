// Dashboard.tsx
import React, { useEffect } from "react";
import { Layout, Row, Col, Spin } from "antd";
import {
	CheckOutlined,
	PhoneOutlined,
	CloseOutlined,
	WarningOutlined,
	FrownOutlined,
} from "@ant-design/icons";
import StatCard from "./StatBox";

const { Content } = Layout;

const Dashboard: React.FC = () => {
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<Spin spinning={loading}>
			<Layout className="layout">
				<Content style={{ minHeight: 280, background: "#0e0d0c" }}>
					<div className="site-card-wrapper">
						<h1 style={{ color: "#fff", marginBottom: "0px" }}>California</h1>
						<h2
							style={{ color: "#fff", marginBottom: "50px", marginTop: "5px" }}
						>
							Riverside - Corona
						</h2>
						<Row gutter={[16, 16]} style={{ paddingTop: "20px" }}>
							<Col span={8}>
								<StatCard
									title="Booked Appointments"
									value={32}
									icon={
										<CheckOutlined
											style={{ fontSize: "24px", color: "#fff" }}
										/>
									}
								/>
							</Col>
							<Col span={8}>
								<StatCard
									title="Calls Made"
									value={847}
									icon={
										<PhoneOutlined
											style={{ fontSize: "24px", color: "#fff" }}
										/>
									}
								/>
							</Col>
							<Col span={8}>
								<StatCard
									title="Rejected Call Backs"
									value={29}
									icon={
										<CloseOutlined
											style={{ fontSize: "24px", color: "#fff" }}
										/>
									}
								/>
							</Col>
							<Col span={8}>
								<StatCard
									title="Answered Calls"
									value={571}
									icon={
										<PhoneOutlined
											style={{ fontSize: "24px", color: "#fff" }}
										/>
									}
								/>
							</Col>
							<Col span={8}>
								<StatCard
									title="Wrong Number"
									value={13}
									icon={
										<WarningOutlined
											style={{ fontSize: "24px", color: "#fff" }}
										/>
									}
								/>
							</Col>
							<Col span={8}>
								<StatCard
									title="Not Interested"
									value={13}
									icon={
										<FrownOutlined
											style={{ fontSize: "24px", color: "#fff" }}
										/>
									}
								/>
							</Col>
						</Row>
					</div>
				</Content>
			</Layout>
		</Spin>
	);
};

export default Dashboard;
