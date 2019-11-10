import React from "react";
import icon from './death-star.png';
class ImageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageStatus: "loading",
            error: false
        };
    }



    handleImageLoaded() {
        this.setState({ imageStatus: "loaded", error: false });
    }

    handleImageError() {
        this.setState({ imageStatus: "failed to load", error: true });
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.imageURL !== this.props.imageUrl  ){
            return true;
        }
    }


    render() {
        return (
            <div style={ {width:'150px', height: '150px', }}>
                <img className="planet-image" alt="img"
                    src={this.state.error ? icon : this.props.imageUrl}
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageError.bind(this)}
                />

            </div>
        );
    }
}
export default ImageComponent;