
import Navbar from './navBar.jsx'
import styles from "../../styles/operatorProfile.module.scss";
import RadarGraphic from '../components/radarGraph';
import { Row, Col } from "antd";


function OperatorProfile() {
    return (

        <>
            <Navbar />
            <Row className={styles.mainContainer}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className={styles.imgWrapper}>
                    <img src='/images/operador.jpeg' alt="" />
                </Col>
                <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                    <div className={styles.infWrapper}>
                        <h2>Nombre :</h2>
                        <h3>Christian Chavez</h3>
                        <h2>Antiguedad :</h2>
                        <h3>2 años</h3>
                        <h2>Categoria :</h2>
                        <h3>Operador clase B</h3>
                        <h2>NSS :</h2>
                        <h3>N°6879870</h3>
                    </div>

                </Col>
                <Col xs={24} sm={24} md={11} lg={11} xl={11} className={styles.skills}>
                    <h1>Habilidades</h1>
                    <RadarGraphic />
                </Col>
            </Row>
        </>
    )
}
export default OperatorProfile;