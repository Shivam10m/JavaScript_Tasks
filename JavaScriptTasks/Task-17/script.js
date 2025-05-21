//Que-1 : Display 3 cards in a row through js.
const Output = document.getElementById("cardRow");
    Output.style.display = "flex";
    Output.style.gap = "10px";
    Output.style.justifyContent = "center";

    const heading = document.getElementById("heading");
    heading.style.textAlign = "center";

    function createCards() {
      for (let i = 0; i < 3; i++) {
        const cards = document.createElement("div");
        cards.style.width = "200px";
        cards.style.height = "300px";
        cards.style.border = "1px solid black";
        cards.style.borderRadius = "10px";
        cards.style.textAlign = "center";
        cards.innerHTML = `this is card`;

        Output.append(cards);
      }
    }

    createCards();