import React from "react";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { faPlane, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const categories = ['trending', 'food', 'drinks', 'shops', 'arts', 'sights'];

const Search = (props) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            category: categories[0]
        }
    }
    );
    const onSubmit = (data) => {
        console.log(data);
        props.getGeoCode(data);
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <OverlayTrigger placement="right"
                    overlay={<Tooltip>Use state code and country code for more precise search results, EX: Dallas, TX, US or Paris, FR</Tooltip>}>
                    <Form.Floating>
                        <Form.Control
                            {...register("city")} placeholder="City" type="text" required />
                        <label>City</label>
                    </Form.Floating>
                </OverlayTrigger>
                <div style={{ paddingLeft: '10px' }}>
                    <FloatingLabel controlId="floatingSelect" label="Category">
                        <Form.Select aria-label="Category" {...register("category")}>
                            {categories.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                </div>
                <button type="submit">
                    Let's gooooo...... <FontAwesomeIcon icon={faPlane}
                        size="2x"
                        type="submit" />
                </button>
            </Form>
            <div className='info'>
                <FontAwesomeIcon icon={faInfoCircle} size="1x" />
                <small > Global place data for 248 countries and territories</small>
            </div>
        </>
    )
}

export default Search;