import React from "react";

const Question = () => {
  return (
    <section className="question">
      <div className="container">
        <div class="container mt-5">
          <div className="question-title">
            <h2>Frequently asked questions</h2>
            <p>If you have any further questions, please contact us </p>
          </div>

          <div class="accordion" id="faqAccordion">
            <div className="accardion-wrapper">
              <div className="accardion-wrap1">
                <div class="accordion-item accar-bot">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Will I receive lifetime access to the courses?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      Our platform includes downloadable resources such as PDFs
                      and worksheets to help you study and teach effectively.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      Can I use the materials for community teaching?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      Yes, you can use the materials to support your teaching in
                      local communities.
                    </div>
                  </div>
                </div>
              </div>

              <div className="accardion-wrap2">
                <div class="accordion-item accar-bot">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      Is there a free trial for the courses?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      Yes, we offer a 7-day free trial for all new users.
                    </div>
                  </div>
                </div>

                <div class="accordion-item accar-bot">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                    >
                      Who can benefit from these courses?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      Teachers, students, and lifelong learners from all
                      backgrounds.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                    >
                      Who can benefit from these courses?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div class="accordion-body">
                      Teachers, students, and lifelong learners from all
                      backgrounds.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
