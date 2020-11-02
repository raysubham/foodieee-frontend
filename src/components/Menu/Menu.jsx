import React from "react";
import {
  Container,
  Headline,
  Tagline,
  FoodItemsWrapper,
  FoodItem,
  Image,
  Name,
} from "./styles";

const Menu = () => {
  return (
    <div id="menu">
      <Container>
        <Headline>Food Tastes Better When You Eat It With your Family</Headline>
        <Tagline>We Serve The Best Meal In The Town</Tagline>

        <FoodItemsWrapper>
          <FoodItem>
            <Image src="./images/food.png" />
            <Name>Mutton Biryani</Name>
          </FoodItem>
          <FoodItem>
            <Image src="./images/food.png" />
            <Name>Mutton Kebab</Name>
          </FoodItem>
          <FoodItem>
            <Image src="./images/food.png" />
            <Name>Mutton Shorma</Name>
          </FoodItem>

          <FoodItem>
            <Image src="./images/food.png" />
            <Name>Mutton Korma</Name>
          </FoodItem>
          <FoodItem>
            <Image src="./images/food.png" />
            <Name>Mutton Curry</Name>
          </FoodItem>
          <FoodItem>
            <Image src="./images/food.png" />
            <Name>Mutton Bhurji</Name>
          </FoodItem>
          <FoodItem>
            <Image src="./images/food.png" />
            <Name>Mutton Bhurji</Name>
          </FoodItem>
          <FoodItem>
            <Image src="./images/food.png" />
            <Name>Mutton Bhurji</Name>
          </FoodItem>
        </FoodItemsWrapper>
      </Container>
    </div>
  );
};

export default Menu;
