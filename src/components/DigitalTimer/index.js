import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isRunning: false,
    minutes: 25,
    seconds: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {isRunning} = this.state
    if (isRunning) {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
      }))
    }
  }

  onClickStartButton = () => {
    this.setState({
      isRunning: true,
    })
  }

  onClickStopButton = () => {
    this.setState({
      isRunning: false,
    })
  }

  onDecrementTime = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes - 1,
    }))
  }

  onIncrementTime = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes + 1,
    }))
  }

  onClickResetButton = () => {
    this.setState(prevState => ({
      minutes: prevState.minutes,
      seconds: 0,
      isRunning: false,
    }))
  }

  clearTimeInterval = () => {
    clearInterval(this.timerId)
  }

  render() {
    const {isRunning, minutes, seconds} = this.state
    const date = new Date(0, 0, 0, 0, minutes, 0)

    if (seconds === minutes * 60) {
      this.clearTimeInterval()
    }

    date.setSeconds(date.getSeconds() - seconds)

    console.log(seconds)

    const modifiedMin =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    const modifiesSec =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

    return (
      <div className="bg-container">
        <h1 className="main-heading">
          Digital Timer <span className="span-element">SSC</span>
        </h1>
        <div className="alignment">
          <div className="time-container">
            <div className="time-details">
              <h1 className="time">
                {modifiedMin}:{modifiesSec}
              </h1>
              <p className="time-state">{isRunning ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="container-2">
            <div className="buttons-container">
              {isRunning ? (
                <div className="button-stop-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    alt="pause icon"
                    className="pause-icon"
                  />
                  <button
                    className="stop-button pause"
                    type="button"
                    onClick={this.onClickStopButton}
                  >
                    Pause
                  </button>
                </div>
              ) : (
                <div className="button-start-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                    className="play-icon"
                  />
                  <button
                    type="button"
                    className="start-button start"
                    onClick={this.onClickStartButton}
                  >
                    Start
                  </button>
                </div>
              )}

              <div className="reset-button-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="reset-icon"
                />
                <button
                  className="reset-button reset"
                  type="button"
                  onClick={this.onClickResetButton}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="time-limit-container">
              <p className="time-limit">Set Timer Limit</p>
              <div className="time-limit-buttons-container">
                <button
                  type="button"
                  className="limit-button"
                  disabled={isRunning}
                  onClick={this.onDecrementTime}
                >
                  -
                </button>
                <p className="range">{minutes}</p>
                <button
                  type="button"
                  className="limit-button"
                  disabled={isRunning}
                  onClick={this.onIncrementTime}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
