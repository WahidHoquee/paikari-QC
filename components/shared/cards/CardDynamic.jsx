import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CardDynamic = ({cardDetails}) => {

    const CardStyle = {
        // marginLeft:20,
        marginBottom : 20,
        width : '95%',
        border : '1px solid'
    }

    return (
        <div className={`ps-block--stat ${cardDetails.cardColor}`} style={CardStyle} >
        <div className="ps-block__left">
            <span>
                <i className="icon-cart"></i>
            </span>
        </div>
        <div className="ps-block__content">
            <p>{cardDetails.cardName}</p>

            <h4>
                {cardDetails.CardAmount}  

                <small className="desc">
                    <i className="icon-arrow-down"></i>
                    <span> {cardDetails.CardPercent} </span>
                </small>
            </h4>
        </div>
    </div>
    );
};

export default CardDynamic;
