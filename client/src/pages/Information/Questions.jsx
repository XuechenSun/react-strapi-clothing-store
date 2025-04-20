import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./scss/Question.scss";

const Questions = () => {
  const question = [
    {
      q: "Q1: What sizes do you offer?",
      a: "A: We offer a wide range of sizes for women, men, and children. Please refer to our size guide on each product page for detailed measurements and fit suggestions.",
    },
    {
      q: "Q2: Do you ship internationally?",
      a: "A: Yes, we ship to many countries around the world. Shipping costs and delivery times are calculated at checkout based on your location.",
    },
    {
      q: "Q3: How can I track my order?",
      a: "A: Once your order has been shipped, you'll receive a tracking number via email. You can use it to check your delivery status anytime.",
    },
    {
      q: "Q4: Can I return or exchange an item?",
      a: "A:  Absolutely. We accept returns and exchanges within 14 days of delivery, as long as the items are unworn, unwashed, and with tags attached. Please refer to our return policy for more details.",
    },
    {
      q: "Q5: Do you offer gift packaging?",
      a: "A: Sorry, we currently do not offer gift packaging services. We are working on adding more personalized options in the future!",
    },
    {
      q: "Q6: What if an item is out of stock?",
      a: "A: If an item is out of stock, you can sign up for restock notifications on the product page. We also recommend checking back regularly, as some styles are restocked based on demand.",
    },
    {
      q: "Q7: Do you have a physical store?",
      a: "A: We are currently an online-only store. However, stay tuned for possible pop-up shops and physical locations in the future!",
    },
  ];

  return (
    <div className="questions">
      <h1>Frequently Asked Questions </h1>
      <div className="content">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className="question" component="span">
              {question[0].q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="answer">
            {question[0].a}
          </AccordionDetails>
        </Accordion>
        {question.slice(1).map((item, index) => (
          <div key={index}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography className="question" component="span">
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="answer">{item.a}</AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
