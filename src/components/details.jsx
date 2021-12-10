import styles from "../../styles/details.module.scss";
import { Row, Col, Table } from "antd";

import Link from "next/link";

import Navbar from './navBar.jsx'

function Detail() {
    const columns = [
        {
            title: 'Lunes',
            dataIndex: 'lunes',
        },
        {
            title: 'Martes',
            dataIndex: 'martes',
        },
        {
            title: 'Miercoles',
            dataIndex: 'miercoles',
        },
        {
            title: 'Jueves',
            dataIndex: 'jueves',
        },
        {
            title: 'Viernes',
            dataIndex: 'viernes',
        },
    ];
    const data = [
        {
            key: '1',
            lunes: 'US',
            martes: 'US',
            miercoles: 'ECE',
            jueves: 'G42 R-Car',
            viernes: 'US'
        },
        {
            key: '2',
            lunes: '380',
            martes: '220',
            miercoles: '110',
            jueves: '380',
            viernes: '380'
        },
        {
            key: '3',
            lunes: 'Complete',
            martes: 'Complete',
            miercoles: 'In progress',
            jueves: 'To do',
            viernes: 'To do'
        },
    ];
    return (
        <>
            <Navbar />
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className={styles.info}>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h1>status</h1>
                        <h2>running</h2>
                        <h1>Modele in producction</h1>
                        <h2>7612002 - CMS US</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className={styles.top}>
                    <div>
                        <h1>
                            Weekly production
                        </h1>
                    </div>
                    <div>
                        <Table dataSource={data} columns={columns} />;
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Detail