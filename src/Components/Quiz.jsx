import React, { useState } from "react";
import './Quiz.css';

function QuizTeste() {
  const [reponseSelectionnee, setReponseSelectionnee] = useState(null);

  const handleCheckboxChange = (event) => {
    setReponseSelectionnee(event.target.id);
  };

  return (
    <div className="Quiz-item">
      {reponseSelectionnee === "Tokyo" ? (
        <p className="message-bravo">Bravo, t'as bien choisi !</p>
      ) : (
        <div>
          <h1>Quelle est la ville la plus grande du monde ?</h1>
          <label htmlFor="Tokyo">
            <input
              type="checkbox"
              id="Tokyo"
              checked={reponseSelectionnee === "Tokyo"}
              onChange={handleCheckboxChange}
            />
            Tokyo
          </label>
          <label htmlFor="Pekine">
            <input
              type="checkbox"
              id="Pekine"
              checked={reponseSelectionnee === "Pekine"}
              onChange={handleCheckboxChange}
            />
            Pékin
          </label>
          <label htmlFor="Tunisie">
            <input
              type="checkbox"
              id="Tunisie"
              checked={reponseSelectionnee === "Tunisie"}
              onChange={handleCheckboxChange}
            />
            Tunisie
          </label>
        </div>
      )}
    </div>
  );
}

export default QuizTeste;
