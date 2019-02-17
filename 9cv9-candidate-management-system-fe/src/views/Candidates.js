import React, { Component, Fragment } from 'react';
import {
  Grid,
  Hidden,
  Checkbox,
  Slide,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
  FormControlLabel,
  Paper,
  Typography,
  Button,
  List
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import Layout from '../components/layouts/index';
import {
  CandidateListItem,
  SearchBar,
  BigButton,
  HoverButton,
  WidgetItem,
  PriceRange
} from '../components';

const options = [
  { value: 'start_date', label: 'Availability Date - Earliest to Latest' },
  { value: '-start_date', label: 'Availability Date - Latest to Earliest' },
  { value: 'expected_salary', label: 'Expected Salary - High to Low' },
  { value: '-expected_salary', label: 'Expected Salary - High to Low' },
  { value: 'experience', label: 'Experience - Low to High' },
  { value: '-experience', label: 'Experience - High to Low' },
  { value: 'hiring_score', label: 'Hiring Score - High to Low' },
  { value: '-hiring_score', label: 'Hiring Score - Low to End' }
];

const typeData = [
  { value: 0, label: 'Frontend' },
  { value: 1, label: 'Fullstack' },
  { value: 2, label: 'Mobile' },
  { value: 3, label: 'Blockchain' },
  { value: 4, label: 'Devops' },
  { value: 5, label: 'UXUI Designer' },
  { value: 6, label: 'Machine Learning' },
  { value: 7, label: 'AI' },
  { value: 8, label: 'Data Enginner' }
];

const cities = [
  { value: 0, label: 'Jakarta' },
  { value: 1, label: 'Kuala Lumpur' },
  { value: 2, label: 'Ho Chi Minh City' }
];

const skill = [
  { value: 0, label: 'Reactjs' },
  { value: 0, label: 'Angular' },
  { value: 0, label: 'Java script' },
  { value: 0, label: 'Magento' },
  { value: 0, label: 'Wordpress' }
];

const useStyles = makeStyles({
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  }
});

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5,
    marginTop: '20px'
  },
  typeSearch: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',

    height: 25,
    marginTop: '10px',
    border: '1px solid #00000080'
  },

  checkBox: {
    height: '30px',
    fontSize: '0.5rem'
  },
  dropdown: {
    height: '10px',
    fontSize: 12
  }
});

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Candidates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 3,
      loading: false,
      selected: '',
      citiesSelected: '',
      candidates: [],
      country: '',
      city: '',
      type: '',
      typeData: '',
      expected_salary: '',
      experience: '',
      looking_for0: '',
      looking_for1: '',
      looking_for2: '',
      looking_for3: '',
      verified: false,
      title: '',
      expected_salary_min: 500,
      expected_salary_max: '',
      experience_min: 0,
      experience_max: '',
      looking_for_in: '',
      open: false,
      setOpen: false,
      ordering: '',
      experience_slot: '',
      startRange: 0,
      endRange: 10,
      labelMode: 'mid'
    };
    this._onSelect = this._onSelect.bind(this);
    this._onSelectType = this._onSelectType.bind(this);
    this._onSelectCities = this._onSelectCities.bind(this);
  }

  _onSelect(option) {
    this.setState({
      loading: true
    });
    axios
      .get('https://candidate-management-platform.herokuapp.com/candidate/', {
        method: 'GET',
        params: {
          ordering: this.state.selected.value
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: 'same-origin'
      })
      .then(response => {
        const candidates = response.data;
        this.setState({
          candidates,
          loading: false
        });
      });

    this.setState({ selected: option });
  }

  _onSelectType(option) {
    this.setState({
      typeData: option
    });
  }

  _onSelectCities(option) {
    this.setState({
      citiesSelected: option
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  Transition(props) {
    return <Slide direction="up" {...props} />;
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    axios
      .get('https://candidate-management-platform.herokuapp.com/candidate/', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: 'same-origin'
      })
      .then(response => {
        const candidates = response.data;
        this.setState({
          candidates,
          loading: false
        });
        console.log(response.data);
      });
  }

  getCandidate() {
    this.setState({
      loading: true
    });
    axios
      .get('https://candidate-management-platform.herokuapp.com/candidate/', {
        method: 'GET',
        params: {
          country: this.state.country,
          city: this.state.citiesSelected.value,
          type: this.state.typeData.value,
          expected_salary_min: this.state.expected_salary_min,
          expected_salary_max: this.state.expected_salary_max,
          experience_min: this.state.experience_min,
          experience_max: this.state.experience_max,
          looking_for: [
            this.state.looking_for0,
            this.state.looking_for1,
            this.state.looking_for2,
            this.state.looking_for4
          ],
          verified: this.state.verified
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: 'same-origin'
      })
      .then(response => {
        const candidates = response.data;
        this.setState({
          candidates,
          open: false,
          setOpen: false,
          loading: false
        });
        console.log(response.data);
      });
  }

  toggleChange = () => {
    this.setState({
      verified: !this.state.verified
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const defaultOption = this.state.selected;
    const defaultOptionType = this.state.typeData;
    const defaultOptionCities = this.state.citiesSelected;
    const placeHolderValue =
      typeof this.state.selected === 'string'
        ? this.state.selected
        : this.state.selected.label;

    return (
      <Layout>
        <Grid
          container
          style={{
            marginTop: '60px',
            paddingLeft: '25px',
            paddingRight: '25px'
          }}
        >
          <Hidden smDown>
            <Grid
              item
              sm={2}
              xs={12}
              style={{
                padding: '15px',
                backgroundColor: 'white',
                border: '1px solid #00000080',
                height: '750px'
              }}
            >
              <Grid>
                <WidgetItem
                  title="Location"
                  content={
                    <Fragment>
                      <div style={{ height: '10px' }} />
                      <Dropdown
                        style={{ height: '10p' }}
                        options={cities}
                        className={classes.dropdown}
                        onChange={this._onSelectCities}
                        value={defaultOptionCities}
                        placeholder="Chose City"
                      />
                      <div style={{ height: '10px' }} />
                    </Fragment>
                  }
                />
                <WidgetItem
                  title="Type"
                  content={
                    <Fragment>
                      <div style={{ height: '10px' }} />
                      <Dropdown
                        style={{ height: '10p' }}
                        options={typeData}
                        className={classes.dropdown}
                        onChange={this._onSelectType}
                        value={defaultOptionType}
                        placeholder="Chose Type"
                      />
                      <div style={{ height: '10px' }} />
                    </Fragment>
                  }
                />
                <WidgetItem
                  title="Expected Salary"
                  content={
                    <Fragment>
                      <div style={{ height: '20px' }}>
                        <Slider
                          min={this.state.expected_salary_min}
                          max={5000}
                          value={this.state.expected_salary_max}
                          onChange={e =>
                            this.setState({
                              expected_salary_max: e
                            })
                          }
                          onChangeComplete={() => {
                            console.log('Change event completed');
                          }}
                        />
                        <div className="value">
                          {this.state.expected_salary_min} USD -{' '}
                          {this.state.expected_salary_max} USD
                        </div>
                      </div>
                      <div style={{ height: '20px' }} />
                    </Fragment>
                  }
                />
                <WidgetItem
                  title="Experience Level"
                  content={
                    <Fragment>
                      <div style={{ height: '20px' }}>
                        <Slider
                          min={1}
                          max={100}
                          value={this.state.experience_max}
                          onChange={e =>
                            this.setState({
                              experience_max: e
                            })
                          }
                          onChangeComplete={() => {
                            console.log('Change event completed');
                          }}
                        />
                        <div className="value">
                          1 - {this.state.experience_max} Years
                        </div>
                      </div>
                      <div style={{ height: '20px' }} />
                    </Fragment>
                  }
                />
                <WidgetItem
                  title="Looking For"
                  content={
                    <Fragment>
                      <FormControl component="fieldset">
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox value="0" />}
                            label="Full time"
                            className={classes.checkBox}
                            onChange={() =>
                              this.setState({
                                looking_for0: 0
                              })
                            }
                          />
                          <FormControlLabel
                            control={<Checkbox value="1" />}
                            label="Part time"
                            className={classes.checkBox}
                            onChange={() =>
                              this.setState({
                                looking_for1: 1
                              })
                            }
                          />
                          <FormControlLabel
                            control={<Checkbox value="2" />}
                            label="Project-base"
                            className={classes.checkBox}
                            onChange={() =>
                              this.setState({
                                looking_for2: 2
                              })
                            }
                          />
                          <FormControlLabel
                            control={<Checkbox value="3" />}
                            label="Internship"
                            className={classes.checkBox}
                            onChange={() =>
                              this.setState({
                                looking_for3: 3
                              })
                            }
                          />
                        </FormGroup>
                      </FormControl>
                    </Fragment>
                  }
                />
                <WidgetItem
                  title="Verified"
                  content={
                    <Fragment>
                      <FormControl component="fieldset">
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox value="true" />}
                            label="9cv9-verified"
                            className={classes.checkBox}
                            checked={this.state.verified}
                            onChange={this.toggleChange}
                          />
                        </FormGroup>
                      </FormControl>
                    </Fragment>
                  }
                />
                <WidgetItem
                  content={
                    <Fragment>
                      <HoverButton
                        title="Find my talent"
                        onClick={() => {
                          this.getCandidate();
                        }}
                      />
                    </Fragment>
                  }
                />
              </Grid>
            </Grid>
          </Hidden>

          <Grid item sm>
            <Hidden smUp>
              <Grid
                item
                justify="center"
                itemAlign="center"
                style={{ padding: '20px' }}
              >
                <Paper
                  onClick={() =>
                    this.setState({
                      setOpen: true,
                      open: true
                    })
                  }
                  style={{ padding: '5px', width: '100px' }}
                  elevation={2}
                >
                  <Typography>Filters</Typography>
                </Paper>
              </Grid>
              <Dialog
                fullScreen
                TransitionComponent={this.Transition}
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
                  {'Filter Candidates'}
                </DialogTitle>
                <DialogContent>
                  <Grid>
                    <WidgetItem
                      title="Location"
                      content={
                        <Fragment>
                          <div style={{ height: '10px' }} />
                          <Dropdown
                            style={{ height: '10p' }}
                            options={cities}
                            className={classes.dropdown}
                            onChange={this._onSelectCities}
                            value={defaultOptionCities}
                            placeholder="Chose City"
                          />
                          <div style={{ height: '10px' }} />
                        </Fragment>
                      }
                    />
                    <WidgetItem
                      title="Type"
                      content={
                        <Fragment>
                          <div style={{ height: '10px' }} />
                          <Dropdown
                            style={{ height: '10p' }}
                            options={typeData}
                            className={classes.dropdown}
                            onChange={this._onSelectType}
                            value={defaultOptionType}
                            placeholder="Chose Type"
                          />
                          <div style={{ height: '10px' }} />
                        </Fragment>
                      }
                    />
                    <WidgetItem
                      title="Expected Salary"
                      content={
                        <Fragment>
                          <PriceRange />
                        </Fragment>
                      }
                    />

                    <WidgetItem
                      title="Looking For"
                      content={
                        <Fragment>
                          <FormControl component="fieldset">
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox value="0" />}
                                label="Full time"
                                className={classes.checkBox}
                                onChange={() =>
                                  this.setState({
                                    looking_for: 0
                                  })
                                }
                              />
                              <FormControlLabel
                                control={<Checkbox value="1" />}
                                label="Part time"
                                className={classes.checkBox}
                                onChange={() =>
                                  this.setState({
                                    looking_for: 1
                                  })
                                }
                              />
                              <FormControlLabel
                                control={<Checkbox value="2" />}
                                label="Project-base"
                                className={classes.checkBox}
                                onChange={() =>
                                  this.setState({
                                    looking_for: 2
                                  })
                                }
                              />
                              <FormControlLabel
                                control={<Checkbox value="3" />}
                                label="Internship"
                                className={classes.checkBox}
                                onChange={() =>
                                  this.setState({
                                    looking_for: 3
                                  })
                                }
                              />
                            </FormGroup>
                          </FormControl>
                        </Fragment>
                      }
                    />
                    <WidgetItem
                      title="Verified"
                      content={
                        <Fragment>
                          <FormControl component="fieldset">
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox value="true" />}
                                label="9cv9-verified"
                                className={classes.checkBox}
                                checked={this.state.verified}
                                onChange={this.toggleChange}
                              />
                            </FormGroup>
                          </FormControl>
                        </Fragment>
                      }
                    />
                  </Grid>
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
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      this.getCandidate();
                    }}
                    color="#AAAAAA"
                    autoFocus
                  >
                    Find my talents
                  </Button>
                </DialogActions>
              </Dialog>
            </Hidden>

            <Grid container style={{ paddingRight: '20px' }}>
              <Grid item sm={9} xs={12} style={{ marginBottom: '20px' }}>
                <SearchBar />
              </Grid>

              <Grid
                item
                sm={3}
                xs={12}
                container
                justify="flex-end"
                style={{ paddingLeft: '20px' }}
              >
                <Grid style={{ width: '100%' }}>
                  <Dropdown
                    style={{ height: '10p' }}
                    options={options}
                    className={classes.dropdown}
                    onChange={this._onSelect}
                    value={defaultOption}
                    placeholder="Sort"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid direction>
              <Grid item>
                {this.state.loading ? (
                  <Grid
                    justifyContent="center"
                    alignItems="center"
                    style={{ padding: '60px' }}
                  >
                    <ClipLoader
                      spinner={'HashLoader'}
                      css={override}
                      sizeUnit={'px'}
                      size={100}
                      color={'#123abc'}
                      loading={this.state.loading}
                    />
                    <Typography>Loading Data.....</Typography>
                  </Grid>
                ) : (
                  <List className={classes.root}>
                    {this.state.candidates.map(c => (
                      <CandidateListItem
                        key={c.id}
                        avatar={
                          !c.avatar
                            ? 'http://optometryboardsreview.com/wp-content/uploads/2017/07/Kmk_media1-768x535.jpg'
                            : c.avatar
                        }
                        type={
                          {
                            '0': <span>Frontend</span>,
                            '1': <span>Backend</span>,
                            '2': <span>Fullstack</span>,
                            '3': <span>Mobile</span>,
                            '4': <span>Blockchain</span>,
                            '5': <span>Devops</span>,
                            '6': <span>UXUI Designers</span>,
                            '7': <span>Machine Learning</span>,
                            '8': <span>AI</span>,
                            '9': <span>Data Enginner</span>
                          }[c.country]
                        }
                        expected_salary={c.expected_salary}
                        exp={c.experience}
                        country={
                          {
                            '0': <span>Singapore</span>,
                            '1': <span>Indonesia</span>,
                            '2': <span>Malaysia</span>
                          }[c.country]
                        }
                        skill={c.skill.map(skill => (
                          <span>{skill}, </span>
                        ))}
                      />
                    ))}
                  </List>
                )}
              </Grid>
              {this.state.loading ? (
                ''
              ) : (
                <Grid
                  container
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}
                >
                  <Grid item style={{ marginTop: '20px' }}>
                    <BigButton title="See More" />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

Candidates.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Candidates);
