import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addSpiritScore, updateSpiritScore } from "../../store/game/actions";
import { SpiritItem } from "./SpiritItem";

const styles = theme => ({
  padding: {
    padding: theme.spacing(0.5)
  },
  margin: {
    margin: "30px 0"
  },
  minWidth: {
    minWidth: "250px"
  }
});

export class SpiritScoreForm extends Component {
  state = {
    RKUScore: 2,
    RKUComment: "",
    FNBScore: 2,
    FNBComment: "",
    FMScore: 2,
    FMComment: "",
    PASCScore: 2,
    PASCComment: "",
    COMMScore: 2,
    COMMComment: "",
    generalComment: ""
  };

  componentDidMount = () => {
    if (this.props.receivedSpiritScore) {
      const {
        RKUScore,
        RKUComment,
        FNBScore,
        FNBComment,
        FMScore,
        FMComment,
        PASCScore,
        PASCComment,
        COMMScore,
        COMMComment,
        generalComment
      } = this.props.receivedSpiritScore;
      this.setState({
        RKUScore,
        RKUComment,
        FNBScore,
        FNBComment,
        FMScore,
        FMComment,
        PASCScore,
        PASCComment,
        COMMScore,
        COMMComment,
        generalComment
      });
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = async event => {
    event.preventDefault();
    const {
      game: {
        id,
        homeTeamReceivedSpiritScoreId,
        awayTeamReceivedSpiritScoreId
      },
      spiritScoreFor,
      toggleSpiritForm,
      updateSpiritScore,
      addSpiritScore
    } = this.props;

    const addNewSpiritScore =
      homeTeamReceivedSpiritScoreId || awayTeamReceivedSpiritScoreId
        ? false
        : true;

    const spiritScoreData = {
      ...this.state,
      spiritScoreFor,
      gameId: id
    };

    if (addNewSpiritScore) {
      console.log("Trying to add new");
      addSpiritScore(spiritScoreData);
    } else {
      console.log("Trying to update");

      const spiritScoreId =
        spiritScoreFor === "home"
          ? homeTeamReceivedSpiritScoreId
          : awayTeamReceivedSpiritScoreId;
      updateSpiritScore(spiritScoreData, spiritScoreId);
    }
    toggleSpiritForm();
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.padding}>
        <form onSubmit={this.onSubmit} className={classes.minWidth}>
          <div>
            <SpiritItem
              label={"Rules, Knowledge & Use"}
              scoreName={"RKUScore"}
              commentName={"RKUComment"}
              value={this.state.RKUScore}
              comment={this.state.RKUComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Fouls & Body Contact"}
              scoreName={"FNBScore"}
              commentName={"FNBComment"}
              value={this.state.FNBScore}
              comment={this.state.FNBComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Fairmindedness"}
              scoreName={"FMScore"}
              commentName={"FMComment"}
              value={this.state.FMScore}
              comment={this.state.FMComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Positive Attitude & Self-Control"}
              scoreName={"PASCScore"}
              commentName={"PASCComment"}
              value={this.state.PASCScore}
              comment={this.state.PASCComment}
              change={this.onChange}
            />
            <SpiritItem
              label={"Communication"}
              scoreName={"COMMScore"}
              commentName={"COMMComment"}
              value={this.state.COMMScore}
              comment={this.state.COMMComment}
              change={this.onChange}
            />
          </div>
          <TextField
            multiline
            name="generalComment"
            label="Comment on the game"
            rows="4"
            rowsMax="4"
            value={this.state.generalComment}
            onChange={this.onChange}
          />
          <Button color="primary" style={{ margin: "10px" }} type="submit">
            Submit
          </Button>
          <Button
            type="button"
            color="default"
            style={{ margin: "10px" }}
            onClick={this.props.toggleSpiritForm}>
            Cancel
          </Button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
  game: state.game
});

const mapDispatchToProps = { addSpiritScore, updateSpiritScore };

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SpiritScoreForm)
);
