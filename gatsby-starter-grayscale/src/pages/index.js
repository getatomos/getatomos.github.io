import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';
import Footer from '../components/Footer';
import TeamPage from '../components/SocialLinks';
import Header from '../components/Header';
import logo from '../assets/img/LogoWhiteTrans.png';
import atomSelector from '../assets/img/atomSelector.gif';
import dynamicRendering from '../assets/img/DynamicRender.gif';
import componentTree from '../assets/img/ComponentTree.png'



const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5" >
            {config.subHeading}
          </h2>
          {/* <Scroll type="id" element="about"> */}
            <a href="https://github.com/oslabs-beta/atomos" className="btn btn-primary">
              Install
            </a>
          {/* </Scroll> */}
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center" style={{"paddingTop":"10vh", "paddingBottom" : "10vh"}}>
      <div className="container" >
        <div className="row">
          <div className="col-lg-8 mx-auto" style={{"marginBottom":"5vh"}}>
        <img style={{"maxHeight": "15vh" , "marginBottom": "5vh"}} src={logo} className="img-fluid" alt="" />
            <h2 className="text-white mb-4">ATOMOS</h2>
            <p className="text-white-50" >
            Atomos is an open-source Chrome developer tool for Recoil that 
            provides real-time visualization of the component tree and atom-selector relationships 
            to facilitate debugging of React applications.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
      <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={componentTree} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Component Tree</h4>
                  <p className="mb-0 text-white-50">
                  Atomos analyzes Recoil applications and renders 
                  interactive component trees powered by React Flow
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={dynamicRendering} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Dynamic Rendering</h4>
                  <p className="mb-0 text-white-50">
                  Atomos dynamically renders the component tree as the application changes 
                  - no need to reload the app
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={atomSelector} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Atoms and Selectors</h4>
                  <p className="mb-0 text-white-50">
                  Atomos tracks atoms and selectors throughout the application 
                  and selectively highlights them on the component tree to streamline the debugging process
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <TeamPage  />
    <Footer />
    
  </Layout>
);

export default IndexPage;
