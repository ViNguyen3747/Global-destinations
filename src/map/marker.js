import React, { useState } from 'react';
import Tips from "./tip";
import CloseButton from 'react-bootstrap/CloseButton'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import foursquare from '../foursquare.png';
import './marker.css';

const Marker = ({ detail }) => {
    const [showDetail, setShowDetail] = useState(false);
    const icon = detail.categories[0].icon.prefix + '64.png';

    const handleShow = () => {
        console.log(detail);
        setShowDetail(true);
    };

    const handleClose = () => setShowDetail(false);
    return (
        <>
            <div onClick={handleShow} className="marker" />
            <Offcanvas className="details" show={showDetail} onHide={handleClose} placement='end'>
                <div>
                    <CloseButton variant="white" onClick={handleClose} style={{ margin: '10px' }} />
                    <img className="FQicon" src={foursquare} alt="PoweredByFourSquare" width="150px" height="10px" />
                </div>
                <Offcanvas.Header className="header">
                    <Offcanvas.Title ><img src={icon} alt={detail.id} /><div>{detail.name}</div></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="detailsBody">
                    <div>
                        Located at {detail.location.address ? detail.location.address : detail.location.formattedAddress[0]}
                    </div>
                    <div>
                        {detail.delivery ?
                            <> Delivery available
                                <a href={detail.delivery.url} target="_blank">
                                    <FontAwesomeIcon icon={faCar} size="2x" style={{ marginLeft: "10px" }} />
                                </a>
                            </> : null}
                    </div>
                    <div><Tips venueid={detail.id} /></div>
                    <div>
                        <a href={'http://foursquare.com/v/' + detail.id} target="_blank">
                            Click for more details
                        </a>
                    </div>
                </Offcanvas.Body>
                <small style={{ padding: '10px' }}>Marker icon made by <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">www.flaticon.com</a></small>
            </Offcanvas>
        </>
    );
};

export default Marker;