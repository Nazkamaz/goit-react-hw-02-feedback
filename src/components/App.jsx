import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const stateKey = e.target.name;
    console.log(stateKey);
    this.setState(state => ({
      [stateKey]: state[stateKey] + 1,
    }));
  };

countTotalFeedback = () => {
   return Object.values(this.state).reduce((acc, item) => acc + item, 0)
}

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  return good>=1 ? ((good / this.countTotalFeedback()) * 100).toFixed(0)
      : 0;

}

  render() {
    const { good, neutral, bad, } = this.state;
    return (
      <>
      <Section title="Please leave feedback">
        
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        </Section>
        {this.countTotalFeedback() === 0 ?
        (<Notification message = {'There is no feedback'}></Notification>) :
        
        (<Section title="Statistic">
        <Statistic good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
</Section>)}
        
      </>
    );
  }
}

export default App;
