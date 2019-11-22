import React from "react";
import icon from './death-star.png';
class ImageComponent extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (nextProps.imageURL !== this.props.imageUrl  ){
            return true;
        }
    }

    addDefaultSrc(ev){
        ev.target.src = icon;
    }


    render() {
        return (
            <div >
                <img
                     onError={this.addDefaultSrc} className="img-responsive"
                     src={this.props.imageUrl} alt="img"/>
            </div>
        );
    }
}
export default ImageComponent;