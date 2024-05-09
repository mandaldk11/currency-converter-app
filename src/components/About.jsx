import React from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { AiOutlineGlobal } from "react-icons/ai";
function About() {
  return (
    <div>
      <div class="container px-4 py-4" id="hanging-icons">
        <h2 class="pb-2 border-bottom text-center">
          About Currency-Converter App-
        </h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg class="bi" width="2em" height="2em">
                <FcCurrencyExchange size={50} />
              </svg>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Currency-conversion</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg class="bi" width="2em" height="2em">
                <FcApproval size={50} />
              </svg>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Accuracy 100%</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg class="bi" width="2em" height="2em">
                <AiOutlineGlobal size={50} />
              </svg>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Globaliy used</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
