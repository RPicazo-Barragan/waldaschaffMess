import Navbar from './navBar.jsx'
import { useState } from "react";
import styles from "../../styles/newOperatorForm.module.scss";
import Droppi from "../components/Dropzone";
import { Row, Col, InputNumber, Form, Input, Button, DatePicker } from "antd";
import { createOperator, addPhoto } from '../server'



function newOperatorForm() {
    const [list, setlist] = useState([]);
    const [form] = Form.useForm();
    const setimagelist = (listimage) => {
        setlist(listimage);
        console.log(list)
    };

    const onFinish = async (value) => {
        console.log(value);
        try {
            const response = await createOperator(value);
            if (!response.success) {
                console.log("Error: ", response.error);
                return;
            }
            console.log("response", response.data);

            const id = response.data.newOperator._id;
            try {
                console.log("LIST", list);
                const formData = new FormData();
                for (let photo in list) {
                    formData.append("photos", list[photo]);
                }
                console.log("formdata:", formData);
                const responseImg = await addPhoto(id, formData);
                if (!responseImg.success) {
                    console.log("Error: ", responseImg.error);
                    return;
                }
                console.log("response", responseImg.data);
                form.resetFields();
            } catch (error) {
                console.log("error image", error);
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <>
            <Navbar />
            <Row className={styles.marginBody}>
                <Col xs={24} sm={24} md={18} lg={18} xl={18} className={styles.top}>
                    <Form
                        layout="vertical"
                        name="operator-datas"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            form={form}
                            className={styles.formItem}
                            label="Nombre Completo"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, ingresa tu nombre",
                                },
                            ]} >
                            <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            form={form}
                            className={styles.formItem}
                            name="nss"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, ingresa tu nombre",
                                },
                            ]}
                            label="NSS">
                            <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            form={form}
                            className={styles.formItem}
                            name="category"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, ingresa tu nombre",
                                },
                            ]}
                            label="Categoria">
                            <Input placeholder="" />
                        </Form.Item>
                        <Form.Item
                            form={form}
                            className={styles.formItem}
                            name="startedDate"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor, ingresa tu nombre",
                                },
                            ]}
                            label="Fecha de Ingreso">
                            <DatePicker />
                        </Form.Item>
                        <div className={styles.wrapper}>
                            <Form.Item layout="horizontal" label="LP1 Assambly"
                                className={styles.formItem}
                                name="LP1Assambly">
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                            <Form.Item label="LP2 Assambly"
                                layout="horizontal"
                                className={styles.formItem}
                                name="LP2Assambly">
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                            <Form.Item label="LP2 G26/G80 Assambly"
                                className={styles.formItem}
                                name="G26Assambly">
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                            <Form.Item layout="horizontal" label="CMS Assambly"
                                className={styles.formItem}
                                name="CMSAssambly"
                            >
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                            <Form.Item layout="horizontal" label="Sawing Line"

                                className={styles.formItem}
                                name="Sawing"
                            >
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                            <Form.Item layout="horizontal" label="Adapter Vat Assambly"
                                className={styles.formItem}
                                name="AdapterVatAssa">
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                            <Form.Item layout="horizontal" label="Bending Line"
                                className={styles.formItem}
                                name="BendingLine"
                            >
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                            <Form.Item layout="horizontal" label="Adapter Vat CNC"
                                className={styles.formItem}
                                name="AdapterVatCNC"
                            >
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                            <Form.Item layout="horizontal" label="Washing Line"
                                className={styles.formItem}
                                name="WashingLine"
                            >
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                            <Form.Item layout="horizontal" label="Labeling line"
                                className={styles.formItem}
                                name="LabelingLine"
                            >
                                <InputNumber min={0} max={5} defaultValue={0} />
                            </Form.Item>
                        </div>
                        <div className={styles.button_submit}>
                            <Button
                                htmlType="submit"
                                className={styles.submit}
                            >
                                GUARDAR OPERADOR
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6} className={styles.dropZone}>
                    <Droppi callback={setimagelist} />
                </Col>
            </Row>
        </>
    )
}

export default newOperatorForm;