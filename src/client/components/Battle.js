import React, {Component} from 'react';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import {Link} from 'react-router-dom';

class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(id, username) {
        const newState = {};
        newState[id + 'Name'] = username;
        newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
        this.setState(newState);
    }

    handleReset(id) {
        const newState = {};
        newState[id + 'Name'] = '';
        newState[id + 'Image'] = null;
        this.setState(newState);
    }

    render() {
        const match = this.props.match;
        const playerOneName = this.state.playerOneName;
        const playerTwoName = this.state.playerTwoName;
        const playerOneImage = this.state.playerOneImage;
        const playerTwoImage = this.state.playerTwoImage;

        return (
            <div>
                <div className='row'>
                    {!playerOneName &&
                    <PlayerInput id="playerOne" label="Player One"
                                 onSubmit={this.handleSubmit}
                    />
                    }

                    {playerOneImage !== null &&
                    <PlayerPreview avatar={playerOneImage}
                                   username={playerOneName}
                    >
                        <button className='reset' onClick={this.handleReset.bind(this, 'playerOne')}>Reset</button>
                    </PlayerPreview>
                    }

                    {!playerTwoName &&
                    <PlayerInput id="playerTwo" label="Player Two"
                                 onSubmit={this.handleSubmit}/>
                    }

                    {playerTwoImage !== null &&
                    <PlayerPreview avatar={playerTwoImage}
                                   username={playerTwoName}>
                        <button className='reset' onClick={this.handleReset.bind(this, 'playerTwo')}>Reset</button>
                    </PlayerPreview>
                    }
                </div>
                {
                    playerTwoImage && playerTwoImage &&
                    <Link className='button'
                          to={{
                              pathname: match.url + '/results',
                              search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                          }}>Battle</Link>
                }
            </div>
        );
    }
}

export default {
    component: Battle
};