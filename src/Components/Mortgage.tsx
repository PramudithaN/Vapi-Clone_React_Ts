// Mortgage.tsx
import React from 'react';
import { Layout, Row, Col, Select, Collapse } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import AgentCard from './Agent';

const { Content } = Layout;
const { Option } = Select;

const Mortgage: React.FC = () => {
    return (
        <Layout className="mortgage">
            <Content style={{  padding: 24, minHeight: 280, background: '#0e0d0c', borderRadius: '8px' }}>
                <Row gutter={16}>
                    <Col span={6}>
                        <h2 style={{ color: '#fff' }}>DSCR</h2>
                      
    {/* <Collapse
      size="small"
      items={[{ key: '1', label: 'This is small size panel header', children: <p>DSCR</p> }]}
    /> */}
                        <AgentCard name="John Doe 1" />
                        <AgentCard name="John Doe 2" />
                        <AgentCard name="John Doe 3" />
                        <h2 style={{ color: '#fff', marginTop: '16px' }}>Refinance</h2>
                        <Select defaultValue="Select" style={{ width: '100%', marginBottom: '16px' }}>
                            <Option value="Select">Select</Option>
                            <Option value="Option 1">Option 1</Option>
                            <Option value="Option 2">Option 2</Option>
                        </Select>
                        <h2 style={{ color: '#fff', marginTop: '16px' }}>Processor</h2>
                        <Select defaultValue="Select" style={{ width: '100%' }}>
                            <Option value="Select">Select</Option>
                            <Option value="Option 1">Option 1</Option>
                            <Option value="Option 2">Option 2</Option>
                        </Select>
                    </Col>
                    <Col span={18}>
                        <div className="agent-not-selected" style={{minHeight:'800px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3a3733', borderRadius: '20px' }}>
                            <div style={{ textAlign: 'center', color: '#fff' }}>
                                <ExclamationCircleOutlined style={{ fontSize: '48px', marginBottom: '16px' }} />
                                <p style={{ fontSize: '24px' }}>Agent not selected</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Mortgage;
