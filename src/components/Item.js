import React, { Component } from 'react';
import './css/Item.css';
import postRestaurant from './lib/postRestaurant.js';
import DirectionsModal from './DirectionsModal';


class Item extends Component {
  constructor (props) {
    super()
    this.state = {};
  }

  directionsClick(e) {
    var geolocation = `${this.props.item.geometry.location.lat},${this.props.item.geometry.location.lng}`;
    this.props.displayDirections(geolocation, this.props.item.id);
  }
  
  saveRestaurant(e) {
    e.preventDefault();
    console.log("name",this.props.item.place_id,"id",this.props.item.name);
    postRestaurant(item.place_id,item.name);
  }

  // this function turns `item.price_level` into a dollar sign level
  starRating(){
    let score =this.props.item.rating;
    let str=''
    for (let i=0;i<Math.floor(score);i++){
      str+='★';
    }
    return str;
  }
  priceLevel() {
    var result = '';
    for (var i = 0; i < this.props.item.price_level; i++) {
      result += '$';
    }
    return result;
  }

render(){
   // variable string for link to Google maps directions
  let queryStr = "https://www.google.com/maps?saddr=My+Location&daddr=" + this.props.item.geometry.location.lat + "," + this.props.item.geometry.location.lng + "&dirflg=w"

  //get the latitude and longtitude of a restaurant
  var geolocation = `${this.props.item.geometry.location.lat},${this.props.item.geometry.location.lng}`;
  //url for google street view api
  var url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${geolocation}&key=${this.props.API}`
  let openText = this.props.item.opening_hours ? status(this.props.item.opening_hours, this.props.item.opening_hours.open_now) : "Unable to retrieve opening hours"
  

  let savedButton;
  if(!this.props.isLogin){
    savedButton=function(){
      return;
    }
  }else{
    if(this.props.showSaveRestaurants){
      savedButton=function(){
        return <button>Go back</button>
      }
    }else {
      return <button>Add to saved list</button>
    }
  }

    return (
    <li className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <div className='list-location-cont'>
      <span className="ribbon icon"><a href="/fav" title="title">{this.props.item.rating} {this.starRating()}, {this.priceLevel()}</a></span>
        <div className='list-location-info'>
          <img className="list-location-img" src={url} alt="Photo of a restaurant" />
          <div>
            <h3>{this.props.item.name}</h3>
            <p className='list-location-address'>{this.props.item.vicinity}</p>
            <p>{openText}</p>
              {/* Link to map directions */}
<<<<<<< 9d7e7fca5060a087b456d2700c17c0c7de889e9c
              <a className='list-location-button' target='_blank' href={queryStr}>Get Map</a>
=======
              <a className='list-location-button' target='_blank' href={queryStr}>Go</a>
>>>>>>> Rebasing to get most recent changes.
              {
                this.props.isLogin ?
                <button className='list-location-button' onClick={this.saveRestaurant}>Try it later</button> : null
              }
            <DirectionsModal item={this.props.item} directionsClick={this.directionsClick.bind(this)}/>
            {savedButton()}
          </div>
        </div>
      </div>    
    </li>
    );
  }
};



export default Item;

function status(opening_hours, open_now) {
  if (open_now === true){
    return "Open now"
  }else{
    return "Closed now"
  }
}
