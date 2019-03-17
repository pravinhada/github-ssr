import React, {Component} from 'react';
import api from '../../utils/api';
import RepoGrid from './RepoGrid';
import Loading from './Loading';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateSelectedLanguage} from "../redux/actions";


function SelectLanguage(props) {
    return (
        <ul className="languages">
            {props.languages.map(lang => {
                return (
                    <li style={lang == props.selectedLanguage ? {color: '#d0021b'} : null}
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                );
            })}
        </ul>
    );

}

SelectLanguage.propTypes = {
    languages: PropTypes.array.isRequired,
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.props.selectedLanguage);
    }

    updateLanguage(lang) {
        this.setState(
            {
                repos: null
            }
        );
        this.props.updateSelectedLanguage(lang);
        api.fetchPopularRepos(lang).then(repos =>
            this.setState({repos: repos})
        );
    }

    render() {
        return (
            <div className="center-align" style={{marginTop: '50'}}>
                <SelectLanguage
                    languages={this.props.languages}
                    selectedLanguage={this.props.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!this.state.repos ? <Loading/> :
                    <RepoGrid repos={this.state.repos}/>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        languages: state.languages,
        selectedLanguage: state.selectedLanguage
    }
}

export default {
    component: connect(mapStateToProps, {updateSelectedLanguage})(Popular)
};