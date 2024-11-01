import React from 'react'
import { Card, CardBody, Button } from 'reactstrap'
import { Link } from 'react-router-dom';
import './admin-tour-card.css'
import calculateAvgRating from '../../utils/avgRating'

const AdminTourCard = ({ tour }) => {

    const { _id, title, city, photo, price, featured, reviews } = tour

    const { totalRating, avgRating } = calculateAvgRating(reviews)

    return (
            <div className='tour__card'>
                <Card>
                    <div className="tour__img">
                        <img src={photo} alt="tour-img" />
                        {featured && <span className='sale-featured'>SALE</span>}
                    </div>

                    <CardBody>
                        <div className="card__top d-flex align-items-center justify-content-between">
                            <span className="tour__location d-flex align-items-center gap-1">
                                <i class='ri-map-pin-line'></i> {city}
                            </span>
                            <span className="tour__rating d-flex align-items-center gap-1">
                                <i class='ri-star-fill'></i>
                                {avgRating === 0 ? null : avgRating}
                                {totalRating === 0 ? (
                                    "Not rated"
                                ) : (
                                    <span>({reviews.length})</span>
                                )}
                            </span>
                        </div>

                        <h5 className='tour__title'>{title}</h5>

                        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                            <h5>฿{price ? price.toLocaleString() : 'N/A'} <span> /ต่อคน</span></h5>
                        </div>
                        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                            <Link to={`/admin-tour/${_id}`}>
                                <Button className='btn primary__btn'>EDIT TOUR</Button>
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </div>
    )
}

export default AdminTourCard