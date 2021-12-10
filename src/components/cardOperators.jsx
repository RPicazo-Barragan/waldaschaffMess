import { Row, Col, Card, Avatar } from "antd";
import Link from "next/link";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import styles from '../../styles/cardOperator.module.scss'


const { Meta } = Card;


const CardOperator = ({ imageProfile, name, startedDate, category}) => {

  return (
    <>
      <Link href="/operator">
        <div className={styles.card}>
          <header className={styles.header}>
            <h1>     Production Team</h1>
          </header>
          <div className={styles.bodycard}>
            <div className={styles.imgwrapper}>
              <img src={imageProfile} alt="img" />
            </div>
            <div className={styles.info}>
              <h2>{name}</h2>
              <h2>Fecha de ingreso: {startedDate} </h2>
              <h2>Nivel:{category}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  )

}

export default CardOperator;