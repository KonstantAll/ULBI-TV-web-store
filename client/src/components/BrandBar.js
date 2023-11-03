import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row>
            <Col className={"d-flex"}>
                {device.brands.map(brand =>
                    <Card
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        onClick={() => device.setSelectedBrand(brand)}
                        style={{
                            cursor:'pointer'
                        }}
                        key = {brand.id}
                        className={"p-3 ms-1"}
                    >
                        {brand.name}
                    </Card>
                )}
            </Col>

        </Row>
    );
});

export default BrandBar;