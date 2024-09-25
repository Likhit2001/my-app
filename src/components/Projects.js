import React from "react";

function Projects() {
  return (
    <div className="content_section">
      <p>
        <h2>Projects</h2>

        <ul>
          <li>
            <h3>BART Text Summarizer (NLP, LLM)</h3>
            Developed a text summarization model using the BART-base
            transformer, fine-tuned with custom datasets.
            <br />
            Utilized the Hugging Face transformers library, employing advanced
            training strategies such as weight decay, warmup steps, and
            evaluation after each epoch to optimize performance.
          </li>
          <li>
            <h3>Chatbot Development with Dialogflow (FastAPI, SQL)</h3>
            Developed a chatbot using Google’s Dialogflow integrated with a SQL
            database, implemented a FastAPI backend for functionalities such as
            adding, removing, and searching items in the database, through chat
            conversation.
            <br />
            Leveraged Dialogflow’s natural language processing for intent
            recognition and optimized backend performance through efficient
            query handling and response management.
          </li>
          {/* // https://facebook-clone-a72cb.web.app/ */}
          <li>
            <h3>Cold Email Generator using LLaMA 3.1 LLM, ChromaDB</h3>
            Developed a cold email generator utilizing Facebook’s LLM LLaMA 3.1,
            with job descriptions scraped through WebPageLoader for personalized
            email content.
            <br />
            Integrated the generator with ChromaDB, a vector database, to
            efficiently link relevant project resources in the generated emails,
            enhancing the outreach process with tailored information.
          </li>
          <li>
            <h3>
              Model Predictive Current Controller (MPC) for Inverter
              Grid-Connected Systems (C++, MATLAB)
            </h3>
            Collaborated with a team to develop code for a Model Predictive
            Current Controller (MPC) implemented on the TMS320F28379D
            microcontroller board for real-time control in an inverter
            grid-connected system.
            <br />
            Utilized MPC to predict future current values and optimize control
            actions, enabling dynamic response to grid conditions, constraint
            handling, and overall performance optimization for efficient energy
            management.
          </li>
          <li>
            <h3>
              CNN Model Development for Tea Leaves Diseases Identification (Deep
              Learning)
            </h3>
            Developed a Convolutional Neural Network (CNN) model to identify
            diseases in tea leaves, achieving an accuracy of 93% by
            experimenting with various activation functions (e.g. ReLU, Sigmoid,
            Softmax) and utilizing layer concatenation for improved results.
            <br />
            Conducted thorough evaluations to assess the model’s performance,
            optimizing hyperparameters for enhanced prediction reliability and
            robustness.
          </li>
          <li>
            <h3>
              Zer01coded - Comprehensive Student Resource Website (Web
              Developement)
            </h3>
            Led a team in developing a comprehensive website that provides
            students with access to information about clubs and coding
            resources, employing HTML, CSS, JavaScript, React JS for front-end
            development.
            <br />
            Implemented a responsive design and user-friendly interface,
            utilizing Firebase for backend services to facilitate user
            authentication and data management.
          </li>

          {/* <li>
            <h4>
              Zer01coded (Web Development) https://zer01coded-nitpy.web.app/
              October 2022
            </h4>
            Led a team to develop a comprehensive website which students may
            utilise to access information about club and coding resources.
          </li>

          <li>
            <h4>Clone Structure of Facebook with</h4>
            the functionalities of adding posting from a different user.
          </li>
          Zer01coded - Comprehensive Student Resource Website Web Developement */}
        </ul>
      </p>
    </div>
  );
}

export default Projects;
