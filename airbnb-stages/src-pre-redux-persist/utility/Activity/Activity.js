import React, { Component } from 'react';
import './Activity.css';
import { Link } from 'react-router-dom';
class Activity extends Component{

    // activityType: "KAYAKING"
    // cost: 399
    // id: 1
    // image: "https://airbnb-clone-prexel-images.s3.amazonaws.com/activities/kayakingTour.jpg"
    // rating: 4.7
    // title: "Kayaking adventure"
    // totalRatings: 131

    render(){
        const { activityType, cost, id, image, rating, title, totalRatings } = this.props.activity;
        return(
            <div className="activity">
                <Link to={`/activity/${id}`}>
                    <img src={image} />
                    <div className="activity-type">{activityType}</div>
                    <div className="title">{title}</div>
                    <div className="cost">From ${cost}/person</div>
                    <div className="rating">
                        <i className="material-icons">star</i>{rating} ({totalRatings})
                    </div>
                </Link>
            </div>
        )
    }
}

export default Activity;
