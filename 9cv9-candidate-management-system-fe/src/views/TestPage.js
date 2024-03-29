import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Layout from '../components/layouts';

class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      setOpen: false
    };
  }

  render() {
    return (
      <Layout>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.setState({ setOpen: true, open: true })}
          >
            Open alert dialog
          </Button>
          <Dialog
            open={this.state.open}
            onClose={() =>
              this.setState({
                setOpen: false,
                open: false
              })
            }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() =>
                  this.setState({
                    setOpen: false,
                    open: false
                  })
                }
                color="primary"
              >
                Disagree
              </Button>
              <Button
                onClick={() =>
                  this.setState({
                    setOpen: false,
                    open: false
                  })
                }
                color="primary"
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Layout>
    );
  }
}

export default TestPage;
