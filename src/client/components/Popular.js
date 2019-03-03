import React, {Component} from 'react';
import api from '../../utils/api';
import RepoGrid from './RepoGrid';
import Loading from './Loading';
import PropTypes from 'prop-types';

function SelectLanguage(props) {
    const languages = ["All", "JavaScript", "Java", "Ruby", "CSS", "Python", "PHP"];

    return (
        <ul className="languages">
            {languages.map(lang => {
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
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(lang) {
        this.setState(
            {
                selectedLanguage: lang,
                repos: null
            }
        );
        api.fetchPopularRepos(lang).then(repos =>
            this.setState({repos: repos})
        );
    }

    render() {
        return (
            <div className="center-align" style={{marginTop: '50'}}>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
                {!this.state.repos ? <Loading/> :
                    <RepoGrid repos={this.state.repos}/>}
            </div>
        );
    }
}

export default {
    component: Popular
};