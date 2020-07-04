
import React, { Component } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header } = Layout;

export default class HeaderBar extends Component {

    state = {}

    render() {
        return (
            <Header style={{ position: 'sticky', zIndex: 1, width: '100%',top: 0 }}>

                <SmileOutlined/>

                <span style={{ marginLeft: 8 }}>
                    My Project
                </span>

            </Header>
        );
    }

}