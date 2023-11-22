import React, { Component } from "react";

class Gmap extends Component {
    render() {
        return (
            <div className="align-center">
                <h2 className="text-center">MY LOCATION</h2>
                <iframe
                    title="gmap"
                    src="..."
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        );
    }
}
export default Gmap;
