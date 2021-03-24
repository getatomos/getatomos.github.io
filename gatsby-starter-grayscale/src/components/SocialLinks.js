
import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import suminkim from '../assets/img/katesumin.png'
import vickilee from '../assets/img/vicki.png'
import jonathan from '../assets/img/jonathanM1.png'
import cole from '../assets/img/coleRed.png'
import config from '../../config'

const TeamPage = () => {
  return (
    <section id="signup" className="signup-section">
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={suminkim}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Sumin Kim</h5>
              <p className="text-uppercase blue-text">Software Engineer</p>
              <p className="grey-text">
                
              </p>
              <ul className="list-unstyled mb-0">
              <a href="https://github.com/ppsm920" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
              </a>   
              <a href="https://www.linkedin.com/in/ppsm920/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={vickilee}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Vicki Lee</h5>
              <p className="text-uppercase blue-text">Software Engineer</p>
              <p className="grey-text">
                
              </p>
              <ul className="list-unstyled mb-0">
              <a href="https://github.com/vlee022" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
              </a>   
              <a href="https://www.linkedin.com/in/vlee022" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={jonathan}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Jonathan Mendoza</h5>
              <p className="text-uppercase blue-text">Software Engineer</p>
              <p className="grey-text">
                
              </p>
              <ul className="list-unstyled mb-0">
              <a href="https://github.com/mendxza" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
              </a>   
              <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={cole}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Cole Redfearn</h5>
              <p className="text-uppercase blue-text">Software Engineer</p>
              <p className="grey-text">
                
              </p>
              <ul className="list-unstyled mb-0">
              <a href="https://github.com/coleredfearn" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
              </a>   
              <a href="https://www.linkedin.com/in/coleredfearn/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      
      </section>
  );
}

export default TeamPage;