import React from 'react';
import {useInView} from 'react-intersection-observer';

// styles
import './slider.css';

const Slider = ({imageSrc, title, subtitle, flipped}) => {
    const {ref, inView} = useInView({
        /* Optional options */
        threshold: 0.4
    });

    return (
        <div className={`slider ${inView ? ' slider--zoom' : ''}`} ref={ref}>
            {
                flipped
                ? (
                    <>
                        <div className="slider__content">
                            <h2 className="slider__title">{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                        <img src={imageSrc} alt="Travel" className="slider__image" />
                    </>
                )
                : (
                    <>
                        <img src={imageSrc} alt="Travel" className="slider__image" />
                        <div className="slider__content">
                            <h2 className="slider__title">{title}</h2>
                            <p>{subtitle}</p>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Slider;