import { Flex } from "@chakra-ui/react";
import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value, size = 16 }) => {
  const stars = [];
  const numericValue = Number(value) || 0;
  const pixelSize =
    size === "small"
      ? 16
      : size === "medium"
      ? 20
      : size === "large"
      ? 24
      : Number(size) || 16;

  for (let i = 1; i <= 5; i++) {
    if (numericValue >= i) {
      stars.push(<FaStar key={i} size={pixelSize} color="#ffc107" />);
    } else if (numericValue >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} size={pixelSize} color="#ffc107" />);
    } else {
      stars.push(<FaRegStar key={i} size={pixelSize} color="#ffc107" />);
    }
  }

  return <Flex alignItems="center">{stars}</Flex>;
};

export default Rating;
