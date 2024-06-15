// StatCard.tsx
import React from "react";
import { Card } from "antd";
import {
	CheckOutlined,
	PhoneOutlined,
	CloseOutlined,
	WarningOutlined,
	FrownOutlined,
} from "@ant-design/icons";

interface StatCardProps {
	title: string;
	value: number;
	icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
	return (
		<Card
			className="stat-card"
			style={{
				textAlign: "center",
				backgroundColor: "#2a2a2a",
				color: "#fff",
				border: "none",
			}}
		>
			<div>{icon}</div>
			<div style={{ fontSize: "24px", marginTop: "10px" }}>{title}</div>
			<div style={{ fontSize: "48px", marginTop: "10px" }}>{value}</div>
		</Card>
	);
};

export default StatCard;
