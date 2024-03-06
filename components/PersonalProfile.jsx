import SkillCard from "./SkillCard"

const getSkills = () => {
  const skills = [
    "Adobe Premiere Pro",
    "Documentary Production",
    "Social Media Law",
    "Film Editing",
    "Film Direction",
    "Film Production",
    "Script Writing",
    "Creative Writing",
    "Social Media Advertising & Blogging",
    "Problem Solving",
    "Microsoft Office",
    "Time Management",
    "Community Engagement",
  ]

  return skills.map((skill) => {
    return <SkillCard skillName={skill} />
  })

}

export default function PersonalProfile() {
  return (
    <div id="personal-profile" class="container">
      <div class="row">
        <h2 class="pt-5 pb-2 header"> Personal Profile </h2>
          <h2 class="header2">Skills</h2>
            <div class="d-flex flex-wrap justify-content-center">
              {getSkills()}
            </div>
          <h2 class="header2">Charity and Volunteer Work</h2>
          <div class="accordion pt-2" id="accordion2">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                  <img src="/images/care_home.png" class="m-1" width={"48rem"} alt="Burnt Tree Croft Logo" ></img>
                  Activities and Companionship volunteer at Burnt Tree Croft Care Home
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>October 2019 - Present</strong><br/>
                  <ul class="list-group pt-2">
                    <li class="list-group-item">Helped create stimulating mind and physical activities to support residents with their well being</li>
                    <li class="list-group-item">One to one companionship for nominated residents</li>
                    <li class="list-group-item">Creation and personal execution of musical performances for residents</li>
                    <li class="list-group-item">Supporting care workers with manual caring tasks</li>
                    <li class="list-group-item">Provided Covid-19 support through regular communication with elderly residents via video, phone and letters</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingBB">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBB" aria-expanded="true" aria-controls="collapseBB">
                  <img src="/images/Big-Buddha-Films-Logo-Header.png" class="m-1" width={"48rem"} alt="Burnt Tree Croft Logo" ></img>
                  Production assistant/ runner at Big Buddha Films
                </button>
              </h2>
              <div id="collapseBB" class="accordion-collapse collapse" aria-labelledby="headingBB" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>November 2022</strong><br/>
                  <ul class="list-group pt-2">
                    Work based experience and opportunity through Sheffield Hallam University.
                    <li class="list-group-item">Using communication tools to support the producer, wider team and actors with refreshments and required equipment</li>
                    <li class="list-group-item">Managing the public during preparation and recording</li>
                    <li class="list-group-item">Setting up of relevant equipment on set in preparation for recording</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingBlunt">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBlunt" aria-expanded="true" aria-controls="collapseBlunt">
                  <img src="/images/blunt_radio.png" class="m-1" width={"48rem"} alt="Blunt Radio Logo" ></img>
                  Radio producer and presenter at Blunt Radio, Forge Radio
                </button>
              </h2>
              <div id="collapseBlunt" class="accordion-collapse collapse" aria-labelledby="headingBlunt" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>September 2018 - September 2019</strong><br/>
                  <ul class="list-group pt-2">
                    <li class="list-group-item">Producer and presenter of the breakfast show, three times a week</li>
                    <li class="list-group-item">Created topics for discussion to stimulate interaction and further discussion with listeners</li>
                    <li class="list-group-item">Conducted live interviews including upcoming Sheffield artists</li>
                    <li class="list-group-item">Selection a topic for the show, posting weekly polls and questions for the show via social media</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br/>
        <h2 class="header2">Work Experience</h2>
            <div class="accordion pt-2" id="accordion3">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                  <img src="https://thedepotbakery.co.uk/wp-content/themes/depot-bakery/images/depot-bakery-logo.svg" class="m-1" width={"48rem"} alt="Depot Bakery Logo" ></img>
                    Front of House at Depot Bakery
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>June 2022 - Present</strong><br/>
                    <ul class="list-group pt-2">
                      <li class="list-group-item">Waitressing</li>
                      <li class="list-group-item">Kitchen Porting</li>
                      <li class="list-group-item">Serving and plating hot drinks and food</li>
                      <li class="list-group-item">Managing customers’ expectations, reservations and orders</li>
                      <li class="list-group-item">Deep cleaning of all areas</li>
                      <li class="list-group-item">Being agile within a very busy working environmento</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/FirstGroup-Logo.svg" class="m-1" width={"48rem"} alt="FirstGroup Logo" ></img>
                    Work placement at FirstGroup Plc
                  </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>March 2021 - September 2022</strong><br/>
                    <ul class="list-group pt-2">
                      <li class="list-group-item">Supporting First Group PLC staff in the public relation decision making process within open days and events</li>
                      <li class="list-group-item">Attending public relation planning meetings</li>
                      <li class="list-group-item">Customer engagement within events</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEight">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                    <img src="/images/ibis.png" class="m-1" width={"48rem"} alt="Ibis Budget Logo" ></img>
                    Barista at Ibis Budget Hotel
                  </button>
                </h2>
                <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>September 2021 - March 2022</strong><br/>
                    <ul class="list-group pt-2">
                      <li class="list-group-item">Preparing and serving food and drinks</li>
                      <li class="list-group-item">Counting and checking cash flow daily</li>
                      <li class="list-group-item">Deep cleaning of café and kitchen</li>
                      <li class="list-group-item">Supporting reception team with the management of customers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingNine">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                    <img src="/images/a_for_appointments.png" class="m-1" width={"48rem"} alt="A for Appointments Logo" ></img>
                    Admin and Marketing Assistant at A for Appointments Limited
                  </button>
                </h2>
                <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>March 2021 - August 2021</strong><br/>
                    <ul class="list-group pt-2">
                      Temporary contract.
                      <li class="list-group-item">Managing companies’ social media across the board</li>
                      <li class="list-group-item">Sourcing potential candidates for jobs</li>
                      <li class="list-group-item">Doing administrative tasks</li>
                      <li class="list-group-item">Producing, designing and scheduling social media content</li>
                      <li class="list-group-item">Editing and filming videos for social media content</li>
                      <li class="list-group-item">Engaging and working amongst a fast-paced team</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTen">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                    <img src="https://www.tellermate.com/wp-content/uploads/2016/06/Spar-Logo-resized.png" class="m-1" width={"48rem"} alt="SPAR Logo" ></img>
                    Sales Assistant at SPAR UK
                  </button>
                </h2>
                <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>August 2020 - March 2021</strong><br/>
                    <ul class="list-group pt-2">
                      Roles and responsibilities include:
                      <li class="list-group-item">Customer facing role of a petrol station and a local convenience store</li>
                      <li class="list-group-item">Cash handling and transitions using an electronic till system, Pay Point and lottery services</li>
                      <li class="list-group-item">Monitoring the forecourt and fuel consumption management and shop stock control</li>
                      <li class="list-group-item">Health and safety management within store and petrol station forecourt</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingNT">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNT" aria-expanded="true" aria-controls="collapseNT">
                    <img src="https://bluedc.co.uk/imgs/case-studies/nt/nt-logo.svg" class="m-1" width={"48rem"} alt="National Trust Logo" ></img>
                    Retail and Cafe Assistant at the National Trust
                  </button>
                </h2>
                <div id="collapseNT" class="accordion-collapse collapse" aria-labelledby="headingNT" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>June 2019 - January 2020</strong><br/>
                    <ul class="list-group pt-2">
                      Left due to cafe refurbishment. All staff laid off.
                      <li class="list-group-item">Managing payments/till</li>
                      <li class="list-group-item">Serving and preparing all hot beverages within a fast-paced environment</li>
                      <li class="list-group-item">Managed customers within a timely fashion to ensure a great customer experience</li>
                      <li class="list-group-item">Retail shop management (non-food)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEleven">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
                    <img src="/images/blokes.png" class="m-1" width={"48rem"} alt="Blokes Lichfield Logo" ></img>
                    Saturday Worker at Blokes Lichfield Limited
                  </button>
                </h2>
                <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>September 2016 - August 2018</strong><br/>
                    <ul class="list-group pt-2">
                      <li class="list-group-item">Customer service</li>
                      <li class="list-group-item">Cleaning throughout the day to ensure salon maintains cleanliness</li>
                      <li class="list-group-item">Supporting the hairdressers</li>
                      <li class="list-group-item">Washing clients hair</li>
                      <li class="list-group-item">Making of hot drinks</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>   
      </div>
  )
}
