import React from "react";
import Ab from "./Abaut.css";

export const Abaut = (props) => (
  <div class="formato">
    <div class="bg-dark text-white" style={{ padding: "10px" }}>
      {/* <p class="text-center">
        <i class="fas fa-user-graduate"></i> Walter Cruz
      </p> */}

      <p class="text-center">
        <i class="fab fa-linkedin"></i>
        <a
          href="https://www.linkedin.com/in/waltercruz1988/"
          target="blank"
          class="linkedin"
        >
           Linkedin
        </a>
      </p>
      <p class="text-center">
        <i class="fas fa-envelope-open-text" text-align="center"></i>{" "}
        <a
          href="mailto:walcruz1988.21@gmail.com"
          target="blank"
          class="twitter"
        >
           walcruz1988.21@gmail.com
        </a>
      </p>
      {/* <p class="text-center">
        <i class="fas fa-map-marker-alt"></i> Salta Capital-Argentina
      </p> */}
    </div>
  </div>
);
