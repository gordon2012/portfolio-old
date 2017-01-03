import React, { Component } from 'react';

export default class Modal extends Component {
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
                display: 'flex'
            },

            wrapper: {
                border: '8px solid #1A237E',
                background: 'white',
                flex: 1,
                height: '75vh',
                alignSelf: 'center',
                margin: '0 64px',
                padding: '0 32px',
            }
        };

        const {project, setProject} = this.props;

        return (
            <div style={styles.overlay}>
                <div style={styles.wrapper}>
                    <h3>{project.name}</h3>
                    {project.description.map( (e,i) => <p key={i}>{e}</p>)}
                    <button onClick={e => { setProject(-1); }}>Close</button>
                </div>
            </div>
        );

    }
}
