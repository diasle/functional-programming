// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet, S,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import "./style.css";

const images = {
  egnyteLogo: require("../assets/egnyte-logo.png"),
  computerSmash: require("../assets/pcpt.gif"),
  pureFunc1: require("../assets/purefunc1.png"),
  crying: require("../assets/crying.gif"),
  primo: require("../assets/primo.jpg"),
  impure: require("../assets/impureFunction.png"),
  pure: require("../assets/pureSecondExampl.png"),
  happy: require("../assets/happy.gif"),
  curring: require("../assets/curring.png"),
  MFR: require("../assets/map-filter-reduce.png"),
  mapExample: require("../assets/mapExample.png"),
  filterExample: require("../assets/filterExample.png"),
  reduceExample: require("../assets/reduceExample.png"),
  impureFuncFirst: require("../assets/impureExamplFirst.png"),
  pureFuncFirst: require("../assets/pureFuncFirstExampl.png"),
  forLoopMap: require("../assets/classicLoop1.png"),
  mapSolution: require("../assets/mapWithNoEs6.png"),
  forLoopFilter: require("../assets/forLoopFilter.png"),
  filterSolution: require("../assets/filterWithNoEs6.png"),
  forLoopReduce: require("../assets/forLoopReduce.png"),
  reduceSolution: require("../assets/reduceWithNoEs6.png"),
  inputOutput: require("../assets/in-out.png"),
  composition: require("../assets/composition.png"),
  compositionExample: require("../assets/compositionExam.png"),
  impureIncrease: require("../assets/impureIncrease.png"),
  pureIncrease: require("../assets/pureIncrease.png"),
  pureWithNoChange: require("../assets/pureWithNoChange.png"),
  first: require("../assets/WDI18-Slajd_początkowy_4x3_2-1.png"),
  notReferential1: require("../assets/refOne.png"),
  referential1: require("../assets/refTwo.png"),
  sortAsc: require("../assets/sortAsc.png"),
  lambda: require("../assets/lambda.png"),
  animalsData: require("../assets/animalsData.png"),
  getAgesImper: require("../assets/getAgesImpre.png"),
  filterDogs: require("../assets/filterDogs.png"),
  mapDogs: require("../assets/mapDogs.png"),
  reduceDogAge: require("../assets/reduceDogAge.png"),
  animalChain: require("../assets/animalChain.png"),
  isDog: require("../assets/isDog.png"),
  dogYears: require("../assets/dogYears.png"),
  sumDogAge: require("../assets/sumDogAge.png"),
  chainTwo: require("../assets/chainTwo.png"),
  slido: require("../assets/slajd2-1.png")
};

preloader(images);

