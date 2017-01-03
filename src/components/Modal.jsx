import React, { Component } from 'react';

export default class Modal extends Component {
    constructor(...args) {
        super(...args);
        this._updateTopPad = this._updateTopPad.bind(this);
    }

    _updateTopPad() {
        this.setState({topPad: screen.height - window.innerHeight});
    }
    
    componentWillMount() {
        this._updateTopPad();
    }

    componentDidMount() {
        window.addEventListener('resize', this._updateTopPad);
    }

    componentWillUnMount() {
        window.removeEventListener('resize', this._updateTopPad);
    }

    render() {
        //const topPad = screen

        const styles = {

            overlay: {
                zIndex: '100',
                background: 'rgba(0,0,0,0.5)',
                position: 'fixed',
                top: 0,
                // top: 60 - this.state.topPad,
                right: 0,
                bottom: 0,
                left: 0,
                display: 'flex'
            },

            wrapper: {
                border: '8px solid #1A237E',
                background: 'white',
                flex: 1,
                // height: '75vh',
                // alignSelf: 'center',
                // margin: '0 64px',
                marginTop: 50 - this.state.topPad,
                // position: 'absolute',
                // top: 24,
                padding: '0 32px',
            }
        };

        const {project, setProject} = this.props;

        // console.log(window.innerHeight, window.);

        return (
            <div style={styles.overlay} className="modal-overlay">
                <div style={styles.wrapper}  className="modal-wrapper">
                    <h3>{project.name}</h3>
                    {project.description.map( (e,i) => <p key={i}>{e}</p>)}
                    <button onClick={e => { setProject(-1); }}>Close</button>
                    <p>window innerHeight: {window.innerHeight}</p>
                    <p>screen height: {screen.height}</p>
                    <p>screen availHeight: {screen.availHeight}</p>
                    <p>top pad: {this.state.topPad}</p>
                </div>
            </div>
        );
    }
}
