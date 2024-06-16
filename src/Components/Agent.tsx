// AgentCard.tsx
import React from "react";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface AgentCardProps {
	name: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name }) => {
	return (
		<Card
			className="agent-card"
			style={{
				padding: "8px",
				backgroundColor: "#2a2a2a",
				color: "#fff",
				border: "none",
        
			}}
		>
			<UserOutlined style={{ marginRight: "8px" }} />
			{name}
		</Card>
	);
};

export default AgentCard;
