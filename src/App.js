import React from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/NoEffectClassCounterOne'; 
import EffectHookCounterOne from './components/EffectHookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC'; 
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
//1. create context
//provide context with value and the provider must wrap the children components for the value to be available

function App() {
  return (
  <div>
    <div className="container">
      <h1>Class example of SetState</h1>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
    {/* <EffectHookCounterOne /> */}
      {/* <ClassCounterOne />
      <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={'Nino'}> */}
        {/* <ChannelContext.Provider value={'CodeEvolution'}> */}
      {/* <ComponentC /> */}
        {/* </ChannelContext.Provider> */}
      {/* </UserContext.Provider> */}
{/* <CounterOne /> */}
{/* <CounterTwo /> */}
{/* <CounterThree /> */}
{/* <DataFetchingOne /> */}
<DataFetchingTwo />

      
        <h1>Bootstrap grid examples</h1>
        <p className="lead">Basic grid layouts to get you familiar with building within the Bootstrap grid system.</p>
        <h2>Five grid tiers</h2>
        <p>There are five tiers to the Bootstrap grid system, one for each range of devices we support. Each tier starts at a minimum viewport size and automatically applies to the larger devices unless overridden.</p>

        <div className="row bg-light mt-2 border border-dark">
            <div className="col-4 p-3"  style={{backgroundColor:'lavender'}}>.col-4</div>
            <div className="col-4 p-3" style={{backgroundColor:'lavender'}}>.col-4</div>
            <div className="col-4 p-3" style={{backgroundColor:'lavender'}}>.col-4</div>
        </div>
        <div className="row bg-primary mt-2 p-3">
            <div className="col-sm-4">.col-sm-4</div>
            <div className="col-sm-4">.col-sm-4</div>
            <div className="col-sm-4">.col-sm-4</div>
        </div>
        <div className="row bg-secondary mt-2 p-3">
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4">.col-md-4</div>
        </div>
        <div className="row bg-success mt-2 p-3">
            <div className="col-lg-4">.col-lg-4</div>
            <div className="col-lg-4">.col-lg-4</div>
            <div className="col-lg-4">.col-lg-4</div>
        </div>
        <div className="row bg-dark mt-2 p-3 text-white">
            <div className="col-xl-4 ">.col-xl-4</div>
            <div className="col-xl-4 ">.col-xl-4</div>
            <div className="col-xl-4 ">.col-xl-4</div>
        </div>

      <hr/>
        <div className="row p-5 bg-primary">
          <div className="col-md-6 bg-secondary">1</div> 
          <div className="col-md-6 bg-white">2</div> 
        </div>
        <div className="row p-5 bg-secondary mt-2">
        <div className="col-md-6">3</div> 
          <div className="col-md-6">4</div> 
        </div>
        <div className="row p-5 bg-success mt-2">
          <div className="col-md-6">5</div> 
          <div className="col-md-6">6</div>
        </div>
    </div>

{/* 
<nav className="navbar navbar-inverse navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </div>
</nav> */}

 {/* JUMBOTRON  */}
    {/* <div class="jumbotron text-center">
      <div class="container">
        <h1>Welcome To My Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        <a href="#" class="btn btn-primary">Read More</a>
      </div>
    </div>

    <div className="container">
      <form>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter Name"/>
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" placeholder="Enter Email"/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Type Password"/>
        </div>
        <div className="form-group">
          <input type="file" className="form-control-file"/>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select className="form-control">
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Enter Comment</label>
          <textarea className="form-control"></textarea>
        </div>
        <div className="form-group">
        <label>
        <input type="checkbox"/> Check me out
        </label>
        </div>
        <div className="form-group">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
    <hr/>
    <div className="container">
        <table className="table table-striped table-bordered table-hover table-condensed"> 
          <tr className="bg-success">
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
          </tr>
          <tr>
            <td>Nino</td>
            <td>Ana</td>
            <td>Mamuka</td>
          </tr>
          <tr>
            <td>JS</td>
            <td>Java</td>
            <td>React</td>
          </tr>
        </table>
    </div>

      <hr/>
    <div className="container">
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}}>
            50%
        </div>

      </div>

    </div>
    <hr/>
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-4 col-xs-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            </div>
            <div className="col-md-6  col-sm-8 col-xs-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            </div>
        </div>
    </div> */}
    </div>
  );
}

export default App;
