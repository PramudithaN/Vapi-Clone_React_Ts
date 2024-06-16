import React, { useState } from "react";
import {
	CarOutlined,
	ClusterOutlined,
	HomeOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	MoneyCollectOutlined,
	SunOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Col, ConfigProvider, Layout, Menu, Row, theme } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import StatBox from "./StatBox";
import Dashboard from "./Dashboard";
import SubContainer from "./SubContainer";

const { Header, Sider, Content } = Layout;

const SideNavbar: React.FC = () => {
	const [primary, setPrimary] = React.useState("#ff7e16");
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	const handleReale = () => {
		navigate("/realEstate");
	};
	return (
		<Layout className="Layout">
			<ConfigProvider
				theme={{
					components: {
						Button: {
							colorPrimary: "#ff7e16",
						},
						Menu: {
							colorPrimary: "#ff7e16",
						},
					},
					token: {
						colorPrimary: primary,
						colorText: "#fff",
					},
				}}
			>
				<Sider
					trigger={null}
					collapsible
					collapsed={collapsed}
					theme="light"
					style={{ background: "#161616" }}
				>
					<div className="demo-logo-vertical" />
					{/* User Image Icon*/}
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							paddingTop: "4px",
							paddingBottom: "40px",
						}}
					>
						<img
							src="Images/CCCC.png"
							alt="Profile"
							onClick={() => {
								handleNavigate("/");
							}}
							style={{
								width: collapsed ? "60px" : "120px",
								height: collapsed ? "60px" : "120px",
								transition: "all 0.3s",
								cursor: "pointer",
							}}
						/>
					</div>
					<Menu
						theme="dark"
						className="sideMenu"
						mode="inline"
						defaultSelectedKeys={[""]}
						onClick={({ key }) => {
							switch (key) {
								case "0":
									handleNavigate("/RE");
									break;
								case "1":
									handleNavigate("/mortgage");
									break;
								case "2":
									handleNavigate("/Solar");
									break;
								case "4":
									handleNavigate("/Solar");
									break;
								case "5":
									handleReale();
									break;
								case "6":
									handleNavigate("/Solar");
									break;
								default:
									break;
							}
						}}
						items={[
							{
								key: "0",
								icon: <HomeOutlined />,
								label: "Real Estate",
							},
							{
								key: "1",
								icon: <UserOutlined />,
								label: "SubContainer",
							},
							{
								key: "2",
								icon: <SunOutlined />,
								label: "Solar",
							},
							{
								key: "4",
								icon: <MoneyCollectOutlined />,
								label: "Insurance",
							},
							{
								key: "5",
								icon: <ClusterOutlined />,
								label: "Steel",
							},
							{
								key: "6",
								icon: <CarOutlined />,
								label: "Automotive",
							},
						]}
					/>
				</Sider>
			</ConfigProvider>
			<Layout className="backgroundLayout">
				<Header
					className="backgroundHeader"
					style={{ padding: 0, background: "none" }}
				>
					<Button
						type="text"
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: "16px",
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: "#0e0d0c",
						borderRadius: borderRadiusLG,
						color: "#fff",
					}}
				>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route
							path="/real-estate"
							element={<div>Real Estate Content</div>}
						/>
						<Route path="/mortgage" element={<SubContainer />} />
						<Route path="/solar" element={<div>Solar Content</div>} />
						<Route path="/insurance" element={<div>Insurance Content</div>} />
						<Route path="/steel" element={<div>Steel Content</div>} />
						<Route path="/automotive" element={<div>Automotive Content</div>} />
					</Routes>
				</Content>
			</Layout>
		</Layout>
	);
};

export default SideNavbar;
