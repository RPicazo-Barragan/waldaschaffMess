import styles from "../../styles/linecard.module.scss";
import { Row, Col, Button } from "antd";
import MiniCard from '../components/miniCard'
import Link from "next/link";

function LineCard() {
    return (
        <>
            <Row className={styles.mainContainer}>
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    <div className={styles.linetext}>
                        <h2>Robolution</h2>
                    </div>
                    <div className={styles.linetext2}>
                        <h2>Production Team:</h2>
                    </div>
                    <div className={styles.cardsWrapper}>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}  >
                    <div >
                        <h2 className={styles.lookgood} >Status</h2>
                    </div>
                    <div className={styles.status} >
                        <h2 className={styles.running}> Running </h2>
                        <Link href="/prodDetail">
                            <Button className={styles.btn} type="primary" shape="round" size='small'>
                                Details ...
                             </Button>
                        </Link>

                    </div>
                    <div>
                        <h2 className={styles.lookgood} >Production:US version</h2>
                    </div>
                    <Row>
                        <Col xs={24} sm={24} md={10} lg={10} xl={10} className={styles.acomodo2}>

                            <h2>Produced</h2>
                            <h2 className={styles.counter}>180</h2>

                        </Col>
                        <Col xs={24} sm={24} md={10} lg={10} xl={10} className={styles.acomodo2} >

                            <h2>Target</h2>
                            <h2 className={styles.counter}>336</h2>

                        </Col>
                    </Row>

                </Col>
            </Row>
        </>
    )
}
export default LineCard;