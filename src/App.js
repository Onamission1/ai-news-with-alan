// import React from "react";
import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";

const alanKey =
  "e113b45b7277323e573111eae43f057b2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadLines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parasedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parasedNumber - 1];

          if (parasedNumber > 20) {
            alanBtn().playText("hello there, try again");
          } else if (article) {
            window.open(articles[number].url, "_blank");
            alanBtn().playText("Opening...");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://pbs.twimg.com/media/FHyfGtuVUAElvP_?format=png&name=small"
          alt="breaking news logo"
          className={classes.breakingnewsLogo}
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
