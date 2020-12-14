import React from 'react';
import MasterLayout from './layouts/masterlayout/MasterLayout'
import MainLayout from './layouts/mainlayout/MainLayout'
import BlogLayout from './layouts/bloglayout/BlogLayout'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'owl.carousel/dist/owl.carousel.min.js'
import 'owl.carousel/dist/owl.carousel.js'
import './assets/css/landingPage.scss'
import './assets/css/MainCourse.scss'
import './assets/css/SideCourse.scss'
import './assets/css/blog.scss'

import LandingPage from './pages/LandingPage'
import ProTrader from './pages/course/ProTrader';
import ReadReport from './pages/course/ReadReport';
import Investor from './pages/course/Investor';
import Blog from './pages/blog/Blog';
import BlogCategory from './pages/blog/BlogCategory';
import BlogDetail from './pages/blog/BlogDetail';
import DividendInvestmennt from './pages/course/DividendInvestment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MasterLayout>
          <Switch>
            <Route exact path="/home/:path?">
              <MainLayout>
                <Switch>
                  <Route exact path="/home" component={LandingPage}/>
                </Switch>
              </MainLayout>
            </Route>

            <Route exact path='/course/:path?'>
              <MainLayout>
                <Switch>
                  <Route exact path="/course/protrader20" component={ProTrader}/>
                  <Route exact path="/course/investor" component={Investor}/>
                  <Route exact path="/course/read-report" component={ReadReport}/>
                  <Route exact path="/course/dividend-investment" component={DividendInvestmennt}/>
                </Switch>
              </MainLayout>
            </Route>

            <Route exact path='/blog/:path?/:path?'>
              <BlogLayout>
                <Switch>
                  <Route exact path="/blog" component={Blog}/>
                  <Route exact path="/blog/:category" component={BlogCategory}/>
                  <Route exact path="/blog/:category/:title" component={BlogDetail}/>
                </Switch>
              </BlogLayout>
            </Route>

          </Switch>
        </MasterLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
