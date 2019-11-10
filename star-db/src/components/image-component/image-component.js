import React from "react";
import icon from './death-star.png';
class ImageComponent extends React.Component {
    constructor(props) {
        super(props);

    }

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
                <img style={ {width:'150px', height: '150px', }}
                     onError={this.addDefaultSrc} className="img-responsive"
                     src={this.props.imageUrl} alt="img"/>
            </div>
        );
    }
}
export default ImageComponent;