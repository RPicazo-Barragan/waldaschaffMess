import styles from "../../styles/newOrder.module.scss";
import { Button, Row, Col, Form, Input,InputNumber,Select } from "antd";
import React, {useState, useRef} from 'react';
import MiniCard from './miniCard.jsx'
import Link from "next/link";
import Navbar from './navBar.jsx'
const { Option } = Select;
import QrReader from 'react-qr-reader';
import {getOperator} from "../server"

function newOrderC() {
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] =  useState('');


      const handleErrorWebCam = (error) => {
        console.log(error);
      }
      const handleScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result)
            console.log("voy a hacer la consulta: ", result)
            async function showOperator(){
                const response = await getOperator(result)
                console.log("Respuesta Operator",response)
            }
            showOperator();
            
        }
       }


    return (
        <>
        <Navbar />  
        <Row className={styles.marginBody}>
                <Col xs={24} sm={24} md={14} lg={14} xl={14} className={styles.top}>
                    <Form
                        layout="vertical"
                        name="order-datas"
                        
                    >
                        <Form.Item
                            className={styles.formItem}
                            label="N° de orden de produccion"
                            name="ordenProductionNumber"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, ingresa N° de Producción",
                                },
                            ]} >
                            <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            
                            className={styles.formItem}
                            name="modele"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, ingresa tu nombre",
                                },
                            ]}
                            label="Modelo a producir">
                                 <Select style={{ width: '30%' }} defaultValue="Seleccione un modelo">
                                <Option value="cmsUS">CMS US</Option>
                                <Option value="cmsECE">CMS ECE</Option>
                                <Option value="cmsG42">CMS G-42</Option>
                                <Option value="cmsG42Rcar">CMS G-42 RCAR</Option>
                                </Select>
                        </Form.Item>
                        <Form.Item
                            className={styles.formItem}
                            name="partsToProduce"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, ingresa tu nombre",
                                },
                            ]}
                            label="Piezas a Producir">
                              <InputNumber size="large" min={18} max={500} defaultValue={100}  />
                        </Form.Item>
                       
                        <div className={styles.button_submit}>
                            <Button
                                htmlType="submit"
                                className={styles.submit}
                            >
                                INICIAR PRODUCCION
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6} className={styles.dropZone}>
                <h3>Qr Code Scan by Web Cam</h3>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                </Col>
            </Row>
        </>
    )
}

export default newOrderC;