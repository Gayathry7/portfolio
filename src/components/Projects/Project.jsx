import React from 'react'
import styles from './Project.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Project=()=>{
    React.useEffect(()=>{
        Aos.init({});
    },[])
    return(
        <>

        <div className={styles.projectBanner} data-aos = 'zoom-in' data-aos-duration="1000">

        <h1 data-aos = 'flip-up' data-aos-duration="1500">Projects</h1>
        </div>

        {/* TOI CLONE */}
          <div className={styles.toi} 
          data-aos="fade-up" 
          data-aos-offset="120"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h1>Times Of India - Clone Project</h1>
                  <p>
                      <div>Tools : React | Redux | Material UI</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>A collaborative project built by a team of 3,executed in a week.</li> 
                               <li>Users can register and login to the website,read, post, search, and sort news.</li>
                                <li>Users can remove backgroundadvertisements, comment on the newsarticle, and calculate tax.</li>                   
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                      <button>
                        <a href='https://timesofindia.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                     
                      <button>
                      <a href='https://github.com/Vishal643/propane' target="_blank" rel="noreferrer">
                      VIEW CODE
                        </a>
                    </button>
                  </div>
              </div>
              
              <div>
                <img src='TOI.png' alt='Times_Of_India'/>
              </div>

          </div>

          {/* Tic-Tac-Toe */}

          <div className={styles.toi}
          data-aos="fade-up" 
          data-aos-offset="120"
            // data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h1>Tic-Tac-Toe Game</h1>
                  <p>
                      <div>Tools : React | CSS | JavaScript | Styled Components</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>Users can either play in Multiplayer mode or withcomputer/AI.
                              <li>The users can also track their moves.</li>
                              <li>All the edge cases of the game have been covered.Minimax Algorithm has been implemented while playing with AI to find the optimal move for a player.</li>
                              </li>
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                        <button>
                        <a href='https://tic-tac-toe-gayathry7.vercel.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                      <button>
                         <a href='https://github.com/Gayathry7/Tic-Tac-Toe-Game' target="_blank" rel="noreferrer">
                             VIEW CODE
                          </a>
                      </button>
                  </div>
              </div>
              
              <div>
                <img src='tic.png' alt='toggl track project'/>
              </div>

          </div>



          {/* Toggl Track CLONE */}
          <div className={styles.toi}
          data-aos="fade-up" 
          data-aos-offset="120"
            // data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h1>Toggl Track - Clone Project</h1>
                  <p>
                      <div>Tools : HTML | CSS | JavaScript</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>One-week project in collaboration with 3other web developers.</li>
                               <li>Users can add and delete tasks, createprojects and associated tags, and create atime block using a stopwatch.</li>
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                        <button>
                        <a href='https://zen-bassi-295127.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                      <button>
                         <a href='https://github.com/Gayathry7/Toggl-Track-Unit2-Project' target="_blank" rel="noreferrer">
                             VIEW CODE
                          </a>
                      </button>
                  </div>
              </div>
              
              <div>
                <img src='toggl.JPG' alt='toggl track project'/>
              </div>

          </div>

             {/* COUCHSURFING CLONE */}
             <div className={styles.toi}
             data-aos="fade-up" 
             data-aos-offset="120"
            //    data-aos-delay="800"
               data-aos-duration="800"
               data-aos-easing="ease-in-out">
              <div>
                  <h1>Couch Surfing - Clone Project</h1>
                  <p>
                      <div>Tools : React | Redux | CSS</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                            <li>User can create an event or a group.</li>
                            <li>User can join an event or a group.</li>
                            <li>User can interact with other users on the discussion board.</li>
                          </ul>
                      </div>
                     
                  </p>
                  
                  <div>
                  <button>
                        <a href='https://couchsurfers-clone.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                      <button>
                          <a href='https://github.com/iharshgaur/Couchsurfing' target="_blank" rel="noreferrer">
                          VIEW CODE
                          </a>
                        </button>
                  </div>
              </div>
              
              <div>
                <img src='couch.png' alt='couch surfing project'/>
              </div>

          </div>



        </>
    )
}

export {Project}