const theme = createTheme({
  primary: "#FFFFFF",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  mainColor: "#019A95"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck contentWidth={1200} transition={["fade"]} theme={theme} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="secondary">
              <Heading size={1} fit caps lineHeight={1} textColor="mainColor">
                  Functional programming
              </Heading>
              <Text textSize={ 60 } bold textColor="mainColor">INTRODUCTION</Text>
              <Image fit src={images.egnyteLogo.replace("/", "")} height="200px"/>
              <Text textSize={ 50 } textColor="primary" margin="50px 0 0" bold>DIANA ŚLĘCZEK</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="mainColor">
              <Heading size={2} fit caps lineHeight={1} textColor="primary">
                  What is that?!
              </Heading>
              <List textColor="primary">
                  <Appear><ListItem margin="50px 0 50px">A paradigm</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">A code style</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">A mindset</ListItem></Appear>
              </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="mainColor">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                  Why?
              </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="mainColor">
              <Heading size={5} fit caps lineHeight={1} textColor="primary">
                  How?
              </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
              <Heading size={5} fit caps lineHeight={1} textColor="primary">
                  "Po pierwsze primo"
              </Heading>
              <Image fit src={images.primo.replace("/", "")} height="600px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="mainColor">
              <Heading size={2} fit caps lineHeight={1} textColor="primary">
                  Functions come first!
              </Heading>
              <Image fit src={images.inputOutput.replace("/", "")} height="400px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
              <Heading size={3} textColor="primary" caps>Functions</Heading>
              <List textColor="primary">
                  <Appear><ListItem margin="50px 0 50px">Mapping</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Procedures</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">I/O</ListItem></Appear>
              </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
              <Heading size={3} textColor="primary" caps>PURE FUNCTIONS</Heading>
              <List textColor="primary">
                  <Appear><ListItem margin="50px 0 50px">Given the same inputs, always returns the same output</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Has no side-effects</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Don`t mutate</ListItem></Appear>
              </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
              <Image fit src={images.impureIncrease.replace("/", "")} height="700px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
              <Image fit src={images.pureIncrease.replace("/", "")} height="700px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
              <Image fit src={images.impure.replace("/", "")} height="700px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.computerSmash.replace("/", "")} height="600px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.crying.replace("/", "")} height="600px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.pureWithNoChange.replace("/", "")} height="700px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.happy.replace("/", "")} height="600px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="mainColor">
              <Heading size={3} textColor="primary" caps>Referential transparency</Heading>
          </Slide>
          <Slide bgColor="secondary">
              <Image fit src={images.notReferential1.replace("/", "")} height="700px" />
          </Slide>
          <Slide bgColor="secondary" className="bit-longer">
              <Image fit src={images.referential1.replace("/", "")} height="600px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="mainColor">
              <Heading size={3} textColor="primary" caps>immutability</Heading>
          </Slide>
          <Slide bgColor="secondary">
              <Image fit src={images.sortAsc.replace("/", "")} height="700px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.computerSmash.replace("/", "")} height="600px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.crying.replace("/", "")} height="600px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
              <List textColor="primary">
                  <Appear><ListItem margin="50px 0 50px">Array.push()</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Array.shift()</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Array.unshift()</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Array.splice()</ListItem></Appear>
              </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="mainColor">
              <Heading size={5} fit caps lineHeight={1} textColor="primary">
                  Advantages of using pure functions
              </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
              <Heading size={2} fit caps lineHeight={1} textColor="primary">
                  Function composition
              </Heading>
              <Image fit src={images.composition.replace("/", "")} height="600px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
              <Image fit src={images.compositionExample.replace("/", "")} height="720px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
              <Heading size={2} fit caps lineHeight={1} textColor="primary">
                  Higher order functions
              </Heading>
              <List textColor="primary">
                  <Appear><ListItem margin="50px 0 50px">takes a function as an argument, or</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">returns a function</ListItem></Appear>
              </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="mainColor">
              <Heading size={2} fit caps lineHeight={1} textColor="primary">
                  Partial application
              </Heading>
          </Slide>
          <Slide transition={["fade"]} className="bit-longer" bgColor="secondary" textColor="tertiary">
              <Image fit src={images.curring.replace("/", "")} height="700px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="mainColor">
              <Heading size={2} fit caps lineHeight={1} textColor="primary">
                  Map, filter, reduce
              </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.MFR.replace("/", "")} height="700px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.forLoopMap.replace("/", "")} height="720px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.mapSolution.replace("/", "")} height="700px" width="1000px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.forLoopFilter.replace("/", "")} height="720px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.filterSolution.replace("/", "")} height="700px" width="1000px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.forLoopReduce.replace("/", "")} height="720px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.reduceSolution.replace("/", "")} height="700px" width="1000px"/>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
              <Text margin="0 0 50px" textColor="primary">arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</Text>
              <table className="reduce-table">
                  <tr>
                      <th/>
                      <th>prevVal</th>
                      <th>curVal</th>
                      <th>returned value</th>
                  </tr>
                  <tr>
                      <td>1st call</td>
                      <td>0</td>
                      <td>1</td>
                      <td>1</td>
                  </tr>
                  <tr>
                      <td>2nd call</td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                  </tr>
                  <tr>
                      <td>3rd call</td>
                      <td>3</td>
                      <td>3</td>
                      <td>6</td>
                  </tr>
                  <tr>
                      <td>4th call</td>
                      <td>6</td>
                      <td>4</td>
                      <td>10</td>
                  </tr>
                  <tr>
                      <td>5th call</td>
                      <td>10</td>
                      <td>5</td>
                      <td>15</td>
                  </tr>
                  <tr>
                      <td>6th call</td>
                      <td>15</td>
                      <td>6</td>
                      <td>21</td>
                  </tr>
                  <tr>
                      <td>7th call</td>
                      <td>21</td>
                      <td>7</td>
                      <td>28</td>
                  </tr>
                  <tr>
                      <td>8th call</td>
                      <td>28</td>
                      <td>8</td>
                      <td>36</td>
                  </tr>
                  <tr>
                      <td>9th call</td>
                      <td>36</td>
                      <td>9</td>
                      <td>45</td>
                  </tr>
                  <tr>
                      <td>10th call</td>
                      <td>45</td>
                      <td>10</td>
                      <td>55</td>
                  </tr>
              </table>
          </Slide>
          <Slide transition={["zoom"]} bgColor="tertiary">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                  Arrow functions
              </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.lambda.replace("/", "")} height="800px" />
          </Slide>
          <Slide transition={["zoom"]} bgColor="tertiary">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                  Chaining functions
              </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.animalsData.replace("/", "")} height="700px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
              <List textColor="primary">
                  <Appear><ListItem margin="50px 0 50px">Select only the dogs</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Translate their ages into dog years (multiply them by seven)
                  </ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Sum the results</ListItem></Appear>
              </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.getAgesImper.replace("/", "")} height="700px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.filterDogs.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.mapDogs.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.reduceDogAge.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["fade"]} className="longer" bgColor="secondary" textColor="tertiary">
              <Image fit src={images.animalChain.replace("/", "")} height="500px" width="1750px"/>
          </Slide>
          <Slide transition={["fade"]} className="bit-longer" bgColor="secondary" textColor="tertiary">
              <Image fit src={images.isDog.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["fade"]} className="longer" bgColor="secondary" textColor="tertiary">
              <Image fit src={images.dogYears.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.sumDogAge.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
              <Image fit src={images.chainTwo.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary">
              <Heading size={3} textColor="primary" caps>Useful tools</Heading>
              <List textColor="primary">
                  <Appear><ListItem margin="50px 0 50px">Lodash.js</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Lodash-fp.js</ListItem></Appear>
                  <Appear><ListItem margin="50px 0 50px">Ramda.js</ListItem></Appear>
              </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="mainColor">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                  Summary
              </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="mainColor">
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                  Thank you!
              </Heading>
          </Slide>
      </Deck>
    );
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = arr.reduce(function (prevVal, curVal) {
    return prevVal + curVal;
}, 0);

console.log(sum); //55