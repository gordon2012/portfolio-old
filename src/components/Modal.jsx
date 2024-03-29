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

    componentWillUnmount() {
        window.removeEventListener('resize', this._updateTopPad);
    }

    render() {
        const styles = {

            overlay: {
                zIndex: '100',
                background: 'rgba(0,0,0,0.5)',
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },

            wrapper: {
                position: 'absolute',
                top: 80 - this.state.topPad,
            }
        };

        const {project, setProject} = this.props;

        return (
            <div style={styles.overlay} className="modal-overlay">
                <div style={styles.wrapper} className="modal-wrapper">

                    <div className="modal-inner">
                        <span className="modal-close" onClick={e => { setProject(-1); }}> X  </span>
                        <h3 className="">{project.name}</h3>
                        <div className="text-wrap">
                            {project.description.map( (e,i) => <p key={i}>{e}</p>)}
                        </div>
                        <div className="button-wrap">
                            <a href={project.site} onClick={e => { e.preventDefault(); window.open(project.site, '_blank'); }}>Site</a>
                            <a href={project.github} onClick={e => { e.preventDefault(); window.open(project.github, '_blank'); }}>GitHub</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
