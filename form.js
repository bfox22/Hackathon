import React from 'react';

class Form extends React.Component {
    state = {
        movieName: '',
        yearRelease: '',
        synopsis: '',
        score: '',
    }

    render(){
        return (
            <form>
               <input 
               name="movieName"
               placeholder='Name of the movie' 
               value={this.state.movieName} 
               onChange={e => this.setState({ movieName: e.target.value })} />
               <input 
               name="yearRelease"
               placeholder='The year of release' 
               value={this.state.yearRelease} 
               onChange={e => this.setState({ yearRelease: e.target.value })} />
               <input 
               name="synopsis"
               placeholder='What was the movie about?' 
               value={this.state.synopsis} 
               onChange={e => this.setState({ synopsis: e.target.value })} />
               <input 
               name="score"
               placeholder='Your score out of 10' 
               value={this.state.score} 
               onChange={e => this.setState({ score: e.target.value })} />
            </form>
        );
    }
}

export default Form;