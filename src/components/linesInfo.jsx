import Navbar from './navBar.jsx'
import styles from "../../styles/overview.module.scss";
import LineCard from "../components/lineCard"
import Example from '../components/example'
import { Row, Col } from "antd";


function LinesInfo() {
    return (
        <>
            <Navbar />
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} className={styles.top}>
                    <h1>Let's see how is running ...</h1>
                </Col>
            </Row>
            <LineCard />
            <Example />
            <LineCard />
            <LineCard />

        </>
    )
}

export default LinesInfo;