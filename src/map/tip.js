import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTip } from '../getData/getFourSquare';
import Carousel from 'react-bootstrap/Carousel'

const Tips = ({ venueid }) => {
    const [showTip, setShowTip] = useState(false);
    const [loading, setLoading] = useState(true);
    const [tips, setTips] = useState([]);
    const fetchTip = () => {
        setShowTip(!showTip);
        if (tips.length === 0 && !showTip) {
            getTip(venueid).then(res => {
                setLoading(false);
                setTips(res);
                console.log(res);
            });
        }
    }
    return (
        <>
            <button onClick={fetchTip}>Are you curious about other people's thoughts about this place?</button>
            {showTip && !loading && tips.length !== 0 ?
                <Carousel variant="light" style={{ paddingTop: "15px" }}>
                    {tips.map((tip) => (<Carousel.Item key={tip.id}><TipCard tip={tip} /></Carousel.Item>))}
                </Carousel>
                : null}
            {(tips.length === 0 && !loading && showTip ? <div style={{ paddingTop: "15px" }}>No one has reviewed this place yet :((</div> : null)}

        </>
    );
}

const TipCard = ({ tip }) => {
    return (
        <Card text="light" bg="dark">
            <Card.Header>
                <FontAwesomeIcon className="rounded me-2" icon={faUser}
                    size="2x" />
                <strong className="me-auto">
                    <a href={tip.canonicalUrl} target="_blank">
                        <span style={{ fontSize: "larger" }}>
                            {tip.user.firstName}
                            {tip.user.lastName ? <span>{' ' + tip.user.lastName}</span> : null}
                        </span>
                    </a></strong>
            </Card.Header>
            <Card.Body>
                <Card.Text>{tip.text}</Card.Text>
                {tip.photourl ? <Card.Img variant="bottom" src={tip.photourl} /> : null}
                <small className="text-muted">{new Date(tip.createdAt * 1000).toDateString()}</small>
            </Card.Body>
        </Card>
    )
}

export default Tips;