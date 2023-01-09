import React from "react"
import { Card1 } from "./card1/Card1"
import { Card2 } from "./card2/Card2"
import { Card3 } from "./card3/Card3"
import { Card4 } from "./card4/Card4"
import { Card5 } from "./card5/Card5"
import { Card6 } from "./card6/Card6"

export const CardContainer = ({ card }) => {
    if (card === 1) {
        return <Card1 />;
    }
    if (card === 2) {
        return <Card2 />;
    }
    if (card === 3) {
        return <Card3 />;
    }
    if (card === 4) {
        return <Card4 />;
    }
    if (card === 5) {
        return <Card5 />;
    }
    if (card === 6) {
        return <Card6 />
    }
}